# gulp-marked-man [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
> A gulp plugin that converts markdown files to man pages.

## Usage

Options are passed through to `marked-man`.

### Without options (extension removed)

By default `gulp-marked-man` will remove the file extension of the input files.  This
allows your syntax highlighting for `.md` files and facilitates sectioned manfiles
I.E. `mydoc.1 mydoc.5`.

You can override this by passing in `{preserveExtensions: true}`.

```javascript
var rename = require('gulp-rename');
var markedMan = require('gulp-marked-man');

gulp.src('./test/fixtures/simple.1.md')
  .pipe(markedMan())
  .pipe(gulp.dest('./dist/'));
  // -> ./dist/simple.1
```

### With options (extension preserved)
```javascript
var rename = require('gulp-rename');
var markedMan = require('gulp-marked-man');

gulp.src('./test/fixtures/simple.1.md')
  .pipe(markedMan({preserveExtensions: true}))
  .pipe(gulp.dest('./dist/'));
  // -> ./dist/simple.1.md
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

[coveralls-url]: https://coveralls.io/r/jsdevel/gulp-marked-man
[coveralls-image]: http://img.shields.io/coveralls/jsdevel/gulp-marked-man/master.svg
