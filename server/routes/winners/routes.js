/*
 * Winners
 */

var types		= require('hapi').types;
var handlers	= require("./handlers/index");

module.exports = function(server) {

	//Winners
	server.addRoute({
		method: 'GET',
		path: '/winners',
		config: {
			validate: {
				query: {
					id: types.String().regex(/^[0-9a-fA-F]{24}$/).required(),
					source: types.String()
				}
			},
			handler: function(request){ handlers["winners"](server, request); }
		}
	});

};