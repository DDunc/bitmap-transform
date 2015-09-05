'use strict';

var fs = require('fs'),
    transform = require('./lib/transform'),
    handle = require('./lib/handle');

fs.readFile(handle.filepath, function(err, data) {
  if (err) return console.log(err);

  fs.writeFile('somename.bmp', transform(handle, data), function(err) {
    if (err) return console.log(err);
  });

});
