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
    root.Traccar.Device = factory(root.Traccar.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Device model module.
   * @module model/Device
   * @version 3.3
   */

  /**
   * Constructs a new <code>Device</code>.
   * @alias module:model/Device
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>Device</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Device} obj Optional instance to populate.
   * @return {module:model/Device} The populated <code>Device</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('uniqueId')) {
        obj['uniqueId'] = ApiClient.convertToType(data['uniqueId'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('lastUpdate')) {
        obj['lastUpdate'] = ApiClient.convertToType(data['lastUpdate'], 'String');
      }
      if (data.hasOwnProperty('positionId')) {
        obj['positionId'] = ApiClient.convertToType(data['positionId'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} uniqueId
   */
  exports.prototype['uniqueId'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {String} lastUpdate
   */
  exports.prototype['lastUpdate'] = undefined;

  /**
   * @member {Number} positionId
   */
  exports.prototype['positionId'] = undefined;




  return exports;
}));
