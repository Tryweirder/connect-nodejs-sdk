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
var LoyaltyEventFilter = require('./LoyaltyEventFilter');




/**
 * The LoyaltyEventQuery model module.
 * Note: This model is in beta.
 * @module model/LoyaltyEventQuery
 */

/**
 * Constructs a new <code>LoyaltyEventQuery</code>.
 * Represents a query used to search for loyalty events.
 * @alias module:model/LoyaltyEventQuery
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>LoyaltyEventQuery</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/LoyaltyEventQuery} obj Optional instance to populate.
 * @return {module:model/LoyaltyEventQuery} The populated <code>LoyaltyEventQuery</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('filter')) {
      obj['filter'] = LoyaltyEventFilter.constructFromObject(data['filter']);
    }
    }
  return obj;
}

/**
 * The query filter criteria.
 * @member {module:model/LoyaltyEventFilter} filter
 */
exports.prototype['filter'] = undefined;



module.exports = exports;


