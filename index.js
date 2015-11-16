var through = require('through'),
		gutil  = require('gulp-util'),
    PluginError = gutil.PluginError;

module.exports = function(minValue, maxValue) {
    var count = 0,
        minValue = (minValue===undefined || minValue===0) ? 0 : minValue;

    function countFiles(file) {
      count++;
    }

    function endStream() {
      if(count <= minValue || (maxValue && count >= maxValue)){
        return this.emit('error', new PluginError('gulp-files-required', 'Error, minimum/maximum files are required'));
      }

      this.emit('end');
    }

   return through(countFiles, endStream);
};
