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
    restoreCustomerPlan: ICustomerServiceService_IRestoreCustomerPlan;
    getCustomersWithPlanBusinessAndPlanbookInfo: ICustomerServiceService_IGetCustomersWithPlanBusinessAndPlanbookInfo;
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
interface ICustomerServiceService_IRestoreCustomerPlan extends grpc.MethodDefinition<customers_pb.RestoreCustomerPlanRequest, customers_pb.RestoreCustomerPlanResponse> {
    path: "/customers.CustomerService/RestoreCustomerPlan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.RestoreCustomerPlanRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.RestoreCustomerPlanRequest>;
    responseSerialize: grpc.serialize<customers_pb.RestoreCustomerPlanResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.RestoreCustomerPlanResponse>;
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

export const CustomerServiceService: ICustomerServiceService;

export interface ICustomerServiceServer extends grpc.UntypedServiceImplementation {
    createCustomer: grpc.handleUnaryCall<customers_pb.CreateCustomerRequest, customers_pb.CreateCustomerResponse>;
    updateCustomerDetails: grpc.handleUnaryCall<customers_pb.UpdateCustomerDetailsRequest, customers_pb.UpdateCustomerDetailsResponse>;
    updateCustomerPlan: grpc.handleUnaryCall<customers_pb.UpdateCustomerPlanRequest, customers_pb.UpdateCustomerPlanResponse>;
    getCustomer: grpc.handleUnaryCall<customers_pb.GetCustomerRequest, customers_pb.GetCustomerResponse>;
    getCustomers: grpc.handleUnaryCall<customers_pb.GetCustomersRequest, customers_pb.GetCustomersResponse>;
    restoreCustomerPlan: grpc.handleUnaryCall<customers_pb.RestoreCustomerPlanRequest, customers_pb.RestoreCustomerPlanResponse>;
    getCustomersWithPlanBusinessAndPlanbookInfo: grpc.handleUnaryCall<customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse>;
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
    restoreCustomerPlan(request: customers_pb.RestoreCustomerPlanRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.RestoreCustomerPlanResponse) => void): grpc.ClientUnaryCall;
    restoreCustomerPlan(request: customers_pb.RestoreCustomerPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.RestoreCustomerPlanResponse) => void): grpc.ClientUnaryCall;
    restoreCustomerPlan(request: customers_pb.RestoreCustomerPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.RestoreCustomerPlanResponse) => void): grpc.ClientUnaryCall;
    getCustomersWithPlanBusinessAndPlanbookInfo(request: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse) => void): grpc.ClientUnaryCall;
    getCustomersWithPlanBusinessAndPlanbookInfo(request: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse) => void): grpc.ClientUnaryCall;
    getCustomersWithPlanBusinessAndPlanbookInfo(request: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse) => void): grpc.ClientUnaryCall;
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
    public restoreCustomerPlan(request: customers_pb.RestoreCustomerPlanRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.RestoreCustomerPlanResponse) => void): grpc.ClientUnaryCall;
    public restoreCustomerPlan(request: customers_pb.RestoreCustomerPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.RestoreCustomerPlanResponse) => void): grpc.ClientUnaryCall;
    public restoreCustomerPlan(request: customers_pb.RestoreCustomerPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.RestoreCustomerPlanResponse) => void): grpc.ClientUnaryCall;
    public getCustomersWithPlanBusinessAndPlanbookInfo(request: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse) => void): grpc.ClientUnaryCall;
    public getCustomersWithPlanBusinessAndPlanbookInfo(request: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse) => void): grpc.ClientUnaryCall;
    public getCustomersWithPlanBusinessAndPlanbookInfo(request: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.GetCustomersWithPlanBusinessAndPlanbookInfoResponse) => void): grpc.ClientUnaryCall;
}
