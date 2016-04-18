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
    root.Traccar.Command = factory(root.Traccar.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Command model module.
   * @module model/Command
   * @version 3.3
   */

  /**
   * Constructs a new <code>Command</code>.
   * @alias module:model/Command
   * @class
   */
  var exports = function() {

  };

  /**
   * Constructs a <code>Command</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Command} obj Optional instance to populate.
   * @return {module:model/Command} The populated <code>Command</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

    }
    return obj;
  }





  return exports;
}));
