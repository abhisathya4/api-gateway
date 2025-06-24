// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// organization.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var organization_pb = require('./organization_pb.js');
var common_pb = require('./common_pb.js');
var business_pb = require('./business_pb.js');
var config_pb = require('./config_pb.js');

function serialize_organization_CreateOrganizationRequest(arg) {
  if (!(arg instanceof organization_pb.CreateOrganizationRequest)) {
    throw new Error('Expected argument of type organization.CreateOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_organization_CreateOrganizationRequest(buffer_arg) {
  return organization_pb.CreateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_organization_CreateOrganizationResponse(arg) {
  if (!(arg instanceof organization_pb.CreateOrganizationResponse)) {
    throw new Error('Expected argument of type organization.CreateOrganizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_organization_CreateOrganizationResponse(buffer_arg) {
  return organization_pb.CreateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_organization_GetOrganizationRequest(arg) {
  if (!(arg instanceof organization_pb.GetOrganizationRequest)) {
    throw new Error('Expected argument of type organization.GetOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_organization_GetOrganizationRequest(buffer_arg) {
  return organization_pb.GetOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_organization_GetOrganizationResponse(arg) {
  if (!(arg instanceof organization_pb.GetOrganizationResponse)) {
    throw new Error('Expected argument of type organization.GetOrganizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_organization_GetOrganizationResponse(buffer_arg) {
  return organization_pb.GetOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_organization_UpdateOrganizationRequest(arg) {
  if (!(arg instanceof organization_pb.UpdateOrganizationRequest)) {
    throw new Error('Expected argument of type organization.UpdateOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_organization_UpdateOrganizationRequest(buffer_arg) {
  return organization_pb.UpdateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_organization_UpdateOrganizationResponse(arg) {
  if (!(arg instanceof organization_pb.UpdateOrganizationResponse)) {
    throw new Error('Expected argument of type organization.UpdateOrganizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_organization_UpdateOrganizationResponse(buffer_arg) {
  return organization_pb.UpdateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Organization service for managing organizations
var OrganizationServiceService = exports.OrganizationServiceService = {
  // Create a new organization at the system level
createOrganization: {
    path: '/organization.OrganizationService/CreateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: organization_pb.CreateOrganizationRequest,
    responseType: organization_pb.CreateOrganizationResponse,
    requestSerialize: serialize_organization_CreateOrganizationRequest,
    requestDeserialize: deserialize_organization_CreateOrganizationRequest,
    responseSerialize: serialize_organization_CreateOrganizationResponse,
    responseDeserialize: deserialize_organization_CreateOrganizationResponse,
  },
  // Get organization details with authentication
getOrganization: {
    path: '/organization.OrganizationService/GetOrganization',
    requestStream: false,
    responseStream: false,
    requestType: organization_pb.GetOrganizationRequest,
    responseType: organization_pb.GetOrganizationResponse,
    requestSerialize: serialize_organization_GetOrganizationRequest,
    requestDeserialize: deserialize_organization_GetOrganizationRequest,
    responseSerialize: serialize_organization_GetOrganizationResponse,
    responseDeserialize: deserialize_organization_GetOrganizationResponse,
  },
  // Update organization details with authentication
updateOrganization: {
    path: '/organization.OrganizationService/UpdateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: organization_pb.UpdateOrganizationRequest,
    responseType: organization_pb.UpdateOrganizationResponse,
    requestSerialize: serialize_organization_UpdateOrganizationRequest,
    requestDeserialize: deserialize_organization_UpdateOrganizationRequest,
    responseSerialize: serialize_organization_UpdateOrganizationResponse,
    responseDeserialize: deserialize_organization_UpdateOrganizationResponse,
  },
};

exports.OrganizationServiceClient = grpc.makeGenericClientConstructor(OrganizationServiceService, 'OrganizationService');
