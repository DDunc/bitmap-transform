'use strict';

exports.transform = {
  "invert": invert,
  "grayscale": grayscale,
  "darken": darken
};

function invert(data, startByte) {
  var colorValArr = rgbReader(data, startByte);
  data.writeUInt8(255 - colorValArr[0], startByte);
  data.writeUInt8(255 - colorValArr[1], startByte + 1);
  data.writeUInt8(255 - colorValArr[2], startByte + 2);
}

function grayscale(data, startByte) {
  var colorValArr = rgbReader(data, startByte);
  var grayed = Math.floor((colorValArr[0] + colorValArr[1] + colorValArr[2]) / 3);
  data.writeUInt8(grayed, startByte);
  data.writeUInt8(grayed, startByte + 1);
  data.writeUInt8(grayed, startByte + 2);
}

function darken(data, startByte) {
  var colorValArr = rgbReader(data, startByte);
  data.writeUInt8(Math.floor(colorValArr[0] * 0.25), startByte);
  data.writeUInt8(Math.floor(colorValArr[1] * 0.25), startByte + 1);
  data.writeUInt8(Math.floor(colorValArr[2] * 0.25), startByte + 2);
}

function rgbReader(data, startByte){
  return [data.readUInt8(startByte), data.readUInt8(startByte + 1), data.readUInt8(startByte + 2)];
}


