'use strict';

var gulp = require('gulp');
var markedMan = require('..');
var es = require('event-stream');
var fs = require('fs');



describe('gulp-marked-man', function(done){
  it('should take a markdown file and remove the extension', function(done){
    gulp.src('./test/fixtures/simple.1.md')
    .pipe(markedMan())
    .pipe(gulp.dest('./dist/'))
    .pipe(es.wait(function(){
      fs.existsSync('./dist/simple.1').should.be.true;
      done();
    }));
  });

  it('should allow the extension to be preserved', function(){
    gulp.src('./test/fixtures/simple.1.md')
    .pipe(markedMan({preserveExtension: true}))
    .pipe(gulp.dest('./dist/'))
    .pipe(es.wait(function(){
      fs.existsSync('./dist/simple.1.md').should.be.true;
      done();
    }));
  });

  it('shouuld not allow streams', function(done){
    gulp.src('./test/fixtures/simple.1.md', {buffer: false})
    .pipe(markedMan())
    .on('error', function(err){
      err.plugin.should.equal('gulp-marked-man');
      err.message.should.equal('Streams are not supported.');
      done();
    });

  });
});
