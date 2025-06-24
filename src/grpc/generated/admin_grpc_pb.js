// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// admin.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var admin_pb = require('./admin_pb.js');
var common_pb = require('./common_pb.js');

function serialize_admin_CreateAdminRequest(arg) {
  if (!(arg instanceof admin_pb.CreateAdminRequest)) {
    throw new Error('Expected argument of type admin.CreateAdminRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_CreateAdminRequest(buffer_arg) {
  return admin_pb.CreateAdminRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_CreateAdminResponse(arg) {
  if (!(arg instanceof admin_pb.CreateAdminResponse)) {
    throw new Error('Expected argument of type admin.CreateAdminResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_CreateAdminResponse(buffer_arg) {
  return admin_pb.CreateAdminResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_DeleteAdminRequest(arg) {
  if (!(arg instanceof admin_pb.DeleteAdminRequest)) {
    throw new Error('Expected argument of type admin.DeleteAdminRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_DeleteAdminRequest(buffer_arg) {
  return admin_pb.DeleteAdminRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_DeleteAdminResponse(arg) {
  if (!(arg instanceof admin_pb.DeleteAdminResponse)) {
    throw new Error('Expected argument of type admin.DeleteAdminResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_DeleteAdminResponse(buffer_arg) {
  return admin_pb.DeleteAdminResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_GetAdminRequest(arg) {
  if (!(arg instanceof admin_pb.GetAdminRequest)) {
    throw new Error('Expected argument of type admin.GetAdminRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_GetAdminRequest(buffer_arg) {
  return admin_pb.GetAdminRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_GetAdminResponse(arg) {
  if (!(arg instanceof admin_pb.GetAdminResponse)) {
    throw new Error('Expected argument of type admin.GetAdminResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_GetAdminResponse(buffer_arg) {
  return admin_pb.GetAdminResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_GetAllAdminsRequest(arg) {
  if (!(arg instanceof admin_pb.GetAllAdminsRequest)) {
    throw new Error('Expected argument of type admin.GetAllAdminsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_GetAllAdminsRequest(buffer_arg) {
  return admin_pb.GetAllAdminsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_GetAllAdminsResponse(arg) {
  if (!(arg instanceof admin_pb.GetAllAdminsResponse)) {
    throw new Error('Expected argument of type admin.GetAllAdminsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_GetAllAdminsResponse(buffer_arg) {
  return admin_pb.GetAllAdminsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_UpdateAdminRequest(arg) {
  if (!(arg instanceof admin_pb.UpdateAdminRequest)) {
    throw new Error('Expected argument of type admin.UpdateAdminRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_UpdateAdminRequest(buffer_arg) {
  return admin_pb.UpdateAdminRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_UpdateAdminResponse(arg) {
  if (!(arg instanceof admin_pb.UpdateAdminResponse)) {
    throw new Error('Expected argument of type admin.UpdateAdminResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_UpdateAdminResponse(buffer_arg) {
  return admin_pb.UpdateAdminResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Admin service for managing organization administrators
var AdminServiceService = exports.AdminServiceService = {
  // Create a new admin
createAdmin: {
    path: '/admin.AdminService/CreateAdmin',
    requestStream: false,
    responseStream: false,
    requestType: admin_pb.CreateAdminRequest,
    responseType: admin_pb.CreateAdminResponse,
    requestSerialize: serialize_admin_CreateAdminRequest,
    requestDeserialize: deserialize_admin_CreateAdminRequest,
    responseSerialize: serialize_admin_CreateAdminResponse,
    responseDeserialize: deserialize_admin_CreateAdminResponse,
  },
  // Get a specific admin by ID, email, or auth_id
getAdmin: {
    path: '/admin.AdminService/GetAdmin',
    requestStream: false,
    responseStream: false,
    requestType: admin_pb.GetAdminRequest,
    responseType: admin_pb.GetAdminResponse,
    requestSerialize: serialize_admin_GetAdminRequest,
    requestDeserialize: deserialize_admin_GetAdminRequest,
    responseSerialize: serialize_admin_GetAdminResponse,
    responseDeserialize: deserialize_admin_GetAdminResponse,
  },
  // Get all admins for the organization
getAllAdmins: {
    path: '/admin.AdminService/GetAllAdmins',
    requestStream: false,
    responseStream: false,
    requestType: admin_pb.GetAllAdminsRequest,
    responseType: admin_pb.GetAllAdminsResponse,
    requestSerialize: serialize_admin_GetAllAdminsRequest,
    requestDeserialize: deserialize_admin_GetAllAdminsRequest,
    responseSerialize: serialize_admin_GetAllAdminsResponse,
    responseDeserialize: deserialize_admin_GetAllAdminsResponse,
  },
  // Update an admin's information
updateAdmin: {
    path: '/admin.AdminService/UpdateAdmin',
    requestStream: false,
    responseStream: false,
    requestType: admin_pb.UpdateAdminRequest,
    responseType: admin_pb.UpdateAdminResponse,
    requestSerialize: serialize_admin_UpdateAdminRequest,
    requestDeserialize: deserialize_admin_UpdateAdminRequest,
    responseSerialize: serialize_admin_UpdateAdminResponse,
    responseDeserialize: deserialize_admin_UpdateAdminResponse,
  },
  // Delete an admin
deleteAdmin: {
    path: '/admin.AdminService/DeleteAdmin',
    requestStream: false,
    responseStream: false,
    requestType: admin_pb.DeleteAdminRequest,
    responseType: admin_pb.DeleteAdminResponse,
    requestSerialize: serialize_admin_DeleteAdminRequest,
    requestDeserialize: deserialize_admin_DeleteAdminRequest,
    responseSerialize: serialize_admin_DeleteAdminResponse,
    responseDeserialize: deserialize_admin_DeleteAdminResponse,
  },
};

exports.AdminServiceClient = grpc.makeGenericClientConstructor(AdminServiceService, 'AdminService');
