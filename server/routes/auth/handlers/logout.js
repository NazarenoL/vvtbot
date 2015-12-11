
module.exports = function(server, request) {

	request.session._logout();
	return request.reply.redirect('/');

};