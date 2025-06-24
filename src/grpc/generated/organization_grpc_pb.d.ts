// package: organization
// file: organization.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as organization_pb from "./organization_pb";
import * as common_pb from "./common_pb";
import * as business_pb from "./business_pb";
import * as config_pb from "./config_pb";

interface IOrganizationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOrganization: IOrganizationServiceService_ICreateOrganization;
    getOrganization: IOrganizationServiceService_IGetOrganization;
    updateOrganization: IOrganizationServiceService_IUpdateOrganization;
}

interface IOrganizationServiceService_ICreateOrganization extends grpc.MethodDefinition<organization_pb.CreateOrganizationRequest, organization_pb.CreateOrganizationResponse> {
    path: "/organization.OrganizationService/CreateOrganization";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organization_pb.CreateOrganizationRequest>;
    requestDeserialize: grpc.deserialize<organization_pb.CreateOrganizationRequest>;
    responseSerialize: grpc.serialize<organization_pb.CreateOrganizationResponse>;
    responseDeserialize: grpc.deserialize<organization_pb.CreateOrganizationResponse>;
}
interface IOrganizationServiceService_IGetOrganization extends grpc.MethodDefinition<organization_pb.GetOrganizationRequest, organization_pb.GetOrganizationResponse> {
    path: "/organization.OrganizationService/GetOrganization";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organization_pb.GetOrganizationRequest>;
    requestDeserialize: grpc.deserialize<organization_pb.GetOrganizationRequest>;
    responseSerialize: grpc.serialize<organization_pb.GetOrganizationResponse>;
    responseDeserialize: grpc.deserialize<organization_pb.GetOrganizationResponse>;
}
interface IOrganizationServiceService_IUpdateOrganization extends grpc.MethodDefinition<organization_pb.UpdateOrganizationRequest, organization_pb.UpdateOrganizationResponse> {
    path: "/organization.OrganizationService/UpdateOrganization";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organization_pb.UpdateOrganizationRequest>;
    requestDeserialize: grpc.deserialize<organization_pb.UpdateOrganizationRequest>;
    responseSerialize: grpc.serialize<organization_pb.UpdateOrganizationResponse>;
    responseDeserialize: grpc.deserialize<organization_pb.UpdateOrganizationResponse>;
}

export const OrganizationServiceService: IOrganizationServiceService;

export interface IOrganizationServiceServer extends grpc.UntypedServiceImplementation {
    createOrganization: grpc.handleUnaryCall<organization_pb.CreateOrganizationRequest, organization_pb.CreateOrganizationResponse>;
    getOrganization: grpc.handleUnaryCall<organization_pb.GetOrganizationRequest, organization_pb.GetOrganizationResponse>;
    updateOrganization: grpc.handleUnaryCall<organization_pb.UpdateOrganizationRequest, organization_pb.UpdateOrganizationResponse>;
}

export interface IOrganizationServiceClient {
    createOrganization(request: organization_pb.CreateOrganizationRequest, callback: (error: grpc.ServiceError | null, response: organization_pb.CreateOrganizationResponse) => void): grpc.ClientUnaryCall;
    createOrganization(request: organization_pb.CreateOrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_pb.CreateOrganizationResponse) => void): grpc.ClientUnaryCall;
    createOrganization(request: organization_pb.CreateOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_pb.CreateOrganizationResponse) => void): grpc.ClientUnaryCall;
    getOrganization(request: organization_pb.GetOrganizationRequest, callback: (error: grpc.ServiceError | null, response: organization_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    getOrganization(request: organization_pb.GetOrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    getOrganization(request: organization_pb.GetOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    updateOrganization(request: organization_pb.UpdateOrganizationRequest, callback: (error: grpc.ServiceError | null, response: organization_pb.UpdateOrganizationResponse) => void): grpc.ClientUnaryCall;
    updateOrganization(request: organization_pb.UpdateOrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_pb.UpdateOrganizationResponse) => void): grpc.ClientUnaryCall;
    updateOrganization(request: organization_pb.UpdateOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_pb.UpdateOrganizationResponse) => void): grpc.ClientUnaryCall;
}

export class OrganizationServiceClient extends grpc.Client implements IOrganizationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createOrganization(request: organization_pb.CreateOrganizationRequest, callback: (error: grpc.ServiceError | null, response: organization_pb.CreateOrganizationResponse) => void): grpc.ClientUnaryCall;
    public createOrganization(request: organization_pb.CreateOrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_pb.CreateOrganizationResponse) => void): grpc.ClientUnaryCall;
    public createOrganization(request: organization_pb.CreateOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_pb.CreateOrganizationResponse) => void): grpc.ClientUnaryCall;
    public getOrganization(request: organization_pb.GetOrganizationRequest, callback: (error: grpc.ServiceError | null, response: organization_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    public getOrganization(request: organization_pb.GetOrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    public getOrganization(request: organization_pb.GetOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_pb.GetOrganizationResponse) => void): grpc.ClientUnaryCall;
    public updateOrganization(request: organization_pb.UpdateOrganizationRequest, callback: (error: grpc.ServiceError | null, response: organization_pb.UpdateOrganizationResponse) => void): grpc.ClientUnaryCall;
    public updateOrganization(request: organization_pb.UpdateOrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_pb.UpdateOrganizationResponse) => void): grpc.ClientUnaryCall;
    public updateOrganization(request: organization_pb.UpdateOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_pb.UpdateOrganizationResponse) => void): grpc.ClientUnaryCall;
}
