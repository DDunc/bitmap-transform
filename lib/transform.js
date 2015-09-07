'use strict';

var transforms = require('./transform_types');

function transform(handle, data) {
	for (var i = 0; i < handle.iterations(data); i++) {
    transforms.transform[handle.transformType](data, handle.startPoint);
    handle.startPoint += handle.step(data);
  }
  return data;
}

module.exports = transform;