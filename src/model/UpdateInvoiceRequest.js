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
var Invoice = require('./Invoice');




/**
 * The UpdateInvoiceRequest model module.
 * Note: This model is in beta.
 * @module model/UpdateInvoiceRequest
 */

/**
 * Constructs a new <code>UpdateInvoiceRequest</code>.
 * Describes a &#x60;UpdateInvoice&#x60; request.
 * @alias module:model/UpdateInvoiceRequest
 * @class
 * @param invoice {module:model/Invoice} The invoice fields to update.  The current invoice version must be specified in the `version` field. For more information, see [Update an invoice](https://developer.squareup.com/docs/docs/invoices-api/overview#update-an-invoice).
 */
var exports = function(invoice) {
  var _this = this;

  _this['invoice'] = invoice;


};

/**
 * Constructs a <code>UpdateInvoiceRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/UpdateInvoiceRequest} obj Optional instance to populate.
 * @return {module:model/UpdateInvoiceRequest} The populated <code>UpdateInvoiceRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('invoice')) {
      obj['invoice'] = Invoice.constructFromObject(data['invoice']);
    }
      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('fields_to_clear')) {
      obj['fields_to_clear'] = ApiClient.convertToType(data['fields_to_clear'], ['String']);
    }
    }
  return obj;
}

/**
 * The invoice fields to update.  The current invoice version must be specified in the `version` field. For more information, see [Update an invoice](https://developer.squareup.com/docs/docs/invoices-api/overview#update-an-invoice).
 * @member {module:model/Invoice} invoice
 */
exports.prototype['invoice'] = undefined;
/**
 * A unique string that identifies the `UpdateInvoice` request. If you do not provide `idempotency_key` (or provide an empty string as the value), the endpoint treats each request as independent.  For more information, see [Idempotency](https://developer.squareup.com/docs/docs/working-with-apis/idempotency).
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The list of fields to clear. For examples, see [Update an invoice](https://developer.squareup.com/docs/docs/invoices-api/overview#update-an-invoice).
 * @member {Array.<String>} fields_to_clear
 */
exports.prototype['fields_to_clear'] = undefined;



module.exports = exports;



