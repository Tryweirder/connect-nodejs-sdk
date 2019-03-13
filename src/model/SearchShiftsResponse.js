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
var Shift = require('./Shift');




/**
 * The SearchShiftsResponse model module.
 * @module model/SearchShiftsResponse
 */

/**
 * Constructs a new <code>SearchShiftsResponse</code>.
 * The response to a request for &#x60;Shift&#x60; objects. Contains the requested &#x60;Shift&#x60; objects. May contain a set of &#x60;Error&#x60; objects if the request resulted in errors.
 * @alias module:model/SearchShiftsResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>SearchShiftsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchShiftsResponse} obj Optional instance to populate.
 * @return {module:model/SearchShiftsResponse} The populated <code>SearchShiftsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('shifts')) {
      obj['shifts'] = ApiClient.convertToType(data['shifts'], [Shift]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * Shifts
 * @member {Array.<module:model/Shift>} shifts
 */
exports.prototype['shifts'] = undefined;
/**
 * Opaque cursor for fetching the next page.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;
/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;



