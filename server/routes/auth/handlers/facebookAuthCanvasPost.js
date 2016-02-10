
module.exports = function(server, request) {

  	server.passport.authenticate('facebook-canvas', {
  		successRedirect: '/',
        failureRedirect: '/auth/facebook-canvas/autologin' 
    })(request);

};