'use strict';

var fs = require('fs');
var os = require('os');
// var extract = require('./lib/extract');
var transformPalette = require('./lib/transform_palette');
var transformNonPalette = require('./lib/transform_nonpalette');

var filepath = './palette-bitmap.bmp';
var endianness = os.endianness();
var bytePosition, iterations, increment, isLE, numColors, width, height, newFile;

var start = 54;
// var transformType = 'grayscale';
var transformType = "grayscaleColor";

fs.readFile(filepath, function(err, data) {

  if (err) return console.log(err);

  numColors = data['readUInt32' + endianness](46); // 256 or 0

  if (numColors === 0) {
    newFile = transformNonPalette(data, start, transformType);
  } else {
    newFile = transformPalette.transformPalette(data, start, transformType);
  }

  fs.writeFile('somename.bmp', newFile, function(err) {
    if (err) return console.log(err);
    console.log('New file created.');
  });

});
