// package: plan
// file: plan.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as plan_pb from "./plan_pb";
import * as common_pb from "./common_pb";
import * as radius_pb from "./radius_pb";
import * as planbook_pb from "./planbook_pb";

interface IPlanServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPlan: IPlanServiceService_ICreatePlan;
    updatePlan: IPlanServiceService_IUpdatePlan;
    getPlan: IPlanServiceService_IGetPlan;
    getPlans: IPlanServiceService_IGetPlans;
}

interface IPlanServiceService_ICreatePlan extends grpc.MethodDefinition<plan_pb.CreatePlanRequest, plan_pb.CreatePlanResponse> {
    path: "/plan.PlanService/CreatePlan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plan_pb.CreatePlanRequest>;
    requestDeserialize: grpc.deserialize<plan_pb.CreatePlanRequest>;
    responseSerialize: grpc.serialize<plan_pb.CreatePlanResponse>;
    responseDeserialize: grpc.deserialize<plan_pb.CreatePlanResponse>;
}
interface IPlanServiceService_IUpdatePlan extends grpc.MethodDefinition<plan_pb.UpdatePlanRequest, plan_pb.UpdatePlanResponse> {
    path: "/plan.PlanService/UpdatePlan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plan_pb.UpdatePlanRequest>;
    requestDeserialize: grpc.deserialize<plan_pb.UpdatePlanRequest>;
    responseSerialize: grpc.serialize<plan_pb.UpdatePlanResponse>;
    responseDeserialize: grpc.deserialize<plan_pb.UpdatePlanResponse>;
}
interface IPlanServiceService_IGetPlan extends grpc.MethodDefinition<plan_pb.GetPlanRequest, plan_pb.GetPlanResponse> {
    path: "/plan.PlanService/GetPlan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plan_pb.GetPlanRequest>;
    requestDeserialize: grpc.deserialize<plan_pb.GetPlanRequest>;
    responseSerialize: grpc.serialize<plan_pb.GetPlanResponse>;
    responseDeserialize: grpc.deserialize<plan_pb.GetPlanResponse>;
}
interface IPlanServiceService_IGetPlans extends grpc.MethodDefinition<plan_pb.GetPlansRequest, plan_pb.GetPlansResponse> {
    path: "/plan.PlanService/GetPlans";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plan_pb.GetPlansRequest>;
    requestDeserialize: grpc.deserialize<plan_pb.GetPlansRequest>;
    responseSerialize: grpc.serialize<plan_pb.GetPlansResponse>;
    responseDeserialize: grpc.deserialize<plan_pb.GetPlansResponse>;
}

export const PlanServiceService: IPlanServiceService;

export interface IPlanServiceServer extends grpc.UntypedServiceImplementation {
    createPlan: grpc.handleUnaryCall<plan_pb.CreatePlanRequest, plan_pb.CreatePlanResponse>;
    updatePlan: grpc.handleUnaryCall<plan_pb.UpdatePlanRequest, plan_pb.UpdatePlanResponse>;
    getPlan: grpc.handleUnaryCall<plan_pb.GetPlanRequest, plan_pb.GetPlanResponse>;
    getPlans: grpc.handleUnaryCall<plan_pb.GetPlansRequest, plan_pb.GetPlansResponse>;
}

export interface IPlanServiceClient {
    createPlan(request: plan_pb.CreatePlanRequest, callback: (error: grpc.ServiceError | null, response: plan_pb.CreatePlanResponse) => void): grpc.ClientUnaryCall;
    createPlan(request: plan_pb.CreatePlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plan_pb.CreatePlanResponse) => void): grpc.ClientUnaryCall;
    createPlan(request: plan_pb.CreatePlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plan_pb.CreatePlanResponse) => void): grpc.ClientUnaryCall;
    updatePlan(request: plan_pb.UpdatePlanRequest, callback: (error: grpc.ServiceError | null, response: plan_pb.UpdatePlanResponse) => void): grpc.ClientUnaryCall;
    updatePlan(request: plan_pb.UpdatePlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plan_pb.UpdatePlanResponse) => void): grpc.ClientUnaryCall;
    updatePlan(request: plan_pb.UpdatePlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plan_pb.UpdatePlanResponse) => void): grpc.ClientUnaryCall;
    getPlan(request: plan_pb.GetPlanRequest, callback: (error: grpc.ServiceError | null, response: plan_pb.GetPlanResponse) => void): grpc.ClientUnaryCall;
    getPlan(request: plan_pb.GetPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plan_pb.GetPlanResponse) => void): grpc.ClientUnaryCall;
    getPlan(request: plan_pb.GetPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plan_pb.GetPlanResponse) => void): grpc.ClientUnaryCall;
    getPlans(request: plan_pb.GetPlansRequest, callback: (error: grpc.ServiceError | null, response: plan_pb.GetPlansResponse) => void): grpc.ClientUnaryCall;
    getPlans(request: plan_pb.GetPlansRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plan_pb.GetPlansResponse) => void): grpc.ClientUnaryCall;
    getPlans(request: plan_pb.GetPlansRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plan_pb.GetPlansResponse) => void): grpc.ClientUnaryCall;
}

export class PlanServiceClient extends grpc.Client implements IPlanServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createPlan(request: plan_pb.CreatePlanRequest, callback: (error: grpc.ServiceError | null, response: plan_pb.CreatePlanResponse) => void): grpc.ClientUnaryCall;
    public createPlan(request: plan_pb.CreatePlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plan_pb.CreatePlanResponse) => void): grpc.ClientUnaryCall;
    public createPlan(request: plan_pb.CreatePlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plan_pb.CreatePlanResponse) => void): grpc.ClientUnaryCall;
    public updatePlan(request: plan_pb.UpdatePlanRequest, callback: (error: grpc.ServiceError | null, response: plan_pb.UpdatePlanResponse) => void): grpc.ClientUnaryCall;
    public updatePlan(request: plan_pb.UpdatePlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plan_pb.UpdatePlanResponse) => void): grpc.ClientUnaryCall;
    public updatePlan(request: plan_pb.UpdatePlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plan_pb.UpdatePlanResponse) => void): grpc.ClientUnaryCall;
    public getPlan(request: plan_pb.GetPlanRequest, callback: (error: grpc.ServiceError | null, response: plan_pb.GetPlanResponse) => void): grpc.ClientUnaryCall;
    public getPlan(request: plan_pb.GetPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plan_pb.GetPlanResponse) => void): grpc.ClientUnaryCall;
    public getPlan(request: plan_pb.GetPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plan_pb.GetPlanResponse) => void): grpc.ClientUnaryCall;
    public getPlans(request: plan_pb.GetPlansRequest, callback: (error: grpc.ServiceError | null, response: plan_pb.GetPlansResponse) => void): grpc.ClientUnaryCall;
    public getPlans(request: plan_pb.GetPlansRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plan_pb.GetPlansResponse) => void): grpc.ClientUnaryCall;
    public getPlans(request: plan_pb.GetPlansRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plan_pb.GetPlansResponse) => void): grpc.ClientUnaryCall;
}
