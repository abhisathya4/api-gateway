// package: nas
// file: nas.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as nas_pb from "./nas_pb";
import * as common_pb from "./common_pb";

interface INasServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registerNasDevice: INasServiceService_IRegisterNasDevice;
    sysRegisterNasDevice: INasServiceService_ISysRegisterNasDevice;
}

interface INasServiceService_IRegisterNasDevice extends grpc.MethodDefinition<nas_pb.RegisterNasDeviceRequest, nas_pb.RegisterNasDeviceResponse> {
    path: "/nas.NasService/RegisterNasDevice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<nas_pb.RegisterNasDeviceRequest>;
    requestDeserialize: grpc.deserialize<nas_pb.RegisterNasDeviceRequest>;
    responseSerialize: grpc.serialize<nas_pb.RegisterNasDeviceResponse>;
    responseDeserialize: grpc.deserialize<nas_pb.RegisterNasDeviceResponse>;
}
interface INasServiceService_ISysRegisterNasDevice extends grpc.MethodDefinition<nas_pb.SysRegisterNasDeviceRequest, nas_pb.RegisterNasDeviceResponse> {
    path: "/nas.NasService/SysRegisterNasDevice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<nas_pb.SysRegisterNasDeviceRequest>;
    requestDeserialize: grpc.deserialize<nas_pb.SysRegisterNasDeviceRequest>;
    responseSerialize: grpc.serialize<nas_pb.RegisterNasDeviceResponse>;
    responseDeserialize: grpc.deserialize<nas_pb.RegisterNasDeviceResponse>;
}

export const NasServiceService: INasServiceService;

export interface INasServiceServer extends grpc.UntypedServiceImplementation {
    registerNasDevice: grpc.handleUnaryCall<nas_pb.RegisterNasDeviceRequest, nas_pb.RegisterNasDeviceResponse>;
    sysRegisterNasDevice: grpc.handleUnaryCall<nas_pb.SysRegisterNasDeviceRequest, nas_pb.RegisterNasDeviceResponse>;
}

export interface INasServiceClient {
    registerNasDevice(request: nas_pb.RegisterNasDeviceRequest, callback: (error: grpc.ServiceError | null, response: nas_pb.RegisterNasDeviceResponse) => void): grpc.ClientUnaryCall;
    registerNasDevice(request: nas_pb.RegisterNasDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nas_pb.RegisterNasDeviceResponse) => void): grpc.ClientUnaryCall;
    registerNasDevice(request: nas_pb.RegisterNasDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nas_pb.RegisterNasDeviceResponse) => void): grpc.ClientUnaryCall;
    sysRegisterNasDevice(request: nas_pb.SysRegisterNasDeviceRequest, callback: (error: grpc.ServiceError | null, response: nas_pb.RegisterNasDeviceResponse) => void): grpc.ClientUnaryCall;
    sysRegisterNasDevice(request: nas_pb.SysRegisterNasDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nas_pb.RegisterNasDeviceResponse) => void): grpc.ClientUnaryCall;
    sysRegisterNasDevice(request: nas_pb.SysRegisterNasDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nas_pb.RegisterNasDeviceResponse) => void): grpc.ClientUnaryCall;
}

export class NasServiceClient extends grpc.Client implements INasServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public registerNasDevice(request: nas_pb.RegisterNasDeviceRequest, callback: (error: grpc.ServiceError | null, response: nas_pb.RegisterNasDeviceResponse) => void): grpc.ClientUnaryCall;
    public registerNasDevice(request: nas_pb.RegisterNasDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nas_pb.RegisterNasDeviceResponse) => void): grpc.ClientUnaryCall;
    public registerNasDevice(request: nas_pb.RegisterNasDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nas_pb.RegisterNasDeviceResponse) => void): grpc.ClientUnaryCall;
    public sysRegisterNasDevice(request: nas_pb.SysRegisterNasDeviceRequest, callback: (error: grpc.ServiceError | null, response: nas_pb.RegisterNasDeviceResponse) => void): grpc.ClientUnaryCall;
    public sysRegisterNasDevice(request: nas_pb.SysRegisterNasDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nas_pb.RegisterNasDeviceResponse) => void): grpc.ClientUnaryCall;
    public sysRegisterNasDevice(request: nas_pb.SysRegisterNasDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nas_pb.RegisterNasDeviceResponse) => void): grpc.ClientUnaryCall;
}
