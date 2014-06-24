# gulp-marked-man [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
> A gulp plugin that converts markdown files to man pages.

## Example

```javascript
var rename = require('gulp-rename');
var markedMan = require('gulp-marked-man');

gulp.src('./test/fixtures/simple.md')
  .pipe(markedMan())
  .pipe(rename(function(path){
    path.extname = '.1';
  })
  .pipe(gulp.dest('./dist/'));
```

##LICENSE
``````
The MIT License (MIT)

Copyright (c) 2014 Joseph Spencer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/gulp-marked-man.svg
[npm-url]: https://npmjs.org/package/gulp-marked-man
[npm-image]: http://img.shields.io/npm/v/gulp-marked-man.svg

[travis-url]: https://travis-ci.org/jsdevel/gulp-marked-man
[travis-image]: http://img.shields.io/travis/jsdevel/gulp-marked-man.svg

[coveralls-url]: https://coveralls.io/r/jsdevel/node-gulp-marked-man
[coveralls-image]: http://img.shields.io/coveralls/jsdevel/node-gulp-marked-man/master.svg
