
module.exports = function(server, request) {

	var page = request.query.page;
	var params = request.query.params;
	var secureUrl = server.settings.app.secureUrl;

	if(page === 'winners'){

		return request.reply.redirect(secureUrl + '/winners?source=facebook&id=' + params);

	} else if(page === 'items'){

		return request.reply.redirect(secureUrl + '/items?source=facebook');

	} else if(page === 'poll'){

		return request.reply.redirect(secureUrl + '/poll?source=facebook&name=' + params);

	} else {

		return request.reply.redirect(secureUrl + '/?source=facebook');

	}

};