
/*
 * Mailer
 */

var nodemailer	= require("nodemailer");

module.exports.send = function(itemId, itemType, facebookId, request, config) {

	var smtpTransport = nodemailer.createTransport("SMTP", config.app.smtp);

	var subject;

	if(itemType === "gift"){
		subject = "Alguién se interesó en un item";
	}

	if(itemType === "auction"){
		subject = "Alguién reservó un item";
	}

	var mailOptions = {
		from: "Naza se toma el palo <nazarenolorenzo@gmail.com>",
		to: config.app.adminEmail,
		subject: subject,
		html: [
			"<a href='" + config.app.url + "/item?id=" + itemId + "'>Producto</a>",
			"<br>",
			"<a href='" + config.app.url + "/admin/user?id=" + facebookId + "'>Usuario</a>"
		].join("")
	};

	smtpTransport.sendMail(mailOptions, function(error, response){

		if (error) return request.reply(Hapi.error.internal('Internal SendMail error', err));

		smtpTransport.close();

	});

};