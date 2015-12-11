
module.exports = function(server, request) {

	request.reply.view('public/home/home.html', {
		user : request.user,
		config: server.settings,
		source: request.query.source,
		nav: 'home'
	});

};