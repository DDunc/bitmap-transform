'use strict';

var fs = require('fs');
var transform = require('./lib/transform');
var  handle = require('./lib/handle');

function imageReadReturn(){
	fs.readFile(handle.filepath, function(err, data) {
	  if (err) return console.log(err);

	  fs.writeFile(handle.newFileName, transform(handle, data), function(err) {
	    if (err) return console.log(err);
	  });
	});
}

imageReadReturn()