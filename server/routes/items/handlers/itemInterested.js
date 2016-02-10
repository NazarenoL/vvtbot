var root		= require('path').dirname(require.main.filename);
var mailer		= require(root + "/server/utils/mailer");

module.exports = function(server, request) {

	var db = server.plugins['hapi-mongodb'].db;
	var objectId = server.plugins['hapi-mongodb'].lib.ObjectID;
	var itemId = new objectId(request.payload.itemId);
	var facebookId = request.payload.facebookId;
	delete request.payload._id;

	var data = {
		facebookId: facebookId,
		itemId: itemId
	};

	var reply = function(itemId){

		request.session.flash("interested-" + request.payload.type, "success");

		request.reply.redirect('/item?id=' + itemId);

	};

	db.collection('interested').insert(data, {safe: true}, function(err) {

		if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

		if(request.payload.type === "gift"){

			//Obtiene el limite de interesados para ese item
			db.collection('items').findOne({_id: itemId}, function(err, item) {

				if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

				var interestedLimit = item.limit;

				//Cuenta la cantidad de interesados en ese item
				db.collection('interested').count({itemId: itemId}, function(err, count) {

					if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

					//Si la cantidad de interesados es igual al limite, cierra el item
					if(count === interestedLimit){

						db.collection('items').update({_id: itemId}, {closed: "on"}, {safe: true}, function(err) {

							if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

							reply(itemId);

						});

					} else {

						reply(itemId);

					}

				});

			});

		}

		if(request.payload.type === "auction"){

			db.collection('items').findAndModify({_id: itemId}, {}, {$set: {closed: "on"}}, {safe: true}, function(err, object) {
				
				if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

				reply(itemId);

			});

		}

	});

};