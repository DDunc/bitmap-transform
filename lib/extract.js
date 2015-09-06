'use strict';

  var numColors = data['readUInt32' + endianness](46); // 256 or 0

  if (numColors > 0) {
    bytePosition = 54;
    iterations = 256;
    increment = 4;
  } else {
    bytePosition = data['readUInt32' + endianness](10);
    width = data['readUInt32' + endianness](18);
    height = data['readUInt32' + endianness](22);
    iterations = width * height;
    increment = 3;
  }
