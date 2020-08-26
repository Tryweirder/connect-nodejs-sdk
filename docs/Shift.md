# SquareConnect.Shift

### Description

A record of the hourly rate, start, and end times for a single work shift for an employee. May include a record of the start and end times for breaks taken during the shift.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | UUID for this object | [optional] 
**employee_id** | **String** | The ID of the employee this shift belongs to. DEPRECATED at version 2020-08-26. Use &#x60;team_member_id&#x60; instead | [optional] [deprecated]
**location_id** | **String** | The ID of the location this shift occurred at. Should be based on where the employee clocked in. | [optional] 
**timezone** | **String** | Read-only convenience value that is calculated from the location based on &#x60;location_id&#x60;. Format: the IANA Timezone Database identifier for the location timezone. | [optional] 
**start_at** | **String** | RFC 3339; shifted to location timezone + offset. Precision up to the minute is respected; seconds are truncated. | 
**end_at** | **String** | RFC 3339; shifted to timezone + offset. Precision up to the minute is respected; seconds are truncated. | [optional] 
**wage** | [**ShiftWage**](ShiftWage.md) | Job and pay related information. If wage is not set on create, will default to a wage of zero money. If title is not set on create, will default to the name of the role the employee is assigned to, if any. | [optional] 
**breaks** | [**[ModelBreak]**](ModelBreak.md) | A list of any paid or unpaid breaks that were taken during this shift. | [optional] 
**status** | **String** | Describes working state of the current &#x60;Shift&#x60;. See [ShiftStatus](#type-shiftstatus) for possible values | [optional] 
**version** | **Number** | Used for resolving concurrency issues; request will fail if version provided does not match server version at time of request. If not provided, Square executes a blind write; potentially overwriting data from another write. | [optional] 
**created_at** | **String** | A read-only timestamp in RFC 3339 format; presented in UTC. | [optional] 
**updated_at** | **String** | A read-only timestamp in RFC 3339 format; presented in UTC. | [optional] 
**team_member_id** | **String** | The ID of the team member this shift belongs to. Replaced &#x60;employee_id&#x60; at version \&quot;2020-08-26\&quot; | [optional] 


