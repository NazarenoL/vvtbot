/*
 * Polls
 */

var types		= require('hapi').types;
var handlers	= require("./handlers/index");

module.exports = function(server) {

	//Poll
	server.addRoute({
		method: 'GET',
		path: '/poll',
		config: {
			validate: {
				query: {
					name: types.String().required(),
					source: types.String()
				}
			},
			handler: function(request){ handlers["poll"](server, request); }
		}
	});

};