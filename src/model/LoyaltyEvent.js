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
var LoyaltyEventAccumulatePoints = require('./LoyaltyEventAccumulatePoints');
var LoyaltyEventAdjustPoints = require('./LoyaltyEventAdjustPoints');
var LoyaltyEventCreateReward = require('./LoyaltyEventCreateReward');
var LoyaltyEventDeleteReward = require('./LoyaltyEventDeleteReward');
var LoyaltyEventExpirePoints = require('./LoyaltyEventExpirePoints');
var LoyaltyEventOther = require('./LoyaltyEventOther');
var LoyaltyEventRedeemReward = require('./LoyaltyEventRedeemReward');




/**
 * The LoyaltyEvent model module.
 * Note: This model is in beta.
 * @module model/LoyaltyEvent
 */

/**
 * Constructs a new <code>LoyaltyEvent</code>.
 * Provides information about a loyalty event.  For more information, see [Loyalty events](/docs/loyalty-api/overview/#loyalty-events).
 * @alias module:model/LoyaltyEvent
 * @class
 * @param id {String} The Square-assigned ID of the loyalty event.
 * @param type {String} The type of the loyalty event. See [LoyaltyEventType](#type-loyaltyeventtype) for possible values
 * @param createdAt {String} The timestamp when the event was created, in RFC 3339 format.
 * @param loyaltyAccountId {String} The ID of the `loyalty account` in which the event occurred.
 * @param source {String} Defines whether the event was generated by the Square Point of Sale. See [LoyaltyEventSource](#type-loyaltyeventsource) for possible values
 */
var exports = function(id, type, createdAt, loyaltyAccountId, source) {
  var _this = this;

  _this['id'] = id;
  _this['type'] = type;
  _this['created_at'] = createdAt;





  _this['loyalty_account_id'] = loyaltyAccountId;

  _this['source'] = source;


};

/**
 * Constructs a <code>LoyaltyEvent</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/LoyaltyEvent} obj Optional instance to populate.
 * @return {module:model/LoyaltyEvent} The populated <code>LoyaltyEvent</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('accumulate_points')) {
      obj['accumulate_points'] = LoyaltyEventAccumulatePoints.constructFromObject(data['accumulate_points']);
    }
      if (data.hasOwnProperty('create_reward')) {
      obj['create_reward'] = LoyaltyEventCreateReward.constructFromObject(data['create_reward']);
    }
      if (data.hasOwnProperty('redeem_reward')) {
      obj['redeem_reward'] = LoyaltyEventRedeemReward.constructFromObject(data['redeem_reward']);
    }
      if (data.hasOwnProperty('delete_reward')) {
      obj['delete_reward'] = LoyaltyEventDeleteReward.constructFromObject(data['delete_reward']);
    }
      if (data.hasOwnProperty('adjust_points')) {
      obj['adjust_points'] = LoyaltyEventAdjustPoints.constructFromObject(data['adjust_points']);
    }
      if (data.hasOwnProperty('loyalty_account_id')) {
      obj['loyalty_account_id'] = ApiClient.convertToType(data['loyalty_account_id'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('source')) {
      obj['source'] = ApiClient.convertToType(data['source'], 'String');
    }
      if (data.hasOwnProperty('expire_points')) {
      obj['expire_points'] = LoyaltyEventExpirePoints.constructFromObject(data['expire_points']);
    }
      if (data.hasOwnProperty('other_event')) {
      obj['other_event'] = LoyaltyEventOther.constructFromObject(data['other_event']);
    }
    }
  return obj;
}

/**
 * The Square-assigned ID of the loyalty event.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The type of the loyalty event. See [LoyaltyEventType](#type-loyaltyeventtype) for possible values
 * @member {String} type
 */
exports.prototype['type'] = undefined;
/**
 * The timestamp when the event was created, in RFC 3339 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * Provides metadata when the event `type` is `ACCUMULATE_POINTS`.
 * @member {module:model/LoyaltyEventAccumulatePoints} accumulate_points
 */
exports.prototype['accumulate_points'] = undefined;
/**
 * Provides metadata when the event `type` is `CREATE_REWARD`.
 * @member {module:model/LoyaltyEventCreateReward} create_reward
 */
exports.prototype['create_reward'] = undefined;
/**
 * Provides metadata when the event `type` is `REDEEM_REWARD`.
 * @member {module:model/LoyaltyEventRedeemReward} redeem_reward
 */
exports.prototype['redeem_reward'] = undefined;
/**
 * Provides metadata when the event `type` is `DELETE_REWARD`.
 * @member {module:model/LoyaltyEventDeleteReward} delete_reward
 */
exports.prototype['delete_reward'] = undefined;
/**
 * Provides metadata when the event `type` is `ADJUST_POINTS`.
 * @member {module:model/LoyaltyEventAdjustPoints} adjust_points
 */
exports.prototype['adjust_points'] = undefined;
/**
 * The ID of the `loyalty account` in which the event occurred.
 * @member {String} loyalty_account_id
 */
exports.prototype['loyalty_account_id'] = undefined;
/**
 * The ID of the `location` where the event occurred.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * Defines whether the event was generated by the Square Point of Sale. See [LoyaltyEventSource](#type-loyaltyeventsource) for possible values
 * @member {String} source
 */
exports.prototype['source'] = undefined;
/**
 * Provides metadata when the event `type` is `EXPIRE_POINTS`.
 * @member {module:model/LoyaltyEventExpirePoints} expire_points
 */
exports.prototype['expire_points'] = undefined;
/**
 * Provides metadata when the event `type` is `OTHER`.
 * @member {module:model/LoyaltyEventOther} other_event
 */
exports.prototype['other_event'] = undefined;



module.exports = exports;



