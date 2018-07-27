module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      concat: {
        app: {
          src: ['../js/app/*.js'],
          dest: '../js/main.min.js'
        },
        helpers: {
          src: [
            '../js/helpers/*.js',
          ],
          dest: '../js/helpers.min.js'
        },
      },

      uglify: {
        app: {
          files: {
            '../js/main.min.js': ['<%= concat.app.dest %>']
          }
        },
        helpers: {
          files: {
            '../js/helpers.min.js': ['<%= concat.helpers.dest %>']
          }
        },
      },

      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'compressed'
          },
          files: {                         // Dictionary of files
            '../css/main.min.css': '../css/sass/main.scss',       // 'destination': 'source'
          }
        }
      },

      watch: {
        css: {
          files: '../css/sass/*.scss',
          tasks: ['sass']
        }, 
        js: {
          files: ['../js/app/main.js', '../js/helpers/*.js'],
          tasks: ['concat', 'uglify']
        }
      }
    });

    // Load plugins here
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

  // Define your tasks here
  grunt.registerTask('default',['watch']);
};
