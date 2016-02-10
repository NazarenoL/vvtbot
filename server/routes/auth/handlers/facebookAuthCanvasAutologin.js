
module.exports = function(server, request) {

	request.reply.view('public/auth/autologin.html', {});

};