var root	= require('path').dirname(require.main.filename);
var isAdmin	= require(root + "/server/utils/isAdmin");

module.exports = function(server, request) {

	isAdmin(request, function(){

		var db = server.plugins['hapi-mongodb'].db;
		var objectId = server.plugins['hapi-mongodb'].lib.ObjectID;

		db.collection('users').find().toArray(function(err, users) {

			if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

			request.reply.view('admin/notifications/notifications.html', {
				user : request.user,
				config: server.settings,
				users: users,
				nav: 'admin',
				type: 'all'
			});

		});

	});

};