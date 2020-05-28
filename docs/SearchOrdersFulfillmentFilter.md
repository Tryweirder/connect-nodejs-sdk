# SquareConnect.SearchOrdersFulfillmentFilter

### Description

Filter based on [Order Fulfillment](#type-orderfulfillment) information.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillment_types** | **[String]** | List of &#x60;fulfillment types&#x60; to filter for. Will return orders if any of its fulfillments match any of the fulfillment types listed in this field. See [OrderFulfillmentType](#type-orderfulfillmenttype) for possible values | [optional] 
**fulfillment_states** | **[String]** | List of &#x60;fulfillment states&#x60; to filter for. Will return orders if any of its fulfillments match any of the fulfillment states listed in this field. See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values | [optional] 


