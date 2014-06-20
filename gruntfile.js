(function() {
  'use strict';

  module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    /*
     * These grunt tasks are for what gulp doesn't have, or sucks at.
     */
    grunt.initConfig({

      'gh-pages': {
        options: {
          base: 'deploy'
        },
        src: ['**']
      }
    });

    grunt.registerTask('default', ['gh-pages']);
  };
})();
