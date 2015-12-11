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
			filepicker: "", //Set filepicker ID
			admin: "", //Set FB admin ID
			adminEmail: "", //Set FB admin email
			smtp: {
				service: "Gmail",
				auth: {
					user: "", //Set auth
					pass: "" //Set pass
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
					clientID: "", //Set FB client ID
					clientSecret: "", //Set FB client secret
					callbackURL: "http://localhost:3000/auth/facebook/callback"
				}

			},
			'hapi-mongodb': {
				url: "mongodb://localhost:27017/mevoyala-dev"
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
			url: "http://mevoyalamierda.com",
			secureUrl: "https://mevoyalamierda.herokuapp.com",
			"public": "./public/",
			filepicker: "", //Set filepicker ID
			admin: "", //Set FB admin ID
			adminEmail: "", //Set FB admin email
			smtp: {
				service: "Gmail",
				auth: {
					user: "", //Set auth
					pass: "" //Set pass
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
					clientID: "", //Set FB client ID
					clientSecret: "", //Set FB client secret
					callbackURL: "http://mevoyalamierda.com/auth/facebook/callback"
				}

			},
			'hapi-mongodb': {
				url: "" //Set Mongo connection URI
			}

		}

	}

};