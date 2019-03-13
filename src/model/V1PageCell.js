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
 * The V1PageCell model module.
 * @module model/V1PageCell
 */

/**
 * Constructs a new <code>V1PageCell</code>.
 * V1PageCell
 * @alias module:model/V1PageCell
 * @class
 */
var exports = function() {
  var _this = this;







};

/**
 * Constructs a <code>V1PageCell</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1PageCell} obj Optional instance to populate.
 * @return {module:model/V1PageCell} The populated <code>V1PageCell</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('page_id')) {
      obj['page_id'] = ApiClient.convertToType(data['page_id'], 'String');
    }
      if (data.hasOwnProperty('row')) {
      obj['row'] = ApiClient.convertToType(data['row'], 'Number');
    }
      if (data.hasOwnProperty('column')) {
      obj['column'] = ApiClient.convertToType(data['column'], 'Number');
    }
      if (data.hasOwnProperty('object_type')) {
      obj['object_type'] = ApiClient.convertToType(data['object_type'], 'String');
    }
      if (data.hasOwnProperty('object_id')) {
      obj['object_id'] = ApiClient.convertToType(data['object_id'], 'String');
    }
      if (data.hasOwnProperty('placeholder_type')) {
      obj['placeholder_type'] = ApiClient.convertToType(data['placeholder_type'], 'String');
    }
    }
  return obj;
}

/**
 * The unique identifier of the page the cell is included on.
 * @member {String} page_id
 */
exports.prototype['page_id'] = undefined;
/**
 * The row of the cell. Always an integer between 0 and 4, inclusive.
 * @member {Number} row
 */
exports.prototype['row'] = undefined;
/**
 * The column of the cell. Always an integer between 0 and 4, inclusive.
 * @member {Number} column
 */
exports.prototype['column'] = undefined;
/**
 * The type of entity represented in the cell (ITEM, DISCOUNT, CATEGORY, or PLACEHOLDER). See [V1PageCellObjectType](#type-v1pagecellobjecttype) for possible values
 * @member {module:model/V1PageCell.ObjectTypeEnum} object_type
 */
exports.prototype['object_type'] = undefined;
/**
 * The unique identifier of the entity represented in the cell. Not present for cells with an object_type of PLACEHOLDER.
 * @member {String} object_id
 */
exports.prototype['object_id'] = undefined;
/**
 * For a cell with an object_type of PLACEHOLDER, this value indicates the cell's special behavior. See [V1PageCellPlaceholderType](#type-v1pagecellplaceholdertype) for possible values
 * @member {module:model/V1PageCell.PlaceholderTypeEnum} placeholder_type
 */
exports.prototype['placeholder_type'] = undefined;


  /**
   * Allowed values for the <code>object_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectTypeEnum = {
    /**
     * value: "ITEM"
     * @const
     */
    "ITEM": "ITEM",
    /**
     * value: "DISCOUNT"
     * @const
     */
    "DISCOUNT": "DISCOUNT",
    /**
     * value: "CATEGORY"
     * @const
     */
    "CATEGORY": "CATEGORY",
    /**
     * value: "PLACEHOLDER"
     * @const
     */
    "PLACEHOLDER": "PLACEHOLDER"  };

  /**
   * Allowed values for the <code>placeholder_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PlaceholderTypeEnum = {
    /**
     * value: "ALL_ITEMS"
     * @const
     */
    "ALL_ITEMS": "ALL_ITEMS",
    /**
     * value: "DISCOUNTS_CATEGORY"
     * @const
     */
    "DISCOUNTS_CATEGORY": "DISCOUNTS_CATEGORY",
    /**
     * value: "REWARDS_FINDER"
     * @const
     */
    "REWARDS_FINDER": "REWARDS_FINDER"  };


module.exports = exports;



