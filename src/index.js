(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Command', './model/Device', './model/Permission', './model/Position', './model/Server', './model/User', './api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Command'), require('./model/Device'), require('./model/Permission'), require('./model/Position'), require('./model/Server'), require('./model/User'), require('./api/DefaultApi'));
  }
}(function(ApiClient, Command, Device, Permission, Position, Server, User, DefaultApi) {
  'use strict';

  /**
   * Client library of traccar.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Traccar = require('./index'); // See note below*.
   * var xxxSvc = new Traccar.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Traccar.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Traccar.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Traccar.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 3.3
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Command model constructor.
     * @property {module:model/Command}
     */
    Command: Command,
    /**
     * The Device model constructor.
     * @property {module:model/Device}
     */
    Device: Device,
    /**
     * The Permission model constructor.
     * @property {module:model/Permission}
     */
    Permission: Permission,
    /**
     * The Position model constructor.
     * @property {module:model/Position}
     */
    Position: Position,
    /**
     * The Server model constructor.
     * @property {module:model/Server}
     */
    Server: Server,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
