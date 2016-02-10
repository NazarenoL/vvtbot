
module.exports = function(server, request) {

	server.passport.authenticate('facebook-canvas', { scope: ['email', 'user_about_me'] })(request);

};