var root	= require('path').dirname(require.main.filename);
var isAdmin	= require(root + "/server/utils/isAdmin");

module.exports = function(server, request) {

	isAdmin(request, function(){

		var db = server.plugins['hapi-mongodb'].db;

		db.collection('items').find().toArray(function(err, items) {

			if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

			request.reply.view('admin/items/items.html', {
				items: items,
				user : request.user,
				flash: request.session.flash(),
				config: server.settings,
				nav: 'admin'
			});

		});

	});

};