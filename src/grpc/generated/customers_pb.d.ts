// package: customers
// file: customers.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as radius_pb from "./radius_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateCustomerRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): CreateCustomerRequest;

    hasCustomerParams(): boolean;
    clearCustomerParams(): void;
    getCustomerParams(): CreateCustomerRequest.CustomerParams | undefined;
    setCustomerParams(value?: CreateCustomerRequest.CustomerParams): CreateCustomerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCustomerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCustomerRequest): CreateCustomerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCustomerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCustomerRequest;
    static deserializeBinaryFromReader(message: CreateCustomerRequest, reader: jspb.BinaryReader): CreateCustomerRequest;
}

export namespace CreateCustomerRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        customerParams?: CreateCustomerRequest.CustomerParams.AsObject,
    }


    export class CustomerParams extends jspb.Message { 
        getId(): string;
        setId(value: string): CustomerParams;
        getName(): string;
        setName(value: string): CustomerParams;
        getEmail(): string;
        setEmail(value: string): CustomerParams;
        getUsername(): string;
        setUsername(value: string): CustomerParams;
        getSubscriptionPlan(): string;
        setSubscriptionPlan(value: string): CustomerParams;

        hasPostFupPlan(): boolean;
        clearPostFupPlan(): void;
        getPostFupPlan(): string | undefined;
        setPostFupPlan(value: string): CustomerParams;
        getRadPassword(): string;
        setRadPassword(value: string): CustomerParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CustomerParams.AsObject;
        static toObject(includeInstance: boolean, msg: CustomerParams): CustomerParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CustomerParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CustomerParams;
        static deserializeBinaryFromReader(message: CustomerParams, reader: jspb.BinaryReader): CustomerParams;
    }

    export namespace CustomerParams {
        export type AsObject = {
            id: string,
            name: string,
            email: string,
            username: string,
            subscriptionPlan: string,
            postFupPlan?: string,
            radPassword: string,
        }
    }

}

export class Customer extends jspb.Message { 
    getId(): string;
    setId(value: string): Customer;
    getName(): string;
    setName(value: string): Customer;
    getEmail(): string;
    setEmail(value: string): Customer;
    getUsername(): string;
    setUsername(value: string): Customer;

    hasSubscriptionPlan(): boolean;
    clearSubscriptionPlan(): void;
    getSubscriptionPlan(): string | undefined;
    setSubscriptionPlan(value: string): Customer;

    hasPostFupPlan(): boolean;
    clearPostFupPlan(): void;
    getPostFupPlan(): string | undefined;
    setPostFupPlan(value: string): Customer;
    getCreatedAt(): string;
    setCreatedAt(value: string): Customer;
    getActive(): boolean;
    setActive(value: boolean): Customer;

    hasLastRenewDate(): boolean;
    clearLastRenewDate(): void;
    getLastRenewDate(): string | undefined;
    setLastRenewDate(value: string): Customer;
    getDataUsage(): number;
    setDataUsage(value: number): Customer;

    hasLastActive(): boolean;
    clearLastActive(): void;
    getLastActive(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastActive(value?: google_protobuf_timestamp_pb.Timestamp): Customer;
    getTenantId(): string;
    setTenantId(value: string): Customer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Customer.AsObject;
    static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Customer;
    static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
    export type AsObject = {
        id: string,
        name: string,
        email: string,
        username: string,
        subscriptionPlan?: string,
        postFupPlan?: string,
        createdAt: string,
        active: boolean,
        lastRenewDate?: string,
        dataUsage: number,
        lastActive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        tenantId: string,
    }
}

export class GetCustomersRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetCustomersRequest;
    getLimit(): number;
    setLimit(value: number): GetCustomersRequest;
    getOffset(): number;
    setOffset(value: number): GetCustomersRequest;

    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): string | undefined;
    setSearch(value: string): GetCustomersRequest;
    clearPlanIdsList(): void;
    getPlanIdsList(): Array<string>;
    setPlanIdsList(value: Array<string>): GetCustomersRequest;
    addPlanIds(value: string, index?: number): string;
    clearBusinessIdsList(): void;
    getBusinessIdsList(): Array<string>;
    setBusinessIdsList(value: Array<string>): GetCustomersRequest;
    addBusinessIds(value: string, index?: number): string;
    clearStatusList(): void;
    getStatusList(): Array<boolean>;
    setStatusList(value: Array<boolean>): GetCustomersRequest;
    addStatus(value: boolean, index?: number): boolean;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCustomersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCustomersRequest): GetCustomersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCustomersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCustomersRequest;
    static deserializeBinaryFromReader(message: GetCustomersRequest, reader: jspb.BinaryReader): GetCustomersRequest;
}

export namespace GetCustomersRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        limit: number,
        offset: number,
        search?: string,
        planIdsList: Array<string>,
        businessIdsList: Array<string>,
        statusList: Array<boolean>,
    }
}

export class GetCustomersResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<CustomerWithPlanInfo>;
    setDataList(value: Array<CustomerWithPlanInfo>): GetCustomersResponse;
    addData(value?: CustomerWithPlanInfo, index?: number): CustomerWithPlanInfo;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.PaginationMeta | undefined;
    setMeta(value?: common_pb.PaginationMeta): GetCustomersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCustomersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCustomersResponse): GetCustomersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCustomersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCustomersResponse;
    static deserializeBinaryFromReader(message: GetCustomersResponse, reader: jspb.BinaryReader): GetCustomersResponse;
}

export namespace GetCustomersResponse {
    export type AsObject = {
        dataList: Array<CustomerWithPlanInfo.AsObject>,
        meta?: common_pb.PaginationMeta.AsObject,
    }
}

export class CustomerWithPlanInfo extends jspb.Message { 
    getId(): string;
    setId(value: string): CustomerWithPlanInfo;
    getName(): string;
    setName(value: string): CustomerWithPlanInfo;
    getEmail(): string;
    setEmail(value: string): CustomerWithPlanInfo;
    getUsername(): string;
    setUsername(value: string): CustomerWithPlanInfo;

    hasSubscriptionPlan(): boolean;
    clearSubscriptionPlan(): void;
    getSubscriptionPlan(): string | undefined;
    setSubscriptionPlan(value: string): CustomerWithPlanInfo;

    hasPostFupPlan(): boolean;
    clearPostFupPlan(): void;
    getPostFupPlan(): string | undefined;
    setPostFupPlan(value: string): CustomerWithPlanInfo;
    getCreatedAt(): string;
    setCreatedAt(value: string): CustomerWithPlanInfo;
    getActive(): boolean;
    setActive(value: boolean): CustomerWithPlanInfo;

    hasLastRenewDate(): boolean;
    clearLastRenewDate(): void;
    getLastRenewDate(): string | undefined;
    setLastRenewDate(value: string): CustomerWithPlanInfo;
    getDataUsage(): number;
    setDataUsage(value: number): CustomerWithPlanInfo;
    getDataLimit(): number;
    setDataLimit(value: number): CustomerWithPlanInfo;

    hasLastActive(): boolean;
    clearLastActive(): void;
    getLastActive(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastActive(value?: google_protobuf_timestamp_pb.Timestamp): CustomerWithPlanInfo;
    getTenantId(): string;
    setTenantId(value: string): CustomerWithPlanInfo;

    hasPlanName(): boolean;
    clearPlanName(): void;
    getPlanName(): string | undefined;
    setPlanName(value: string): CustomerWithPlanInfo;

    hasBusinessName(): boolean;
    clearBusinessName(): void;
    getBusinessName(): string | undefined;
    setBusinessName(value: string): CustomerWithPlanInfo;

    hasPlanId(): boolean;
    clearPlanId(): void;
    getPlanId(): string | undefined;
    setPlanId(value: string): CustomerWithPlanInfo;

    hasBusinessId(): boolean;
    clearBusinessId(): void;
    getBusinessId(): string | undefined;
    setBusinessId(value: string): CustomerWithPlanInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerWithPlanInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerWithPlanInfo): CustomerWithPlanInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerWithPlanInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerWithPlanInfo;
    static deserializeBinaryFromReader(message: CustomerWithPlanInfo, reader: jspb.BinaryReader): CustomerWithPlanInfo;
}

export namespace CustomerWithPlanInfo {
    export type AsObject = {
        id: string,
        name: string,
        email: string,
        username: string,
        subscriptionPlan?: string,
        postFupPlan?: string,
        createdAt: string,
        active: boolean,
        lastRenewDate?: string,
        dataUsage: number,
        dataLimit: number,
        lastActive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        tenantId: string,
        planName?: string,
        businessName?: string,
        planId?: string,
        businessId?: string,
    }
}

export class CustomerWithPlanBusinessAndPlanbookInfo extends jspb.Message { 
    getId(): string;
    setId(value: string): CustomerWithPlanBusinessAndPlanbookInfo;
    getName(): string;
    setName(value: string): CustomerWithPlanBusinessAndPlanbookInfo;
    getUsername(): string;
    setUsername(value: string): CustomerWithPlanBusinessAndPlanbookInfo;

    hasSubscriptionPlan(): boolean;
    clearSubscriptionPlan(): void;
    getSubscriptionPlan(): string | undefined;
    setSubscriptionPlan(value: string): CustomerWithPlanBusinessAndPlanbookInfo;

    hasPostFupPlan(): boolean;
    clearPostFupPlan(): void;
    getPostFupPlan(): string | undefined;
    setPostFupPlan(value: string): CustomerWithPlanBusinessAndPlanbookInfo;
    getActive(): boolean;
    setActive(value: boolean): CustomerWithPlanBusinessAndPlanbookInfo;

    hasLastActive(): boolean;
    clearLastActive(): void;
    getLastActive(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastActive(value?: google_protobuf_timestamp_pb.Timestamp): CustomerWithPlanBusinessAndPlanbookInfo;
    getTenantId(): string;
    setTenantId(value: string): CustomerWithPlanBusinessAndPlanbookInfo;

    hasPlanName(): boolean;
    clearPlanName(): void;
    getPlanName(): string | undefined;
    setPlanName(value: string): CustomerWithPlanBusinessAndPlanbookInfo;

    hasBusinessName(): boolean;
    clearBusinessName(): void;
    getBusinessName(): string | undefined;
    setBusinessName(value: string): CustomerWithPlanBusinessAndPlanbookInfo;

    hasPlanId(): boolean;
    clearPlanId(): void;
    getPlanId(): string | undefined;
    setPlanId(value: string): CustomerWithPlanBusinessAndPlanbookInfo;

    hasBusinessId(): boolean;
    clearBusinessId(): void;
    getBusinessId(): string | undefined;
    setBusinessId(value: string): CustomerWithPlanBusinessAndPlanbookInfo;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): string | undefined;
    setPrice(value: string): CustomerWithPlanBusinessAndPlanbookInfo;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): string | undefined;
    setPeriod(value: string): CustomerWithPlanBusinessAndPlanbookInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerWithPlanBusinessAndPlanbookInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerWithPlanBusinessAndPlanbookInfo): CustomerWithPlanBusinessAndPlanbookInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerWithPlanBusinessAndPlanbookInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerWithPlanBusinessAndPlanbookInfo;
    static deserializeBinaryFromReader(message: CustomerWithPlanBusinessAndPlanbookInfo, reader: jspb.BinaryReader): CustomerWithPlanBusinessAndPlanbookInfo;
}

export namespace CustomerWithPlanBusinessAndPlanbookInfo {
    export type AsObject = {
        id: string,
        name: string,
        username: string,
        subscriptionPlan?: string,
        postFupPlan?: string,
        active: boolean,
        lastActive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        tenantId: string,
        planName?: string,
        businessName?: string,
        planId?: string,
        businessId?: string,
        price?: string,
        period?: string,
    }
}

export class GetCustomersWithPlanBusinessAndPlanbookInfoRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetCustomersWithPlanBusinessAndPlanbookInfoRequest;
    getLimit(): number;
    setLimit(value: number): GetCustomersWithPlanBusinessAndPlanbookInfoRequest;
    getOffset(): number;
    setOffset(value: number): GetCustomersWithPlanBusinessAndPlanbookInfoRequest;

    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): string | undefined;
    setSearch(value: string): GetCustomersWithPlanBusinessAndPlanbookInfoRequest;
    clearPlanIdsList(): void;
    getPlanIdsList(): Array<string>;
    setPlanIdsList(value: Array<string>): GetCustomersWithPlanBusinessAndPlanbookInfoRequest;
    addPlanIds(value: string, index?: number): string;
    clearBusinessIdsList(): void;
    getBusinessIdsList(): Array<string>;
    setBusinessIdsList(value: Array<string>): GetCustomersWithPlanBusinessAndPlanbookInfoRequest;
    addBusinessIds(value: string, index?: number): string;
    clearStatusList(): void;
    getStatusList(): Array<boolean>;
    setStatusList(value: Array<boolean>): GetCustomersWithPlanBusinessAndPlanbookInfoRequest;
    addStatus(value: boolean, index?: number): boolean;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCustomersWithPlanBusinessAndPlanbookInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCustomersWithPlanBusinessAndPlanbookInfoRequest): GetCustomersWithPlanBusinessAndPlanbookInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCustomersWithPlanBusinessAndPlanbookInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCustomersWithPlanBusinessAndPlanbookInfoRequest;
    static deserializeBinaryFromReader(message: GetCustomersWithPlanBusinessAndPlanbookInfoRequest, reader: jspb.BinaryReader): GetCustomersWithPlanBusinessAndPlanbookInfoRequest;
}

export namespace GetCustomersWithPlanBusinessAndPlanbookInfoRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        limit: number,
        offset: number,
        search?: string,
        planIdsList: Array<string>,
        businessIdsList: Array<string>,
        statusList: Array<boolean>,
    }
}

export class GetCustomersWithPlanBusinessAndPlanbookInfoResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<CustomerWithPlanBusinessAndPlanbookInfo>;
    setDataList(value: Array<CustomerWithPlanBusinessAndPlanbookInfo>): GetCustomersWithPlanBusinessAndPlanbookInfoResponse;
    addData(value?: CustomerWithPlanBusinessAndPlanbookInfo, index?: number): CustomerWithPlanBusinessAndPlanbookInfo;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.PaginationMeta | undefined;
    setMeta(value?: common_pb.PaginationMeta): GetCustomersWithPlanBusinessAndPlanbookInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCustomersWithPlanBusinessAndPlanbookInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCustomersWithPlanBusinessAndPlanbookInfoResponse): GetCustomersWithPlanBusinessAndPlanbookInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCustomersWithPlanBusinessAndPlanbookInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCustomersWithPlanBusinessAndPlanbookInfoResponse;
    static deserializeBinaryFromReader(message: GetCustomersWithPlanBusinessAndPlanbookInfoResponse, reader: jspb.BinaryReader): GetCustomersWithPlanBusinessAndPlanbookInfoResponse;
}

export namespace GetCustomersWithPlanBusinessAndPlanbookInfoResponse {
    export type AsObject = {
        dataList: Array<CustomerWithPlanBusinessAndPlanbookInfo.AsObject>,
        meta?: common_pb.PaginationMeta.AsObject,
    }
}

export class CreateCustomerResponse extends jspb.Message { 
    clearCreatedCustomerList(): void;
    getCreatedCustomerList(): Array<Customer>;
    setCreatedCustomerList(value: Array<Customer>): CreateCustomerResponse;
    addCreatedCustomer(value?: Customer, index?: number): Customer;
    clearCreatedRadiusUserList(): void;
    getCreatedRadiusUserList(): Array<radius_pb.RadCheck>;
    setCreatedRadiusUserList(value: Array<radius_pb.RadCheck>): CreateCustomerResponse;
    addCreatedRadiusUser(value?: radius_pb.RadCheck, index?: number): radius_pb.RadCheck;
    clearPlanRadGroupsList(): void;
    getPlanRadGroupsList(): Array<radius_pb.Radusergroup>;
    setPlanRadGroupsList(value: Array<radius_pb.Radusergroup>): CreateCustomerResponse;
    addPlanRadGroups(value?: radius_pb.Radusergroup, index?: number): radius_pb.Radusergroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCustomerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCustomerResponse): CreateCustomerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCustomerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCustomerResponse;
    static deserializeBinaryFromReader(message: CreateCustomerResponse, reader: jspb.BinaryReader): CreateCustomerResponse;
}

export namespace CreateCustomerResponse {
    export type AsObject = {
        createdCustomerList: Array<Customer.AsObject>,
        createdRadiusUserList: Array<radius_pb.RadCheck.AsObject>,
        planRadGroupsList: Array<radius_pb.Radusergroup.AsObject>,
    }
}

export class UpdateCustomerDetailsRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): UpdateCustomerDetailsRequest;
    getCustomerId(): string;
    setCustomerId(value: string): UpdateCustomerDetailsRequest;

    hasCustomerParams(): boolean;
    clearCustomerParams(): void;
    getCustomerParams(): UpdateCustomerDetailsRequest.CustomerParams | undefined;
    setCustomerParams(value?: UpdateCustomerDetailsRequest.CustomerParams): UpdateCustomerDetailsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCustomerDetailsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCustomerDetailsRequest): UpdateCustomerDetailsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCustomerDetailsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCustomerDetailsRequest;
    static deserializeBinaryFromReader(message: UpdateCustomerDetailsRequest, reader: jspb.BinaryReader): UpdateCustomerDetailsRequest;
}

export namespace UpdateCustomerDetailsRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        customerId: string,
        customerParams?: UpdateCustomerDetailsRequest.CustomerParams.AsObject,
    }


    export class CustomerParams extends jspb.Message { 

        hasName(): boolean;
        clearName(): void;
        getName(): string | undefined;
        setName(value: string): CustomerParams;

        hasEmail(): boolean;
        clearEmail(): void;
        getEmail(): string | undefined;
        setEmail(value: string): CustomerParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CustomerParams.AsObject;
        static toObject(includeInstance: boolean, msg: CustomerParams): CustomerParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CustomerParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CustomerParams;
        static deserializeBinaryFromReader(message: CustomerParams, reader: jspb.BinaryReader): CustomerParams;
    }

    export namespace CustomerParams {
        export type AsObject = {
            name?: string,
            email?: string,
        }
    }

}

export class UpdateCustomerDetailsResponse extends jspb.Message { 
    clearCustomersList(): void;
    getCustomersList(): Array<Customer>;
    setCustomersList(value: Array<Customer>): UpdateCustomerDetailsResponse;
    addCustomers(value?: Customer, index?: number): Customer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCustomerDetailsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCustomerDetailsResponse): UpdateCustomerDetailsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCustomerDetailsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCustomerDetailsResponse;
    static deserializeBinaryFromReader(message: UpdateCustomerDetailsResponse, reader: jspb.BinaryReader): UpdateCustomerDetailsResponse;
}

export namespace UpdateCustomerDetailsResponse {
    export type AsObject = {
        customersList: Array<Customer.AsObject>,
    }
}

export class UpdateCustomerPlanRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): UpdateCustomerPlanRequest;
    getCustomerId(): string;
    setCustomerId(value: string): UpdateCustomerPlanRequest;

    hasCustomerParams(): boolean;
    clearCustomerParams(): void;
    getCustomerParams(): UpdateCustomerPlanRequest.CustomerParams | undefined;
    setCustomerParams(value?: UpdateCustomerPlanRequest.CustomerParams): UpdateCustomerPlanRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCustomerPlanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCustomerPlanRequest): UpdateCustomerPlanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCustomerPlanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCustomerPlanRequest;
    static deserializeBinaryFromReader(message: UpdateCustomerPlanRequest, reader: jspb.BinaryReader): UpdateCustomerPlanRequest;
}

export namespace UpdateCustomerPlanRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        customerId: string,
        customerParams?: UpdateCustomerPlanRequest.CustomerParams.AsObject,
    }


    export class CustomerParams extends jspb.Message { 

        hasSubscriptionPlan(): boolean;
        clearSubscriptionPlan(): void;
        getSubscriptionPlan(): string | undefined;
        setSubscriptionPlan(value: string): CustomerParams;

        hasPostFupPlan(): boolean;
        clearPostFupPlan(): void;
        getPostFupPlan(): string | undefined;
        setPostFupPlan(value: string): CustomerParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CustomerParams.AsObject;
        static toObject(includeInstance: boolean, msg: CustomerParams): CustomerParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CustomerParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CustomerParams;
        static deserializeBinaryFromReader(message: CustomerParams, reader: jspb.BinaryReader): CustomerParams;
    }

    export namespace CustomerParams {
        export type AsObject = {
            subscriptionPlan?: string,
            postFupPlan?: string,
        }
    }

}

export class UpdateCustomerPlanResponse extends jspb.Message { 
    clearUpdatedCustomerList(): void;
    getUpdatedCustomerList(): Array<Customer>;
    setUpdatedCustomerList(value: Array<Customer>): UpdateCustomerPlanResponse;
    addUpdatedCustomer(value?: Customer, index?: number): Customer;
    clearUpdatedRadusergroupList(): void;
    getUpdatedRadusergroupList(): Array<radius_pb.Radusergroup>;
    setUpdatedRadusergroupList(value: Array<radius_pb.Radusergroup>): UpdateCustomerPlanResponse;
    addUpdatedRadusergroup(value?: radius_pb.Radusergroup, index?: number): radius_pb.Radusergroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCustomerPlanResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCustomerPlanResponse): UpdateCustomerPlanResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCustomerPlanResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCustomerPlanResponse;
    static deserializeBinaryFromReader(message: UpdateCustomerPlanResponse, reader: jspb.BinaryReader): UpdateCustomerPlanResponse;
}

export namespace UpdateCustomerPlanResponse {
    export type AsObject = {
        updatedCustomerList: Array<Customer.AsObject>,
        updatedRadusergroupList: Array<radius_pb.Radusergroup.AsObject>,
    }
}

export class GetCustomerRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetCustomerRequest;
    getCustomerId(): string;
    setCustomerId(value: string): GetCustomerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCustomerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCustomerRequest): GetCustomerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCustomerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCustomerRequest;
    static deserializeBinaryFromReader(message: GetCustomerRequest, reader: jspb.BinaryReader): GetCustomerRequest;
}

export namespace GetCustomerRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        customerId: string,
    }
}

export class GetCustomerResponse extends jspb.Message { 
    clearCustomersList(): void;
    getCustomersList(): Array<Customer>;
    setCustomersList(value: Array<Customer>): GetCustomerResponse;
    addCustomers(value?: Customer, index?: number): Customer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCustomerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCustomerResponse): GetCustomerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCustomerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCustomerResponse;
    static deserializeBinaryFromReader(message: GetCustomerResponse, reader: jspb.BinaryReader): GetCustomerResponse;
}

export namespace GetCustomerResponse {
    export type AsObject = {
        customersList: Array<Customer.AsObject>,
    }
}

export class RestoreCustomerPlanRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): RestoreCustomerPlanRequest;
    getCustomerId(): string;
    setCustomerId(value: string): RestoreCustomerPlanRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestoreCustomerPlanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RestoreCustomerPlanRequest): RestoreCustomerPlanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestoreCustomerPlanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestoreCustomerPlanRequest;
    static deserializeBinaryFromReader(message: RestoreCustomerPlanRequest, reader: jspb.BinaryReader): RestoreCustomerPlanRequest;
}

export namespace RestoreCustomerPlanRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        customerId: string,
    }
}

export class RestoreCustomerPlanResponse extends jspb.Message { 
    clearRestoredCustomerList(): void;
    getRestoredCustomerList(): Array<Customer>;
    setRestoredCustomerList(value: Array<Customer>): RestoreCustomerPlanResponse;
    addRestoredCustomer(value?: Customer, index?: number): Customer;
    clearRestoredRadusergroupsList(): void;
    getRestoredRadusergroupsList(): Array<radius_pb.Radusergroup>;
    setRestoredRadusergroupsList(value: Array<radius_pb.Radusergroup>): RestoreCustomerPlanResponse;
    addRestoredRadusergroups(value?: radius_pb.Radusergroup, index?: number): radius_pb.Radusergroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestoreCustomerPlanResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RestoreCustomerPlanResponse): RestoreCustomerPlanResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestoreCustomerPlanResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestoreCustomerPlanResponse;
    static deserializeBinaryFromReader(message: RestoreCustomerPlanResponse, reader: jspb.BinaryReader): RestoreCustomerPlanResponse;
}

export namespace RestoreCustomerPlanResponse {
    export type AsObject = {
        restoredCustomerList: Array<Customer.AsObject>,
        restoredRadusergroupsList: Array<radius_pb.Radusergroup.AsObject>,
    }
}
