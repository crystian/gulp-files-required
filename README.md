gulp-files-required
=========

Gulp plugin: Set minimum and/or maximum files required for your stream.

## Installation

```
npm install gulp-files-required
```

## Basic Usage

You can set min and/or max (each number is included), if it does not pass the validation, it throw an error an break the process.

```js
var filesRequired = require('gulp-files-required');

gulp.task('sometask', function () {
  return gulp.src('./fruta.*')
    .pipe(filesRequired(1,3))
    .on('error', function(e){
			console.log(e.message);
		})
    .pipe(gulp.dest('./public/fruta'));
});
```

Or without argument for an single file as minimum required

## Error Handling

By default, a gulp task will fail and all streams will halt when an error happens. You need to handle it.


**NOTE**
This is my first plugin, sorry for the errors.

## License

(MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
