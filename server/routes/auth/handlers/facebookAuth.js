
module.exports = function(server, request) {

	server.passportfb.authenticate('facebook', { scope: ['email', 'user_about_me'] })(request);

};