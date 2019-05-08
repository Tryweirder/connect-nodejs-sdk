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
var Employee = require('./Employee');
var Error = require('./Error');




/**
 * The ListEmployeesResponse model module.
 * @module model/ListEmployeesResponse
 */

/**
 * Constructs a new <code>ListEmployeesResponse</code>.
 * Defines the fields that are included in the response body of a request to the ListEmployees endpoint.  One of &#x60;errors&#x60; or &#x60;employees&#x60; is present in a given response (never both).
 * @alias module:model/ListEmployeesResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>ListEmployeesResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListEmployeesResponse} obj Optional instance to populate.
 * @return {module:model/ListEmployeesResponse} The populated <code>ListEmployeesResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('employees')) {
      obj['employees'] = ApiClient.convertToType(data['employees'], [Employee]);
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
 * List of employees returned from the request.
 * @member {Array.<module:model/Employee>} employees
 */
exports.prototype['employees'] = undefined;
/**
 * The token to be used to retrieve the next page of results.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;
/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;


