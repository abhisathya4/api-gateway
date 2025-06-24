// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// planbook.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var planbook_pb = require('./planbook_pb.js');
var common_pb = require('./common_pb.js');
var radius_pb = require('./radius_pb.js');

function serialize_planbook_CreatePlanbookRequest(arg) {
  if (!(arg instanceof planbook_pb.CreatePlanbookRequest)) {
    throw new Error('Expected argument of type planbook.CreatePlanbookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_planbook_CreatePlanbookRequest(buffer_arg) {
  return planbook_pb.CreatePlanbookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_planbook_CreatePlanbookResponse(arg) {
  if (!(arg instanceof planbook_pb.CreatePlanbookResponse)) {
    throw new Error('Expected argument of type planbook.CreatePlanbookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_planbook_CreatePlanbookResponse(buffer_arg) {
  return planbook_pb.CreatePlanbookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_planbook_GetPlanbookRequest(arg) {
  if (!(arg instanceof planbook_pb.GetPlanbookRequest)) {
    throw new Error('Expected argument of type planbook.GetPlanbookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_planbook_GetPlanbookRequest(buffer_arg) {
  return planbook_pb.GetPlanbookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_planbook_GetPlanbookResponse(arg) {
  if (!(arg instanceof planbook_pb.GetPlanbookResponse)) {
    throw new Error('Expected argument of type planbook.GetPlanbookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_planbook_GetPlanbookResponse(buffer_arg) {
  return planbook_pb.GetPlanbookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_planbook_GetPlanbooksRequest(arg) {
  if (!(arg instanceof planbook_pb.GetPlanbooksRequest)) {
    throw new Error('Expected argument of type planbook.GetPlanbooksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_planbook_GetPlanbooksRequest(buffer_arg) {
  return planbook_pb.GetPlanbooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_planbook_GetPlanbooksResponse(arg) {
  if (!(arg instanceof planbook_pb.GetPlanbooksResponse)) {
    throw new Error('Expected argument of type planbook.GetPlanbooksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_planbook_GetPlanbooksResponse(buffer_arg) {
  return planbook_pb.GetPlanbooksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_planbook_UpdatePlanbookRequest(arg) {
  if (!(arg instanceof planbook_pb.UpdatePlanbookRequest)) {
    throw new Error('Expected argument of type planbook.UpdatePlanbookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_planbook_UpdatePlanbookRequest(buffer_arg) {
  return planbook_pb.UpdatePlanbookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_planbook_UpdatePlanbookResponse(arg) {
  if (!(arg instanceof planbook_pb.UpdatePlanbookResponse)) {
    throw new Error('Expected argument of type planbook.UpdatePlanbookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_planbook_UpdatePlanbookResponse(buffer_arg) {
  return planbook_pb.UpdatePlanbookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Planbook service for managing planbook entries
var PlanbookServiceService = exports.PlanbookServiceService = {
  // Create a new planbook entry
createPlanbook: {
    path: '/planbook.PlanbookService/CreatePlanbook',
    requestStream: false,
    responseStream: false,
    requestType: planbook_pb.CreatePlanbookRequest,
    responseType: planbook_pb.CreatePlanbookResponse,
    requestSerialize: serialize_planbook_CreatePlanbookRequest,
    requestDeserialize: deserialize_planbook_CreatePlanbookRequest,
    responseSerialize: serialize_planbook_CreatePlanbookResponse,
    responseDeserialize: deserialize_planbook_CreatePlanbookResponse,
  },
  // Update a planbook entry's pricing information
updatePlanbook: {
    path: '/planbook.PlanbookService/UpdatePlanbook',
    requestStream: false,
    responseStream: false,
    requestType: planbook_pb.UpdatePlanbookRequest,
    responseType: planbook_pb.UpdatePlanbookResponse,
    requestSerialize: serialize_planbook_UpdatePlanbookRequest,
    requestDeserialize: deserialize_planbook_UpdatePlanbookRequest,
    responseSerialize: serialize_planbook_UpdatePlanbookResponse,
    responseDeserialize: deserialize_planbook_UpdatePlanbookResponse,
  },
  // Get a specific planbook entry by ID
getPlanbook: {
    path: '/planbook.PlanbookService/GetPlanbook',
    requestStream: false,
    responseStream: false,
    requestType: planbook_pb.GetPlanbookRequest,
    responseType: planbook_pb.GetPlanbookResponse,
    requestSerialize: serialize_planbook_GetPlanbookRequest,
    requestDeserialize: deserialize_planbook_GetPlanbookRequest,
    responseSerialize: serialize_planbook_GetPlanbookResponse,
    responseDeserialize: deserialize_planbook_GetPlanbookResponse,
  },
  // Get all planbook entries
getPlanbooks: {
    path: '/planbook.PlanbookService/GetPlanbooks',
    requestStream: false,
    responseStream: false,
    requestType: planbook_pb.GetPlanbooksRequest,
    responseType: planbook_pb.GetPlanbooksResponse,
    requestSerialize: serialize_planbook_GetPlanbooksRequest,
    requestDeserialize: deserialize_planbook_GetPlanbooksRequest,
    responseSerialize: serialize_planbook_GetPlanbooksResponse,
    responseDeserialize: deserialize_planbook_GetPlanbooksResponse,
  },
};

exports.PlanbookServiceClient = grpc.makeGenericClientConstructor(PlanbookServiceService, 'PlanbookService');
