// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// business.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var business_pb = require('./business_pb.js');
var common_pb = require('./common_pb.js');
var radius_pb = require('./radius_pb.js');
var planbook_pb = require('./planbook_pb.js');

function serialize_business_CreateBusinessRequest(arg) {
  if (!(arg instanceof business_pb.CreateBusinessRequest)) {
    throw new Error('Expected argument of type business.CreateBusinessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_business_CreateBusinessRequest(buffer_arg) {
  return business_pb.CreateBusinessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_business_CreateBusinessResponse(arg) {
  if (!(arg instanceof business_pb.CreateBusinessResponse)) {
    throw new Error('Expected argument of type business.CreateBusinessResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_business_CreateBusinessResponse(buffer_arg) {
  return business_pb.CreateBusinessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_business_GetBusinessRequest(arg) {
  if (!(arg instanceof business_pb.GetBusinessRequest)) {
    throw new Error('Expected argument of type business.GetBusinessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_business_GetBusinessRequest(buffer_arg) {
  return business_pb.GetBusinessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_business_GetBusinessResponse(arg) {
  if (!(arg instanceof business_pb.GetBusinessResponse)) {
    throw new Error('Expected argument of type business.GetBusinessResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_business_GetBusinessResponse(buffer_arg) {
  return business_pb.GetBusinessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_business_GetBusinessesRequest(arg) {
  if (!(arg instanceof business_pb.GetBusinessesRequest)) {
    throw new Error('Expected argument of type business.GetBusinessesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_business_GetBusinessesRequest(buffer_arg) {
  return business_pb.GetBusinessesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_business_GetBusinessesResponse(arg) {
  if (!(arg instanceof business_pb.GetBusinessesResponse)) {
    throw new Error('Expected argument of type business.GetBusinessesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_business_GetBusinessesResponse(buffer_arg) {
  return business_pb.GetBusinessesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_business_UpdateBusinessRequest(arg) {
  if (!(arg instanceof business_pb.UpdateBusinessRequest)) {
    throw new Error('Expected argument of type business.UpdateBusinessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_business_UpdateBusinessRequest(buffer_arg) {
  return business_pb.UpdateBusinessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_business_UpdateBusinessResponse(arg) {
  if (!(arg instanceof business_pb.UpdateBusinessResponse)) {
    throw new Error('Expected argument of type business.UpdateBusinessResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_business_UpdateBusinessResponse(buffer_arg) {
  return business_pb.UpdateBusinessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Business service for managing business entities
var BusinessServiceService = exports.BusinessServiceService = {
  // Create a new business
createBusiness: {
    path: '/business.BusinessService/CreateBusiness',
    requestStream: false,
    responseStream: false,
    requestType: business_pb.CreateBusinessRequest,
    responseType: business_pb.CreateBusinessResponse,
    requestSerialize: serialize_business_CreateBusinessRequest,
    requestDeserialize: deserialize_business_CreateBusinessRequest,
    responseSerialize: serialize_business_CreateBusinessResponse,
    responseDeserialize: deserialize_business_CreateBusinessResponse,
  },
  // Update an existing business
updateBusiness: {
    path: '/business.BusinessService/UpdateBusiness',
    requestStream: false,
    responseStream: false,
    requestType: business_pb.UpdateBusinessRequest,
    responseType: business_pb.UpdateBusinessResponse,
    requestSerialize: serialize_business_UpdateBusinessRequest,
    requestDeserialize: deserialize_business_UpdateBusinessRequest,
    responseSerialize: serialize_business_UpdateBusinessResponse,
    responseDeserialize: deserialize_business_UpdateBusinessResponse,
  },
  // Get a specific business by ID
getBusiness: {
    path: '/business.BusinessService/GetBusiness',
    requestStream: false,
    responseStream: false,
    requestType: business_pb.GetBusinessRequest,
    responseType: business_pb.GetBusinessResponse,
    requestSerialize: serialize_business_GetBusinessRequest,
    requestDeserialize: deserialize_business_GetBusinessRequest,
    responseSerialize: serialize_business_GetBusinessResponse,
    responseDeserialize: deserialize_business_GetBusinessResponse,
  },
  // Get all businesses
getBusinesses: {
    path: '/business.BusinessService/GetBusinesses',
    requestStream: false,
    responseStream: false,
    requestType: business_pb.GetBusinessesRequest,
    responseType: business_pb.GetBusinessesResponse,
    requestSerialize: serialize_business_GetBusinessesRequest,
    requestDeserialize: deserialize_business_GetBusinessesRequest,
    responseSerialize: serialize_business_GetBusinessesResponse,
    responseDeserialize: deserialize_business_GetBusinessesResponse,
  },
};

exports.BusinessServiceClient = grpc.makeGenericClientConstructor(BusinessServiceService, 'BusinessService');
