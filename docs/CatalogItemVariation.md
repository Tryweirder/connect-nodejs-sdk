# SquareConnect.CatalogItemVariation

### Description

An item variation (i.e., product) in the Catalog object model. Each item may have a maximum of 250 item variations.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **String** | The ID of the &#x60;CatalogItem&#x60; associated with this item variation. | [optional] 
**name** | **String** | The item variation&#39;s name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. | [optional] 
**sku** | **String** | The item variation&#39;s SKU, if any. This is a searchable attribute for use in applicable query filters. | [optional] 
**upc** | **String** | The item variation&#39;s UPC, if any. This is a searchable attribute for use in applicable query filters. It is only accessible through the Square API, and not exposed in the Square Seller Dashboard, Square Point of Sale or Retail Point of Sale apps. | [optional] 
**ordinal** | **Number** | The order in which this item variation should be displayed. This value is read-only. On writes, the ordinal for each item variation within a parent &#x60;CatalogItem&#x60; is set according to the item variations&#39;s position. On reads, the value is not guaranteed to be sequential or unique. | [optional] 
**pricing_type** | **String** | Indicates whether the item variation&#39;s price is fixed or determined at the time of sale. See [CatalogPricingType](#type-catalogpricingtype) for possible values | [optional] 
**price_money** | [**Money**](Money.md) | The item variation&#39;s price, if fixed pricing is used. | [optional] 
**location_overrides** | [**[ItemVariationLocationOverrides]**](ItemVariationLocationOverrides.md) | Per-location price and inventory overrides. | [optional] 
**track_inventory** | **Boolean** | If &#x60;true&#x60;, inventory tracking is active for the variation. | [optional] 
**inventory_alert_type** | **String** | Indicates whether the item variation displays an alert when its inventory quantity is less than or equal to its &#x60;inventory_alert_threshold&#x60;. See [InventoryAlertType](#type-inventoryalerttype) for possible values | [optional] 
**inventory_alert_threshold** | **Number** | If the inventory quantity for the variation is less than or equal to this value and &#x60;inventory_alert_type&#x60; is &#x60;LOW_QUANTITY&#x60;, the variation displays an alert in the merchant dashboard.  This value is always an integer. | [optional] 
**user_data** | **String** | Arbitrary user metadata to associate with the item variation. This attribute value length is of Unicode code points. | [optional] 
**service_duration** | **Number** | If the &#x60;CatalogItem&#x60; that owns this item variation is of type &#x60;APPOINTMENTS_SERVICE&#x60;, then this is the duration of the service in milliseconds. For example, a 30 minute appointment would have the value &#x60;1800000&#x60;, which is equal to 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second). | [optional] 
**item_option_values** | [**[CatalogItemOptionValueForItemVariation]**](CatalogItemOptionValueForItemVariation.md) | List of item option values associated with this item variation. Listed in the same order as the item options of the parent item. | [optional] [beta]
**measurement_unit_id** | **String** | ID of the ‘CatalogMeasurementUnit’ that is used to measure the quantity sold of this item variation. If left unset, the item will be sold in whole quantities. | [optional] [beta]


