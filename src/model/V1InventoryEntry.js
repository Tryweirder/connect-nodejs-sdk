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
 * The V1InventoryEntry model module.
 * @module model/V1InventoryEntry
 */

/**
 * Constructs a new <code>V1InventoryEntry</code>.
 * V1InventoryEntry
 * @alias module:model/V1InventoryEntry
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>V1InventoryEntry</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1InventoryEntry} obj Optional instance to populate.
 * @return {module:model/V1InventoryEntry} The populated <code>V1InventoryEntry</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('variation_id')) {
      obj['variation_id'] = ApiClient.convertToType(data['variation_id'], 'String');
    }
      if (data.hasOwnProperty('quantity_on_hand')) {
      obj['quantity_on_hand'] = ApiClient.convertToType(data['quantity_on_hand'], 'Number');
    }
    }
  return obj;
}

/**
 * The variation that the entry corresponds to.
 * @member {String} variation_id
 */
exports.prototype['variation_id'] = undefined;
/**
 * The current available quantity of the item variation.
 * @member {Number} quantity_on_hand
 */
exports.prototype['quantity_on_hand'] = undefined;



module.exports = exports;



