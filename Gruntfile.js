// JavaScript source code

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '',
            },
            cssIA: {
                src: ['dapjna.css', 'dap_nyia.css', 'janus_nyia.css', 'dap-ikon-font.css', 'hoejremenu.css'],
                dest: 'dist/ia.css'
            }
        },
        cssmin: {
            cssIA: {
                src: ['dist/ia.css'],
                dest: 'dist/ia.min.css'
            }
        }
    });
    // Default task
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat', 'cssmin']);
};
