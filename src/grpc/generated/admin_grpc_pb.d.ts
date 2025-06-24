// package: admin
// file: admin.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as admin_pb from "./admin_pb";
import * as common_pb from "./common_pb";

interface IAdminServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createAdmin: IAdminServiceService_ICreateAdmin;
    getAdmin: IAdminServiceService_IGetAdmin;
    getAllAdmins: IAdminServiceService_IGetAllAdmins;
    updateAdmin: IAdminServiceService_IUpdateAdmin;
    deleteAdmin: IAdminServiceService_IDeleteAdmin;
}

interface IAdminServiceService_ICreateAdmin extends grpc.MethodDefinition<admin_pb.CreateAdminRequest, admin_pb.CreateAdminResponse> {
    path: "/admin.AdminService/CreateAdmin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<admin_pb.CreateAdminRequest>;
    requestDeserialize: grpc.deserialize<admin_pb.CreateAdminRequest>;
    responseSerialize: grpc.serialize<admin_pb.CreateAdminResponse>;
    responseDeserialize: grpc.deserialize<admin_pb.CreateAdminResponse>;
}
interface IAdminServiceService_IGetAdmin extends grpc.MethodDefinition<admin_pb.GetAdminRequest, admin_pb.GetAdminResponse> {
    path: "/admin.AdminService/GetAdmin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<admin_pb.GetAdminRequest>;
    requestDeserialize: grpc.deserialize<admin_pb.GetAdminRequest>;
    responseSerialize: grpc.serialize<admin_pb.GetAdminResponse>;
    responseDeserialize: grpc.deserialize<admin_pb.GetAdminResponse>;
}
interface IAdminServiceService_IGetAllAdmins extends grpc.MethodDefinition<admin_pb.GetAllAdminsRequest, admin_pb.GetAllAdminsResponse> {
    path: "/admin.AdminService/GetAllAdmins";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<admin_pb.GetAllAdminsRequest>;
    requestDeserialize: grpc.deserialize<admin_pb.GetAllAdminsRequest>;
    responseSerialize: grpc.serialize<admin_pb.GetAllAdminsResponse>;
    responseDeserialize: grpc.deserialize<admin_pb.GetAllAdminsResponse>;
}
interface IAdminServiceService_IUpdateAdmin extends grpc.MethodDefinition<admin_pb.UpdateAdminRequest, admin_pb.UpdateAdminResponse> {
    path: "/admin.AdminService/UpdateAdmin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<admin_pb.UpdateAdminRequest>;
    requestDeserialize: grpc.deserialize<admin_pb.UpdateAdminRequest>;
    responseSerialize: grpc.serialize<admin_pb.UpdateAdminResponse>;
    responseDeserialize: grpc.deserialize<admin_pb.UpdateAdminResponse>;
}
interface IAdminServiceService_IDeleteAdmin extends grpc.MethodDefinition<admin_pb.DeleteAdminRequest, admin_pb.DeleteAdminResponse> {
    path: "/admin.AdminService/DeleteAdmin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<admin_pb.DeleteAdminRequest>;
    requestDeserialize: grpc.deserialize<admin_pb.DeleteAdminRequest>;
    responseSerialize: grpc.serialize<admin_pb.DeleteAdminResponse>;
    responseDeserialize: grpc.deserialize<admin_pb.DeleteAdminResponse>;
}

export const AdminServiceService: IAdminServiceService;

export interface IAdminServiceServer extends grpc.UntypedServiceImplementation {
    createAdmin: grpc.handleUnaryCall<admin_pb.CreateAdminRequest, admin_pb.CreateAdminResponse>;
    getAdmin: grpc.handleUnaryCall<admin_pb.GetAdminRequest, admin_pb.GetAdminResponse>;
    getAllAdmins: grpc.handleUnaryCall<admin_pb.GetAllAdminsRequest, admin_pb.GetAllAdminsResponse>;
    updateAdmin: grpc.handleUnaryCall<admin_pb.UpdateAdminRequest, admin_pb.UpdateAdminResponse>;
    deleteAdmin: grpc.handleUnaryCall<admin_pb.DeleteAdminRequest, admin_pb.DeleteAdminResponse>;
}

export interface IAdminServiceClient {
    createAdmin(request: admin_pb.CreateAdminRequest, callback: (error: grpc.ServiceError | null, response: admin_pb.CreateAdminResponse) => void): grpc.ClientUnaryCall;
    createAdmin(request: admin_pb.CreateAdminRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_pb.CreateAdminResponse) => void): grpc.ClientUnaryCall;
    createAdmin(request: admin_pb.CreateAdminRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_pb.CreateAdminResponse) => void): grpc.ClientUnaryCall;
    getAdmin(request: admin_pb.GetAdminRequest, callback: (error: grpc.ServiceError | null, response: admin_pb.GetAdminResponse) => void): grpc.ClientUnaryCall;
    getAdmin(request: admin_pb.GetAdminRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_pb.GetAdminResponse) => void): grpc.ClientUnaryCall;
    getAdmin(request: admin_pb.GetAdminRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_pb.GetAdminResponse) => void): grpc.ClientUnaryCall;
    getAllAdmins(request: admin_pb.GetAllAdminsRequest, callback: (error: grpc.ServiceError | null, response: admin_pb.GetAllAdminsResponse) => void): grpc.ClientUnaryCall;
    getAllAdmins(request: admin_pb.GetAllAdminsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_pb.GetAllAdminsResponse) => void): grpc.ClientUnaryCall;
    getAllAdmins(request: admin_pb.GetAllAdminsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_pb.GetAllAdminsResponse) => void): grpc.ClientUnaryCall;
    updateAdmin(request: admin_pb.UpdateAdminRequest, callback: (error: grpc.ServiceError | null, response: admin_pb.UpdateAdminResponse) => void): grpc.ClientUnaryCall;
    updateAdmin(request: admin_pb.UpdateAdminRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_pb.UpdateAdminResponse) => void): grpc.ClientUnaryCall;
    updateAdmin(request: admin_pb.UpdateAdminRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_pb.UpdateAdminResponse) => void): grpc.ClientUnaryCall;
    deleteAdmin(request: admin_pb.DeleteAdminRequest, callback: (error: grpc.ServiceError | null, response: admin_pb.DeleteAdminResponse) => void): grpc.ClientUnaryCall;
    deleteAdmin(request: admin_pb.DeleteAdminRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_pb.DeleteAdminResponse) => void): grpc.ClientUnaryCall;
    deleteAdmin(request: admin_pb.DeleteAdminRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_pb.DeleteAdminResponse) => void): grpc.ClientUnaryCall;
}

export class AdminServiceClient extends grpc.Client implements IAdminServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createAdmin(request: admin_pb.CreateAdminRequest, callback: (error: grpc.ServiceError | null, response: admin_pb.CreateAdminResponse) => void): grpc.ClientUnaryCall;
    public createAdmin(request: admin_pb.CreateAdminRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_pb.CreateAdminResponse) => void): grpc.ClientUnaryCall;
    public createAdmin(request: admin_pb.CreateAdminRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_pb.CreateAdminResponse) => void): grpc.ClientUnaryCall;
    public getAdmin(request: admin_pb.GetAdminRequest, callback: (error: grpc.ServiceError | null, response: admin_pb.GetAdminResponse) => void): grpc.ClientUnaryCall;
    public getAdmin(request: admin_pb.GetAdminRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_pb.GetAdminResponse) => void): grpc.ClientUnaryCall;
    public getAdmin(request: admin_pb.GetAdminRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_pb.GetAdminResponse) => void): grpc.ClientUnaryCall;
    public getAllAdmins(request: admin_pb.GetAllAdminsRequest, callback: (error: grpc.ServiceError | null, response: admin_pb.GetAllAdminsResponse) => void): grpc.ClientUnaryCall;
    public getAllAdmins(request: admin_pb.GetAllAdminsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_pb.GetAllAdminsResponse) => void): grpc.ClientUnaryCall;
    public getAllAdmins(request: admin_pb.GetAllAdminsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_pb.GetAllAdminsResponse) => void): grpc.ClientUnaryCall;
    public updateAdmin(request: admin_pb.UpdateAdminRequest, callback: (error: grpc.ServiceError | null, response: admin_pb.UpdateAdminResponse) => void): grpc.ClientUnaryCall;
    public updateAdmin(request: admin_pb.UpdateAdminRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_pb.UpdateAdminResponse) => void): grpc.ClientUnaryCall;
    public updateAdmin(request: admin_pb.UpdateAdminRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_pb.UpdateAdminResponse) => void): grpc.ClientUnaryCall;
    public deleteAdmin(request: admin_pb.DeleteAdminRequest, callback: (error: grpc.ServiceError | null, response: admin_pb.DeleteAdminResponse) => void): grpc.ClientUnaryCall;
    public deleteAdmin(request: admin_pb.DeleteAdminRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_pb.DeleteAdminResponse) => void): grpc.ClientUnaryCall;
    public deleteAdmin(request: admin_pb.DeleteAdminRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_pb.DeleteAdminResponse) => void): grpc.ClientUnaryCall;
}
