
module.exports = function(server, request) {

	request.reply.view('public/about/about.html', {
		user : request.user,
		config: server.settings,
		nav: 'about'
	});

};