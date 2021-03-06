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
var Error = require('./Error');
var TerminalRefund = require('./TerminalRefund');




/**
 * The SearchTerminalRefundsResponse model module.
 * Note: This model is in beta.
 * @module model/SearchTerminalRefundsResponse
 */

/**
 * Constructs a new <code>SearchTerminalRefundsResponse</code>.
 * 
 * @alias module:model/SearchTerminalRefundsResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>SearchTerminalRefundsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchTerminalRefundsResponse} obj Optional instance to populate.
 * @return {module:model/SearchTerminalRefundsResponse} The populated <code>SearchTerminalRefundsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('refunds')) {
      obj['refunds'] = ApiClient.convertToType(data['refunds'], [TerminalRefund]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * Information on errors encountered during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The requested search result of `TerminalRefund`s.
 * @member {Array.<module:model/TerminalRefund>} refunds
 */
exports.prototype['refunds'] = undefined;
/**
 * The pagination cursor to be used in a subsequent request. If empty, this is the final response.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



