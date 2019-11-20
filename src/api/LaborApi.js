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
var CreateBreakTypeRequest = require('../model/CreateBreakTypeRequest');
var CreateBreakTypeResponse = require('../model/CreateBreakTypeResponse');
var CreateShiftRequest = require('../model/CreateShiftRequest');
var CreateShiftResponse = require('../model/CreateShiftResponse');
var DeleteBreakTypeResponse = require('../model/DeleteBreakTypeResponse');
var DeleteShiftResponse = require('../model/DeleteShiftResponse');
var GetBreakTypeResponse = require('../model/GetBreakTypeResponse');
var GetEmployeeWageResponse = require('../model/GetEmployeeWageResponse');
var GetShiftResponse = require('../model/GetShiftResponse');
var ListBreakTypesResponse = require('../model/ListBreakTypesResponse');
var ListEmployeeWagesResponse = require('../model/ListEmployeeWagesResponse');
var ListWorkweekConfigsResponse = require('../model/ListWorkweekConfigsResponse');
var SearchShiftsRequest = require('../model/SearchShiftsRequest');
var SearchShiftsResponse = require('../model/SearchShiftsResponse');
var UpdateBreakTypeRequest = require('../model/UpdateBreakTypeRequest');
var UpdateBreakTypeResponse = require('../model/UpdateBreakTypeResponse');
var UpdateShiftRequest = require('../model/UpdateShiftRequest');
var UpdateShiftResponse = require('../model/UpdateShiftResponse');
var UpdateWorkweekConfigRequest = require('../model/UpdateWorkweekConfigRequest');
var UpdateWorkweekConfigResponse = require('../model/UpdateWorkweekConfigResponse');

/**
 * Labor service.
 * @module api/LaborApi
 */

/**
 * Constructs a new LaborApi. 
 * @alias module:api/LaborApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * CreateBreakType
   * Creates a new &#x60;BreakType&#x60;.   A &#x60;BreakType&#x60; is a template for creating &#x60;Break&#x60; objects.  You must provide the following values in your request to this endpoint:  - &#x60;location_id&#x60; - &#x60;break_name&#x60; - &#x60;expected_duration&#x60; - &#x60;is_paid&#x60;  You can only have 3 &#x60;BreakType&#x60; instances per location. If you attempt to add a 4th &#x60;BreakType&#x60; for a location, an &#x60;INVALID_REQUEST_ERROR&#x60; \&quot;Exceeded limit of 3 breaks per location.\&quot; is returned.
   * @param {module:model/CreateBreakTypeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateBreakTypeResponse} and HTTP response
   */
  this.createBreakTypeWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createBreakType");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CreateBreakTypeResponse;

    return this.apiClient.callApi(
      '/v2/labor/break-types', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateBreakType
   * Creates a new &#x60;BreakType&#x60;.   A &#x60;BreakType&#x60; is a template for creating &#x60;Break&#x60; objects.  You must provide the following values in your request to this endpoint:  - &#x60;location_id&#x60; - &#x60;break_name&#x60; - &#x60;expected_duration&#x60; - &#x60;is_paid&#x60;  You can only have 3 &#x60;BreakType&#x60; instances per location. If you attempt to add a 4th &#x60;BreakType&#x60; for a location, an &#x60;INVALID_REQUEST_ERROR&#x60; \&quot;Exceeded limit of 3 breaks per location.\&quot; is returned.
   * @param {module:model/CreateBreakTypeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateBreakTypeResponse}
   */
  this.createBreakType = function(body) {
    return this.createBreakTypeWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CreateShift
   * Creates a new &#x60;Shift&#x60;.   A &#x60;Shift&#x60; represents a complete work day for a single employee.  You must provide the following values in your request to this endpoint:  - &#x60;location_id&#x60; - &#x60;employee_id&#x60; - &#x60;start_at&#x60;  An attempt to create a new &#x60;Shift&#x60; can result in a &#x60;BAD_REQUEST&#x60; error when: - The &#x60;status&#x60; of the new &#x60;Shift&#x60; is &#x60;OPEN&#x60; and the employee has another  shift with an &#x60;OPEN&#x60; status.  - The &#x60;start_at&#x60; date is in the future - the &#x60;start_at&#x60; or &#x60;end_at&#x60; overlaps another shift for the same employee - If &#x60;Break&#x60;s are set in the request, a break &#x60;start_at&#x60; must not be before the &#x60;Shift.start_at&#x60;. A break &#x60;end_at&#x60; must not be after the &#x60;Shift.end_at&#x60;
   * @param {module:model/CreateShiftRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateShiftResponse} and HTTP response
   */
  this.createShiftWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createShift");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CreateShiftResponse;

    return this.apiClient.callApi(
      '/v2/labor/shifts', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateShift
   * Creates a new &#x60;Shift&#x60;.   A &#x60;Shift&#x60; represents a complete work day for a single employee.  You must provide the following values in your request to this endpoint:  - &#x60;location_id&#x60; - &#x60;employee_id&#x60; - &#x60;start_at&#x60;  An attempt to create a new &#x60;Shift&#x60; can result in a &#x60;BAD_REQUEST&#x60; error when: - The &#x60;status&#x60; of the new &#x60;Shift&#x60; is &#x60;OPEN&#x60; and the employee has another  shift with an &#x60;OPEN&#x60; status.  - The &#x60;start_at&#x60; date is in the future - the &#x60;start_at&#x60; or &#x60;end_at&#x60; overlaps another shift for the same employee - If &#x60;Break&#x60;s are set in the request, a break &#x60;start_at&#x60; must not be before the &#x60;Shift.start_at&#x60;. A break &#x60;end_at&#x60; must not be after the &#x60;Shift.end_at&#x60;
   * @param {module:model/CreateShiftRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateShiftResponse}
   */
  this.createShift = function(body) {
    return this.createShiftWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * DeleteBreakType
   * Deletes an existing &#x60;BreakType&#x60;.   A &#x60;BreakType&#x60; can be deleted even if it is referenced from a &#x60;Shift&#x60;.
   * @param {String} id UUID for the &#x60;BreakType&#x60; being deleted.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteBreakTypeResponse} and HTTP response
   */
  this.deleteBreakTypeWithHttpInfo = function(id) {
    var postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling deleteBreakType");
    }


    var pathParams = {
      'id': id
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = DeleteBreakTypeResponse;

    return this.apiClient.callApi(
      '/v2/labor/break-types/{id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * DeleteBreakType
   * Deletes an existing &#x60;BreakType&#x60;.   A &#x60;BreakType&#x60; can be deleted even if it is referenced from a &#x60;Shift&#x60;.
   * @param {String} id UUID for the &#x60;BreakType&#x60; being deleted.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteBreakTypeResponse}
   */
  this.deleteBreakType = function(id) {
    return this.deleteBreakTypeWithHttpInfo(id)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * DeleteShift
   * Deletes a &#x60;Shift&#x60;.
   * @param {String} id UUID for the &#x60;Shift&#x60; being deleted.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteShiftResponse} and HTTP response
   */
  this.deleteShiftWithHttpInfo = function(id) {
    var postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling deleteShift");
    }


    var pathParams = {
      'id': id
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = DeleteShiftResponse;

    return this.apiClient.callApi(
      '/v2/labor/shifts/{id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * DeleteShift
   * Deletes a &#x60;Shift&#x60;.
   * @param {String} id UUID for the &#x60;Shift&#x60; being deleted.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteShiftResponse}
   */
  this.deleteShift = function(id) {
    return this.deleteShiftWithHttpInfo(id)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * GetBreakType
   * Returns a single &#x60;BreakType&#x60; specified by id.
   * @param {String} id UUID for the &#x60;BreakType&#x60; being retrieved.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBreakTypeResponse} and HTTP response
   */
  this.getBreakTypeWithHttpInfo = function(id) {
    var postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getBreakType");
    }


    var pathParams = {
      'id': id
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = GetBreakTypeResponse;

    return this.apiClient.callApi(
      '/v2/labor/break-types/{id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * GetBreakType
   * Returns a single &#x60;BreakType&#x60; specified by id.
   * @param {String} id UUID for the &#x60;BreakType&#x60; being retrieved.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBreakTypeResponse}
   */
  this.getBreakType = function(id) {
    return this.getBreakTypeWithHttpInfo(id)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * GetEmployeeWage
   * Returns a single &#x60;EmployeeWage&#x60; specified by id.
   * @param {String} id UUID for the &#x60;EmployeeWage&#x60; being retrieved.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetEmployeeWageResponse} and HTTP response
   */
  this.getEmployeeWageWithHttpInfo = function(id) {
    var postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getEmployeeWage");
    }


    var pathParams = {
      'id': id
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = GetEmployeeWageResponse;

    return this.apiClient.callApi(
      '/v2/labor/employee-wages/{id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * GetEmployeeWage
   * Returns a single &#x60;EmployeeWage&#x60; specified by id.
   * @param {String} id UUID for the &#x60;EmployeeWage&#x60; being retrieved.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetEmployeeWageResponse}
   */
  this.getEmployeeWage = function(id) {
    return this.getEmployeeWageWithHttpInfo(id)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * GetShift
   * Returns a single &#x60;Shift&#x60; specified by id.
   * @param {String} id UUID for the &#x60;Shift&#x60; being retrieved.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetShiftResponse} and HTTP response
   */
  this.getShiftWithHttpInfo = function(id) {
    var postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getShift");
    }


    var pathParams = {
      'id': id
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = GetShiftResponse;

    return this.apiClient.callApi(
      '/v2/labor/shifts/{id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * GetShift
   * Returns a single &#x60;Shift&#x60; specified by id.
   * @param {String} id UUID for the &#x60;Shift&#x60; being retrieved.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetShiftResponse}
   */
  this.getShift = function(id) {
    return this.getShiftWithHttpInfo(id)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListBreakTypes
   * Returns a paginated list of &#x60;BreakType&#x60; instances for a business.
   * @param {Object} opts Optional parameters
   * @param {String} opts.locationId Filter Break Types returned to only those that are associated with the specified location.
   * @param {Number} opts.limit Maximum number of Break Types to return per page. Can range between 1 and 200. The default is the maximum at 200.
   * @param {String} opts.cursor Pointer to the next page of Break Type results to fetch.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListBreakTypesResponse} and HTTP response
   */
  this.listBreakTypesWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
      'location_id': opts['locationId'],
      'limit': opts['limit'],
      'cursor': opts['cursor']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListBreakTypesResponse;

    return this.apiClient.callApi(
      '/v2/labor/break-types', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListBreakTypes
   * Returns a paginated list of &#x60;BreakType&#x60; instances for a business.
   * @param {Object} opts Optional parameters
   * @param {String} opts.locationId Filter Break Types returned to only those that are associated with the specified location.
   * @param {Number} opts.limit Maximum number of Break Types to return per page. Can range between 1 and 200. The default is the maximum at 200.
   * @param {String} opts.cursor Pointer to the next page of Break Type results to fetch.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListBreakTypesResponse}
   */
  this.listBreakTypes = function(opts) {
    return this.listBreakTypesWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListEmployeeWages
   * Returns a paginated list of &#x60;EmployeeWage&#x60; instances for a business.
   * @param {Object} opts Optional parameters
   * @param {String} opts.employeeId Filter wages returned to only those that are associated with the specified employee.
   * @param {Number} opts.limit Maximum number of Employee Wages to return per page. Can range between 1 and 200. The default is the maximum at 200.
   * @param {String} opts.cursor Pointer to the next page of Employee Wage results to fetch.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListEmployeeWagesResponse} and HTTP response
   */
  this.listEmployeeWagesWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
      'employee_id': opts['employeeId'],
      'limit': opts['limit'],
      'cursor': opts['cursor']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListEmployeeWagesResponse;

    return this.apiClient.callApi(
      '/v2/labor/employee-wages', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListEmployeeWages
   * Returns a paginated list of &#x60;EmployeeWage&#x60; instances for a business.
   * @param {Object} opts Optional parameters
   * @param {String} opts.employeeId Filter wages returned to only those that are associated with the specified employee.
   * @param {Number} opts.limit Maximum number of Employee Wages to return per page. Can range between 1 and 200. The default is the maximum at 200.
   * @param {String} opts.cursor Pointer to the next page of Employee Wage results to fetch.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListEmployeeWagesResponse}
   */
  this.listEmployeeWages = function(opts) {
    return this.listEmployeeWagesWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListWorkweekConfigs
   * Returns a list of &#x60;WorkweekConfig&#x60; instances for a business.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit Maximum number of Workweek Configs to return per page.
   * @param {String} opts.cursor Pointer to the next page of Workweek Config results to fetch.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListWorkweekConfigsResponse} and HTTP response
   */
  this.listWorkweekConfigsWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
      'limit': opts['limit'],
      'cursor': opts['cursor']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListWorkweekConfigsResponse;

    return this.apiClient.callApi(
      '/v2/labor/workweek-configs', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListWorkweekConfigs
   * Returns a list of &#x60;WorkweekConfig&#x60; instances for a business.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit Maximum number of Workweek Configs to return per page.
   * @param {String} opts.cursor Pointer to the next page of Workweek Config results to fetch.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListWorkweekConfigsResponse}
   */
  this.listWorkweekConfigs = function(opts) {
    return this.listWorkweekConfigsWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * SearchShifts
   * Returns a paginated list of &#x60;Shift&#x60; records for a business.  The list to be returned can be filtered by: - Location IDs **and** - employee IDs **and** - shift status (&#x60;OPEN&#x60;, &#x60;CLOSED&#x60;) **and** - shift start **and** - shift end **and** - work day details  The list can be sorted by: - &#x60;start_at&#x60; - &#x60;end_at&#x60; - &#x60;created_at&#x60; - &#x60;updated_at&#x60;
   * @param {module:model/SearchShiftsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchShiftsResponse} and HTTP response
   */
  this.searchShiftsWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling searchShifts");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = SearchShiftsResponse;

    return this.apiClient.callApi(
      '/v2/labor/shifts/search', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * SearchShifts
   * Returns a paginated list of &#x60;Shift&#x60; records for a business.  The list to be returned can be filtered by: - Location IDs **and** - employee IDs **and** - shift status (&#x60;OPEN&#x60;, &#x60;CLOSED&#x60;) **and** - shift start **and** - shift end **and** - work day details  The list can be sorted by: - &#x60;start_at&#x60; - &#x60;end_at&#x60; - &#x60;created_at&#x60; - &#x60;updated_at&#x60;
   * @param {module:model/SearchShiftsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchShiftsResponse}
   */
  this.searchShifts = function(body) {
    return this.searchShiftsWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * UpdateBreakType
   * Updates an existing &#x60;BreakType&#x60;.
   * @param {String} id UUID for the &#x60;BreakType&#x60; being updated.
   * @param {module:model/UpdateBreakTypeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateBreakTypeResponse} and HTTP response
   */
  this.updateBreakTypeWithHttpInfo = function(id, body) {
    var postBody = body;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling updateBreakType");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateBreakType");
    }


    var pathParams = {
      'id': id
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = UpdateBreakTypeResponse;

    return this.apiClient.callApi(
      '/v2/labor/break-types/{id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * UpdateBreakType
   * Updates an existing &#x60;BreakType&#x60;.
   * @param {String} id UUID for the &#x60;BreakType&#x60; being updated.
   * @param {module:model/UpdateBreakTypeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateBreakTypeResponse}
   */
  this.updateBreakType = function(id, body) {
    return this.updateBreakTypeWithHttpInfo(id, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * UpdateShift
   * Updates an existing &#x60;Shift&#x60;.   When adding a &#x60;Break&#x60; to a &#x60;Shift&#x60;, any earlier &#x60;Breaks&#x60; in the &#x60;Shift&#x60; have  the &#x60;end_at&#x60; property set to a valid RFC-3339 datetime string.   When closing a &#x60;Shift&#x60;, all &#x60;Break&#x60; instances in the shift must be complete with &#x60;end_at&#x60; set on each &#x60;Break&#x60;.
   * @param {String} id ID of the object being updated.
   * @param {module:model/UpdateShiftRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateShiftResponse} and HTTP response
   */
  this.updateShiftWithHttpInfo = function(id, body) {
    var postBody = body;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling updateShift");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateShift");
    }


    var pathParams = {
      'id': id
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = UpdateShiftResponse;

    return this.apiClient.callApi(
      '/v2/labor/shifts/{id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * UpdateShift
   * Updates an existing &#x60;Shift&#x60;.   When adding a &#x60;Break&#x60; to a &#x60;Shift&#x60;, any earlier &#x60;Breaks&#x60; in the &#x60;Shift&#x60; have  the &#x60;end_at&#x60; property set to a valid RFC-3339 datetime string.   When closing a &#x60;Shift&#x60;, all &#x60;Break&#x60; instances in the shift must be complete with &#x60;end_at&#x60; set on each &#x60;Break&#x60;.
   * @param {String} id ID of the object being updated.
   * @param {module:model/UpdateShiftRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateShiftResponse}
   */
  this.updateShift = function(id, body) {
    return this.updateShiftWithHttpInfo(id, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * UpdateWorkweekConfig
   * Updates a &#x60;WorkweekConfig&#x60;.
   * @param {String} id UUID for the &#x60;WorkweekConfig&#x60; object being updated.
   * @param {module:model/UpdateWorkweekConfigRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateWorkweekConfigResponse} and HTTP response
   */
  this.updateWorkweekConfigWithHttpInfo = function(id, body) {
    var postBody = body;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling updateWorkweekConfig");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateWorkweekConfig");
    }


    var pathParams = {
      'id': id
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-11-20';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = UpdateWorkweekConfigResponse;

    return this.apiClient.callApi(
      '/v2/labor/workweek-configs/{id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * UpdateWorkweekConfig
   * Updates a &#x60;WorkweekConfig&#x60;.
   * @param {String} id UUID for the &#x60;WorkweekConfig&#x60; object being updated.
   * @param {module:model/UpdateWorkweekConfigRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateWorkweekConfigResponse}
   */
  this.updateWorkweekConfig = function(id, body) {
    return this.updateWorkweekConfigWithHttpInfo(id, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
