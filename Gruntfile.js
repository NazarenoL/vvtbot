module.exports = function(grunt) {

	grunt.initConfig({

		watch: {

			dev: {
				files: ['public/**/*.styl'],
				tasks: ['stylus']
			}

		},

		nodemon: {

			dev: {

				options: {
					watchedExtensions: ['js', 'html']
				}

			}

		},

		stylus: {

			dev: {
				files: {
					'public/css/styles.css': 'public/css/styles.styl'
				}
			}

		},

		concurrent: {

			dev: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}

		}

	});

	grunt.loadNpmTasks('grunt-nodemon');

	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.loadNpmTasks('grunt-concurrent');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev', ['concurrent:dev']);

};