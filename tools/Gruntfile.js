module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      resources: {
        src_folder: '../',
        shopify_folder: '../../store/dilarafindikoglu/',
      }, 
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
      copy: {
        shopify: {
            files: [
              {expand: true, cwd: '<%= resources.src_folder %>css/', src: ['main.min.css'], dest: '<%= resources.shopify_folder %>assets/'},
              {expand: true, cwd: '<%= resources.src_folder %>js/', src: ['main.min.js'], dest: '<%= resources.shopify_folder %>assets/'},
              {expand: true, cwd: '<%= resources.src_folder %>js/', src: ['helpers.min.js'], dest: '<%= resources.shopify_folder %>assets/'}
            ],
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
        }, 
        copy: {
          files: ['../css/*.min.css','../js/*.min.js'],
          tasks: ['copy']
        }
      }
    });

    // Load plugins here
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

  // Define your tasks here
  grunt.registerTask('default',['watch']);
  grunt.registerTask('shopify', [
    'copy:shopify',
  ]);
};
