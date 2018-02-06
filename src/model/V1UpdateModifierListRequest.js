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
 * The V1UpdateModifierListRequest model module.
 * @module model/V1UpdateModifierListRequest
 * @version 2.5.5
 */

/**
 * Constructs a new <code>V1UpdateModifierListRequest</code>.
 * @alias module:model/V1UpdateModifierListRequest
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>V1UpdateModifierListRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1UpdateModifierListRequest} obj Optional instance to populate.
 * @return {module:model/V1UpdateModifierListRequest} The populated <code>V1UpdateModifierListRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('selection_type')) {
      obj['selection_type'] = ApiClient.convertToType(data['selection_type'], 'String');
    }
    }
  return obj;
}

/**
 * The modifier list's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * Indicates whether multiple options from the modifier list can be applied to a single item.
 * @member {module:model/V1UpdateModifierListRequest.SelectionTypeEnum} selection_type
 */
exports.prototype['selection_type'] = undefined;


  /**
   * Allowed values for the <code>selection_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SelectionTypeEnum = {
    /**
     * value: "SINGLE"
     * @const
     */
    "SINGLE": "SINGLE",
    /**
     * value: "MULTIPLE"
     * @const
     */
    "MULTIPLE": "MULTIPLE"  };


module.exports = exports;



