// package: config
// file: config.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as config_pb from "./config_pb";
import * as common_pb from "./common_pb";

interface IConfigServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOrganizationConfig: IConfigServiceService_IGetOrganizationConfig;
    updateOrganizationConfig: IConfigServiceService_IUpdateOrganizationConfig;
}

interface IConfigServiceService_IGetOrganizationConfig extends grpc.MethodDefinition<config_pb.GetOrganizationConfigRequest, config_pb.GetOrganizationConfigResponse> {
    path: "/config.ConfigService/GetOrganizationConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<config_pb.GetOrganizationConfigRequest>;
    requestDeserialize: grpc.deserialize<config_pb.GetOrganizationConfigRequest>;
    responseSerialize: grpc.serialize<config_pb.GetOrganizationConfigResponse>;
    responseDeserialize: grpc.deserialize<config_pb.GetOrganizationConfigResponse>;
}
interface IConfigServiceService_IUpdateOrganizationConfig extends grpc.MethodDefinition<config_pb.UpdateOrganizationConfigRequest, config_pb.UpdateOrganizationConfigResponse> {
    path: "/config.ConfigService/UpdateOrganizationConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<config_pb.UpdateOrganizationConfigRequest>;
    requestDeserialize: grpc.deserialize<config_pb.UpdateOrganizationConfigRequest>;
    responseSerialize: grpc.serialize<config_pb.UpdateOrganizationConfigResponse>;
    responseDeserialize: grpc.deserialize<config_pb.UpdateOrganizationConfigResponse>;
}

export const ConfigServiceService: IConfigServiceService;

export interface IConfigServiceServer extends grpc.UntypedServiceImplementation {
    getOrganizationConfig: grpc.handleUnaryCall<config_pb.GetOrganizationConfigRequest, config_pb.GetOrganizationConfigResponse>;
    updateOrganizationConfig: grpc.handleUnaryCall<config_pb.UpdateOrganizationConfigRequest, config_pb.UpdateOrganizationConfigResponse>;
}

export interface IConfigServiceClient {
    getOrganizationConfig(request: config_pb.GetOrganizationConfigRequest, callback: (error: grpc.ServiceError | null, response: config_pb.GetOrganizationConfigResponse) => void): grpc.ClientUnaryCall;
    getOrganizationConfig(request: config_pb.GetOrganizationConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: config_pb.GetOrganizationConfigResponse) => void): grpc.ClientUnaryCall;
    getOrganizationConfig(request: config_pb.GetOrganizationConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: config_pb.GetOrganizationConfigResponse) => void): grpc.ClientUnaryCall;
    updateOrganizationConfig(request: config_pb.UpdateOrganizationConfigRequest, callback: (error: grpc.ServiceError | null, response: config_pb.UpdateOrganizationConfigResponse) => void): grpc.ClientUnaryCall;
    updateOrganizationConfig(request: config_pb.UpdateOrganizationConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: config_pb.UpdateOrganizationConfigResponse) => void): grpc.ClientUnaryCall;
    updateOrganizationConfig(request: config_pb.UpdateOrganizationConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: config_pb.UpdateOrganizationConfigResponse) => void): grpc.ClientUnaryCall;
}

export class ConfigServiceClient extends grpc.Client implements IConfigServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getOrganizationConfig(request: config_pb.GetOrganizationConfigRequest, callback: (error: grpc.ServiceError | null, response: config_pb.GetOrganizationConfigResponse) => void): grpc.ClientUnaryCall;
    public getOrganizationConfig(request: config_pb.GetOrganizationConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: config_pb.GetOrganizationConfigResponse) => void): grpc.ClientUnaryCall;
    public getOrganizationConfig(request: config_pb.GetOrganizationConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: config_pb.GetOrganizationConfigResponse) => void): grpc.ClientUnaryCall;
    public updateOrganizationConfig(request: config_pb.UpdateOrganizationConfigRequest, callback: (error: grpc.ServiceError | null, response: config_pb.UpdateOrganizationConfigResponse) => void): grpc.ClientUnaryCall;
    public updateOrganizationConfig(request: config_pb.UpdateOrganizationConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: config_pb.UpdateOrganizationConfigResponse) => void): grpc.ClientUnaryCall;
    public updateOrganizationConfig(request: config_pb.UpdateOrganizationConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: config_pb.UpdateOrganizationConfigResponse) => void): grpc.ClientUnaryCall;
}
