var root	= require('path').dirname(require.main.filename);
var isAdmin	= require(root + "/server/utils/isAdmin");

module.exports = function(server, request) {

	isAdmin(request, function(){

		var db = server.plugins['hapi-mongodb'].db;

		db.collection('users').findOne({facebookId: request.query.id}, function(err, user) {

			if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

			request.reply(user);

		});

	});

};