var root	= require('path').dirname(require.main.filename);
var isAdmin	= require(root + "/server/utils/isAdmin");

module.exports = function(server, request) {

	isAdmin(request, function(){

		var db = server.plugins['hapi-mongodb'].db;
		var ObjectID = server.plugins['hapi-mongodb'].lib.ObjectID;

		db.collection('items').findOne({_id: new ObjectID(request.query.id)}, function(err, item) {

			if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

			db.collection('interested').find({itemId: new ObjectID(request.query.id)}).toArray(function(err, interested) {

				if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

				db.collection('users').find().toArray(function(err, users) {

					if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

					request.reply.view('admin/item/item.html', {
						user : request.user,
						item: item,
						config: server.settings,
						interested: interested,
						users: users,
						nav: 'admin'
					});

				});

			});

		});

	});

};