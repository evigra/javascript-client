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
    root.Traccar.Permission = factory(root.Traccar.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Permission model module.
   * @module model/Permission
   * @version 3.3
   */

  /**
   * Constructs a new <code>Permission</code>.
   * @alias module:model/Permission
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>Permission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Permission} obj Optional instance to populate.
   * @return {module:model/Permission} The populated <code>Permission</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;

  /**
   * @member {Number} deviceId
   */
  exports.prototype['deviceId'] = undefined;




  return exports;
}));
