module.exports = function (grunt) {
  grunt.initConfig({
        sprite: {                               
          files: {
            src: ['images/*.gruntpng'],
            dest: 'dist/bundle.png',
            destCss:'dist/sprite.css'
                                       
          }
              }
                
  });

    grunt.loadNpmTasks('grunt-spritesmith');

      grunt.registerTask('default', ['sprite']);    

};

