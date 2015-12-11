var root	= require('path').dirname(require.main.filename);
var isAdmin	= require(root + "/server/utils/isAdmin");

module.exports = function(server, request) {

	isAdmin(request, function(){

		var db = server.plugins['hapi-mongodb'].db;
		var ObjectID = server.plugins['hapi-mongodb'].lib.ObjectID;
		var id = request.payload._id;
		delete request.payload._id;

		db.collection('items').update({_id: new ObjectID(id)}, request.payload, {safe: true, upsert:true}, function(err) {

			if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

			request.session.flash("item-new", "success");

			return request.reply.redirect('/admin');

		});

	});

};