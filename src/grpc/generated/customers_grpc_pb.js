// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// customers.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var customers_pb = require('./customers_pb.js');
var common_pb = require('./common_pb.js');
var radius_pb = require('./radius_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_customers_CreateCustomerRequest(arg) {
  if (!(arg instanceof customers_pb.CreateCustomerRequest)) {
    throw new Error('Expected argument of type customers.CreateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_CreateCustomerRequest(buffer_arg) {
  return customers_pb.CreateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_CreateCustomerResponse(arg) {
  if (!(arg instanceof customers_pb.CreateCustomerResponse)) {
    throw new Error('Expected argument of type customers.CreateCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_CreateCustomerResponse(buffer_arg) {
  return customers_pb.CreateCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_GetCustomerRequest(arg) {
  if (!(arg instanceof customers_pb.GetCustomerRequest)) {
    throw new Error('Expected argument of type customers.GetCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_GetCustomerRequest(buffer_arg) {
  return customers_pb.GetCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_GetCustomerResponse(arg) {
  if (!(arg instanceof customers_pb.GetCustomerResponse)) {
    throw new Error('Expected argument of type customers.GetCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_GetCustomerResponse(buffer_arg) {
  return customers_pb.GetCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_GetCustomersRequest(arg) {
  if (!(arg instanceof customers_pb.GetCustomersRequest)) {
    throw new Error('Expected argument of type customers.GetCustomersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_GetCustomersRequest(buffer_arg) {
  return customers_pb.GetCustomersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_GetCustomersResponse(arg) {
  if (!(arg instanceof customers_pb.GetCustomersResponse)) {
    throw new Error('Expected argument of type customers.GetCustomersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_GetCustomersResponse(buffer_arg) {
  return customers_pb.GetCustomersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_GetCustomersWithPlanBusinessAndPlanbookInfoRequest(arg) {
  if (!(arg instanceof customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest)) {
    throw new Error('Expected argument of type customers.GetCustomersWithPlanBusinessAndPlanbookInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_GetCustomersWithPlanBusinessAndPlanbookInfoRequest(buffer_arg) {
  return customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_GetCustomersWithPlanBusinessAndPlanbookInfoResponse(arg) {
  if (!(arg instanceof customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse)) {
    throw new Error('Expected argument of type customers.GetCustomersWithPlanBusinessAndPlanbookInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_GetCustomersWithPlanBusinessAndPlanbookInfoResponse(buffer_arg) {
  return customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_RestoreCustomerPlanRequest(arg) {
  if (!(arg instanceof customers_pb.RestoreCustomerPlanRequest)) {
    throw new Error('Expected argument of type customers.RestoreCustomerPlanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_RestoreCustomerPlanRequest(buffer_arg) {
  return customers_pb.RestoreCustomerPlanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_RestoreCustomerPlanResponse(arg) {
  if (!(arg instanceof customers_pb.RestoreCustomerPlanResponse)) {
    throw new Error('Expected argument of type customers.RestoreCustomerPlanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_RestoreCustomerPlanResponse(buffer_arg) {
  return customers_pb.RestoreCustomerPlanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_UpdateCustomerDetailsRequest(arg) {
  if (!(arg instanceof customers_pb.UpdateCustomerDetailsRequest)) {
    throw new Error('Expected argument of type customers.UpdateCustomerDetailsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_UpdateCustomerDetailsRequest(buffer_arg) {
  return customers_pb.UpdateCustomerDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_UpdateCustomerDetailsResponse(arg) {
  if (!(arg instanceof customers_pb.UpdateCustomerDetailsResponse)) {
    throw new Error('Expected argument of type customers.UpdateCustomerDetailsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_UpdateCustomerDetailsResponse(buffer_arg) {
  return customers_pb.UpdateCustomerDetailsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_UpdateCustomerPlanRequest(arg) {
  if (!(arg instanceof customers_pb.UpdateCustomerPlanRequest)) {
    throw new Error('Expected argument of type customers.UpdateCustomerPlanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_UpdateCustomerPlanRequest(buffer_arg) {
  return customers_pb.UpdateCustomerPlanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_UpdateCustomerPlanResponse(arg) {
  if (!(arg instanceof customers_pb.UpdateCustomerPlanResponse)) {
    throw new Error('Expected argument of type customers.UpdateCustomerPlanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_UpdateCustomerPlanResponse(buffer_arg) {
  return customers_pb.UpdateCustomerPlanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Customer service for managing internet customers
var CustomerServiceService = exports.CustomerServiceService = {
  // Create a new customer with associated RADIUS user
createCustomer: {
    path: '/customers.CustomerService/CreateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.CreateCustomerRequest,
    responseType: customers_pb.CreateCustomerResponse,
    requestSerialize: serialize_customers_CreateCustomerRequest,
    requestDeserialize: deserialize_customers_CreateCustomerRequest,
    responseSerialize: serialize_customers_CreateCustomerResponse,
    responseDeserialize: deserialize_customers_CreateCustomerResponse,
  },
  // Update a customer's basic information
updateCustomerDetails: {
    path: '/customers.CustomerService/UpdateCustomerDetails',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.UpdateCustomerDetailsRequest,
    responseType: customers_pb.UpdateCustomerDetailsResponse,
    requestSerialize: serialize_customers_UpdateCustomerDetailsRequest,
    requestDeserialize: deserialize_customers_UpdateCustomerDetailsRequest,
    responseSerialize: serialize_customers_UpdateCustomerDetailsResponse,
    responseDeserialize: deserialize_customers_UpdateCustomerDetailsResponse,
  },
  // Update a customer's subscription or post-FUP plan
updateCustomerPlan: {
    path: '/customers.CustomerService/UpdateCustomerPlan',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.UpdateCustomerPlanRequest,
    responseType: customers_pb.UpdateCustomerPlanResponse,
    requestSerialize: serialize_customers_UpdateCustomerPlanRequest,
    requestDeserialize: deserialize_customers_UpdateCustomerPlanRequest,
    responseSerialize: serialize_customers_UpdateCustomerPlanResponse,
    responseDeserialize: deserialize_customers_UpdateCustomerPlanResponse,
  },
  // Get a specific customer by ID
getCustomer: {
    path: '/customers.CustomerService/GetCustomer',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.GetCustomerRequest,
    responseType: customers_pb.GetCustomerResponse,
    requestSerialize: serialize_customers_GetCustomerRequest,
    requestDeserialize: deserialize_customers_GetCustomerRequest,
    responseSerialize: serialize_customers_GetCustomerResponse,
    responseDeserialize: deserialize_customers_GetCustomerResponse,
  },
  // Get all customers with pagination and filtering options
getCustomers: {
    path: '/customers.CustomerService/GetCustomers',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.GetCustomersRequest,
    responseType: customers_pb.GetCustomersResponse,
    requestSerialize: serialize_customers_GetCustomersRequest,
    requestDeserialize: deserialize_customers_GetCustomersRequest,
    responseSerialize: serialize_customers_GetCustomersResponse,
    responseDeserialize: deserialize_customers_GetCustomersResponse,
  },
  // Restore a customer's plan after FUP enforcement
restoreCustomerPlan: {
    path: '/customers.CustomerService/RestoreCustomerPlan',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.RestoreCustomerPlanRequest,
    responseType: customers_pb.RestoreCustomerPlanResponse,
    requestSerialize: serialize_customers_RestoreCustomerPlanRequest,
    requestDeserialize: deserialize_customers_RestoreCustomerPlanRequest,
    responseSerialize: serialize_customers_RestoreCustomerPlanResponse,
    responseDeserialize: deserialize_customers_RestoreCustomerPlanResponse,
  },
  // Get customers with plan, business, and planbook information with filtering and pagination
getCustomersWithPlanBusinessAndPlanbookInfo: {
    path: '/customers.CustomerService/GetCustomersWithPlanBusinessAndPlanbookInfo',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest,
    responseType: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse,
    requestSerialize: serialize_customers_GetCustomersWithPlanBusinessAndPlanbookInfoRequest,
    requestDeserialize: deserialize_customers_GetCustomersWithPlanBusinessAndPlanbookInfoRequest,
    responseSerialize: serialize_customers_GetCustomersWithPlanBusinessAndPlanbookInfoResponse,
    responseDeserialize: deserialize_customers_GetCustomersWithPlanBusinessAndPlanbookInfoResponse,
  },
};

exports.CustomerServiceClient = grpc.makeGenericClientConstructor(CustomerServiceService, 'CustomerService');
