/*
 * Static
 */

var types		= require('hapi').types;
var handlers	= require("./handlers/index");

module.exports = function(server) {

	//Home
	server.addRoute({
		method: 'GET',
		path: '/',
		config: {
			handler: function(request){ handlers["home"](server, request); }
		}
	});

	//Home
	server.addRoute({
		method: 'POST',
		path: '/',
		config: {
			handler: function(request){ handlers["home"](server, request); }
		}
	});

	//FAQ
	server.addRoute({
		method: 'GET',
		path: '/faq',
		config: {
			handler: function(request){ handlers["faq"](server, request); }
		}
	});

	//About
	server.addRoute({
		method: 'GET',
		path: '/about',
		config: {
			handler: function(request){ handlers["about"](server, request); }
		}
	});

	//Static resources
	server.addRoute({
		method: 'GET',
		path: '/{path*}',
		handler: {
			directory: { path: server.settings.app.public, listing: false, index: true }
		}
	});

};