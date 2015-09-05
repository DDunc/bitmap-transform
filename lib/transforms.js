'use strict';



exports.transform = {
  "invertColor": invertColor,
  "grayscaleColor": grayscaleColor,
  "darkenColor": darkenColor
};


// Transform.prototype.redAsInt = function (){
//   arguments[0].readUInt8(arguments[1])
// }

//rgb data goes in
function invertColor(data, startByte) {
  var colorValArr = rgbReader(data, startByte);
  data.writeUInt8(255 - colorValArr[0], startByte);
  data.writeUInt8(255 - colorValArr[1], startByte + 1);
  data.writeUInt8(255 - colorValArr[2], startByte + 2);
}

function grayscaleColor(data, startByte) {
  var colorValArr = rgbReader(data, startByte);
  var grayed = Math.floor((colorValArr[0] + colorValArr[1] + colorValArr[2]) / 3);
  data.writeUInt8(grayed, startByte);
  data.writeUInt8(grayed, startByte + 1);
  data.writeUInt8(grayed, startByte + 2);
}

function darkenColor(data, startByte) {
  var colorValArr = rgbReader(data, startByte);
  data.writeUInt8(Math.floor(colorValArr[0] * 0.25), startByte);
  data.writeUInt8(Math.floor(colorValArr[1] * 0.25), startByte + 1);
  data.writeUInt8(Math.floor(colorValArr[2] * 0.25), startByte + 2);
}


function rgbReader(data, startByte){
  return [data.readUInt8(startByte), data.readUInt8(startByte + 1), data.readUInt8(startByte + 2)];
}

// function(srcPic, tType){
//   transforms["tType"](srcPic)
// }
