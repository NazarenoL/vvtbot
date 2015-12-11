/*
 * Auth
 */

var types		= require('hapi').types;
var handlers	= require("./handlers/index");

module.exports = function(server) {

	//Login
	server.addRoute({
		method: 'GET',
		path: '/login',
		config: {
			handler: function(request){ handlers["login"](server, request); }
		}
	});

	//Logout
	server.addRoute({
		method: 'GET',
		path: '/logout',
		config: {
			handler: function(request){ handlers["logout"](server, request); }
		}
	});

	//Facebook authentification
	server.addRoute({
		method: 'GET',
		path: '/auth/facebook',
		config: {
			handler: function(request){ handlers["facebookAuth"](server, request); }
		}
	});

	//Facebook callback
	server.addRoute({
		method: 'GET',
		path: '/auth/facebook/callback',
		config: {
			handler: function(request){ handlers["facebookCallback"](server, request); }
		}
	});

};