'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        coveralls: {
            options: {
                force: false
            },
            your_target: {
                src: 'coverage/*.info',
                options: {
                }
            },
        },
    });
    grunt.loadNpmTasks('grunt-coveralls');
}