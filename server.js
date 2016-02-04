var Hapi                = require('hapi');
var env                 = process.env['NODE_ENV'] === undefined ? 'development' : process.env['NODE_ENV'];
var config              = require("./server/config/config")[env];
var port                = (Number(process.env.PORT) || 3000);
var FacebookStrategy    = require('passport-facebook').Strategy;
var server              = new Hapi.Server('0.0.0.0', port, config);

//Hapi plugins
server.pack.allow({ ext: true }).require(config.plugins, function (err) {

    if (err) {
        throw err;
    }

});

//Passport configuration
var Passport = server.plugins.travelogue.passport;

Passport.use(new FacebookStrategy(config.plugins.travelogue.facebook, function (accessToken, refreshToken, profile, done) {

    var db = server.plugins['hapi-mongodb'].db;

    //User informacion
    var user = {
        facebookId: profile.id,
        data: profile._json
    };

    //Save the user in the DB
    db.collection('users').update({facebookId: profile.id}, user, {safe: true, upsert:true}, function(err) {

        if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

        //Flag to know if the user is administrator
        console.log(profile.id);
        if(config.app.admin === profile.id){

            profile.isAdmin = true;

        }

        return done(null, profile);
    
    });

}));

Passport.serializeUser(function (user, done) {
    done(null, user);
});

Passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

//Save the reference of passport to use across the app
server.passport = Passport;

//Routes
require('./server/routes.js')(server);

//Start the server
server.start(function(){

    console.log('Server started at port ' + port);

});