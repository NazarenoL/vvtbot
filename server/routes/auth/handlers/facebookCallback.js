
module.exports = function(server, request) {

	var referer = request.headers['referer'];

	var redirect = server.settings.plugins.travelogue.urls.successRedirect;

	if(referer !== undefined && referer.indexOf("/login") === -1){

		redirect = referer;

	}

	server.passport.authenticate('facebook', {
		failureRedirect: server.settings.plugins.travelogue.urls.failureRedirect,
		successRedirect: redirect,
		failureFlash: true
	})(request, function () {
		return request.reply.redirect('/');
	});

};