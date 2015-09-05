'use strict';

var transforms = require('./transforms');

exports.transformPalette = function (data, start, transformType) {
  for (var i = 0; i < 256; i++) {
    transforms.transform[transformType](data, start);
    start += 4;
  }
  return data;
}
