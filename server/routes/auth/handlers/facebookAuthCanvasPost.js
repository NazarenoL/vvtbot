
module.exports = function(server, request) {

  	server.passport.authenticate('facebook-canvas', {
  		successRedirect: config.app.secureUrl + '/',
        failureRedirect: config.app.secureUrl + '/auth/facebook-canvas/autologin' 
    })(request);

};