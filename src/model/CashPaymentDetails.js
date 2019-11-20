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
var Money = require('./Money');




/**
 * The CashPaymentDetails model module.
 * @module model/CashPaymentDetails
 */

/**
 * Constructs a new <code>CashPaymentDetails</code>.
 * Additional details about CASH type payments.
 * @alias module:model/CashPaymentDetails
 * @class
 * @param buyerSuppliedMoney {module:model/Money} The amount and currency of the money supplied by the buyer.
 */
var exports = function(buyerSuppliedMoney) {
  var _this = this;

  _this['buyer_supplied_money'] = buyerSuppliedMoney;

};

/**
 * Constructs a <code>CashPaymentDetails</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CashPaymentDetails} obj Optional instance to populate.
 * @return {module:model/CashPaymentDetails} The populated <code>CashPaymentDetails</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('buyer_supplied_money')) {
      obj['buyer_supplied_money'] = Money.constructFromObject(data['buyer_supplied_money']);
    }
      if (data.hasOwnProperty('change_back_money')) {
      obj['change_back_money'] = Money.constructFromObject(data['change_back_money']);
    }
    }
  return obj;
}

/**
 * The amount and currency of the money supplied by the buyer.
 * @member {module:model/Money} buyer_supplied_money
 */
exports.prototype['buyer_supplied_money'] = undefined;
/**
 * The amount of change due back to the buyer. Read Only field calculated from the amount_money and buyer_supplied_money fields.
 * @member {module:model/Money} change_back_money
 */
exports.prototype['change_back_money'] = undefined;



module.exports = exports;



