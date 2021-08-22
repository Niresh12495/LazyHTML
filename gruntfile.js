module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['dist/*'],
        concat: {
            options: {
                separator: ';',
                banner: '/**\n' +
                    '* <%= pkg.name %> v <%= pkg.version %>\n' +
                    '* <%= pkg.description %>\n' +
                    '* Niresh (niresh12495@gmail.com) \n' +
                    '* Facebook.com/Niresh \n' +
                    '*/\n'
            },
            target: {
                src: ['src/libs/*.min.js','node_modules/postscribe/dist/postscribe.min.js', 'src/lazyhtml-src.js'],
                dest: 'dist/lazyhtml.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= concat.options.banner %>'
            },
            
            target: {
                options: {
                    banner: '<%= uglify.options.banner %>',
                    mangle: true,
                          toplevel: true,
                 compress: {
        drop_console: false
      }
                },
                files: {
                    'dist/lazyhtml.min.js': ['<%= concat.target.dest %>']
                }
            }
        },
        watch: {
            files: ['Gruntfile.js', 'src/**/*.js', 'tests/**/*'],
            tasks: ['concat'],
            options: {
                livereload: true
            }
        },
        connect: {
            server: {
                options: {
                    open: true,
                    port: 9000,
                    hostname: '*',
                    livereload: true,
                }
            }
        },
        release: {
            options: {
                additionalFiles: ['bower.json']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-release');
    grunt.registerTask('test', ['connect', 'watch']);
    grunt.registerTask('default', ['clean', 'concat', 'uglify']);

};