// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// plan.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var plan_pb = require('./plan_pb.js');
var common_pb = require('./common_pb.js');
var radius_pb = require('./radius_pb.js');
var planbook_pb = require('./planbook_pb.js');

function serialize_plan_CreatePlanRequest(arg) {
  if (!(arg instanceof plan_pb.CreatePlanRequest)) {
    throw new Error('Expected argument of type plan.CreatePlanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plan_CreatePlanRequest(buffer_arg) {
  return plan_pb.CreatePlanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plan_CreatePlanResponse(arg) {
  if (!(arg instanceof plan_pb.CreatePlanResponse)) {
    throw new Error('Expected argument of type plan.CreatePlanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plan_CreatePlanResponse(buffer_arg) {
  return plan_pb.CreatePlanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plan_GetPlanRequest(arg) {
  if (!(arg instanceof plan_pb.GetPlanRequest)) {
    throw new Error('Expected argument of type plan.GetPlanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plan_GetPlanRequest(buffer_arg) {
  return plan_pb.GetPlanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plan_GetPlanResponse(arg) {
  if (!(arg instanceof plan_pb.GetPlanResponse)) {
    throw new Error('Expected argument of type plan.GetPlanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plan_GetPlanResponse(buffer_arg) {
  return plan_pb.GetPlanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plan_GetPlansRequest(arg) {
  if (!(arg instanceof plan_pb.GetPlansRequest)) {
    throw new Error('Expected argument of type plan.GetPlansRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plan_GetPlansRequest(buffer_arg) {
  return plan_pb.GetPlansRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plan_GetPlansResponse(arg) {
  if (!(arg instanceof plan_pb.GetPlansResponse)) {
    throw new Error('Expected argument of type plan.GetPlansResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plan_GetPlansResponse(buffer_arg) {
  return plan_pb.GetPlansResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plan_UpdatePlanRequest(arg) {
  if (!(arg instanceof plan_pb.UpdatePlanRequest)) {
    throw new Error('Expected argument of type plan.UpdatePlanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plan_UpdatePlanRequest(buffer_arg) {
  return plan_pb.UpdatePlanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plan_UpdatePlanResponse(arg) {
  if (!(arg instanceof plan_pb.UpdatePlanResponse)) {
    throw new Error('Expected argument of type plan.UpdatePlanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plan_UpdatePlanResponse(buffer_arg) {
  return plan_pb.UpdatePlanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Plan service for managing internet service plans
var PlanServiceService = exports.PlanServiceService = {
  // Create a new internet service plan
createPlan: {
    path: '/plan.PlanService/CreatePlan',
    requestStream: false,
    responseStream: false,
    requestType: plan_pb.CreatePlanRequest,
    responseType: plan_pb.CreatePlanResponse,
    requestSerialize: serialize_plan_CreatePlanRequest,
    requestDeserialize: deserialize_plan_CreatePlanRequest,
    responseSerialize: serialize_plan_CreatePlanResponse,
    responseDeserialize: deserialize_plan_CreatePlanResponse,
  },
  // Update an existing internet service plan
updatePlan: {
    path: '/plan.PlanService/UpdatePlan',
    requestStream: false,
    responseStream: false,
    requestType: plan_pb.UpdatePlanRequest,
    responseType: plan_pb.UpdatePlanResponse,
    requestSerialize: serialize_plan_UpdatePlanRequest,
    requestDeserialize: deserialize_plan_UpdatePlanRequest,
    responseSerialize: serialize_plan_UpdatePlanResponse,
    responseDeserialize: deserialize_plan_UpdatePlanResponse,
  },
  // Get a specific internet service plan by ID
getPlan: {
    path: '/plan.PlanService/GetPlan',
    requestStream: false,
    responseStream: false,
    requestType: plan_pb.GetPlanRequest,
    responseType: plan_pb.GetPlanResponse,
    requestSerialize: serialize_plan_GetPlanRequest,
    requestDeserialize: deserialize_plan_GetPlanRequest,
    responseSerialize: serialize_plan_GetPlanResponse,
    responseDeserialize: deserialize_plan_GetPlanResponse,
  },
  // Get all internet service plans
getPlans: {
    path: '/plan.PlanService/GetPlans',
    requestStream: false,
    responseStream: false,
    requestType: plan_pb.GetPlansRequest,
    responseType: plan_pb.GetPlansResponse,
    requestSerialize: serialize_plan_GetPlansRequest,
    requestDeserialize: deserialize_plan_GetPlansRequest,
    responseSerialize: serialize_plan_GetPlansResponse,
    responseDeserialize: deserialize_plan_GetPlansResponse,
  },
};

exports.PlanServiceClient = grpc.makeGenericClientConstructor(PlanServiceService, 'PlanService');
