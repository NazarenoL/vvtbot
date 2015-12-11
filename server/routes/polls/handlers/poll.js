
module.exports = function(server, request) {

	//Hash of poll's id and poll's name
	var polls= {
		'bolas': '1V4LNoWC46FU4XzHj-q8JCIZ6hUnGQTwR_s6aGyRfeJE'
	};

	var pollName = request.query.name;

	var pollId = polls[pollName];

	//If the pollId is not undefined, show the poll
	if(pollId !== undefined){

		request.reply.view('public/poll/poll.html', {
			user : request.user,
			config: server.settings,
			pollId: pollId,
			pollName: pollName,
			source: request.query.source,
			nav: 'polls'
		});

	//Else redirect to the home
	} else {

		return request.reply.redirect('/');

	}

};