
module.exports = function(server, request) {

	server.passportfbcanvas.authenticate('facebook-canvas', { scope: ['email', 'user_about_me'] })(request);

};