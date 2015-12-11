
module.exports = function(request, callback) {

	if(request.user !== undefined && request.user.isAdmin === true){

		callback();

	} else {

		return request.reply.redirect('/login');

	}

};