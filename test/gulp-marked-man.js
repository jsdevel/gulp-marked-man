'use strict';

var gulp = require('gulp');
var markedMan = require('..');
var es = require('event-stream');


describe('gulp-marked-man', function(done){
  it('should take a markdown file', function(done){
    gulp.src('./test/fixtures/simple.md')
    .pipe(markedMan())
    .pipe(gulp.dest('./dist/'))
    .pipe(es.wait(done));
  });

  it('shouuld not allow streams', function(done){
    gulp.src('./test/fixtures/simple.md', {buffer: false})
    .pipe(markedMan())
    .on('error', function(err){
      err.plugin.should.equal('gulp-marked-man');
      err.message.should.equal('Streams are not supported.');
      done();
    });

  });
});
