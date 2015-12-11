
module.exports = function(server, request) {

	var db = server.plugins['hapi-mongodb'].db;
	var objectId = server.plugins['hapi-mongodb'].lib.ObjectID;

	db.collection('items').findOne({_id: new objectId(request.query.id)}, function(err, item) {

		if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

		db.collection('users').find().toArray(function(err, users) {

			if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

			request.reply.view('public/winners/winners.html', {
				user : request.user,
				item: item,
				config: server.settings,
				users: users,
				source: request.query.source,
				nav: 'winners'
			});

		});

	});

};