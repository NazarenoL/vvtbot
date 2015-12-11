var root					= require('path').dirname(require.main.filename);
var isAdmin					= require(root + "/server/utils/isAdmin");
var facebookNotification	= require("facebook-notification");

module.exports = function(server, request) {

	isAdmin(request, function(){

		var sendNotification = facebookNotification({
			clientId: server.settings.plugins.travelogue.facebook.clientID,
			clientSecret: server.settings.plugins.travelogue.facebook.clientSecret,
			production: true
		});

		sendNotification({
			user: {
				id: request.payload.facebookId
			},
			uri: request.payload.uri,
			text: request.payload.text

		}, function (err, result) {

			if (err) return request.reply(Hapi.error.internal('Internal Facebook Notification error', err));

			return request.reply(result);

		});

	});

};