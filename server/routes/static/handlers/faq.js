
module.exports = function(server, request) {

	request.reply.view('public/faq/faq.html', {
		user : request.user,
		config: server.settings,
		nav: 'faq'
	});

};