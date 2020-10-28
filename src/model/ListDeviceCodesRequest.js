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
 * The ListDeviceCodesRequest model module.
 * @module model/ListDeviceCodesRequest
 */

/**
 * Constructs a new <code>ListDeviceCodesRequest</code>.
 * 
 * @alias module:model/ListDeviceCodesRequest
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>ListDeviceCodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListDeviceCodesRequest} obj Optional instance to populate.
 * @return {module:model/ListDeviceCodesRequest} The populated <code>ListDeviceCodesRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('product_type')) {
      obj['product_type'] = ApiClient.convertToType(data['product_type'], 'String');
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], ['String']);
    }
    }
  return obj;
}

/**
 * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;
/**
 * If specified, only returns DeviceCodes of the specified location. Returns DeviceCodes of all locations if empty.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * If specified, only returns DeviceCodes targeting the specified product type. Returns DeviceCodes of all product types if empty. See [ProductType](#type-producttype) for possible values
 * @member {String} product_type
 */
exports.prototype['product_type'] = undefined;
/**
 * If specified, returns DeviceCodes with the specified statuses. Returns DeviceCodes of status `PAIRED` and `UNPAIRED` if empty. See [DeviceCodeStatus](#type-devicecodestatus) for possible values
 * @member {Array.<String>} status
 */
exports.prototype['status'] = undefined;



module.exports = exports;



