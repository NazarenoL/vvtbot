module.exports = {

	development: {

		views: {
			path: "./views/",
			engines: {
				html: 'ejs'
			},
			partialsPath: "./views/partials/"
		},
		app:{
			url: "http://localhost:3000",
			secureUrl: "https://localhost:3000",
			"public": "./public/",
			filepicker: "A1hkdyROtQyglnkdJVlRKz", //Set filepicker ID
			admin: "10153095855612364", //Set FB admin ID
			adminEmail: "nazarenolorenzo@gmail.com", //Set FB admin email
			smtp: {
				service: "Gmail",
				auth: {
					user: "nazarenolorenzo@gmail.com", //Set auth
					pass: "002honeR" //Set pass
				}
			}
		},
		plugins: {
			yar: {
				cookieOptions: {
					password: 'lalalalelele',
					isSecure: false
				}
			},
			travelogue: {
				urls: {
					failureRedirect: '/login',
					successRedirect: '/'
				},
				facebook: {
					clientID: "919697918118494", //Set FB client ID
					clientSecret: "d85e25bd510819b5d784e3a7e9ff97d8", //Set FB client secret
					callbackURL: "http://localhost:3000/auth/facebook/callback"
				}

			},
			'hapi-mongodb': {
				url: "mongodb://met0m0elp4:wDXkgDKm@ds043694.mongolab.com:43694/heroku_z2qtb9j6" //Set Mongo connection URI
			}

		}

	},

	production: {

		views: {
			path: "./views/",
			engines: {
				html: 'ejs'
			},
			partialsPath: "./views/partials/"
		},
		app:{
			url: "https://guarded-peak-28259.herokuapp.com",
			secureUrl: "https://guarded-peak-28259.herokuapp.com",
			"public": "./public/",
			filepicker: "A1hkdyROtQyglnkdJVlRKz", //Set filepicker ID
			admin: "10153095855612364", //Set FB admin ID
			adminEmail: "nazarenolorenzo@gmail.com", //Set FB admin email
			smtp: {
				service: "Gmail",
				auth: {
					user: "nazarenolorenzo@gmail.com", //Set auth
					pass: "002honeR" //Set pass
				}
			}
		},
		plugins: {
			yar: {
				cookieOptions: {
					password: 'lalalalelele',
					isSecure: false
				}
			},
			travelogue: {
				urls: {
					failureRedirect: '/login',
					successRedirect: '/'
				},
				facebook: {
					clientID: "919697918118494", //Set FB client ID
					clientSecret: "d85e25bd510819b5d784e3a7e9ff97d8", //Set FB client secret
					callbackURL: "http://mevoyalamierda.com/auth/facebook/callback"
				}

			},
			'hapi-mongodb': {
				url: "mongodb://met0m0elp4:wDXkgDKm@ds043694.mongolab.com:43694/heroku_z2qtb9j6" //Set Mongo connection URI
			}

		}

	}

};
