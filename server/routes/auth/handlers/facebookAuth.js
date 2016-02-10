
module.exports = function(server, request) {

	server.passport.authenticate('facebook', { scope: ['email', 'user_about_me'] })(request);

};