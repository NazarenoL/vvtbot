
module.exports = function(server, request) {

  	server.passport.authenticate('facebook-canvas', {
  		successRedirect: '/test2',
        failureRedirect: 'https://guarded-peak-28259.herokuapp.com/auth/facebook-canvas/autologin' 
    })(request);

};