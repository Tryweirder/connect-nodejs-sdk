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
var OrderLineItemPricingBlocklistsBlockedDiscount = require('./OrderLineItemPricingBlocklistsBlockedDiscount');
var OrderLineItemPricingBlocklistsBlockedTax = require('./OrderLineItemPricingBlocklistsBlockedTax');




/**
 * The OrderLineItemPricingBlocklists model module.
 * Note: This model is in beta.
 * @module model/OrderLineItemPricingBlocklists
 */

/**
 * Constructs a new <code>OrderLineItemPricingBlocklists</code>.
 * Describes pricing adjustments that are blocked from manual and  automatic application to a line item. For more information, see  [Apply Taxes and Discounts](/docs/orders-api/apply-taxes-and-discounts).
 * @alias module:model/OrderLineItemPricingBlocklists
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>OrderLineItemPricingBlocklists</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderLineItemPricingBlocklists} obj Optional instance to populate.
 * @return {module:model/OrderLineItemPricingBlocklists} The populated <code>OrderLineItemPricingBlocklists</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('blocked_discounts')) {
      obj['blocked_discounts'] = ApiClient.convertToType(data['blocked_discounts'], [OrderLineItemPricingBlocklistsBlockedDiscount]);
    }
      if (data.hasOwnProperty('blocked_taxes')) {
      obj['blocked_taxes'] = ApiClient.convertToType(data['blocked_taxes'], [OrderLineItemPricingBlocklistsBlockedTax]);
    }
    }
  return obj;
}

/**
 * A list of discounts blocked from applying to the line item.  Discounts can be blocked by the `discount_uid` (for ad-hoc discounts) or  the `discount_catalog_object_id` (for catalog discounts).
 * @member {Array.<module:model/OrderLineItemPricingBlocklistsBlockedDiscount>} blocked_discounts
 */
exports.prototype['blocked_discounts'] = undefined;
/**
 * A list of taxes blocked from applying to the line item.  Taxes can be blocked by the `tax_uid` (for ad-hoc taxes) or  the `tax_catalog_object_id` (for catalog taxes).
 * @member {Array.<module:model/OrderLineItemPricingBlocklistsBlockedTax>} blocked_taxes
 */
exports.prototype['blocked_taxes'] = undefined;



module.exports = exports;



