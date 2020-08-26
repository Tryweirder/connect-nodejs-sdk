# SquareConnect.TimeRange

### Description

Represents a generic time range. The start and end values are represented in RFC 3339 format. Time ranges are customized to be inclusive or exclusive based on the needs of a particular endpoint. Refer to the relevant endpoint-specific documentation to determine how time ranges are handled.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_at** | **String** | A datetime value in RFC 3339 format indicating when the time range starts. | [optional] 
**end_at** | **String** | A datetime value in RFC 3339 format indicating when the time range ends. | [optional] 


