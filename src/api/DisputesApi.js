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
var AcceptDisputeResponse = require('../model/AcceptDisputeResponse');
var CreateDisputeEvidenceTextRequest = require('../model/CreateDisputeEvidenceTextRequest');
var CreateDisputeEvidenceTextResponse = require('../model/CreateDisputeEvidenceTextResponse');
var ListDisputeEvidenceResponse = require('../model/ListDisputeEvidenceResponse');
var ListDisputesResponse = require('../model/ListDisputesResponse');
var RemoveDisputeEvidenceResponse = require('../model/RemoveDisputeEvidenceResponse');
var RetrieveDisputeEvidenceResponse = require('../model/RetrieveDisputeEvidenceResponse');
var RetrieveDisputeResponse = require('../model/RetrieveDisputeResponse');
var SubmitEvidenceResponse = require('../model/SubmitEvidenceResponse');

/**
 * Disputes service.
 * @module api/DisputesApi
 */

/**
 * Constructs a new DisputesApi. 
 * @alias module:api/DisputesApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * AcceptDispute
   * Note: This endpoint is in beta.
   * Accepts loss on a dispute. Square returns the disputed amount to the cardholder and updates the dispute state to ACCEPTED.  Square debits the disputed amount from the seller’s Square account. If the Square account balance does not have sufficient funds, Square debits the associated bank account.
   * @param {String} disputeId ID of the dispute you want to accept.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AcceptDisputeResponse} and HTTP response
   */
  this.acceptDisputeWithHttpInfo = function(disputeId) {
    var postBody = null;

    // verify the required parameter 'disputeId' is set
    if (disputeId === undefined || disputeId === null) {
      throw new Error("Missing the required parameter 'disputeId' when calling acceptDispute");
    }


    var pathParams = {
      'dispute_id': disputeId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-10-28';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = AcceptDisputeResponse;

    return this.apiClient.callApi(
      '/v2/disputes/{dispute_id}/accept', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * AcceptDispute
   * Accepts loss on a dispute. Square returns the disputed amount to the cardholder and updates the dispute state to ACCEPTED.  Square debits the disputed amount from the seller’s Square account. If the Square account balance does not have sufficient funds, Square debits the associated bank account.
   * @param {String} disputeId ID of the dispute you want to accept.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AcceptDisputeResponse}
   */
  this.acceptDispute = function(disputeId) {
    return this.acceptDisputeWithHttpInfo(disputeId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CreateDisputeEvidenceText
   * Note: This endpoint is in beta.
   * Uploads text to use as evidence for a dispute challenge.
   * @param {String} disputeId The ID of the dispute you want to upload evidence for.
   * @param {module:model/CreateDisputeEvidenceTextRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateDisputeEvidenceTextResponse} and HTTP response
   */
  this.createDisputeEvidenceTextWithHttpInfo = function(disputeId, body) {
    var postBody = body;

    // verify the required parameter 'disputeId' is set
    if (disputeId === undefined || disputeId === null) {
      throw new Error("Missing the required parameter 'disputeId' when calling createDisputeEvidenceText");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createDisputeEvidenceText");
    }


    var pathParams = {
      'dispute_id': disputeId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-10-28';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CreateDisputeEvidenceTextResponse;

    return this.apiClient.callApi(
      '/v2/disputes/{dispute_id}/evidence_text', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateDisputeEvidenceText
   * Uploads text to use as evidence for a dispute challenge.
   * @param {String} disputeId The ID of the dispute you want to upload evidence for.
   * @param {module:model/CreateDisputeEvidenceTextRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateDisputeEvidenceTextResponse}
   */
  this.createDisputeEvidenceText = function(disputeId, body) {
    return this.createDisputeEvidenceTextWithHttpInfo(disputeId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListDisputeEvidence
   * Note: This endpoint is in beta.
   * Returns a list of evidence associated with a dispute.
   * @param {String} disputeId The ID of the dispute.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListDisputeEvidenceResponse} and HTTP response
   */
  this.listDisputeEvidenceWithHttpInfo = function(disputeId) {
    var postBody = null;

    // verify the required parameter 'disputeId' is set
    if (disputeId === undefined || disputeId === null) {
      throw new Error("Missing the required parameter 'disputeId' when calling listDisputeEvidence");
    }


    var pathParams = {
      'dispute_id': disputeId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-10-28';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListDisputeEvidenceResponse;

    return this.apiClient.callApi(
      '/v2/disputes/{dispute_id}/evidence', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListDisputeEvidence
   * Returns a list of evidence associated with a dispute.
   * @param {String} disputeId The ID of the dispute.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListDisputeEvidenceResponse}
   */
  this.listDisputeEvidence = function(disputeId) {
    return this.listDisputeEvidenceWithHttpInfo(disputeId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListDisputes
   * Note: This endpoint is in beta.
   * Returns a list of disputes associated with a particular account.
   * @param {Object} opts Optional parameters
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query. For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination).
   * @param {String} opts.states The dispute states to filter the result. If not specified, the endpoint returns all open disputes (dispute status is not &#x60;INQUIRY_CLOSED&#x60;, &#x60;WON&#x60;, or &#x60;LOST&#x60;).
   * @param {String} opts.locationId The ID of the location for which to return  a list of disputes. If not specified, the endpoint returns all open disputes (dispute status is not &#x60;INQUIRY_CLOSED&#x60;, &#x60;WON&#x60;, or  &#x60;LOST&#x60;) associated with all locations.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListDisputesResponse} and HTTP response
   */
  this.listDisputesWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
      'cursor': opts['cursor'],
      'states': opts['states'],
      'location_id': opts['locationId']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-10-28';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListDisputesResponse;

    return this.apiClient.callApi(
      '/v2/disputes', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListDisputes
   * Returns a list of disputes associated with a particular account.
   * @param {Object} opts Optional parameters
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query. For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination).
   * @param {String} opts.states The dispute states to filter the result. If not specified, the endpoint returns all open disputes (dispute status is not &#x60;INQUIRY_CLOSED&#x60;, &#x60;WON&#x60;, or &#x60;LOST&#x60;).
   * @param {String} opts.locationId The ID of the location for which to return  a list of disputes. If not specified, the endpoint returns all open disputes (dispute status is not &#x60;INQUIRY_CLOSED&#x60;, &#x60;WON&#x60;, or  &#x60;LOST&#x60;) associated with all locations.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListDisputesResponse}
   */
  this.listDisputes = function(opts) {
    return this.listDisputesWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RemoveDisputeEvidence
   * Note: This endpoint is in beta.
   * Removes specified evidence from a dispute.  Square does not send the bank any evidence that is removed. Also, you cannot remove evidence after submitting it to the bank using [SubmitEvidence](/reference/square/disputes-api/submit-evidence).
   * @param {String} disputeId The ID of the dispute you want to remove evidence from.
   * @param {String} evidenceId The ID of the evidence you want to remove.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemoveDisputeEvidenceResponse} and HTTP response
   */
  this.removeDisputeEvidenceWithHttpInfo = function(disputeId, evidenceId) {
    var postBody = null;

    // verify the required parameter 'disputeId' is set
    if (disputeId === undefined || disputeId === null) {
      throw new Error("Missing the required parameter 'disputeId' when calling removeDisputeEvidence");
    }

    // verify the required parameter 'evidenceId' is set
    if (evidenceId === undefined || evidenceId === null) {
      throw new Error("Missing the required parameter 'evidenceId' when calling removeDisputeEvidence");
    }


    var pathParams = {
      'dispute_id': disputeId,
      'evidence_id': evidenceId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-10-28';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RemoveDisputeEvidenceResponse;

    return this.apiClient.callApi(
      '/v2/disputes/{dispute_id}/evidence/{evidence_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RemoveDisputeEvidence
   * Removes specified evidence from a dispute.  Square does not send the bank any evidence that is removed. Also, you cannot remove evidence after submitting it to the bank using [SubmitEvidence](/reference/square/disputes-api/submit-evidence).
   * @param {String} disputeId The ID of the dispute you want to remove evidence from.
   * @param {String} evidenceId The ID of the evidence you want to remove.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemoveDisputeEvidenceResponse}
   */
  this.removeDisputeEvidence = function(disputeId, evidenceId) {
    return this.removeDisputeEvidenceWithHttpInfo(disputeId, evidenceId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveDispute
   * Note: This endpoint is in beta.
   * Returns details of a specific dispute.
   * @param {String} disputeId The ID of the dispute you want more details about.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveDisputeResponse} and HTTP response
   */
  this.retrieveDisputeWithHttpInfo = function(disputeId) {
    var postBody = null;

    // verify the required parameter 'disputeId' is set
    if (disputeId === undefined || disputeId === null) {
      throw new Error("Missing the required parameter 'disputeId' when calling retrieveDispute");
    }


    var pathParams = {
      'dispute_id': disputeId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-10-28';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RetrieveDisputeResponse;

    return this.apiClient.callApi(
      '/v2/disputes/{dispute_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveDispute
   * Returns details of a specific dispute.
   * @param {String} disputeId The ID of the dispute you want more details about.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveDisputeResponse}
   */
  this.retrieveDispute = function(disputeId) {
    return this.retrieveDisputeWithHttpInfo(disputeId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveDisputeEvidence
   * Note: This endpoint is in beta.
   * Returns the specific evidence metadata associated with a specific dispute.  You must maintain a copy of the evidence you upload if you want to reference it later. You cannot download the evidence after you upload it.
   * @param {String} disputeId The ID of the dispute that you want to retrieve evidence from.
   * @param {String} evidenceId The ID of the evidence to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveDisputeEvidenceResponse} and HTTP response
   */
  this.retrieveDisputeEvidenceWithHttpInfo = function(disputeId, evidenceId) {
    var postBody = null;

    // verify the required parameter 'disputeId' is set
    if (disputeId === undefined || disputeId === null) {
      throw new Error("Missing the required parameter 'disputeId' when calling retrieveDisputeEvidence");
    }

    // verify the required parameter 'evidenceId' is set
    if (evidenceId === undefined || evidenceId === null) {
      throw new Error("Missing the required parameter 'evidenceId' when calling retrieveDisputeEvidence");
    }


    var pathParams = {
      'dispute_id': disputeId,
      'evidence_id': evidenceId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-10-28';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RetrieveDisputeEvidenceResponse;

    return this.apiClient.callApi(
      '/v2/disputes/{dispute_id}/evidence/{evidence_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveDisputeEvidence
   * Returns the specific evidence metadata associated with a specific dispute.  You must maintain a copy of the evidence you upload if you want to reference it later. You cannot download the evidence after you upload it.
   * @param {String} disputeId The ID of the dispute that you want to retrieve evidence from.
   * @param {String} evidenceId The ID of the evidence to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveDisputeEvidenceResponse}
   */
  this.retrieveDisputeEvidence = function(disputeId, evidenceId) {
    return this.retrieveDisputeEvidenceWithHttpInfo(disputeId, evidenceId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * SubmitEvidence
   * Note: This endpoint is in beta.
   * Submits evidence to the cardholder&#39;s bank.  Before submitting evidence, Square compiles all available evidence. This includes evidence uploaded using the [CreateDisputeEvidenceFile](/reference/square/disputes-api/create-dispute-evidence-file) and [CreateDisputeEvidenceText](/reference/square/disputes-api/create-dispute-evidence-text) endpoints, and evidence automatically provided by Square, when available.
   * @param {String} disputeId The ID of the dispute you want to submit evidence for.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubmitEvidenceResponse} and HTTP response
   */
  this.submitEvidenceWithHttpInfo = function(disputeId) {
    var postBody = null;

    // verify the required parameter 'disputeId' is set
    if (disputeId === undefined || disputeId === null) {
      throw new Error("Missing the required parameter 'disputeId' when calling submitEvidence");
    }


    var pathParams = {
      'dispute_id': disputeId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-10-28';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = SubmitEvidenceResponse;

    return this.apiClient.callApi(
      '/v2/disputes/{dispute_id}/submit-evidence', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * SubmitEvidence
   * Submits evidence to the cardholder&#39;s bank.  Before submitting evidence, Square compiles all available evidence. This includes evidence uploaded using the [CreateDisputeEvidenceFile](/reference/square/disputes-api/create-dispute-evidence-file) and [CreateDisputeEvidenceText](/reference/square/disputes-api/create-dispute-evidence-text) endpoints, and evidence automatically provided by Square, when available.
   * @param {String} disputeId The ID of the dispute you want to submit evidence for.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubmitEvidenceResponse}
   */
  this.submitEvidence = function(disputeId) {
    return this.submitEvidenceWithHttpInfo(disputeId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
