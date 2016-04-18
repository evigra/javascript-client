# Traccar.DefaultApi

All URIs are relative to *http://traccar.org/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commandsPost**](DefaultApi.md#commandsPost) | **POST** /commands | 
[**devicesGet**](DefaultApi.md#devicesGet) | **GET** /devices | 
[**devicesIdDelete**](DefaultApi.md#devicesIdDelete) | **DELETE** /devices/{id} | 
[**devicesIdPut**](DefaultApi.md#devicesIdPut) | **PUT** /devices/{id} | 
[**devicesPost**](DefaultApi.md#devicesPost) | **POST** /devices | 
[**permissionsDelete**](DefaultApi.md#permissionsDelete) | **DELETE** /permissions | 
[**permissionsPost**](DefaultApi.md#permissionsPost) | **POST** /permissions | 
[**positionsGet**](DefaultApi.md#positionsGet) | **GET** /positions | 
[**serverGet**](DefaultApi.md#serverGet) | **GET** /server | 
[**serverPut**](DefaultApi.md#serverPut) | **PUT** /server | 
[**sessionDelete**](DefaultApi.md#sessionDelete) | **DELETE** /session | 
[**sessionGet**](DefaultApi.md#sessionGet) | **GET** /session | 
[**sessionPost**](DefaultApi.md#sessionPost) | **POST** /session | 
[**usersGet**](DefaultApi.md#usersGet) | **GET** /users | 
[**usersIdDelete**](DefaultApi.md#usersIdDelete) | **DELETE** /users/{id} | 
[**usersIdPut**](DefaultApi.md#usersIdPut) | **PUT** /users/{id} | 
[**usersPost**](DefaultApi.md#usersPost) | **POST** /users | 


<a name="commandsPost"></a>
# **commandsPost**
> Command commandsPost(body)



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var body = new Traccar.Command(); // {Command} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.commandsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Command**](Command.md)|  | 

### Return type

[**Command**](Command.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="devicesGet"></a>
# **devicesGet**
> [Device] devicesGet(all, userId)



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var all = true; // {Boolean} 

var userId = 56; // {Integer} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.devicesGet(all, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **Boolean**|  | 
 **userId** | **Integer**|  | 

### Return type

[**[Device]**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="devicesIdDelete"></a>
# **devicesIdDelete**
> devicesIdDelete(id)



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var id = 56; // {Integer} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.devicesIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="devicesIdPut"></a>
# **devicesIdPut**
> Device devicesIdPut(id, body)



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var id = 56; // {Integer} 

var body = new Traccar.Device(); // {Device} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.devicesIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **body** | [**Device**](Device.md)|  | 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="devicesPost"></a>
# **devicesPost**
> Device devicesPost(body)



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var body = new Traccar.Device(); // {Device} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.devicesPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Device**](Device.md)|  | 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="permissionsDelete"></a>
# **permissionsDelete**
> permissionsDelete(body)



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var body = new Traccar.Permission(); // {Permission} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.permissionsDelete(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Permission**](Permission.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="permissionsPost"></a>
# **permissionsPost**
> Permission permissionsPost(body)



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var body = new Traccar.Permission(); // {Permission} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.permissionsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Permission**](Permission.md)|  | 

### Return type

[**Permission**](Permission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="positionsGet"></a>
# **positionsGet**
> [Position] positionsGet(deviceId, from, to)



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var deviceId = 56; // {Integer} 

var from = "from_example"; // {String} 

var to = "to_example"; // {String} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.positionsGet(deviceId, from, to, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **Integer**|  | 
 **from** | **String**|  | 
 **to** | **String**|  | 

### Return type

[**[Position]**](Position.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="serverGet"></a>
# **serverGet**
> Server serverGet



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.serverGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Server**](Server.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="serverPut"></a>
# **serverPut**
> Server serverPut(body)



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var body = new Traccar.Server(); // {Server} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.serverPut(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Server**](Server.md)|  | 

### Return type

[**Server**](Server.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sessionDelete"></a>
# **sessionDelete**
> sessionDelete



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.sessionDelete(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="sessionGet"></a>
# **sessionGet**
> User sessionGet



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.sessionGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="sessionPost"></a>
# **sessionPost**
> User sessionPost(email, password)



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var email = "email_example"; // {String} 

var password = "password_example"; // {String} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.sessionPost(email, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 
 **password** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="usersGet"></a>
# **usersGet**
> [Position] usersGet



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.usersGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Position]**](Position.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersIdDelete"></a>
# **usersIdDelete**
> usersIdDelete(id)



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var id = 56; // {Integer} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.usersIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersIdPut"></a>
# **usersIdPut**
> User usersIdPut(id, body)



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var id = 56; // {Integer} 

var body = new Traccar.User(); // {User} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.usersIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **body** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersPost"></a>
# **usersPost**
> User usersPost(body)



### Example
```javascript
var Traccar = require('traccar');

var apiInstance = new Traccar.DefaultApi()

var body = new Traccar.User(); // {User} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.usersPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

