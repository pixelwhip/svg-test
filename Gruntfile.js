/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    'gh-pages': {
        src: ['**']
      }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-gh-pages');

  // Default task.
  grunt.registerTask('default', ['gh-pages']);
};
