
module.exports = function(server, request) {

	var urlRedirect= server.settins.app.secureUrl + '/';
	if(typeof request.query.page != undefined && request.query.page =='winners'){
		urlRedirect = server.settins.app.secureUrl + '/winners?id=' + request.query.id;
	}

  	server.passportfbcanvas.authenticate('facebook-canvas', {
  		successRedirect: urlRedirect,
        failureRedirect: server.settings.app.secureUrl + '/auth/facebook-canvas/autologin' 
    })(request);

};