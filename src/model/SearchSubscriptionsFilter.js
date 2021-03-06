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




/**
 * The SearchSubscriptionsFilter model module.
 * Note: This model is in beta.
 * @module model/SearchSubscriptionsFilter
 */

/**
 * Constructs a new <code>SearchSubscriptionsFilter</code>.
 * Represents a set of SearchSubscriptionsQuery filters used to limit the set of Subscriptions returned by SearchSubscriptions.
 * @alias module:model/SearchSubscriptionsFilter
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>SearchSubscriptionsFilter</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchSubscriptionsFilter} obj Optional instance to populate.
 * @return {module:model/SearchSubscriptionsFilter} The populated <code>SearchSubscriptionsFilter</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('customer_ids')) {
      obj['customer_ids'] = ApiClient.convertToType(data['customer_ids'], ['String']);
    }
      if (data.hasOwnProperty('location_ids')) {
      obj['location_ids'] = ApiClient.convertToType(data['location_ids'], ['String']);
    }
    }
  return obj;
}

/**
 * A filter to select subscriptions based on the customer.
 * @member {Array.<String>} customer_ids
 */
exports.prototype['customer_ids'] = undefined;
/**
 * A filter to select subscriptions based the location.
 * @member {Array.<String>} location_ids
 */
exports.prototype['location_ids'] = undefined;



module.exports = exports;



