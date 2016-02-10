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
			secureDomain: "localhost",
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
					profileFields: ['displayName','id', 'email', 'picture.type(normal)'],
					clientID: "919697918118494", //Set FB client ID
					clientSecret: "d85e25bd510819b5d784e3a7e9ff97d8", //Set FB client secret
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
			url: "https://guarded-peak-28259.herokuapp.com",
			secureDomain: "guarded-peak-28259.herokuapp.com",
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
					profileFields: ['displayName','id', 'email', 'picture.type(normal)'],
					clientID: "919697918118494", //Set FB client ID
					clientSecret: "d85e25bd510819b5d784e3a7e9ff97d8", //Set FB client secret
					callbackURL: "https://guarded-peak-28259.herokuapp.com/auth/facebook/callback"
				}

			},
			'hapi-mongodb': {
				url: process.env.MONGOLAB_URI //Set Mongo connection URI,
			}

		}

	}

};
