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
 * The CatalogPricingRule model module.
 * @module model/CatalogPricingRule
 */

/**
 * Constructs a new <code>CatalogPricingRule</code>.
 * Defines how discounts are automatically applied to a set of items that match the pricing rule during the active time period.
 * @alias module:model/CatalogPricingRule
 * @class
 */
var exports = function() {
  var _this = this;












};

/**
 * Constructs a <code>CatalogPricingRule</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogPricingRule} obj Optional instance to populate.
 * @return {module:model/CatalogPricingRule} The populated <code>CatalogPricingRule</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('time_period_ids')) {
      obj['time_period_ids'] = ApiClient.convertToType(data['time_period_ids'], ['String']);
    }
      if (data.hasOwnProperty('discount_id')) {
      obj['discount_id'] = ApiClient.convertToType(data['discount_id'], 'String');
    }
      if (data.hasOwnProperty('match_products_id')) {
      obj['match_products_id'] = ApiClient.convertToType(data['match_products_id'], 'String');
    }
      if (data.hasOwnProperty('apply_products_id')) {
      obj['apply_products_id'] = ApiClient.convertToType(data['apply_products_id'], 'String');
    }
      if (data.hasOwnProperty('exclude_products_id')) {
      obj['exclude_products_id'] = ApiClient.convertToType(data['exclude_products_id'], 'String');
    }
      if (data.hasOwnProperty('valid_from_date')) {
      obj['valid_from_date'] = ApiClient.convertToType(data['valid_from_date'], 'String');
    }
      if (data.hasOwnProperty('valid_from_local_time')) {
      obj['valid_from_local_time'] = ApiClient.convertToType(data['valid_from_local_time'], 'String');
    }
      if (data.hasOwnProperty('valid_until_date')) {
      obj['valid_until_date'] = ApiClient.convertToType(data['valid_until_date'], 'String');
    }
      if (data.hasOwnProperty('valid_until_local_time')) {
      obj['valid_until_local_time'] = ApiClient.convertToType(data['valid_until_local_time'], 'String');
    }
      if (data.hasOwnProperty('exclude_strategy')) {
      obj['exclude_strategy'] = ApiClient.convertToType(data['exclude_strategy'], 'String');
    }
    }
  return obj;
}

/**
 * User-defined name for the pricing rule. For example, \"Buy one get one free\" or \"10% off\".
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * A list of unique IDs for the catalog time periods when this pricing rule is in effect. If left unset, the pricing rule is always in effect.
 * @member {Array.<String>} time_period_ids
 */
exports.prototype['time_period_ids'] = undefined;
/**
 * Unique ID for the `CatalogDiscount` to take off the price of all matched items.
 * @member {String} discount_id
 */
exports.prototype['discount_id'] = undefined;
/**
 * Unique ID for the `CatalogProductSet` that will be matched by this rule. A match rule matches within the entire cart, and can match multiple times. This field will always be set.
 * @member {String} match_products_id
 */
exports.prototype['match_products_id'] = undefined;
/**
 * __Deprecated__: Please use the `exclude_products_id` field to apply an exclude set instead. Exclude sets allow better control over quantity ranges and offer more flexibility for which matched items receive a discount.  `CatalogProductSet` to apply the pricing to. An apply rule matches within the subset of the cart that fits the match rules (the match set). An apply rule can only match once in the match set. If not supplied, the pricing will be applied to all products in the match set. Other products retain their base price, or a price generated by other rules.
 * @member {String} apply_products_id
 */
exports.prototype['apply_products_id'] = undefined;
/**
 * `CatalogProductSet` to exclude from the pricing rule. An exclude rule matches within the subset of the cart that fits the match rules (the match set). An exclude rule can only match once in the match set. If not supplied, the pricing will be applied to all products in the match set. Other products retain their base price, or a price generated by other rules.
 * @member {String} exclude_products_id
 */
exports.prototype['exclude_products_id'] = undefined;
/**
 * Represents the date the Pricing Rule is valid from. Represented in RFC 3339 full-date format (YYYY-MM-DD).
 * @member {String} valid_from_date
 */
exports.prototype['valid_from_date'] = undefined;
/**
 * Represents the local time the pricing rule should be valid from. Represented in RFC 3339 partial-time format (HH:MM:SS). Partial seconds will be truncated.
 * @member {String} valid_from_local_time
 */
exports.prototype['valid_from_local_time'] = undefined;
/**
 * Represents the date the Pricing Rule is valid until. Represented in RFC 3339 full-date format (YYYY-MM-DD).
 * @member {String} valid_until_date
 */
exports.prototype['valid_until_date'] = undefined;
/**
 * Represents the local time the pricing rule should be valid until. Represented in RFC 3339 partial-time format (HH:MM:SS). Partial seconds will be truncated.
 * @member {String} valid_until_local_time
 */
exports.prototype['valid_until_local_time'] = undefined;
/**
 * If an `exclude_products_id` was given, controls which subset of matched products is excluded from any discounts.  Default value: `LEAST_EXPENSIVE` See [ExcludeStrategy](#type-excludestrategy) for possible values
 * @member {String} exclude_strategy
 */
exports.prototype['exclude_strategy'] = undefined;



module.exports = exports;



