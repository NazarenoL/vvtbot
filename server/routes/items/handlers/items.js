
module.exports = function(server, request) {

	var db = server.plugins['hapi-mongodb'].db;

	db.collection('items').find({active: 'on'}).sort( { closed: 1 } ).toArray(function(err, items) {

		if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

		//Random order for the items
		// items.sort(function() {
		// 	return Math.random() - 0.5;
		// });

		//Apply reverse order of items
		items.reverse();

		request.reply.view('public/items/items.html', {
			items: items,
			user : request.user,
			config: server.settings,
			source: request.query.source,
			nav: 'items'
		});

	});

};

// var root		= require('path').dirname(require.main.filename);
// var queries		= require(root + "/server/utils/queries");

// module.exports = function(server, request) {

// 	var db = server.plugins['hapi-mongodb'].db;

// 	queries.find(db, 'items', {active: 'on'}).done(

// 		function(items){

// 			//Random order for the items
// 			items.sort(function() {
// 				return Math.random() - 0.5;
// 			});

// 			request.reply.view('public/items/items.html', {
// 				items: items,
// 				user : request.user,
// 				config: server.settings,
// 				source: request.query.source,
// 				nav: 'items'
// 			});

// 		}, 
// 		function(err){

// 			if (err) return request.reply(Hapi.error.internal('Internal MongoDB error', err));

// 		}

// 	);

// };