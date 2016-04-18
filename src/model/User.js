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
    root.Traccar.User = factory(root.Traccar.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The User model module.
   * @module model/User
   * @version 3.3
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {

















  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
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
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('readonly')) {
        obj['readonly'] = ApiClient.convertToType(data['readonly'], 'Boolean');
      }
      if (data.hasOwnProperty('admin')) {
        obj['admin'] = ApiClient.convertToType(data['admin'], 'Boolean');
      }
      if (data.hasOwnProperty('map')) {
        obj['map'] = ApiClient.convertToType(data['map'], 'String');
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
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('hashedPassword')) {
        obj['hashedPassword'] = ApiClient.convertToType(data['hashedPassword'], 'String');
      }
      if (data.hasOwnProperty('salt')) {
        obj['salt'] = ApiClient.convertToType(data['salt'], 'String');
      }
      if (data.hasOwnProperty('passwordValid')) {
        obj['passwordValid'] = ApiClient.convertToType(data['passwordValid'], 'Boolean');
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
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * @member {Boolean} readonly
   */
  exports.prototype['readonly'] = undefined;

  /**
   * @member {Boolean} admin
   */
  exports.prototype['admin'] = undefined;

  /**
   * @member {String} map
   */
  exports.prototype['map'] = undefined;

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

  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;

  /**
   * @member {String} hashedPassword
   */
  exports.prototype['hashedPassword'] = undefined;

  /**
   * @member {String} salt
   */
  exports.prototype['salt'] = undefined;

  /**
   * @member {Boolean} passwordValid
   */
  exports.prototype['passwordValid'] = undefined;




  return exports;
}));
