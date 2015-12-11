/*
 * Admin
 */

var types		= require('hapi').types;
var handlers	= require("./handlers/index");

module.exports = function(server) {

	//Admin
	server.addRoute({
		method: 'GET',
		path: '/admin',
		config: {
			auth: true,
			handler: function(request){ handlers["items"](server, request); }
		}
	});

	//New item
	server.addRoute({
		method: 'GET',
		path: '/admin/item/new',
		config: {
			auth: true,
			handler: function(request){ handlers["itemNew"](server, request); }
		}
	});

	//Save item
	server.addRoute({
		method: 'POST',
		path: '/admin/item/save',
		config: {
			auth: true,
			payload: 'parse',
			handler: function(request){ handlers["itemSave"](server, request); }
		}
	});

	//New item
	server.addRoute({
		method: 'GET',
		path: '/admin/item/edit',
		config: {
			auth: true,
			validate: {
				query: {
					id: types.String().regex(/^[0-9a-fA-F]{24}$/).required()
				}
			},
			handler: function(request){ handlers["itemEdit"](server, request); }
		}
	});

	//Delete item
	server.addRoute({
		method: 'POST',
		path: '/admin/item/delete',
		config: {
			auth: true,
			payload: 'parse',
			handler: function(request){ handlers["itemDelete"](server, request); }
		}
	});

	//User info
	server.route({
		method: 'GET',
		path: '/admin/user',
		config: {
			auth: true,
			validate: {
				query: {
					id: types.String().required()
				}
			},
			handler: function(request){ handlers["userInfo"](server, request); }
		}
	});

	//Delete interested
	server.addRoute({
		method: 'POST',
		path: '/admin/interested/delete',
		config: {
			auth: true,
			payload: 'parse',
			validate: {
				payload: {
					itemId: types.String().regex(/^[0-9a-fA-F]{24}$/).required(),
					facebookId: types.String().required()
				}
			},
			handler: function(request){ handlers["interestedDelete"](server, request); }
		}
	});

	//Item notifications
	server.addRoute({
		method: 'GET',
		path: '/admin/notifications/item',
		config: {
			auth: true,
			validate: {
				query: {
					id: types.String().regex(/^[0-9a-fA-F]{24}$/).required()
				}
			},
			handler: function(request){ handlers["notificationsItem"](server, request); }
		}
	});

	//User notifications
	server.addRoute({
		method: 'GET',
		path: '/admin/notifications/user',
		config: {
			auth: true,
			validate: {
				query: {
					id: types.String().required()
				}
			},
			handler: function(request){ handlers["notificationsUser"](server, request); }
		}
	});

	//All notifications
	server.addRoute({
		method: 'GET',
		path: '/admin/notifications',
		config: {
			auth: true,
			handler: function(request){ handlers["notifications"](server, request); }
		}
	});

	//Send notification
	server.addRoute({
		method: 'POST',
		path: '/admin/notification/send',
		config: {
			auth: true,
			payload: 'parse',
			validate: {
				payload: {
					uri: types.String().required(),
					text: types.String().required(),
					facebookId: types.String().required()
				}
			},
			handler: function(request){ handlers["notificationsSend"](server, request); }
		}
	});

};