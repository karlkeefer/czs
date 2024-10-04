"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    livereload: true, // overridden to false for `grunt build`
    jade: {
      compile: {
        options: {
          data: {
            debug: false,
            livereload: function() {
              return grunt.config.data.livereload;
            }
          }
        },
        files: [{
          expand: true,
          cwd: "pages",
          src: ["**/*.jade"],
          dest: "docs",
          ext: ".html"
        }]
      }
    },
    watch: {
      jade: {
        options: {
          livereload: true
        },
        files: [
          '**/*.jade'
        ],
        tasks: ['jade:compile']
      },
      clientLess: {
        options: {
          livereload: true
        },
        files: [
          '**/*.less',
        ],
        tasks: ['less']
      },
    },
    less: {
      options: {
        compress: true
      },
      layouts: {
        files: {
          'docs/css/main.css': [
            'less/main.less'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // regular watch for local dev
  grunt.registerTask('default', ['jade', 'less', 'watch']);

  // disable livereload for real builds
  grunt.registerTask('noLiveReload', 'swap livereload var', function() {
    grunt.config.data.livereload = false;
  });
  grunt.registerTask('build', ['noLiveReload', 'jade', 'less']);
};
