module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        watch: {
            files: ['**/*.html', '**/*.css', '**/*.js'],
            options: {
                livereload: true,
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};