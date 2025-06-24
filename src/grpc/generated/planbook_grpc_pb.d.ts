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

export const PlanbookServiceService: IPlanbookServiceService;

export interface IPlanbookServiceServer extends grpc.UntypedServiceImplementation {
    createPlanbook: grpc.handleUnaryCall<planbook_pb.CreatePlanbookRequest, planbook_pb.CreatePlanbookResponse>;
    updatePlanbook: grpc.handleUnaryCall<planbook_pb.UpdatePlanbookRequest, planbook_pb.UpdatePlanbookResponse>;
    getPlanbook: grpc.handleUnaryCall<planbook_pb.GetPlanbookRequest, planbook_pb.GetPlanbookResponse>;
    getPlanbooks: grpc.handleUnaryCall<planbook_pb.GetPlanbooksRequest, planbook_pb.GetPlanbooksResponse>;
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
}
