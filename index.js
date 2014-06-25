'use strict';

var marked = require('marked-man');
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

module.exports = function(options){
  options = options || {};

  var stream = through.obj(function(file, enc, callback){
    if(file.isBuffer()){
      file.contents = new Buffer(marked(file.contents.toString('utf8')));
    }

    if(file.isStream()){
      return this.emit('error', new PluginError({
        plugin: 'gulp-marked-man',
        message: 'Streams are not supported.'
      }));
    }

    if(!options.preserveExtensions){
      file.path = gutil.replaceExtension(file.path, '');
    }

    this.push(file);
    callback();
  });

  return stream;
};
