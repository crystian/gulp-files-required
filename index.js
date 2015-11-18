var through = require('through'),
		gutil  = require('gulp-util'),
    PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-files-required';

function gulpFilesRequired(_minValue, _maxValue) {
    var count = 0,
				minValue = _minValue === undefined || _minValue === 0 ? 0 : _minValue -1,
				maxValue = _maxValue !== undefined ? _maxValue + 1: _maxValue;

	function countFiles(file) {
			if (file.isStream()) {
				this.emit('error', new PluginError(PLUGIN_NAME, 'Streams not supported!'));
			}

      count++;
      this.push(file);
		}

    function endStream() {
      if(count <= minValue || (maxValue && count >= maxValue)){
        this.emit('error', new PluginError(PLUGIN_NAME, 'Error: Minimum/maximum files are required on your stream'));
      }

      this.emit('end');
    }

   return through(countFiles, endStream);
}

module.exports = gulpFilesRequired;