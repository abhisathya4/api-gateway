// package: customers
// file: customers.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as customers_pb from "./customers_pb";
import * as common_pb from "./common_pb";
import * as radius_pb from "./radius_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ICustomerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createCustomer: ICustomerServiceService_ICreateCustomer;
    updateCustomerDetails: ICustomerServiceService_IUpdateCustomerDetails;
    updateCustomerPlan: ICustomerServiceService_IUpdateCustomerPlan;
    getCustomer: ICustomerServiceService_IGetCustomer;
    getCustomers: ICustomerServiceService_IGetCustomers;
    getCustomersWithPlanBusinessAndPlanbookInfo: ICustomerServiceService_IGetCustomersWithPlanBusinessAndPlanbookInfo;
    authRenewOrActivateCustomer: ICustomerServiceService_IAuthRenewOrActivateCustomer;
    authDeactivateCustomer: ICustomerServiceService_IAuthDeactivateCustomer;
    sysRenewOrActivateCustomer: ICustomerServiceService_ISysRenewOrActivateCustomer;
    sysDeactivateCustomer: ICustomerServiceService_ISysDeactivateCustomer;
}

interface ICustomerServiceService_ICreateCustomer extends grpc.MethodDefinition<customers_pb.CreateCustomerRequest, customers_pb.CreateCustomerResponse> {
    path: "/customers.CustomerService/CreateCustomer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.CreateCustomerRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.CreateCustomerRequest>;
    responseSerialize: grpc.serialize<customers_pb.CreateCustomerResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.CreateCustomerResponse>;
}
interface ICustomerServiceService_IUpdateCustomerDetails extends grpc.MethodDefinition<customers_pb.UpdateCustomerDetailsRequest, customers_pb.UpdateCustomerDetailsResponse> {
    path: "/customers.CustomerService/UpdateCustomerDetails";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.UpdateCustomerDetailsRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.UpdateCustomerDetailsRequest>;
    responseSerialize: grpc.serialize<customers_pb.UpdateCustomerDetailsResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.UpdateCustomerDetailsResponse>;
}
interface ICustomerServiceService_IUpdateCustomerPlan extends grpc.MethodDefinition<customers_pb.UpdateCustomerPlanRequest, customers_pb.UpdateCustomerPlanResponse> {
    path: "/customers.CustomerService/UpdateCustomerPlan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.UpdateCustomerPlanRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.UpdateCustomerPlanRequest>;
    responseSerialize: grpc.serialize<customers_pb.UpdateCustomerPlanResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.UpdateCustomerPlanResponse>;
}
interface ICustomerServiceService_IGetCustomer extends grpc.MethodDefinition<customers_pb.GetCustomerRequest, customers_pb.GetCustomerResponse> {
    path: "/customers.CustomerService/GetCustomer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.GetCustomerRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.GetCustomerRequest>;
    responseSerialize: grpc.serialize<customers_pb.GetCustomerResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.GetCustomerResponse>;
}
interface ICustomerServiceService_IGetCustomers extends grpc.MethodDefinition<customers_pb.GetCustomersRequest, customers_pb.GetCustomersResponse> {
    path: "/customers.CustomerService/GetCustomers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.GetCustomersRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.GetCustomersRequest>;
    responseSerialize: grpc.serialize<customers_pb.GetCustomersResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.GetCustomersResponse>;
}
interface ICustomerServiceService_IGetCustomersWithPlanBusinessAndPlanbookInfo extends grpc.MethodDefinition<customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse> {
    path: "/customers.CustomerService/GetCustomersWithPlanBusinessAndPlanbookInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest>;
    responseSerialize: grpc.serialize<customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse>;
}
interface ICustomerServiceService_IAuthRenewOrActivateCustomer extends grpc.MethodDefinition<customers_pb.AuthRenewOrActivateCustomerRequest, customers_pb.AuthRenewOrActivateCustomerResponse> {
    path: "/customers.CustomerService/AuthRenewOrActivateCustomer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.AuthRenewOrActivateCustomerRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.AuthRenewOrActivateCustomerRequest>;
    responseSerialize: grpc.serialize<customers_pb.AuthRenewOrActivateCustomerResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.AuthRenewOrActivateCustomerResponse>;
}
interface ICustomerServiceService_IAuthDeactivateCustomer extends grpc.MethodDefinition<customers_pb.AuthDeactivateCustomerRequest, customers_pb.AuthDeactivateCustomerResponse> {
    path: "/customers.CustomerService/AuthDeactivateCustomer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.AuthDeactivateCustomerRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.AuthDeactivateCustomerRequest>;
    responseSerialize: grpc.serialize<customers_pb.AuthDeactivateCustomerResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.AuthDeactivateCustomerResponse>;
}
interface ICustomerServiceService_ISysRenewOrActivateCustomer extends grpc.MethodDefinition<customers_pb.SysRenewOrActivateCustomerRequest, customers_pb.SysRenewOrActivateCustomerResponse> {
    path: "/customers.CustomerService/SysRenewOrActivateCustomer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.SysRenewOrActivateCustomerRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.SysRenewOrActivateCustomerRequest>;
    responseSerialize: grpc.serialize<customers_pb.SysRenewOrActivateCustomerResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.SysRenewOrActivateCustomerResponse>;
}
interface ICustomerServiceService_ISysDeactivateCustomer extends grpc.MethodDefinition<customers_pb.SysDeactivateCustomerRequest, customers_pb.SysDeactivateCustomerResponse> {
    path: "/customers.CustomerService/SysDeactivateCustomer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.SysDeactivateCustomerRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.SysDeactivateCustomerRequest>;
    responseSerialize: grpc.serialize<customers_pb.SysDeactivateCustomerResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.SysDeactivateCustomerResponse>;
}

export const CustomerServiceService: ICustomerServiceService;

export interface ICustomerServiceServer extends grpc.UntypedServiceImplementation {
    createCustomer: grpc.handleUnaryCall<customers_pb.CreateCustomerRequest, customers_pb.CreateCustomerResponse>;
    updateCustomerDetails: grpc.handleUnaryCall<customers_pb.UpdateCustomerDetailsRequest, customers_pb.UpdateCustomerDetailsResponse>;
    updateCustomerPlan: grpc.handleUnaryCall<customers_pb.UpdateCustomerPlanRequest, customers_pb.UpdateCustomerPlanResponse>;
    getCustomer: grpc.handleUnaryCall<customers_pb.GetCustomerRequest, customers_pb.GetCustomerResponse>;
    getCustomers: grpc.handleUnaryCall<customers_pb.GetCustomersRequest, customers_pb.GetCustomersResponse>;
    getCustomersWithPlanBusinessAndPlanbookInfo: grpc.handleUnaryCall<customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse>;
    authRenewOrActivateCustomer: grpc.handleUnaryCall<customers_pb.AuthRenewOrActivateCustomerRequest, customers_pb.AuthRenewOrActivateCustomerResponse>;
    authDeactivateCustomer: grpc.handleUnaryCall<customers_pb.AuthDeactivateCustomerRequest, customers_pb.AuthDeactivateCustomerResponse>;
    sysRenewOrActivateCustomer: grpc.handleUnaryCall<customers_pb.SysRenewOrActivateCustomerRequest, customers_pb.SysRenewOrActivateCustomerResponse>;
    sysDeactivateCustomer: grpc.handleUnaryCall<customers_pb.SysDeactivateCustomerRequest, customers_pb.SysDeactivateCustomerResponse>;
}

export interface ICustomerServiceClient {
    createCustomer(request: customers_pb.CreateCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.CreateCustomerResponse) => void): grpc.ClientUnaryCall;
    createCustomer(request: customers_pb.CreateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CreateCustomerResponse) => void): grpc.ClientUnaryCall;
    createCustomer(request: customers_pb.CreateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CreateCustomerResponse) => void): grpc.ClientUnaryCall;
    updateCustomerDetails(request: customers_pb.UpdateCustomerDetailsRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.UpdateCustomerDetailsResponse) => void): grpc.ClientUnaryCall;
    updateCustomerDetails(request: customers_pb.UpdateCustomerDetailsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.UpdateCustomerDetailsResponse) => void): grpc.ClientUnaryCall;
    updateCustomerDetails(request: customers_pb.UpdateCustomerDetailsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.UpdateCustomerDetailsResponse) => void): grpc.ClientUnaryCall;
    updateCustomerPlan(request: customers_pb.UpdateCustomerPlanRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.UpdateCustomerPlanResponse) => void): grpc.ClientUnaryCall;
    updateCustomerPlan(request: customers_pb.UpdateCustomerPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.UpdateCustomerPlanResponse) => void): grpc.ClientUnaryCall;
    updateCustomerPlan(request: customers_pb.UpdateCustomerPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.UpdateCustomerPlanResponse) => void): grpc.ClientUnaryCall;
    getCustomer(request: customers_pb.GetCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomerResponse) => void): grpc.ClientUnaryCall;
    getCustomer(request: customers_pb.GetCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomerResponse) => void): grpc.ClientUnaryCall;
    getCustomer(request: customers_pb.GetCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomerResponse) => void): grpc.ClientUnaryCall;
    getCustomers(request: customers_pb.GetCustomersRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersResponse) => void): grpc.ClientUnaryCall;
    getCustomers(request: customers_pb.GetCustomersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersResponse) => void): grpc.ClientUnaryCall;
    getCustomers(request: customers_pb.GetCustomersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersResponse) => void): grpc.ClientUnaryCall;
    getCustomersWithPlanBusinessAndPlanbookInfo(request: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse) => void): grpc.ClientUnaryCall;
    getCustomersWithPlanBusinessAndPlanbookInfo(request: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse) => void): grpc.ClientUnaryCall;
    getCustomersWithPlanBusinessAndPlanbookInfo(request: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse) => void): grpc.ClientUnaryCall;
    authRenewOrActivateCustomer(request: customers_pb.AuthRenewOrActivateCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.AuthRenewOrActivateCustomerResponse) => void): grpc.ClientUnaryCall;
    authRenewOrActivateCustomer(request: customers_pb.AuthRenewOrActivateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.AuthRenewOrActivateCustomerResponse) => void): grpc.ClientUnaryCall;
    authRenewOrActivateCustomer(request: customers_pb.AuthRenewOrActivateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.AuthRenewOrActivateCustomerResponse) => void): grpc.ClientUnaryCall;
    authDeactivateCustomer(request: customers_pb.AuthDeactivateCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.AuthDeactivateCustomerResponse) => void): grpc.ClientUnaryCall;
    authDeactivateCustomer(request: customers_pb.AuthDeactivateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.AuthDeactivateCustomerResponse) => void): grpc.ClientUnaryCall;
    authDeactivateCustomer(request: customers_pb.AuthDeactivateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.AuthDeactivateCustomerResponse) => void): grpc.ClientUnaryCall;
    sysRenewOrActivateCustomer(request: customers_pb.SysRenewOrActivateCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.SysRenewOrActivateCustomerResponse) => void): grpc.ClientUnaryCall;
    sysRenewOrActivateCustomer(request: customers_pb.SysRenewOrActivateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.SysRenewOrActivateCustomerResponse) => void): grpc.ClientUnaryCall;
    sysRenewOrActivateCustomer(request: customers_pb.SysRenewOrActivateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.SysRenewOrActivateCustomerResponse) => void): grpc.ClientUnaryCall;
    sysDeactivateCustomer(request: customers_pb.SysDeactivateCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.SysDeactivateCustomerResponse) => void): grpc.ClientUnaryCall;
    sysDeactivateCustomer(request: customers_pb.SysDeactivateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.SysDeactivateCustomerResponse) => void): grpc.ClientUnaryCall;
    sysDeactivateCustomer(request: customers_pb.SysDeactivateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.SysDeactivateCustomerResponse) => void): grpc.ClientUnaryCall;
}

export class CustomerServiceClient extends grpc.Client implements ICustomerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createCustomer(request: customers_pb.CreateCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.CreateCustomerResponse) => void): grpc.ClientUnaryCall;
    public createCustomer(request: customers_pb.CreateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CreateCustomerResponse) => void): grpc.ClientUnaryCall;
    public createCustomer(request: customers_pb.CreateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CreateCustomerResponse) => void): grpc.ClientUnaryCall;
    public updateCustomerDetails(request: customers_pb.UpdateCustomerDetailsRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.UpdateCustomerDetailsResponse) => void): grpc.ClientUnaryCall;
    public updateCustomerDetails(request: customers_pb.UpdateCustomerDetailsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.UpdateCustomerDetailsResponse) => void): grpc.ClientUnaryCall;
    public updateCustomerDetails(request: customers_pb.UpdateCustomerDetailsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.UpdateCustomerDetailsResponse) => void): grpc.ClientUnaryCall;
    public updateCustomerPlan(request: customers_pb.UpdateCustomerPlanRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.UpdateCustomerPlanResponse) => void): grpc.ClientUnaryCall;
    public updateCustomerPlan(request: customers_pb.UpdateCustomerPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.UpdateCustomerPlanResponse) => void): grpc.ClientUnaryCall;
    public updateCustomerPlan(request: customers_pb.UpdateCustomerPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.UpdateCustomerPlanResponse) => void): grpc.ClientUnaryCall;
    public getCustomer(request: customers_pb.GetCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomerResponse) => void): grpc.ClientUnaryCall;
    public getCustomer(request: customers_pb.GetCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomerResponse) => void): grpc.ClientUnaryCall;
    public getCustomer(request: customers_pb.GetCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomerResponse) => void): grpc.ClientUnaryCall;
    public getCustomers(request: customers_pb.GetCustomersRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersResponse) => void): grpc.ClientUnaryCall;
    public getCustomers(request: customers_pb.GetCustomersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersResponse) => void): grpc.ClientUnaryCall;
    public getCustomers(request: customers_pb.GetCustomersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersResponse) => void): grpc.ClientUnaryCall;
    public getCustomersWithPlanBusinessAndPlanbookInfo(request: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse) => void): grpc.ClientUnaryCall;
    public getCustomersWithPlanBusinessAndPlanbookInfo(request: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse) => void): grpc.ClientUnaryCall;
    public getCustomersWithPlanBusinessAndPlanbookInfo(request: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse) => void): grpc.ClientUnaryCall;
    public authRenewOrActivateCustomer(request: customers_pb.AuthRenewOrActivateCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.AuthRenewOrActivateCustomerResponse) => void): grpc.ClientUnaryCall;
    public authRenewOrActivateCustomer(request: customers_pb.AuthRenewOrActivateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.AuthRenewOrActivateCustomerResponse) => void): grpc.ClientUnaryCall;
    public authRenewOrActivateCustomer(request: customers_pb.AuthRenewOrActivateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.AuthRenewOrActivateCustomerResponse) => void): grpc.ClientUnaryCall;
    public authDeactivateCustomer(request: customers_pb.AuthDeactivateCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.AuthDeactivateCustomerResponse) => void): grpc.ClientUnaryCall;
    public authDeactivateCustomer(request: customers_pb.AuthDeactivateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.AuthDeactivateCustomerResponse) => void): grpc.ClientUnaryCall;
    public authDeactivateCustomer(request: customers_pb.AuthDeactivateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.AuthDeactivateCustomerResponse) => void): grpc.ClientUnaryCall;
    public sysRenewOrActivateCustomer(request: customers_pb.SysRenewOrActivateCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.SysRenewOrActivateCustomerResponse) => void): grpc.ClientUnaryCall;
    public sysRenewOrActivateCustomer(request: customers_pb.SysRenewOrActivateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.SysRenewOrActivateCustomerResponse) => void): grpc.ClientUnaryCall;
    public sysRenewOrActivateCustomer(request: customers_pb.SysRenewOrActivateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.SysRenewOrActivateCustomerResponse) => void): grpc.ClientUnaryCall;
    public sysDeactivateCustomer(request: customers_pb.SysDeactivateCustomerRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.SysDeactivateCustomerResponse) => void): grpc.ClientUnaryCall;
    public sysDeactivateCustomer(request: customers_pb.SysDeactivateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.SysDeactivateCustomerResponse) => void): grpc.ClientUnaryCall;
    public sysDeactivateCustomer(request: customers_pb.SysDeactivateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.SysDeactivateCustomerResponse) => void): grpc.ClientUnaryCall;
}
