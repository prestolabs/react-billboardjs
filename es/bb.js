export var bb = null;
/**
 * @function getBb
 *
 * @description
 * get the bb object, assigning it if it does not exist
 *
 * @returns {Object}
 */

var getBb = function getBb() {
  if (!bb) {
    bb = require('billboard.js').bb;
  }

  return bb;
};

export default getBb;