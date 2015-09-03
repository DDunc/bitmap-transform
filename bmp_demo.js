'use strict';

var fs = require('fs');

var buf = fs.readFileSync('./palette-bitmap.bmp');
// var buf = fs.readFileSync('./non-palette-bitmap.bmp');

console.log('');
var headerField = buf.toString('utf8',0,2);
console.log('headerField: ' + headerField);
var fileSize = buf.readUInt32LE(2);
console.log('fileSize: ' + fileSize);
var startPoint = buf.readUInt32LE(10);
console.log('startPoint: ' + startPoint);
var headerSize = buf.readUInt32LE(14);
console.log('headerSize: ' + headerSize);
var width = buf.readUInt32LE(18);
console.log('width: ' + width);
var height = buf.readUInt32LE(22);
console.log('height: ' + height);
var numColorPlanes = buf.readUInt16LE(26);
console.log('numColorPlanes: ' + numColorPlanes);
var bitsPerPixel = buf.readUInt16LE(28);
console.log('bitsPerPixel: ' + bitsPerPixel);
var compression = buf.readUInt32LE(30);
console.log('compression: ' + compression);
var imageSize = buf.readUInt32LE(34);
console.log('imageSize: ' + imageSize);
var horizontalResolution = buf.readUInt32LE(38);
console.log('horizontalResolution: ' + horizontalResolution);
var verticalResolution = buf.readUInt32LE(42);
console.log('verticalResolution: ' + verticalResolution);
var numColors = buf.readUInt32LE(46);
console.log('numColors: ' + numColors);
var numImportantColors = buf.readUInt32LE(50);
console.log('numImportantColors: ' + numImportantColors);
console.log('');

var firstColor = buf.readUInt32LE(54);
console.log('firstColor: ' + firstColor);
var firstAsInt = buf.readUInt8(54);
console.log('first as int: ' + firstAsInt);
var firstAsString = buf.toString('hex', 54, 55);
console.log('first as hex: ' + firstAsString);
var secondAsInt = buf.readUInt8(55);
console.log('second as int: ' + secondAsInt);
var secondAsString = buf.toString('hex', 55, 56);
console.log('second as hex: ' + secondAsString);
var thirdAsInt = buf.readUInt8(56);
console.log('third as int: ' + thirdAsInt);
var thirdAsString = buf.toString('hex', 56, 57);
console.log('third as hex: ' + thirdAsString);
var fourthAsInt = buf.readUInt8(57);
console.log('fourth as int: ' + fourthAsInt);
var fourthAsString = buf.toString('hex', 57, 58);
console.log('fourth as hex: ' + fourthAsString);
console.log('');

var firstColor = buf.readUInt32LE(58);
console.log('firstColor: ' + firstColor);
var firstAsInt = buf.readUInt8(58);
console.log('first as int: ' + firstAsInt);
var firstAsString = buf.toString('hex', 58, 59);
console.log('first as hex: ' + firstAsString);
var secondAsInt = buf.readUInt8(59);
console.log('second as int: ' + secondAsInt);
var secondAsString = buf.toString('hex', 59, 60);
console.log('second as hex: ' + secondAsString);
var thirdAsInt = buf.readUInt8(60);
console.log('third as int: ' + thirdAsInt);
var thirdAsString = buf.toString('hex', 60, 61);
console.log('third as hex: ' + thirdAsString);
var fourthAsInt = buf.readUInt8(61);
console.log('fourth as int: ' + fourthAsInt);
var fourthAsString = buf.toString('hex', 61, 62);
console.log('fourth as hex: ' + fourthAsString);
console.log('');

var firstColor = buf.readUInt32LE(62);
console.log('firstColor: ' + firstColor);
var firstAsInt = buf.readUInt8(62);
console.log('first as int: ' + firstAsInt);
var firstAsString = buf.toString('hex', 62, 63);
console.log('first as hex: ' + firstAsString);
var secondAsInt = buf.readUInt8(63);
console.log('second as int: ' + secondAsInt);
var secondAsString = buf.toString('hex', 63, 64);
console.log('second as hex: ' + secondAsString);
var thirdAsInt = buf.readUInt8(64);
console.log('third as int: ' + thirdAsInt);
var thirdAsString = buf.toString('hex', 64, 65);
console.log('third as hex: ' + thirdAsString);
var fourthAsInt = buf.readUInt8(65);
console.log('fourth as int: ' + fourthAsInt);
var fourthAsString = buf.toString('hex', 65, 66);
console.log('fourth as hex: ' + fourthAsString);
console.log('');


// var a = 0;

// for (var i = startPoint; a < 5000; a++) {
//   buf[i] = Math.floor(Math.random() * 255 );
//   // if (buf[i] == 28) {
//   //   buf[i] = 15;
//   // }
//   i++;
// }

// fs.writeFileSync('./b1.bmp', buf);




