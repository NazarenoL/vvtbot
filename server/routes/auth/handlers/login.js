
module.exports = function(server, request) {

	request.reply.view('public/login/login.html', {
		user : request.user,
		config: server.settings,
		nav: 'login'
	});

};