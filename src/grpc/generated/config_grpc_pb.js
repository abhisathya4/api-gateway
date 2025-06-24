// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// config.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var config_pb = require('./config_pb.js');
var common_pb = require('./common_pb.js');

function serialize_config_GetOrganizationConfigRequest(arg) {
  if (!(arg instanceof config_pb.GetOrganizationConfigRequest)) {
    throw new Error('Expected argument of type config.GetOrganizationConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_GetOrganizationConfigRequest(buffer_arg) {
  return config_pb.GetOrganizationConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_GetOrganizationConfigResponse(arg) {
  if (!(arg instanceof config_pb.GetOrganizationConfigResponse)) {
    throw new Error('Expected argument of type config.GetOrganizationConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_GetOrganizationConfigResponse(buffer_arg) {
  return config_pb.GetOrganizationConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_UpdateOrganizationConfigRequest(arg) {
  if (!(arg instanceof config_pb.UpdateOrganizationConfigRequest)) {
    throw new Error('Expected argument of type config.UpdateOrganizationConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_UpdateOrganizationConfigRequest(buffer_arg) {
  return config_pb.UpdateOrganizationConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_UpdateOrganizationConfigResponse(arg) {
  if (!(arg instanceof config_pb.UpdateOrganizationConfigResponse)) {
    throw new Error('Expected argument of type config.UpdateOrganizationConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_UpdateOrganizationConfigResponse(buffer_arg) {
  return config_pb.UpdateOrganizationConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Config service for managing organization configurations
var ConfigServiceService = exports.ConfigServiceService = {
  // Get organization config with authentication
getOrganizationConfig: {
    path: '/config.ConfigService/GetOrganizationConfig',
    requestStream: false,
    responseStream: false,
    requestType: config_pb.GetOrganizationConfigRequest,
    responseType: config_pb.GetOrganizationConfigResponse,
    requestSerialize: serialize_config_GetOrganizationConfigRequest,
    requestDeserialize: deserialize_config_GetOrganizationConfigRequest,
    responseSerialize: serialize_config_GetOrganizationConfigResponse,
    responseDeserialize: deserialize_config_GetOrganizationConfigResponse,
  },
  // Update organization config with authentication
updateOrganizationConfig: {
    path: '/config.ConfigService/UpdateOrganizationConfig',
    requestStream: false,
    responseStream: false,
    requestType: config_pb.UpdateOrganizationConfigRequest,
    responseType: config_pb.UpdateOrganizationConfigResponse,
    requestSerialize: serialize_config_UpdateOrganizationConfigRequest,
    requestDeserialize: deserialize_config_UpdateOrganizationConfigRequest,
    responseSerialize: serialize_config_UpdateOrganizationConfigResponse,
    responseDeserialize: deserialize_config_UpdateOrganizationConfigResponse,
  },
};

exports.ConfigServiceClient = grpc.makeGenericClientConstructor(ConfigServiceService, 'ConfigService');
