'use strict';

//sorry, first day with mocha

var gulpFilesRequired = require('../'),
		assert            = require('assert'),
		File              = require('vinyl');

const PLUGIN_NAME = 'gulp-files-required';

require('mocha');

describe(PLUGIN_NAME, function(){
	var fakeFile = new File({
		contents: new Buffer('emptyfileContent')
	});


	it('should fail: 1 required (default), 0 file sent', function(done){
		var stream = gulpFilesRequired(),
				failed   = false;

		stream.on('error', function(){
			failed = true;
		});

		stream.on('end', function(){
			if(!failed){
				assert.fail(undefined, undefined, 'did not fail, should fail');
			}
			done();
		});

		stream.end();
	});

	it('should work: 1 required (default), 1 file sent', function(done){
		var stream = gulpFilesRequired(),
				failed   = false;

		stream.on('error', function(){
			failed = true;
		});

		stream.on('end', function(){
			if(failed){
				assert.fail(undefined, undefined, 'failed!, should not fail');
			}
			done();
		});

		stream.write(fakeFile);
		stream.end();
	});

	it('should fail: 0 required, 0 file sent - minimum is 1', function(done){
		var stream = gulpFilesRequired(0),
				failed   = false;

		stream.on('error', function(){
			failed = true;
		});

		stream.on('end', function(){
			if(!failed){
				assert.fail(undefined, undefined, 'did not fail, should fail');
			}
			done();
		});

		stream.end();
	});

	it('should work: 1 required, 1 file sent', function(done){
		var stream = gulpFilesRequired(1),
				failed   = false;

		stream.on('error', function(){
			failed = true;
		});

		stream.on('end', function(){
			if(failed){
				assert.fail(undefined, undefined, 'failed!, should not fail');
			}
			done();
		});

		stream.write(fakeFile);
		stream.end();
	});

	it('should fail: 2 required, 1 file sent', function(done){
		var stream = gulpFilesRequired(2),
				failed   = false;

		stream.on('error', function(){
			failed = true;
		});

		stream.on('end', function(){
			if(!failed){
				assert.fail(undefined, undefined, 'did not fail, should fail');
			}
			done();
		});

		stream.write(fakeFile);
		stream.end();
	});

	it('should work: 2 required, 2 file sent', function(done){
		var stream = gulpFilesRequired(2),
				failed   = false;

		stream.on('error', function(){
			failed = true;
		});

		stream.on('end', function(){
			if(failed){
				assert.fail(undefined, undefined, 'failed!, should not fail');
			}
			done();
		});

		stream.write(fakeFile);
		stream.write(fakeFile);
		stream.end();
	});

	it('should work: 2-5 required, 2 file sent', function(done){
		var stream = gulpFilesRequired(2, 5),
				failed   = false;

		stream.on('error', function(){
			failed = true;
		});

		stream.on('end', function(){
			if(failed){
				assert.fail(undefined, undefined, 'failed!, should not fail');
			}
			done();
		});

		stream.write(fakeFile);
		stream.write(fakeFile);
		stream.end();
	});

	it('should work: 2-5 required, 5 file sent', function(done){
		var stream = gulpFilesRequired(2, 5),
				failed   = false;

		stream.on('error', function(){
			failed = true;
		});

		stream.on('end', function(){
			if(failed){
				assert.fail(undefined, undefined, 'failed!, should not fail');
			}
			done();
		});

		stream.write(fakeFile);
		stream.write(fakeFile);
		stream.write(fakeFile);
		stream.write(fakeFile);
		stream.write(fakeFile);
		stream.end();
	});

	it('should fail: 2-5 required, 1 file sent', function(done){
		var stream = gulpFilesRequired(2,5),
				failed   = false;

		stream.on('error', function(){
			failed = true;
		});

		stream.on('end', function(){
			if(!failed){
				assert.fail(undefined, undefined, 'did not fail, should fail');
			}
			done();
		});

		stream.write(fakeFile);
		stream.end();
	});

	it('should fail: 2-5 required, 6 file sent', function(done){
		var stream = gulpFilesRequired(2, 5),
				failed   = false;

		stream.on('error', function(){
			failed = true;
		});

		stream.on('end', function(){
			if(!failed){
				assert.fail(undefined, undefined, 'failed!, should not fail');
			}
			done();
		});

		stream.write(fakeFile);
		stream.write(fakeFile);
		stream.write(fakeFile);
		stream.write(fakeFile);
		stream.write(fakeFile);
		stream.write(fakeFile);
		stream.end();
	});


});