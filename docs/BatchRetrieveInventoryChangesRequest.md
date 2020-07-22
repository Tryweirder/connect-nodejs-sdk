# SquareConnect.BatchRetrieveInventoryChangesRequest

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_object_ids** | **[String]** | Filters results by &#x60;CatalogObject&#x60; ID. Only applied when set. Max size is 500 IDs. Default: unset. | [optional] 
**location_ids** | **[String]** | Filters results by &#x60;Location&#x60; ID. Only applied when set. Default: unset. | [optional] 
**types** | **[String]** | Filters results by &#x60;InventoryChangeType&#x60;. Default: [&#x60;PHYSICAL_COUNT&#x60;, &#x60;ADJUSTMENT&#x60;]. &#x60;TRANSFER&#x60; is not supported as a filter. See [InventoryChangeType](#type-inventorychangetype) for possible values | [optional] 
**states** | **[String]** | Filters &#x60;ADJUSTMENT&#x60; query results by &#x60;InventoryState&#x60;. Only applied when set. Default: unset. See [InventoryState](#type-inventorystate) for possible values | [optional] 
**updated_after** | **String** | Provided as an RFC 3339 timestamp. Returns results whose &#x60;created_at&#x60; or &#x60;calculated_at&#x60; value is after the given time. Default: UNIX epoch (&#x60;1970-01-01T00:00:00Z&#x60;). | [optional] 
**updated_before** | **String** | Provided as an RFC 3339 timestamp. Returns results whose &#x60;created_at&#x60; or &#x60;calculated_at&#x60; value is strictly before the given time. Default: UNIX epoch (&#x60;1970-01-01T00:00:00Z&#x60;). | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. | [optional] 


