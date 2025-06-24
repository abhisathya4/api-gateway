// package: business
// file: business.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as business_pb from "./business_pb";
import * as common_pb from "./common_pb";
import * as radius_pb from "./radius_pb";
import * as planbook_pb from "./planbook_pb";

interface IBusinessServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createBusiness: IBusinessServiceService_ICreateBusiness;
    updateBusiness: IBusinessServiceService_IUpdateBusiness;
    getBusiness: IBusinessServiceService_IGetBusiness;
    getBusinesses: IBusinessServiceService_IGetBusinesses;
}

interface IBusinessServiceService_ICreateBusiness extends grpc.MethodDefinition<business_pb.CreateBusinessRequest, business_pb.CreateBusinessResponse> {
    path: "/business.BusinessService/CreateBusiness";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<business_pb.CreateBusinessRequest>;
    requestDeserialize: grpc.deserialize<business_pb.CreateBusinessRequest>;
    responseSerialize: grpc.serialize<business_pb.CreateBusinessResponse>;
    responseDeserialize: grpc.deserialize<business_pb.CreateBusinessResponse>;
}
interface IBusinessServiceService_IUpdateBusiness extends grpc.MethodDefinition<business_pb.UpdateBusinessRequest, business_pb.UpdateBusinessResponse> {
    path: "/business.BusinessService/UpdateBusiness";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<business_pb.UpdateBusinessRequest>;
    requestDeserialize: grpc.deserialize<business_pb.UpdateBusinessRequest>;
    responseSerialize: grpc.serialize<business_pb.UpdateBusinessResponse>;
    responseDeserialize: grpc.deserialize<business_pb.UpdateBusinessResponse>;
}
interface IBusinessServiceService_IGetBusiness extends grpc.MethodDefinition<business_pb.GetBusinessRequest, business_pb.GetBusinessResponse> {
    path: "/business.BusinessService/GetBusiness";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<business_pb.GetBusinessRequest>;
    requestDeserialize: grpc.deserialize<business_pb.GetBusinessRequest>;
    responseSerialize: grpc.serialize<business_pb.GetBusinessResponse>;
    responseDeserialize: grpc.deserialize<business_pb.GetBusinessResponse>;
}
interface IBusinessServiceService_IGetBusinesses extends grpc.MethodDefinition<business_pb.GetBusinessesRequest, business_pb.GetBusinessesResponse> {
    path: "/business.BusinessService/GetBusinesses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<business_pb.GetBusinessesRequest>;
    requestDeserialize: grpc.deserialize<business_pb.GetBusinessesRequest>;
    responseSerialize: grpc.serialize<business_pb.GetBusinessesResponse>;
    responseDeserialize: grpc.deserialize<business_pb.GetBusinessesResponse>;
}

export const BusinessServiceService: IBusinessServiceService;

export interface IBusinessServiceServer extends grpc.UntypedServiceImplementation {
    createBusiness: grpc.handleUnaryCall<business_pb.CreateBusinessRequest, business_pb.CreateBusinessResponse>;
    updateBusiness: grpc.handleUnaryCall<business_pb.UpdateBusinessRequest, business_pb.UpdateBusinessResponse>;
    getBusiness: grpc.handleUnaryCall<business_pb.GetBusinessRequest, business_pb.GetBusinessResponse>;
    getBusinesses: grpc.handleUnaryCall<business_pb.GetBusinessesRequest, business_pb.GetBusinessesResponse>;
}

export interface IBusinessServiceClient {
    createBusiness(request: business_pb.CreateBusinessRequest, callback: (error: grpc.ServiceError | null, response: business_pb.CreateBusinessResponse) => void): grpc.ClientUnaryCall;
    createBusiness(request: business_pb.CreateBusinessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: business_pb.CreateBusinessResponse) => void): grpc.ClientUnaryCall;
    createBusiness(request: business_pb.CreateBusinessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: business_pb.CreateBusinessResponse) => void): grpc.ClientUnaryCall;
    updateBusiness(request: business_pb.UpdateBusinessRequest, callback: (error: grpc.ServiceError | null, response: business_pb.UpdateBusinessResponse) => void): grpc.ClientUnaryCall;
    updateBusiness(request: business_pb.UpdateBusinessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: business_pb.UpdateBusinessResponse) => void): grpc.ClientUnaryCall;
    updateBusiness(request: business_pb.UpdateBusinessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: business_pb.UpdateBusinessResponse) => void): grpc.ClientUnaryCall;
    getBusiness(request: business_pb.GetBusinessRequest, callback: (error: grpc.ServiceError | null, response: business_pb.GetBusinessResponse) => void): grpc.ClientUnaryCall;
    getBusiness(request: business_pb.GetBusinessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: business_pb.GetBusinessResponse) => void): grpc.ClientUnaryCall;
    getBusiness(request: business_pb.GetBusinessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: business_pb.GetBusinessResponse) => void): grpc.ClientUnaryCall;
    getBusinesses(request: business_pb.GetBusinessesRequest, callback: (error: grpc.ServiceError | null, response: business_pb.GetBusinessesResponse) => void): grpc.ClientUnaryCall;
    getBusinesses(request: business_pb.GetBusinessesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: business_pb.GetBusinessesResponse) => void): grpc.ClientUnaryCall;
    getBusinesses(request: business_pb.GetBusinessesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: business_pb.GetBusinessesResponse) => void): grpc.ClientUnaryCall;
}

export class BusinessServiceClient extends grpc.Client implements IBusinessServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createBusiness(request: business_pb.CreateBusinessRequest, callback: (error: grpc.ServiceError | null, response: business_pb.CreateBusinessResponse) => void): grpc.ClientUnaryCall;
    public createBusiness(request: business_pb.CreateBusinessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: business_pb.CreateBusinessResponse) => void): grpc.ClientUnaryCall;
    public createBusiness(request: business_pb.CreateBusinessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: business_pb.CreateBusinessResponse) => void): grpc.ClientUnaryCall;
    public updateBusiness(request: business_pb.UpdateBusinessRequest, callback: (error: grpc.ServiceError | null, response: business_pb.UpdateBusinessResponse) => void): grpc.ClientUnaryCall;
    public updateBusiness(request: business_pb.UpdateBusinessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: business_pb.UpdateBusinessResponse) => void): grpc.ClientUnaryCall;
    public updateBusiness(request: business_pb.UpdateBusinessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: business_pb.UpdateBusinessResponse) => void): grpc.ClientUnaryCall;
    public getBusiness(request: business_pb.GetBusinessRequest, callback: (error: grpc.ServiceError | null, response: business_pb.GetBusinessResponse) => void): grpc.ClientUnaryCall;
    public getBusiness(request: business_pb.GetBusinessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: business_pb.GetBusinessResponse) => void): grpc.ClientUnaryCall;
    public getBusiness(request: business_pb.GetBusinessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: business_pb.GetBusinessResponse) => void): grpc.ClientUnaryCall;
    public getBusinesses(request: business_pb.GetBusinessesRequest, callback: (error: grpc.ServiceError | null, response: business_pb.GetBusinessesResponse) => void): grpc.ClientUnaryCall;
    public getBusinesses(request: business_pb.GetBusinessesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: business_pb.GetBusinessesResponse) => void): grpc.ClientUnaryCall;
    public getBusinesses(request: business_pb.GetBusinessesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: business_pb.GetBusinessesResponse) => void): grpc.ClientUnaryCall;
}
