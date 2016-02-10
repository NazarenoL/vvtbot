var Hapi                = require('hapi');
var env                 = process.env['NODE_ENV'] === undefined ? 'development' : process.env['NODE_ENV'];
var config              = require("./server/config/config")[env];
var port                = (Number(process.env.PORT) || 3000);
var FacebookStrategy    = require('passport-facebook').Strategy;
var FacebookStrategyCanvas    = require('passport-facebook-canvas').Strategy;
var server              = new Hapi.Server('0.0.0.0', port, config);

//Hapi plugins
server.pack.allow({ ext: true }).require(config.plugins, function (err) {

    if (err) {
        throw err;
    }

});

//Passport configuration
var PassportFBCanvas = server.plugins.travelogue.passport;
var PassportFB = server.plugins.travelogue.passport;

PassportFBCanvas.use(new FacebookStrategyCanvas(config.plugins.travelogue.facebook, function (accessToken, refreshToken, profile, done) {

    var db = server.plugins['hapi-mongodb'].db;

    //User informacion
    var user = {
        facebookId: profile.id,
        data: profile._json
    };

    if(typeof profile.displayName != 'undefined' && profile.displayName.length > 1){

        //Save the user in the DB
        db.collection('users').update({facebookId: profile.id}, user, {safe: true, upsert:true}, function(err) {

            if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

            //Flag to know if the user is administrator
            if(config.app.admin === profile.id){

                profile.isAdmin = true;

            }

            return done(null, profile);
        
        });
    }else{
        return done(null, profile);
    }

}));
PassportFB.use(new FacebookStrategy(config.plugins.travelogue.facebook, function (accessToken, refreshToken, profile, done) {

    var db = server.plugins['hapi-mongodb'].db;

    //User informacion
    var user = {
        facebookId: profile.id,
        data: profile._json
    };

    if(typeof profile.displayName != 'undefined' && profile.displayName.length > 1){

        //Save the user in the DB
        db.collection('users').update({facebookId: profile.id}, user, {safe: true, upsert:true}, function(err) {

            if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

            //Flag to know if the user is administrator
            if(config.app.admin === profile.id){

                profile.isAdmin = true;

            }
        
        return done(null, profile);
        
        });
    }else{
        return done(null, profile);
    }

}));

PassportFBCanvas.serializeUser(function (user, done) {
    done(null, user);
});

PassportFBCanvas.deserializeUser(function (obj, done) {
    done(null, obj);
});
PassportFB.serializeUser(function (user, done) {
    done(null, user);
});

PassportFB.deserializeUser(function (obj, done) {
    done(null, obj);
});

//Save the reference of passport to use across the app
server.passportfbcanvas = PassportFBCanvas;
server.passportfb = PassportFB;

//Routes
require('./server/routes.js')(server);

//Start the server
server.start(function(){

    console.log('Server started at port ' + port);

});