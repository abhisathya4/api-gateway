// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// customers.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var customers_pb = require('./customers_pb.js');
var common_pb = require('./common_pb.js');
var radius_pb = require('./radius_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_customers_AuthDeactivateCustomerRequest(arg) {
  if (!(arg instanceof customers_pb.AuthDeactivateCustomerRequest)) {
    throw new Error('Expected argument of type customers.AuthDeactivateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_AuthDeactivateCustomerRequest(buffer_arg) {
  return customers_pb.AuthDeactivateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_AuthDeactivateCustomerResponse(arg) {
  if (!(arg instanceof customers_pb.AuthDeactivateCustomerResponse)) {
    throw new Error('Expected argument of type customers.AuthDeactivateCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_AuthDeactivateCustomerResponse(buffer_arg) {
  return customers_pb.AuthDeactivateCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_AuthRenewOrActivateCustomerRequest(arg) {
  if (!(arg instanceof customers_pb.AuthRenewOrActivateCustomerRequest)) {
    throw new Error('Expected argument of type customers.AuthRenewOrActivateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_AuthRenewOrActivateCustomerRequest(buffer_arg) {
  return customers_pb.AuthRenewOrActivateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_AuthRenewOrActivateCustomerResponse(arg) {
  if (!(arg instanceof customers_pb.AuthRenewOrActivateCustomerResponse)) {
    throw new Error('Expected argument of type customers.AuthRenewOrActivateCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_AuthRenewOrActivateCustomerResponse(buffer_arg) {
  return customers_pb.AuthRenewOrActivateCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_customers_SysDeactivateCustomerRequest(arg) {
  if (!(arg instanceof customers_pb.SysDeactivateCustomerRequest)) {
    throw new Error('Expected argument of type customers.SysDeactivateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_SysDeactivateCustomerRequest(buffer_arg) {
  return customers_pb.SysDeactivateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_SysDeactivateCustomerResponse(arg) {
  if (!(arg instanceof customers_pb.SysDeactivateCustomerResponse)) {
    throw new Error('Expected argument of type customers.SysDeactivateCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_SysDeactivateCustomerResponse(buffer_arg) {
  return customers_pb.SysDeactivateCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_SysRenewOrActivateCustomerRequest(arg) {
  if (!(arg instanceof customers_pb.SysRenewOrActivateCustomerRequest)) {
    throw new Error('Expected argument of type customers.SysRenewOrActivateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_SysRenewOrActivateCustomerRequest(buffer_arg) {
  return customers_pb.SysRenewOrActivateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_SysRenewOrActivateCustomerResponse(arg) {
  if (!(arg instanceof customers_pb.SysRenewOrActivateCustomerResponse)) {
    throw new Error('Expected argument of type customers.SysRenewOrActivateCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_SysRenewOrActivateCustomerResponse(buffer_arg) {
  return customers_pb.SysRenewOrActivateCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Renew or activate a customer - initiated by user
authRenewOrActivateCustomer: {
    path: '/customers.CustomerService/AuthRenewOrActivateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.AuthRenewOrActivateCustomerRequest,
    responseType: customers_pb.AuthRenewOrActivateCustomerResponse,
    requestSerialize: serialize_customers_AuthRenewOrActivateCustomerRequest,
    requestDeserialize: deserialize_customers_AuthRenewOrActivateCustomerRequest,
    responseSerialize: serialize_customers_AuthRenewOrActivateCustomerResponse,
    responseDeserialize: deserialize_customers_AuthRenewOrActivateCustomerResponse,
  },
  // Deactivate a customer - initiated by user
authDeactivateCustomer: {
    path: '/customers.CustomerService/AuthDeactivateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.AuthDeactivateCustomerRequest,
    responseType: customers_pb.AuthDeactivateCustomerResponse,
    requestSerialize: serialize_customers_AuthDeactivateCustomerRequest,
    requestDeserialize: deserialize_customers_AuthDeactivateCustomerRequest,
    responseSerialize: serialize_customers_AuthDeactivateCustomerResponse,
    responseDeserialize: deserialize_customers_AuthDeactivateCustomerResponse,
  },
  // Renew or activate a customer - initiated by system
sysRenewOrActivateCustomer: {
    path: '/customers.CustomerService/SysRenewOrActivateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.SysRenewOrActivateCustomerRequest,
    responseType: customers_pb.SysRenewOrActivateCustomerResponse,
    requestSerialize: serialize_customers_SysRenewOrActivateCustomerRequest,
    requestDeserialize: deserialize_customers_SysRenewOrActivateCustomerRequest,
    responseSerialize: serialize_customers_SysRenewOrActivateCustomerResponse,
    responseDeserialize: deserialize_customers_SysRenewOrActivateCustomerResponse,
  },
  // Deactivate a customer - initiated by system
sysDeactivateCustomer: {
    path: '/customers.CustomerService/SysDeactivateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.SysDeactivateCustomerRequest,
    responseType: customers_pb.SysDeactivateCustomerResponse,
    requestSerialize: serialize_customers_SysDeactivateCustomerRequest,
    requestDeserialize: deserialize_customers_SysDeactivateCustomerRequest,
    responseSerialize: serialize_customers_SysDeactivateCustomerResponse,
    responseDeserialize: deserialize_customers_SysDeactivateCustomerResponse,
  },
};

exports.CustomerServiceClient = grpc.makeGenericClientConstructor(CustomerServiceService, 'CustomerService');
