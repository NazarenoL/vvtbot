/*
 * Facebook
 */

var types		= require('hapi').types;
var handlers	= require("./handlers/index");

module.exports = function(server) {

	//Facebook redirects
	server.addRoute({
		method: 'POST',
		path: '/facebook',
		config: {
			payload: 'parse',
			validate: {
				query: {
					utm_source: types.String(),
					utm_medium: types.String(),
					fb_source: types.String(),
					ref: types.String(),
					notif_t: types.String(),
					page: types.String().required(),
					params: types.String()
				},
				payload: {
					fb_locale: types.String(),
					signed_request: types.String()
				}
			},
			handler: function(request){ handlers["facebook"](server, request); }
		}
	});

	//Facebook home
	server.addRoute({
		method: 'POST',
		path: '/facebook/',
		config: {
			payload: 'parse',
			handler: function(request){ handlers["facebook"](server, request); }
		}
	});

};