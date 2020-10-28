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
var TerminalRefund = require('./TerminalRefund');




/**
 * The CreateTerminalRefundRequest model module.
 * Note: This model is in beta.
 * @module model/CreateTerminalRefundRequest
 */

/**
 * Constructs a new <code>CreateTerminalRefundRequest</code>.
 * 
 * @alias module:model/CreateTerminalRefundRequest
 * @class
 * @param idempotencyKey {String} A unique string that identifies this `CreateRefund` request. Keys can be any valid string but must be unique for every `CreateRefund` request.  See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
 */
var exports = function(idempotencyKey) {
  var _this = this;

  _this['idempotency_key'] = idempotencyKey;

};

/**
 * Constructs a <code>CreateTerminalRefundRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateTerminalRefundRequest} obj Optional instance to populate.
 * @return {module:model/CreateTerminalRefundRequest} The populated <code>CreateTerminalRefundRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('refund')) {
      obj['refund'] = TerminalRefund.constructFromObject(data['refund']);
    }
    }
  return obj;
}

/**
 * A unique string that identifies this `CreateRefund` request. Keys can be any valid string but must be unique for every `CreateRefund` request.  See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The refund to create.
 * @member {module:model/TerminalRefund} refund
 */
exports.prototype['refund'] = undefined;



module.exports = exports;



