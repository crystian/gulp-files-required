var through = require('through'),
    PluginError = gutil.PluginError;

module.exports = function (minValue, maxValue) {
    var count = 0,
        minValue = (minValue===undefined || minValue===0) ? 0 : minValue;

    function countFiles(file) {
      count++;
    }

    function endStream() {
      if(count <= minValue || (maxValue && count >= maxValue)){
        return this.emit('error', new PluginError('PLUGIN_NAME', 'edddddrror'));
      }

      this.emit('end');
    }

   return through(countFiles, endStream);
};
