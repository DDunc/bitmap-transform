'use strict';

var expect = require('chai').expect;
var fs = require('fs');
//why these are read from going up one directory but the test images won't work with the same ../?
var transform = require('../lib/transform');
var handle = require('../lib/handle');
var transforms = require('../lib/transform_types');

//pal
var testImgPal = fs.readFileSync('./palette-bitmap.bmp');
var testImgPalInv = fs.readFileSync('./palette-bitmap-invert.bmp');
//non
var testImgNonPal = fs.readFileSync('./non-palette-bitmap.bmp');
var testImgNonPalInv = fs.readFileSync('./non-palette-bitmap-invert.bmp');

describe("handle_testing", function() {

  it("isPalette should return true for this palette image", function(){
  	expect(handle.isPalette(testImgPal)).to.eql(true);
  });

  it("isPalette should return true for this non-palette image", function(){
  	expect(handle.isPalette(testImgNonPal)).to.eql(false);
  });

  it("step should return 4 for this palette image", function(){
  	expect(handle.step(testImgPal)).to.eql(4);
  });

  it("step should return 3 for this non-palette image", function(){
  	expect(handle.step(testImgNonPal)).to.eql(3);
  });

  it("iterations should return 256 for this palette image", function(){
  	expect(handle.iterations(testImgPal)).to.eql(256);
  });

  it("iterations should return 10000 this non-palette image", function(){
  	expect(handle.iterations(testImgNonPal)).to.eql(10000);
  });

});

describe("transform_testing", function(){
	it("should transform the pixels for this palette version", function(){
		expect(testImgPal).to.not.eql(testImgPalInv);
	});

	it("should transform the pixels for this non-palette version", function(){
		expect(testImgNonPal).to.not.eql(testImgNonPalInv);
	});
});

/* it("should write new bitmap file", function() {
  	expect(fs.statSync("outputfile.bmp").isFile()).to.eql(true);
  }); */

