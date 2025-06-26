// package: planbook
// file: planbook.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as planbook_pb from "./planbook_pb";
import * as common_pb from "./common_pb";
import * as radius_pb from "./radius_pb";

interface IPlanbookServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPlanbook: IPlanbookServiceService_ICreatePlanbook;
    updatePlanbook: IPlanbookServiceService_IUpdatePlanbook;
    getPlanbook: IPlanbookServiceService_IGetPlanbook;
    getPlanbooks: IPlanbookServiceService_IGetPlanbooks;
    getBusinessesPlanbookForPlan: IPlanbookServiceService_IGetBusinessesPlanbookForPlan;
    getPlansPlanbookForBusiness: IPlanbookServiceService_IGetPlansPlanbookForBusiness;
}

interface IPlanbookServiceService_ICreatePlanbook extends grpc.MethodDefinition<planbook_pb.CreatePlanbookRequest, planbook_pb.CreatePlanbookResponse> {
    path: "/planbook.PlanbookService/CreatePlanbook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<planbook_pb.CreatePlanbookRequest>;
    requestDeserialize: grpc.deserialize<planbook_pb.CreatePlanbookRequest>;
    responseSerialize: grpc.serialize<planbook_pb.CreatePlanbookResponse>;
    responseDeserialize: grpc.deserialize<planbook_pb.CreatePlanbookResponse>;
}
interface IPlanbookServiceService_IUpdatePlanbook extends grpc.MethodDefinition<planbook_pb.UpdatePlanbookRequest, planbook_pb.UpdatePlanbookResponse> {
    path: "/planbook.PlanbookService/UpdatePlanbook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<planbook_pb.UpdatePlanbookRequest>;
    requestDeserialize: grpc.deserialize<planbook_pb.UpdatePlanbookRequest>;
    responseSerialize: grpc.serialize<planbook_pb.UpdatePlanbookResponse>;
    responseDeserialize: grpc.deserialize<planbook_pb.UpdatePlanbookResponse>;
}
interface IPlanbookServiceService_IGetPlanbook extends grpc.MethodDefinition<planbook_pb.GetPlanbookRequest, planbook_pb.GetPlanbookResponse> {
    path: "/planbook.PlanbookService/GetPlanbook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<planbook_pb.GetPlanbookRequest>;
    requestDeserialize: grpc.deserialize<planbook_pb.GetPlanbookRequest>;
    responseSerialize: grpc.serialize<planbook_pb.GetPlanbookResponse>;
    responseDeserialize: grpc.deserialize<planbook_pb.GetPlanbookResponse>;
}
interface IPlanbookServiceService_IGetPlanbooks extends grpc.MethodDefinition<planbook_pb.GetPlanbooksRequest, planbook_pb.GetPlanbooksResponse> {
    path: "/planbook.PlanbookService/GetPlanbooks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<planbook_pb.GetPlanbooksRequest>;
    requestDeserialize: grpc.deserialize<planbook_pb.GetPlanbooksRequest>;
    responseSerialize: grpc.serialize<planbook_pb.GetPlanbooksResponse>;
    responseDeserialize: grpc.deserialize<planbook_pb.GetPlanbooksResponse>;
}
interface IPlanbookServiceService_IGetBusinessesPlanbookForPlan extends grpc.MethodDefinition<planbook_pb.GetBusinessesPlanbookForPlanRequest, planbook_pb.GetBusinessesPlanbookForPlanResponse> {
    path: "/planbook.PlanbookService/GetBusinessesPlanbookForPlan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<planbook_pb.GetBusinessesPlanbookForPlanRequest>;
    requestDeserialize: grpc.deserialize<planbook_pb.GetBusinessesPlanbookForPlanRequest>;
    responseSerialize: grpc.serialize<planbook_pb.GetBusinessesPlanbookForPlanResponse>;
    responseDeserialize: grpc.deserialize<planbook_pb.GetBusinessesPlanbookForPlanResponse>;
}
interface IPlanbookServiceService_IGetPlansPlanbookForBusiness extends grpc.MethodDefinition<planbook_pb.GetPlansPlanbookForBusinessRequest, planbook_pb.GetPlansPlanbookForBusinessResponse> {
    path: "/planbook.PlanbookService/GetPlansPlanbookForBusiness";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<planbook_pb.GetPlansPlanbookForBusinessRequest>;
    requestDeserialize: grpc.deserialize<planbook_pb.GetPlansPlanbookForBusinessRequest>;
    responseSerialize: grpc.serialize<planbook_pb.GetPlansPlanbookForBusinessResponse>;
    responseDeserialize: grpc.deserialize<planbook_pb.GetPlansPlanbookForBusinessResponse>;
}

export const PlanbookServiceService: IPlanbookServiceService;

export interface IPlanbookServiceServer extends grpc.UntypedServiceImplementation {
    createPlanbook: grpc.handleUnaryCall<planbook_pb.CreatePlanbookRequest, planbook_pb.CreatePlanbookResponse>;
    updatePlanbook: grpc.handleUnaryCall<planbook_pb.UpdatePlanbookRequest, planbook_pb.UpdatePlanbookResponse>;
    getPlanbook: grpc.handleUnaryCall<planbook_pb.GetPlanbookRequest, planbook_pb.GetPlanbookResponse>;
    getPlanbooks: grpc.handleUnaryCall<planbook_pb.GetPlanbooksRequest, planbook_pb.GetPlanbooksResponse>;
    getBusinessesPlanbookForPlan: grpc.handleUnaryCall<planbook_pb.GetBusinessesPlanbookForPlanRequest, planbook_pb.GetBusinessesPlanbookForPlanResponse>;
    getPlansPlanbookForBusiness: grpc.handleUnaryCall<planbook_pb.GetPlansPlanbookForBusinessRequest, planbook_pb.GetPlansPlanbookForBusinessResponse>;
}

export interface IPlanbookServiceClient {
    createPlanbook(request: planbook_pb.CreatePlanbookRequest, callback: (error: grpc.ServiceError | null, response: planbook_pb.CreatePlanbookResponse) => void): grpc.ClientUnaryCall;
    createPlanbook(request: planbook_pb.CreatePlanbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: planbook_pb.CreatePlanbookResponse) => void): grpc.ClientUnaryCall;
    createPlanbook(request: planbook_pb.CreatePlanbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: planbook_pb.CreatePlanbookResponse) => void): grpc.ClientUnaryCall;
    updatePlanbook(request: planbook_pb.UpdatePlanbookRequest, callback: (error: grpc.ServiceError | null, response: planbook_pb.UpdatePlanbookResponse) => void): grpc.ClientUnaryCall;
    updatePlanbook(request: planbook_pb.UpdatePlanbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: planbook_pb.UpdatePlanbookResponse) => void): grpc.ClientUnaryCall;
    updatePlanbook(request: planbook_pb.UpdatePlanbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: planbook_pb.UpdatePlanbookResponse) => void): grpc.ClientUnaryCall;
    getPlanbook(request: planbook_pb.GetPlanbookRequest, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlanbookResponse) => void): grpc.ClientUnaryCall;
    getPlanbook(request: planbook_pb.GetPlanbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlanbookResponse) => void): grpc.ClientUnaryCall;
    getPlanbook(request: planbook_pb.GetPlanbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlanbookResponse) => void): grpc.ClientUnaryCall;
    getPlanbooks(request: planbook_pb.GetPlanbooksRequest, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlanbooksResponse) => void): grpc.ClientUnaryCall;
    getPlanbooks(request: planbook_pb.GetPlanbooksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlanbooksResponse) => void): grpc.ClientUnaryCall;
    getPlanbooks(request: planbook_pb.GetPlanbooksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlanbooksResponse) => void): grpc.ClientUnaryCall;
    getBusinessesPlanbookForPlan(request: planbook_pb.GetBusinessesPlanbookForPlanRequest, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetBusinessesPlanbookForPlanResponse) => void): grpc.ClientUnaryCall;
    getBusinessesPlanbookForPlan(request: planbook_pb.GetBusinessesPlanbookForPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetBusinessesPlanbookForPlanResponse) => void): grpc.ClientUnaryCall;
    getBusinessesPlanbookForPlan(request: planbook_pb.GetBusinessesPlanbookForPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetBusinessesPlanbookForPlanResponse) => void): grpc.ClientUnaryCall;
    getPlansPlanbookForBusiness(request: planbook_pb.GetPlansPlanbookForBusinessRequest, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlansPlanbookForBusinessResponse) => void): grpc.ClientUnaryCall;
    getPlansPlanbookForBusiness(request: planbook_pb.GetPlansPlanbookForBusinessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlansPlanbookForBusinessResponse) => void): grpc.ClientUnaryCall;
    getPlansPlanbookForBusiness(request: planbook_pb.GetPlansPlanbookForBusinessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlansPlanbookForBusinessResponse) => void): grpc.ClientUnaryCall;
}

export class PlanbookServiceClient extends grpc.Client implements IPlanbookServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createPlanbook(request: planbook_pb.CreatePlanbookRequest, callback: (error: grpc.ServiceError | null, response: planbook_pb.CreatePlanbookResponse) => void): grpc.ClientUnaryCall;
    public createPlanbook(request: planbook_pb.CreatePlanbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: planbook_pb.CreatePlanbookResponse) => void): grpc.ClientUnaryCall;
    public createPlanbook(request: planbook_pb.CreatePlanbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: planbook_pb.CreatePlanbookResponse) => void): grpc.ClientUnaryCall;
    public updatePlanbook(request: planbook_pb.UpdatePlanbookRequest, callback: (error: grpc.ServiceError | null, response: planbook_pb.UpdatePlanbookResponse) => void): grpc.ClientUnaryCall;
    public updatePlanbook(request: planbook_pb.UpdatePlanbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: planbook_pb.UpdatePlanbookResponse) => void): grpc.ClientUnaryCall;
    public updatePlanbook(request: planbook_pb.UpdatePlanbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: planbook_pb.UpdatePlanbookResponse) => void): grpc.ClientUnaryCall;
    public getPlanbook(request: planbook_pb.GetPlanbookRequest, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlanbookResponse) => void): grpc.ClientUnaryCall;
    public getPlanbook(request: planbook_pb.GetPlanbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlanbookResponse) => void): grpc.ClientUnaryCall;
    public getPlanbook(request: planbook_pb.GetPlanbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlanbookResponse) => void): grpc.ClientUnaryCall;
    public getPlanbooks(request: planbook_pb.GetPlanbooksRequest, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlanbooksResponse) => void): grpc.ClientUnaryCall;
    public getPlanbooks(request: planbook_pb.GetPlanbooksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlanbooksResponse) => void): grpc.ClientUnaryCall;
    public getPlanbooks(request: planbook_pb.GetPlanbooksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlanbooksResponse) => void): grpc.ClientUnaryCall;
    public getBusinessesPlanbookForPlan(request: planbook_pb.GetBusinessesPlanbookForPlanRequest, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetBusinessesPlanbookForPlanResponse) => void): grpc.ClientUnaryCall;
    public getBusinessesPlanbookForPlan(request: planbook_pb.GetBusinessesPlanbookForPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetBusinessesPlanbookForPlanResponse) => void): grpc.ClientUnaryCall;
    public getBusinessesPlanbookForPlan(request: planbook_pb.GetBusinessesPlanbookForPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetBusinessesPlanbookForPlanResponse) => void): grpc.ClientUnaryCall;
    public getPlansPlanbookForBusiness(request: planbook_pb.GetPlansPlanbookForBusinessRequest, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlansPlanbookForBusinessResponse) => void): grpc.ClientUnaryCall;
    public getPlansPlanbookForBusiness(request: planbook_pb.GetPlansPlanbookForBusinessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlansPlanbookForBusinessResponse) => void): grpc.ClientUnaryCall;
    public getPlansPlanbookForBusiness(request: planbook_pb.GetPlansPlanbookForBusinessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: planbook_pb.GetPlansPlanbookForBusinessResponse) => void): grpc.ClientUnaryCall;
}
