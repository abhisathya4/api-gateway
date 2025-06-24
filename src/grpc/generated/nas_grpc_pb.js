// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// nas.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var nas_pb = require('./nas_pb.js');
var common_pb = require('./common_pb.js');

function serialize_nas_RegisterNasDeviceRequest(arg) {
  if (!(arg instanceof nas_pb.RegisterNasDeviceRequest)) {
    throw new Error('Expected argument of type nas.RegisterNasDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nas_RegisterNasDeviceRequest(buffer_arg) {
  return nas_pb.RegisterNasDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nas_RegisterNasDeviceResponse(arg) {
  if (!(arg instanceof nas_pb.RegisterNasDeviceResponse)) {
    throw new Error('Expected argument of type nas.RegisterNasDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nas_RegisterNasDeviceResponse(buffer_arg) {
  return nas_pb.RegisterNasDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nas_SysRegisterNasDeviceRequest(arg) {
  if (!(arg instanceof nas_pb.SysRegisterNasDeviceRequest)) {
    throw new Error('Expected argument of type nas.SysRegisterNasDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nas_SysRegisterNasDeviceRequest(buffer_arg) {
  return nas_pb.SysRegisterNasDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// NAS service for managing Network Access Server devices
var NasServiceService = exports.NasServiceService = {
  // Register a new NAS device with authentication
registerNasDevice: {
    path: '/nas.NasService/RegisterNasDevice',
    requestStream: false,
    responseStream: false,
    requestType: nas_pb.RegisterNasDeviceRequest,
    responseType: nas_pb.RegisterNasDeviceResponse,
    requestSerialize: serialize_nas_RegisterNasDeviceRequest,
    requestDeserialize: deserialize_nas_RegisterNasDeviceRequest,
    responseSerialize: serialize_nas_RegisterNasDeviceResponse,
    responseDeserialize: deserialize_nas_RegisterNasDeviceResponse,
  },
  // Register a new NAS device at the system level
sysRegisterNasDevice: {
    path: '/nas.NasService/SysRegisterNasDevice',
    requestStream: false,
    responseStream: false,
    requestType: nas_pb.SysRegisterNasDeviceRequest,
    responseType: nas_pb.RegisterNasDeviceResponse,
    requestSerialize: serialize_nas_SysRegisterNasDeviceRequest,
    requestDeserialize: deserialize_nas_SysRegisterNasDeviceRequest,
    responseSerialize: serialize_nas_RegisterNasDeviceResponse,
    responseDeserialize: deserialize_nas_RegisterNasDeviceResponse,
  },
};

exports.NasServiceClient = grpc.makeGenericClientConstructor(NasServiceService, 'NasService');
