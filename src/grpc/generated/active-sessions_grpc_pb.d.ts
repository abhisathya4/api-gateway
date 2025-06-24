// package: nucleus.provisioning
// file: active-sessions.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as active_sessions_pb from "./active-sessions_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

interface IActiveSessionsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getActiveSessions: IActiveSessionsServiceService_IGetActiveSessions;
}

interface IActiveSessionsServiceService_IGetActiveSessions extends grpc.MethodDefinition<active_sessions_pb.GetActiveSessionsRequest, active_sessions_pb.GetActiveSessionsResponse> {
    path: "/nucleus.provisioning.ActiveSessionsService/GetActiveSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<active_sessions_pb.GetActiveSessionsRequest>;
    requestDeserialize: grpc.deserialize<active_sessions_pb.GetActiveSessionsRequest>;
    responseSerialize: grpc.serialize<active_sessions_pb.GetActiveSessionsResponse>;
    responseDeserialize: grpc.deserialize<active_sessions_pb.GetActiveSessionsResponse>;
}

export const ActiveSessionsServiceService: IActiveSessionsServiceService;

export interface IActiveSessionsServiceServer extends grpc.UntypedServiceImplementation {
    getActiveSessions: grpc.handleUnaryCall<active_sessions_pb.GetActiveSessionsRequest, active_sessions_pb.GetActiveSessionsResponse>;
}

export interface IActiveSessionsServiceClient {
    getActiveSessions(request: active_sessions_pb.GetActiveSessionsRequest, callback: (error: grpc.ServiceError | null, response: active_sessions_pb.GetActiveSessionsResponse) => void): grpc.ClientUnaryCall;
    getActiveSessions(request: active_sessions_pb.GetActiveSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: active_sessions_pb.GetActiveSessionsResponse) => void): grpc.ClientUnaryCall;
    getActiveSessions(request: active_sessions_pb.GetActiveSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: active_sessions_pb.GetActiveSessionsResponse) => void): grpc.ClientUnaryCall;
}

export class ActiveSessionsServiceClient extends grpc.Client implements IActiveSessionsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getActiveSessions(request: active_sessions_pb.GetActiveSessionsRequest, callback: (error: grpc.ServiceError | null, response: active_sessions_pb.GetActiveSessionsResponse) => void): grpc.ClientUnaryCall;
    public getActiveSessions(request: active_sessions_pb.GetActiveSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: active_sessions_pb.GetActiveSessionsResponse) => void): grpc.ClientUnaryCall;
    public getActiveSessions(request: active_sessions_pb.GetActiveSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: active_sessions_pb.GetActiveSessionsResponse) => void): grpc.ClientUnaryCall;
}
