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
var AdditionalRecipient = require('./AdditionalRecipient');
var Address = require('./Address');
var Money = require('./Money');




/**
 * The ChargeRequest model module.
 * @module model/ChargeRequest
 * @version 2.5.5
 */

/**
 * Constructs a new <code>ChargeRequest</code>.
 * Defines the parameters that can be included in the body of a request to the [Charge](#endpoint-charge) endpoint.
 * @alias module:model/ChargeRequest
 * @class
 * @param idempotencyKey {String} A value you specify that uniquely identifies this transaction among transactions you've created.  If you're unsure whether a particular transaction succeeded, you can reattempt it with the same idempotency key without worrying about double-charging the buyer.  See [Idempotency keys](#idempotencykeys) for more information.
 * @param amountMoney {module:model/Money} The amount of money to charge.  Note that you specify the amount in the __smallest denomination of the applicable currency__. For example, US dollar amounts are specified in cents. See [Working with monetary amounts](#workingwithmonetaryamounts) for details.  The value of `currency` must match the currency associated with the business that is charging the card.
 */
var exports = function(idempotencyKey, amountMoney) {
  var _this = this;

  _this['idempotency_key'] = idempotencyKey;
  _this['amount_money'] = amountMoney;











};

/**
 * Constructs a <code>ChargeRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ChargeRequest} obj Optional instance to populate.
 * @return {module:model/ChargeRequest} The populated <code>ChargeRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('card_nonce')) {
      obj['card_nonce'] = ApiClient.convertToType(data['card_nonce'], 'String');
    }
      if (data.hasOwnProperty('customer_card_id')) {
      obj['customer_card_id'] = ApiClient.convertToType(data['customer_card_id'], 'String');
    }
      if (data.hasOwnProperty('delay_capture')) {
      obj['delay_capture'] = ApiClient.convertToType(data['delay_capture'], 'Boolean');
    }
      if (data.hasOwnProperty('reference_id')) {
      obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
    }
      if (data.hasOwnProperty('note')) {
      obj['note'] = ApiClient.convertToType(data['note'], 'String');
    }
      if (data.hasOwnProperty('customer_id')) {
      obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
    }
      if (data.hasOwnProperty('billing_address')) {
      obj['billing_address'] = Address.constructFromObject(data['billing_address']);
    }
      if (data.hasOwnProperty('shipping_address')) {
      obj['shipping_address'] = Address.constructFromObject(data['shipping_address']);
    }
      if (data.hasOwnProperty('buyer_email_address')) {
      obj['buyer_email_address'] = ApiClient.convertToType(data['buyer_email_address'], 'String');
    }
      if (data.hasOwnProperty('order_id')) {
      obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
    }
      if (data.hasOwnProperty('additional_recipients')) {
      obj['additional_recipients'] = ApiClient.convertToType(data['additional_recipients'], [AdditionalRecipient]);
    }
    }
  return obj;
}

/**
 * A value you specify that uniquely identifies this transaction among transactions you've created.  If you're unsure whether a particular transaction succeeded, you can reattempt it with the same idempotency key without worrying about double-charging the buyer.  See [Idempotency keys](#idempotencykeys) for more information.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The amount of money to charge.  Note that you specify the amount in the __smallest denomination of the applicable currency__. For example, US dollar amounts are specified in cents. See [Working with monetary amounts](#workingwithmonetaryamounts) for details.  The value of `currency` must match the currency associated with the business that is charging the card.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * A nonce generated from the `SqPaymentForm` that represents the card to charge.  The application that provides a nonce to this endpoint must be the _same application_ that generated the nonce with the `SqPaymentForm`. Otherwise, the nonce is invalid.  Do not provide a value for this field if you provide a value for `customer_card_id`.
 * @member {String} card_nonce
 */
exports.prototype['card_nonce'] = undefined;
/**
 * The ID of the customer card on file to charge. Do not provide a value for this field if you provide a value for `card_nonce`.  If you provide this value, you _must_ also provide a value for `customer_id`.
 * @member {String} customer_card_id
 */
exports.prototype['customer_card_id'] = undefined;
/**
 * If `true`, the request will only perform an Auth on the provided card. You can then later perform either a Capture (with the [CaptureTransaction](#endpoint-capturetransaction) endpoint) or a Void (with the [VoidTransaction](#endpoint-voidtransaction) endpoint).  Default value: `false`
 * @member {Boolean} delay_capture
 */
exports.prototype['delay_capture'] = undefined;
/**
 * An optional ID you can associate with the transaction for your own purposes (such as to associate the transaction with an entity ID in your own database).  This value cannot exceed 40 characters.
 * @member {String} reference_id
 */
exports.prototype['reference_id'] = undefined;
/**
 * An optional note to associate with the transaction.  This value cannot exceed 60 characters.
 * @member {String} note
 */
exports.prototype['note'] = undefined;
/**
 * The ID of the customer to associate this transaction with. This field is required if you provide a value for `customer_card_id`, and optional otherwise.
 * @member {String} customer_id
 */
exports.prototype['customer_id'] = undefined;
/**
 * The buyer's billing address. This value is optional, but this transaction is ineligible for chargeback protection if neither this parameter nor `shipping_address` is provided.
 * @member {module:model/Address} billing_address
 */
exports.prototype['billing_address'] = undefined;
/**
 * The buyer's shipping address, if available. This value is optional, but this transaction is ineligible for chargeback protection if neither this parameter nor `billing_address` is provided.
 * @member {module:model/Address} shipping_address
 */
exports.prototype['shipping_address'] = undefined;
/**
 * The buyer's email address, if available. This value is optional, but this transaction is ineligible for chargeback protection if it is not provided.
 * @member {String} buyer_email_address
 */
exports.prototype['buyer_email_address'] = undefined;
/**
 * The ID of the order to associate with this transaction.  If you provide this value, the `amount_money` value of your request must __exactly match__ the `total_money` value of the order's `order_amounts` field.
 * @member {String} order_id
 */
exports.prototype['order_id'] = undefined;
/**
 * The basic primitive of multi-party transaction. The value is optional. The transaction facilitated by you can be split from here.  If you provide this value, the `amount_money` value in your additional_recipients must not be more than 90% of the `amount_money` value in you charge's request. The `location_id` must be the valid location of the app owner merchant.  This field requires `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission.  This field is currently not supported in sandbox.
 * @member {Array.<module:model/AdditionalRecipient>} additional_recipients
 */
exports.prototype['additional_recipients'] = undefined;



module.exports = exports;



