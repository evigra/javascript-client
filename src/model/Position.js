(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Traccar) {
      root.Traccar = {};
    }
    root.Traccar.Position = factory(root.Traccar.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Position model module.
   * @module model/Position
   * @version 3.3
   */

  /**
   * Constructs a new <code>Position</code>.
   * @alias module:model/Position
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>Position</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Position} obj Optional instance to populate.
   * @return {module:model/Position} The populated <code>Position</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('fixTime')) {
        obj['fixTime'] = ApiClient.convertToType(data['fixTime'], 'String');
      }
      if (data.hasOwnProperty('outdated')) {
        obj['outdated'] = ApiClient.convertToType(data['outdated'], 'Boolean');
      }
      if (data.hasOwnProperty('valid')) {
        obj['valid'] = ApiClient.convertToType(data['valid'], 'Boolean');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('altitude')) {
        obj['altitude'] = ApiClient.convertToType(data['altitude'], 'Number');
      }
      if (data.hasOwnProperty('speed')) {
        obj['speed'] = ApiClient.convertToType(data['speed'], 'Number');
      }
      if (data.hasOwnProperty('course')) {
        obj['course'] = ApiClient.convertToType(data['course'], 'Number');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} fixTime
   */
  exports.prototype['fixTime'] = undefined;

  /**
   * @member {Boolean} outdated
   */
  exports.prototype['outdated'] = undefined;

  /**
   * @member {Boolean} valid
   */
  exports.prototype['valid'] = undefined;

  /**
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;

  /**
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;

  /**
   * @member {Number} altitude
   */
  exports.prototype['altitude'] = undefined;

  /**
   * @member {Number} speed
   */
  exports.prototype['speed'] = undefined;

  /**
   * @member {Number} course
   */
  exports.prototype['course'] = undefined;

  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;




  return exports;
}));
