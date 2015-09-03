var fs = require('fs');
var buf = fs.readFileSync('./bitmap1.bmp');
var startPoint = (buf.readUInt32LE(10));
var a = 0;
//to do: 1) pull these values from buffer, 2) everything else
var colorMax;
var width;
var height;

function shiftPic(){
	for (var i = startPoint; a < 10000; a++) {
		buf[i] = 16 - buf[i];
		i++;
	}
}

shiftPic()

fs.writeFileSync('./bitmap10.bmp', buf);