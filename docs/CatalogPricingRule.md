# SquareConnect.CatalogPricingRule

### Description

Defines how discounts are automatically applied to a set of items that match the pricing rule during the active time period.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | User-defined name for the pricing rule. For example, \&quot;Buy one get one free\&quot; or \&quot;10% off\&quot;. | [optional] 
**time_period_ids** | **[String]** | A list of unique IDs for the catalog time periods when this pricing rule is in effect. If left unset, the pricing rule is always in effect. | [optional] 
**discount_id** | **String** | Unique ID for the &#x60;CatalogDiscount&#x60; to take off the price of all matched items. | [optional] 
**match_products_id** | **String** | Unique ID for the &#x60;CatalogProductSet&#x60; that will be matched by this rule. A match rule matches within the entire cart, and can match multiple times. This field will always be set. | [optional] 
**apply_products_id** | **String** | __Deprecated__: Please use the &#x60;exclude_products_id&#x60; field to apply an exclude set instead. Exclude sets allow better control over quantity ranges and offer more flexibility for which matched items receive a discount.  &#x60;CatalogProductSet&#x60; to apply the pricing to. An apply rule matches within the subset of the cart that fits the match rules (the match set). An apply rule can only match once in the match set. If not supplied, the pricing will be applied to all products in the match set. Other products retain their base price, or a price generated by other rules. | [optional] [deprecated]
**exclude_products_id** | **String** | &#x60;CatalogProductSet&#x60; to exclude from the pricing rule. An exclude rule matches within the subset of the cart that fits the match rules (the match set). An exclude rule can only match once in the match set. If not supplied, the pricing will be applied to all products in the match set. Other products retain their base price, or a price generated by other rules. | [optional] 
**valid_from_date** | **String** | Represents the date the Pricing Rule is valid from. Represented in RFC 3339 full-date format (YYYY-MM-DD). | [optional] 
**valid_from_local_time** | **String** | Represents the local time the pricing rule should be valid from. Represented in RFC 3339 partial-time format (HH:MM:SS). Partial seconds will be truncated. | [optional] 
**valid_until_date** | **String** | Represents the date the Pricing Rule is valid until. Represented in RFC 3339 full-date format (YYYY-MM-DD). | [optional] 
**valid_until_local_time** | **String** | Represents the local time the pricing rule should be valid until. Represented in RFC 3339 partial-time format (HH:MM:SS). Partial seconds will be truncated. | [optional] 
**exclude_strategy** | **String** | If an &#x60;exclude_products_id&#x60; was given, controls which subset of matched products is excluded from any discounts.  Default value: &#x60;LEAST_EXPENSIVE&#x60; See [ExcludeStrategy](#type-excludestrategy) for possible values | [optional] 


