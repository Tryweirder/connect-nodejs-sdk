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
 * The DeleteBreakTypeResponse model module.
 * @module model/DeleteBreakTypeResponse
 */

/**
 * Constructs a new <code>DeleteBreakTypeResponse</code>.
 * The response to a request to delete a &#x60;BreakType&#x60;. May contain a set  of &#x60;Error&#x60; objects if the request resulted in errors.
 * @alias module:model/DeleteBreakTypeResponse
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>DeleteBreakTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/DeleteBreakTypeResponse} obj Optional instance to populate.
 * @return {module:model/DeleteBreakTypeResponse} The populated <code>DeleteBreakTypeResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;



