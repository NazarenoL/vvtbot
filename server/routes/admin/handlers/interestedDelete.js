var root	= require('path').dirname(require.main.filename);
var isAdmin	= require(root + "/server/utils/isAdmin");

module.exports = function(server, request) {

	isAdmin(request, function(){

		var db = server.plugins['hapi-mongodb'].db;
		var objectId = server.plugins['hapi-mongodb'].lib.ObjectID;
		var facebookId = request.payload.facebookId;
		var itemId = request.payload.itemId;

		db.collection('interested').findAndModify({facebookId: facebookId, itemId: new objectId(itemId)}, {}, {}, {remove:true}, function(err) {

			if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

			request.reply({
				success: true
			});

		});

	});

};