"use strict";

exports.__esModule = true;
exports.default = exports.bb = void 0;
var bb = null;
/**
 * @function getBb
 *
 * @description
 * get the bb object, assigning it if it does not exist
 *
 * @returns {Object}
 */

exports.bb = bb;

var getBb = function getBb() {
  if (!bb) {
    exports.bb = bb = require('billboard.js').bb;
  }

  return bb;
};

var _default = getBb;
exports.default = _default;