'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var transform = require('../lib/transform');

//placeholder test, makes sure new file exists.
describe("main_module_test", function() {
  it("should write new bitmap file", function() {
  	expect(fs.statSync("somename.bmp").isFile()).to.eql(true);
  });
});

