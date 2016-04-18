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
    root.Traccar.Server = factory(root.Traccar.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Server model module.
   * @module model/Server
   * @version 3.3
   */

  /**
   * Constructs a new <code>Server</code>.
   * @alias module:model/Server
   * @class
   */
  var exports = function() {













  };

  /**
   * Constructs a <code>Server</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Server} obj Optional instance to populate.
   * @return {module:model/Server} The populated <code>Server</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('registration')) {
        obj['registration'] = ApiClient.convertToType(data['registration'], 'Boolean');
      }
      if (data.hasOwnProperty('readonly')) {
        obj['readonly'] = ApiClient.convertToType(data['readonly'], 'Boolean');
      }
      if (data.hasOwnProperty('map')) {
        obj['map'] = ApiClient.convertToType(data['map'], 'String');
      }
      if (data.hasOwnProperty('bingKey')) {
        obj['bingKey'] = ApiClient.convertToType(data['bingKey'], 'String');
      }
      if (data.hasOwnProperty('mapUrl')) {
        obj['mapUrl'] = ApiClient.convertToType(data['mapUrl'], 'String');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('distanceUnit')) {
        obj['distanceUnit'] = ApiClient.convertToType(data['distanceUnit'], 'String');
      }
      if (data.hasOwnProperty('speedUnit')) {
        obj['speedUnit'] = ApiClient.convertToType(data['speedUnit'], 'String');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('zoom')) {
        obj['zoom'] = ApiClient.convertToType(data['zoom'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Boolean} registration
   */
  exports.prototype['registration'] = undefined;

  /**
   * @member {Boolean} readonly
   */
  exports.prototype['readonly'] = undefined;

  /**
   * @member {String} map
   */
  exports.prototype['map'] = undefined;

  /**
   * @member {String} bingKey
   */
  exports.prototype['bingKey'] = undefined;

  /**
   * @member {String} mapUrl
   */
  exports.prototype['mapUrl'] = undefined;

  /**
   * @member {String} language
   */
  exports.prototype['language'] = undefined;

  /**
   * @member {String} distanceUnit
   */
  exports.prototype['distanceUnit'] = undefined;

  /**
   * @member {String} speedUnit
   */
  exports.prototype['speedUnit'] = undefined;

  /**
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;

  /**
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;

  /**
   * @member {Number} zoom
   */
  exports.prototype['zoom'] = undefined;




  return exports;
}));
