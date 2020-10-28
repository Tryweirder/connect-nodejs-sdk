/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var Error = require('./Error');




/**
 * The DeleteCatalogObjectResponse model module.
 * @module model/DeleteCatalogObjectResponse
 */

/**
 * Constructs a new <code>DeleteCatalogObjectResponse</code>.
 * 
 * @alias module:model/DeleteCatalogObjectResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>DeleteCatalogObjectResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/DeleteCatalogObjectResponse} obj Optional instance to populate.
 * @return {module:model/DeleteCatalogObjectResponse} The populated <code>DeleteCatalogObjectResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('deleted_object_ids')) {
      obj['deleted_object_ids'] = ApiClient.convertToType(data['deleted_object_ids'], ['String']);
    }
      if (data.hasOwnProperty('deleted_at')) {
      obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The IDs of all catalog objects deleted by this request. Multiple IDs may be returned when associated objects are also deleted, for example a catalog item variation will be deleted (and its ID included in this field) when its parent catalog item is deleted.
 * @member {Array.<String>} deleted_object_ids
 */
exports.prototype['deleted_object_ids'] = undefined;
/**
 * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this deletion in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`.
 * @member {String} deleted_at
 */
exports.prototype['deleted_at'] = undefined;



module.exports = exports;



