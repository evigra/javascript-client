(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Command', '../model/Device', '../model/Permission', '../model/Position', '../model/Server', '../model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Command'), require('../model/Device'), require('../model/Permission'), require('../model/Position'), require('../model/Server'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.Traccar) {
      root.Traccar = {};
    }
    root.Traccar.DefaultApi = factory(root.Traccar.ApiClient, root.Traccar.Command, root.Traccar.Device, root.Traccar.Permission, root.Traccar.Position, root.Traccar.Server, root.Traccar.User);
  }
}(this, function(ApiClient, Command, Device, Permission, Position, Server, User) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 3.3
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the commandsPost operation.
     * @callback module:api/DefaultApi~commandsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Command} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Command} body 
     * @param {module:api/DefaultApi~commandsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Command}
     */
    this.commandsPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling commandsPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Command;

      return this.apiClient.callApi(
        '/commands', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the devicesGet operation.
     * @callback module:api/DefaultApi~devicesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Device>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Boolean} all 
     * @param {Integer} userId 
     * @param {module:api/DefaultApi~devicesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Device>}
     */
    this.devicesGet = function(all, userId, callback) {
      var postBody = null;

      // verify the required parameter 'all' is set
      if (all == undefined || all == null) {
        throw "Missing the required parameter 'all' when calling devicesGet";
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling devicesGet";
      }


      var pathParams = {
      };
      var queryParams = {
        'all': all,
        'userId': userId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Device];

      return this.apiClient.callApi(
        '/devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the devicesIdDelete operation.
     * @callback module:api/DefaultApi~devicesIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Integer} id 
     * @param {module:api/DefaultApi~devicesIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.devicesIdDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling devicesIdDelete";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/devices/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the devicesIdPut operation.
     * @callback module:api/DefaultApi~devicesIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Integer} id 
     * @param {module:model/Device} body 
     * @param {module:api/DefaultApi~devicesIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Device}
     */
    this.devicesIdPut = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling devicesIdPut";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling devicesIdPut";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Device;

      return this.apiClient.callApi(
        '/devices/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the devicesPost operation.
     * @callback module:api/DefaultApi~devicesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Device} body 
     * @param {module:api/DefaultApi~devicesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Device}
     */
    this.devicesPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling devicesPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Device;

      return this.apiClient.callApi(
        '/devices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the permissionsDelete operation.
     * @callback module:api/DefaultApi~permissionsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Permission} body 
     * @param {module:api/DefaultApi~permissionsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.permissionsDelete = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling permissionsDelete";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/permissions', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the permissionsPost operation.
     * @callback module:api/DefaultApi~permissionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Permission} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Permission} body 
     * @param {module:api/DefaultApi~permissionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Permission}
     */
    this.permissionsPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling permissionsPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Permission;

      return this.apiClient.callApi(
        '/permissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the positionsGet operation.
     * @callback module:api/DefaultApi~positionsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Position>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Integer} deviceId 
     * @param {String} from 
     * @param {String} to 
     * @param {module:api/DefaultApi~positionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Position>}
     */
    this.positionsGet = function(deviceId, from, to, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling positionsGet";
      }

      // verify the required parameter 'from' is set
      if (from == undefined || from == null) {
        throw "Missing the required parameter 'from' when calling positionsGet";
      }

      // verify the required parameter 'to' is set
      if (to == undefined || to == null) {
        throw "Missing the required parameter 'to' when calling positionsGet";
      }


      var pathParams = {
      };
      var queryParams = {
        'deviceId': deviceId,
        'from': from,
        'to': to
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Position];

      return this.apiClient.callApi(
        '/positions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the serverGet operation.
     * @callback module:api/DefaultApi~serverGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Server} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~serverGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Server}
     */
    this.serverGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Server;

      return this.apiClient.callApi(
        '/server', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the serverPut operation.
     * @callback module:api/DefaultApi~serverPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Server} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Server} body 
     * @param {module:api/DefaultApi~serverPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Server}
     */
    this.serverPut = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling serverPut";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Server;

      return this.apiClient.callApi(
        '/server', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sessionDelete operation.
     * @callback module:api/DefaultApi~sessionDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~sessionDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sessionDelete = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/session', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sessionGet operation.
     * @callback module:api/DefaultApi~sessionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~sessionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.sessionGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/session', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sessionPost operation.
     * @callback module:api/DefaultApi~sessionPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} email 
     * @param {String} password 
     * @param {module:api/DefaultApi~sessionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.sessionPost = function(email, password, callback) {
      var postBody = null;

      // verify the required parameter 'email' is set
      if (email == undefined || email == null) {
        throw "Missing the required parameter 'email' when calling sessionPost";
      }

      // verify the required parameter 'password' is set
      if (password == undefined || password == null) {
        throw "Missing the required parameter 'password' when calling sessionPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'email': email,
        'password': password
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/session', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersGet operation.
     * @callback module:api/DefaultApi~usersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Position>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~usersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Position>}
     */
    this.usersGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Position];

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersIdDelete operation.
     * @callback module:api/DefaultApi~usersIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Integer} id 
     * @param {module:api/DefaultApi~usersIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.usersIdDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling usersIdDelete";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersIdPut operation.
     * @callback module:api/DefaultApi~usersIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Integer} id 
     * @param {module:model/User} body 
     * @param {module:api/DefaultApi~usersIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.usersIdPut = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling usersIdPut";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling usersIdPut";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/users/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersPost operation.
     * @callback module:api/DefaultApi~usersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/User} body 
     * @param {module:api/DefaultApi~usersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.usersPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling usersPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
