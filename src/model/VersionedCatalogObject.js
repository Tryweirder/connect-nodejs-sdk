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
 * The VersionedCatalogObject model module.
 * @module model/VersionedCatalogObject
 */

/**
 * Constructs a new <code>VersionedCatalogObject</code>.
 * A reference to a Catalog object at a specific version. In general this is used as an entry point into a graph of catalog objects, where the objects exist at a specific version.
 * @alias module:model/VersionedCatalogObject
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>VersionedCatalogObject</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/VersionedCatalogObject} obj Optional instance to populate.
 * @return {module:model/VersionedCatalogObject} The populated <code>VersionedCatalogObject</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('object_id')) {
      obj['object_id'] = ApiClient.convertToType(data['object_id'], 'String');
    }
      if (data.hasOwnProperty('catalog_version')) {
      obj['catalog_version'] = ApiClient.convertToType(data['catalog_version'], 'Number');
    }
    }
  return obj;
}

/**
 * The ID of the referenced object.
 * @member {String} object_id
 */
exports.prototype['object_id'] = undefined;
/**
 * The version of the object.
 * @member {Number} catalog_version
 */
exports.prototype['catalog_version'] = undefined;



module.exports = exports;



