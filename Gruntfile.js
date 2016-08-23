"use strict";

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        mochaTest: {
            unit: {
                options: {
                    reporter: 'spec',
                    timeout: '10000',
                    recursive: true
                },
                src: ['tests/**/test*.js']
            }
        }
    });

    grunt.registerTask('spec', ['mochaTest:unit']);
    grunt.registerTask('default', 'spec');
};
