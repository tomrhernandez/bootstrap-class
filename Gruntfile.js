'use strict'
module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        , uglify: {
            dist: {
                options: {
                    mangle: true,
                    compress: {}
                },
                files: {
                    'js/mysite.min.js': [
                        'js/pre/**/*.js'
                        ]
                }
            }
        }
        , less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/mainstyles.css" : "less/**/*.less"
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    'css/mainstyles.min.css' : [
                        'css/mainstyles',
                        'css/site.css'
                        ]
                }
            }
        },
        
        watch: {
            scripts: {
                files: ['js/pre/**/*.js'],
                tasks: ['uglify'],
                options: {
                    debounceDelay: 250,
                }
            },
            less: {
                files: "less/**/*.less"
                , tasks: ["less"]
            }
        }
    });

    
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify")
    
    grunt.registerTask('default', ['uglify', 'less', 'cssmin', 'watch']);
    



//     grunt.registerTask('hello', function(){
// 	console.log('hello world from Grunt');
//     });

};