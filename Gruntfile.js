'use strict';

module.exports = function(grunt){
    require('time-grunt')(grunt);

    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass:{
            dist:{
                files:{
                    'css/styles.css':'scss/styles.scss'
                }
            }
        }, 
        watch: {
            files: 'scss/*.scss',
            tasks: ['sass']
        },
        browserSync:{
            dev:{
                bsFiles:{
                    src:[
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                }
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        },
        copy:{
            html:{
                files:[{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist'
                }]
            },
            fonts:{
                files:[{
                    expand:true,
                    dot: true,
                    cwd:'node_modules/font-awesome',
                    src:['fonts/*.*'],
                    dest: 'dist'
                }]
            }
        },
        clean:{
            build:{
                src:['dist/']
            }
        },
        imagemin:{
            dynamic:{
                files:[{
                    expand:true;
                    dot:true,
                    cwd:'./',
                    src: ['img/*.{png, gif, jpg}'],
                    dest:'dist/'

                }]
            }
        }
    });
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default',['browserSync', 'watch']);
    grunt.registerTask('build',[
        'clean',
        'copy',
        'imagemin'
    ])
};