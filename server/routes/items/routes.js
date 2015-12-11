/*
 * Items
 */

var types		= require('hapi').types;
var handlers	= require("./handlers/index");

module.exports = function(server) {

	//Items
	server.addRoute({
		method: 'GET',
		path: '/items',
		config: {
			handler: function(request){ handlers["items"](server, request); }
		}
	});

	//Item
	server.addRoute({
		method: 'GET',
		path: '/item',
		config: {
			validate: {
				query: {
					id: types.String().regex(/^[0-9a-fA-F]{24}$/).required(),
					fb_comment_id: types.String()
				}
			},
			handler: function(request){ handlers["item"](server, request); }
		}
	});

	//Item interested
	server.addRoute({
		method: 'POST',
		path: '/item/interested',
		config: {
			payload: 'parse',
			validate: {
				payload: {
					itemId: types.String().regex(/^[0-9a-fA-F]{24}$/).required(),
					facebookId: types.String().required(),
					type: types.String().required()
				}
			},
			auth: true,
			handler: function(request){ handlers["itemInterested"](server, request); }
		}
	});

};