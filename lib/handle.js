'use strict';

var os = require('os');

var handle = {};

handle.filepath = process.argv[2];
handle.transformType = process.argv[3];
handle.newFileName = process.argv[4] || "somename.bmp";
handle.endianness = os.endianness();
handle.startPoint = 54;
handle.isPalette = function(data) {
  if (data['readUInt32' + handle.endianness](46) === 0) {
    return false;
  } else {
    return true;
  }
};
handle.step = function(data){
    if (handle.isPalette(data)) {
      return 4;
    } else {
      return 3;
    }
};
handle.iterations = function(data){
    if (handle.isPalette(data)) {
      return 256
    } else {
      return data['readUInt32' + handle.endianness](18) * data['readUInt32' + handle.endianness](22);
    }
};

module.exports = handle;