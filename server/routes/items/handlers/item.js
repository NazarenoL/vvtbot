var async		= require("async");

module.exports = function(server, request) {

	var db = server.plugins['hapi-mongodb'].db;
	var objectId = server.plugins['hapi-mongodb'].lib.ObjectID;

	async.parallel([

		//Find item details
	    function(callback){

			db.collection('items').findOne({_id: new objectId(request.query.id)}, function(err, item) {

				if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

				callback(null, item);

			});

	    },

	    //Find interested users
	    function(callback){

			db.collection('interested').find({itemId: new objectId(request.query.id)}).toArray(function(err, interested) {

				if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

				callback(null, interested);

			});

	    }
	
	],
	function(err, results){

		var flash = request.session.flash();

		request.reply.view('public/item/item.html', {
			user : request.user,
			flash: flash,
			item: results[0],
			interested: results[1],
			config: server.settings,
			nav: 'item'
		});

	});

};