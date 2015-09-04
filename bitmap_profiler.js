'use strict';

var fs = require('fs');

var filepath = './palette-bitmap.bmp';
// var filepath = './non-palette-bitmap.bmp';

var buf = fs.readFileSync(filepath);

console.log('');
console.log('Reading bitmap data from: ' + filepath);
console.log('');

console.log('--- FILE HEADER & INFORMATION HEADER ---');
console.log('');
var headerField = buf.toString('utf8',0,2);
console.log('Header: ' + headerField);
var fileSize = buf.readUInt32LE(2);
console.log('File Size (in bytes): ' + fileSize);
var startPoint = buf.readUInt32LE(10);
console.log('Start Point of Pixel Data: ' + startPoint);
var headerSize = buf.readUInt32LE(14);
console.log('Header Size: ' + headerSize);
var width = buf.readUInt32LE(18);
console.log('Image Width (in pixels): ' + width);
var height = buf.readUInt32LE(22);
console.log('Image Height (in pixels): ' + height);
var numColorPlanes = buf.readUInt16LE(26);
console.log('Number of Color Planes: ' + numColorPlanes);
var bitsPerPixel = buf.readUInt16LE(28);
console.log('Bits per Pixel: ' + bitsPerPixel);
var compression = buf.readUInt32LE(30);
console.log('Compression: ' + compression);
var imageSize = buf.readUInt32LE(34);
console.log('Image Size: ' + imageSize);
var horizontalResolution = buf.readUInt32LE(38);
console.log('Horizontal Resolution: ' + horizontalResolution);
var verticalResolution = buf.readUInt32LE(42);
console.log('Vertical Resolution: ' + verticalResolution);
var numColors = buf.readUInt32LE(46);
console.log('Number of Colors: ' + numColors);
var numImportantColors = buf.readUInt32LE(50);
console.log('Number of Important Colors: ' + numImportantColors);
console.log('');

// NOTE: I'm assuming the order is red, green, blue, alpha, but I'm not sure
function readColor(startByte) {
  var redAsInt = buf.readUInt8(startByte), redAsString = buf.toString('hex', startByte, startByte + 1);
  var greenAsInt = buf.readUInt8(startByte + 1), greenAsString = buf.toString('hex', startByte + 1, startByte + 2);
  var blueAsInt = buf.readUInt8(startByte + 2), blueAsString = buf.toString('hex', startByte + 2, startByte + 3);
  var aAsInt = buf.readUInt8(startByte + 3), aAsString = buf.toString('hex', startByte + 3, startByte + 4);

  console.log('Red: ' + redAsInt + ' (' + redAsString + ')');
  console.log('Green: ' + greenAsInt + ' (' + greenAsString + ')');
  console.log('Blue: ' + blueAsInt + ' (' + blueAsString + ')');
  console.log('Alpha: ' + aAsInt + ' (' + aAsString + ')');
  console.log('');
}

var bytePosition = 54;

console.log('--- COLOR PALETTE INFORMATION ---');
console.log('');

for (var i = 0; i < 256; i++) {
  console.log('Color information at byte position: ' + bytePosition + ' (i = ' + i + ')');
  readColor(bytePosition);
  bytePosition += 4;
}

console.log('');





