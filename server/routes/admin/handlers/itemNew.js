var root	= require('path').dirname(require.main.filename);
var isAdmin	= require(root + "/server/utils/isAdmin");

module.exports = function(server, request) {

	isAdmin(request, function(){

		request.reply.view('admin/item/item.html', {
			item: {},
			user : request.user,
			config: server.settings,
			interested: undefined,
			users: undefined,
			nav: 'admin'
		});

	});

};