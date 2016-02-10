
module.exports = function(server, request) {

  	server.passport.authenticate('facebook-canvas', {
  		successRedirect: '/test2',
        failureRedirect: '/auth/facebook-canvas/autologin' 
    })(request);

};