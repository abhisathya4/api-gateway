// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var active$sessions_pb = require('./active-sessions_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_nucleus_provisioning_GetActiveSessionsRequest(arg) {
  if (!(arg instanceof active$sessions_pb.GetActiveSessionsRequest)) {
    throw new Error('Expected argument of type nucleus.provisioning.GetActiveSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nucleus_provisioning_GetActiveSessionsRequest(buffer_arg) {
  return active$sessions_pb.GetActiveSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nucleus_provisioning_GetActiveSessionsResponse(arg) {
  if (!(arg instanceof active$sessions_pb.GetActiveSessionsResponse)) {
    throw new Error('Expected argument of type nucleus.provisioning.GetActiveSessionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nucleus_provisioning_GetActiveSessionsResponse(buffer_arg) {
  return active$sessions_pb.GetActiveSessionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Active Sessions service for retrieving current RADIUS sessions
var ActiveSessionsServiceService = exports.ActiveSessionsServiceService = {
  // Get active sessions with pagination and filtering options
getActiveSessions: {
    path: '/nucleus.provisioning.ActiveSessionsService/GetActiveSessions',
    requestStream: false,
    responseStream: false,
    requestType: active$sessions_pb.GetActiveSessionsRequest,
    responseType: active$sessions_pb.GetActiveSessionsResponse,
    requestSerialize: serialize_nucleus_provisioning_GetActiveSessionsRequest,
    requestDeserialize: deserialize_nucleus_provisioning_GetActiveSessionsRequest,
    responseSerialize: serialize_nucleus_provisioning_GetActiveSessionsResponse,
    responseDeserialize: deserialize_nucleus_provisioning_GetActiveSessionsResponse,
  },
};

exports.ActiveSessionsServiceClient = grpc.makeGenericClientConstructor(ActiveSessionsServiceService, 'ActiveSessionsService');
