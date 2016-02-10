var root	= require('path').dirname(require.main.filename);
var isAdmin	= require(root + "/server/utils/isAdmin");
var async	= require('async');

module.exports = function(server, request) {

	isAdmin(request, function(){

		var db = server.plugins['hapi-mongodb'].db;
		var ObjectID = server.plugins['hapi-mongodb'].lib.ObjectID;

		//Request the item information 
		db.collection('items').findOne({_id: new ObjectID(request.query.id)}, function(err, item) {

			if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

			//Request the interested users
			db.collection('interested').find({itemId: new ObjectID(request.query.id)}).toArray(function(err, interested) {

				if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

				var interestedUsers = [];

				async.each(interested, function(intd, callback){

					interestedUsers.push(intd.facebookId);
					callback();

				}, function(err){

					if (err) return request.reply(Hapi.error.internal('Internal Itinerator error', err));

					//Request the information of interested users
					db.collection('users').find({ facebookId: { $in: interestedUsers } }).toArray(function(err, users) {

						if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

						request.reply.view('admin/notifications/notifications.html', {
							user : request.user,
							config: server.settings,
							users: users,
							nav: 'admin',
							type: 'interested'
						});

					});

				});

			});

		});

	});

};