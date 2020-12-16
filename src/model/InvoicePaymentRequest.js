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
var InvoicePaymentReminder = require('./InvoicePaymentReminder');
var Money = require('./Money');




/**
 * The InvoicePaymentRequest model module.
 * Note: This model is in beta.
 * @module model/InvoicePaymentRequest
 */

/**
 * Constructs a new <code>InvoicePaymentRequest</code>.
 * Represents a payment request for an [invoice](#type-Invoice). Invoices can specify a maximum of 13 payment requests, with up to 12 &#x60;INSTALLMENT&#x60; request types.  For more information,  see [Payment requests](/docs/invoices-api/overview#payment-requests).
 * @alias module:model/InvoicePaymentRequest
 * @class
 */
var exports = function() {
  var _this = this;













};

/**
 * Constructs a <code>InvoicePaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/InvoicePaymentRequest} obj Optional instance to populate.
 * @return {module:model/InvoicePaymentRequest} The populated <code>InvoicePaymentRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
      obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
    }
      if (data.hasOwnProperty('request_method')) {
      obj['request_method'] = ApiClient.convertToType(data['request_method'], 'String');
    }
      if (data.hasOwnProperty('request_type')) {
      obj['request_type'] = ApiClient.convertToType(data['request_type'], 'String');
    }
      if (data.hasOwnProperty('due_date')) {
      obj['due_date'] = ApiClient.convertToType(data['due_date'], 'String');
    }
      if (data.hasOwnProperty('fixed_amount_requested_money')) {
      obj['fixed_amount_requested_money'] = Money.constructFromObject(data['fixed_amount_requested_money']);
    }
      if (data.hasOwnProperty('percentage_requested')) {
      obj['percentage_requested'] = ApiClient.convertToType(data['percentage_requested'], 'String');
    }
      if (data.hasOwnProperty('tipping_enabled')) {
      obj['tipping_enabled'] = ApiClient.convertToType(data['tipping_enabled'], 'Boolean');
    }
      if (data.hasOwnProperty('card_id')) {
      obj['card_id'] = ApiClient.convertToType(data['card_id'], 'String');
    }
      if (data.hasOwnProperty('reminders')) {
      obj['reminders'] = ApiClient.convertToType(data['reminders'], [InvoicePaymentReminder]);
    }
      if (data.hasOwnProperty('computed_amount_money')) {
      obj['computed_amount_money'] = Money.constructFromObject(data['computed_amount_money']);
    }
      if (data.hasOwnProperty('total_completed_amount_money')) {
      obj['total_completed_amount_money'] = Money.constructFromObject(data['total_completed_amount_money']);
    }
      if (data.hasOwnProperty('rounding_adjustment_included_money')) {
      obj['rounding_adjustment_included_money'] = Money.constructFromObject(data['rounding_adjustment_included_money']);
    }
    }
  return obj;
}

/**
 * The Square-generated ID of the payment request in an `invoice`.
 * @member {String} uid
 */
exports.prototype['uid'] = undefined;
/**
 * Indicates how Square processes the payment request. See [InvoiceRequestMethod](#type-invoicerequestmethod) for possible values
 * @member {String} request_method
 */
exports.prototype['request_method'] = undefined;
/**
 * Identifies the payment request type. This type defines how the payment request amount is determined. See [InvoiceRequestType](#type-invoicerequesttype) for possible values
 * @member {String} request_type
 */
exports.prototype['request_type'] = undefined;
/**
 * The due date (in the invoice location's time zone) for the payment request.  After this date, the invoice becomes overdue.
 * @member {String} due_date
 */
exports.prototype['due_date'] = undefined;
/**
 * If the payment request specifies `DEPOSIT` or `INSTALLMENT` as the  `request_type`,  this indicates the request amount. You cannot specify this when `request_type` is `BALANCE` or when the  payment request includes the `percentage_requested` field.
 * @member {module:model/Money} fixed_amount_requested_money
 */
exports.prototype['fixed_amount_requested_money'] = undefined;
/**
 * Specifies the amount for the payment request in percentage:  - When the payment `request_type` is `DEPOSIT`, it is the percentage of the order total amount. - When the payment `request_type` is `INSTALLMENT`, it is the percentage of the order total less  the deposit, if requested. The sum of the `percentage_requested` in all installment  payment requests must be equal to 100.  You cannot specify this when the payment `request_type` is `BALANCE` or when the  payment request specifies the `fixed_amount_requested_money` field.
 * @member {String} percentage_requested
 */
exports.prototype['percentage_requested'] = undefined;
/**
 * If set to true, the Square-hosted invoice page (the `public_url` field of the invoice)  provides a place for the customer to pay a tip.   This field is allowed only on the final payment request   and the payment `request_type` must be `BALANCE` or `INSTALLMENT`.
 * @member {Boolean} tipping_enabled
 */
exports.prototype['tipping_enabled'] = undefined;
/**
 * The ID of the card on file to charge for the payment request. To get the customer’s card on file, use the `customer_id` of the invoice recipient to call `RetrieveCustomer` in the Customers API. Then, get the ID of the target card from the `cards` field in the response.
 * @member {String} card_id
 */
exports.prototype['card_id'] = undefined;
/**
 * A list of one or more reminders to send for the payment request.
 * @member {Array.<module:model/InvoicePaymentReminder>} reminders
 */
exports.prototype['reminders'] = undefined;
/**
 * The amount of the payment request, computed using the order amount and information from the various payment request fields (`request_type`,  `fixed_amount_requested_money`, and `percentage_requested`).
 * @member {module:model/Money} computed_amount_money
 */
exports.prototype['computed_amount_money'] = undefined;
/**
 * The amount of money already paid for the specific payment request.  This amount might include a rounding adjustment if the most recent invoice payment  was in cash in a currency that rounds cash payments (such as, `CAD` or `AUD`).
 * @member {module:model/Money} total_completed_amount_money
 */
exports.prototype['total_completed_amount_money'] = undefined;
/**
 * If the most recent payment was a cash payment  in a currency that rounds cash payments (such as, `CAD` or `AUD`) and the payment  is rounded from `computed_amount_money` in the payment request, then this  field specifies the rounding adjustment applied. This amount  might be negative.
 * @member {module:model/Money} rounding_adjustment_included_money
 */
exports.prototype['rounding_adjustment_included_money'] = undefined;



module.exports = exports;



