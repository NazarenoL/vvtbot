//Rutas
var static		= require('./routes/static/routes.js');
var auth		= require('./routes/auth/routes.js');
var items		= require('./routes/items/routes.js');
var admin		= require('./routes/admin/routes.js');
var winners		= require('./routes/winners/routes.js');
var facebook	= require('./routes/facebook/routes.js');
var polls		= require('./routes/polls/routes.js');

module.exports = function(server) {

	//Static
	static(server);

	//Auth
	auth(server);

	//Items
	items(server);

	//Admin
	admin(server);

	//Winners
	winners(server);

	//Facebook
	facebook(server);

	//Polls
	polls(server);

};