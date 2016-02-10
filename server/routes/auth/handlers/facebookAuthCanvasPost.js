
module.exports = function(server, request) {

  	server.passportfbcanvas.authenticate('facebook-canvas', {
  		successRedirect: server.settings.app.secureUrl + '/',
        failureRedirect: server.settings.app.secureUrl + '/auth/facebook-canvas/autologin' 
    })(request);

};