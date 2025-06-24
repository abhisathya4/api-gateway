// package: business
// file: business.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as radius_pb from "./radius_pb";
import * as planbook_pb from "./planbook_pb";

export class CreateBusinessRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): CreateBusinessRequest;

    hasBusinessParams(): boolean;
    clearBusinessParams(): void;
    getBusinessParams(): CreateBusinessRequest.BusinessParams | undefined;
    setBusinessParams(value?: CreateBusinessRequest.BusinessParams): CreateBusinessRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBusinessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBusinessRequest): CreateBusinessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBusinessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBusinessRequest;
    static deserializeBinaryFromReader(message: CreateBusinessRequest, reader: jspb.BinaryReader): CreateBusinessRequest;
}

export namespace CreateBusinessRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        businessParams?: CreateBusinessRequest.BusinessParams.AsObject,
    }


    export class BusinessParams extends jspb.Message { 
        getName(): string;
        setName(value: string): BusinessParams;
        getType(): string;
        setType(value: string): BusinessParams;
        getBillingType(): string;
        setBillingType(value: string): BusinessParams;
        getTenantId(): string;
        setTenantId(value: string): BusinessParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): BusinessParams.AsObject;
        static toObject(includeInstance: boolean, msg: BusinessParams): BusinessParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: BusinessParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): BusinessParams;
        static deserializeBinaryFromReader(message: BusinessParams, reader: jspb.BinaryReader): BusinessParams;
    }

    export namespace BusinessParams {
        export type AsObject = {
            name: string,
            type: string,
            billingType: string,
            tenantId: string,
        }
    }

}

export class Business extends jspb.Message { 
    getId(): string;
    setId(value: string): Business;
    getName(): string;
    setName(value: string): Business;
    getType(): string;
    setType(value: string): Business;
    getBillingType(): string;
    setBillingType(value: string): Business;
    getTenantId(): string;
    setTenantId(value: string): Business;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Business.AsObject;
    static toObject(includeInstance: boolean, msg: Business): Business.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Business, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Business;
    static deserializeBinaryFromReader(message: Business, reader: jspb.BinaryReader): Business;
}

export namespace Business {
    export type AsObject = {
        id: string,
        name: string,
        type: string,
        billingType: string,
        tenantId: string,
    }
}

export class BusinessWithCounts extends jspb.Message { 
    getId(): string;
    setId(value: string): BusinessWithCounts;
    getName(): string;
    setName(value: string): BusinessWithCounts;
    getType(): string;
    setType(value: string): BusinessWithCounts;
    getBillingType(): string;
    setBillingType(value: string): BusinessWithCounts;
    getCustomerCount(): number;
    setCustomerCount(value: number): BusinessWithCounts;
    getPlanbookCount(): number;
    setPlanbookCount(value: number): BusinessWithCounts;
    getTenantId(): string;
    setTenantId(value: string): BusinessWithCounts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BusinessWithCounts.AsObject;
    static toObject(includeInstance: boolean, msg: BusinessWithCounts): BusinessWithCounts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BusinessWithCounts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BusinessWithCounts;
    static deserializeBinaryFromReader(message: BusinessWithCounts, reader: jspb.BinaryReader): BusinessWithCounts;
}

export namespace BusinessWithCounts {
    export type AsObject = {
        id: string,
        name: string,
        type: string,
        billingType: string,
        customerCount: number,
        planbookCount: number,
        tenantId: string,
    }
}

export class CreateBusinessResponse extends jspb.Message { 
    clearBusinessesList(): void;
    getBusinessesList(): Array<Business>;
    setBusinessesList(value: Array<Business>): CreateBusinessResponse;
    addBusinesses(value?: Business, index?: number): Business;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBusinessResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBusinessResponse): CreateBusinessResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBusinessResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBusinessResponse;
    static deserializeBinaryFromReader(message: CreateBusinessResponse, reader: jspb.BinaryReader): CreateBusinessResponse;
}

export namespace CreateBusinessResponse {
    export type AsObject = {
        businessesList: Array<Business.AsObject>,
    }
}

export class UpdateBusinessRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): UpdateBusinessRequest;
    getBusinessId(): string;
    setBusinessId(value: string): UpdateBusinessRequest;

    hasBusinessParams(): boolean;
    clearBusinessParams(): void;
    getBusinessParams(): UpdateBusinessRequest.BusinessParams | undefined;
    setBusinessParams(value?: UpdateBusinessRequest.BusinessParams): UpdateBusinessRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateBusinessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateBusinessRequest): UpdateBusinessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateBusinessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateBusinessRequest;
    static deserializeBinaryFromReader(message: UpdateBusinessRequest, reader: jspb.BinaryReader): UpdateBusinessRequest;
}

export namespace UpdateBusinessRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        businessId: string,
        businessParams?: UpdateBusinessRequest.BusinessParams.AsObject,
    }


    export class BusinessParams extends jspb.Message { 

        hasName(): boolean;
        clearName(): void;
        getName(): string | undefined;
        setName(value: string): BusinessParams;

        hasType(): boolean;
        clearType(): void;
        getType(): string | undefined;
        setType(value: string): BusinessParams;

        hasBillingType(): boolean;
        clearBillingType(): void;
        getBillingType(): string | undefined;
        setBillingType(value: string): BusinessParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): BusinessParams.AsObject;
        static toObject(includeInstance: boolean, msg: BusinessParams): BusinessParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: BusinessParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): BusinessParams;
        static deserializeBinaryFromReader(message: BusinessParams, reader: jspb.BinaryReader): BusinessParams;
    }

    export namespace BusinessParams {
        export type AsObject = {
            name?: string,
            type?: string,
            billingType?: string,
        }
    }

}

export class UpdateBusinessResponse extends jspb.Message { 
    clearUpdatedBusinessList(): void;
    getUpdatedBusinessList(): Array<Business>;
    setUpdatedBusinessList(value: Array<Business>): UpdateBusinessResponse;
    addUpdatedBusiness(value?: Business, index?: number): Business;
    clearUpdatedPlanbookList(): void;
    getUpdatedPlanbookList(): Array<planbook_pb.Planbook>;
    setUpdatedPlanbookList(value: Array<planbook_pb.Planbook>): UpdateBusinessResponse;
    addUpdatedPlanbook(value?: planbook_pb.Planbook, index?: number): planbook_pb.Planbook;
    clearUpdatedRadgroupreplyList(): void;
    getUpdatedRadgroupreplyList(): Array<radius_pb.Radgroupreply>;
    setUpdatedRadgroupreplyList(value: Array<radius_pb.Radgroupreply>): UpdateBusinessResponse;
    addUpdatedRadgroupreply(value?: radius_pb.Radgroupreply, index?: number): radius_pb.Radgroupreply;
    clearUpdatedRadusergroupList(): void;
    getUpdatedRadusergroupList(): Array<radius_pb.Radusergroup>;
    setUpdatedRadusergroupList(value: Array<radius_pb.Radusergroup>): UpdateBusinessResponse;
    addUpdatedRadusergroup(value?: radius_pb.Radusergroup, index?: number): radius_pb.Radusergroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateBusinessResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateBusinessResponse): UpdateBusinessResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateBusinessResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateBusinessResponse;
    static deserializeBinaryFromReader(message: UpdateBusinessResponse, reader: jspb.BinaryReader): UpdateBusinessResponse;
}

export namespace UpdateBusinessResponse {
    export type AsObject = {
        updatedBusinessList: Array<Business.AsObject>,
        updatedPlanbookList: Array<planbook_pb.Planbook.AsObject>,
        updatedRadgroupreplyList: Array<radius_pb.Radgroupreply.AsObject>,
        updatedRadusergroupList: Array<radius_pb.Radusergroup.AsObject>,
    }
}

export class GetBusinessRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetBusinessRequest;
    getBusinessId(): string;
    setBusinessId(value: string): GetBusinessRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBusinessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBusinessRequest): GetBusinessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBusinessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBusinessRequest;
    static deserializeBinaryFromReader(message: GetBusinessRequest, reader: jspb.BinaryReader): GetBusinessRequest;
}

export namespace GetBusinessRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        businessId: string,
    }
}

export class GetBusinessResponse extends jspb.Message { 
    clearBusinessesList(): void;
    getBusinessesList(): Array<Business>;
    setBusinessesList(value: Array<Business>): GetBusinessResponse;
    addBusinesses(value?: Business, index?: number): Business;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBusinessResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBusinessResponse): GetBusinessResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBusinessResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBusinessResponse;
    static deserializeBinaryFromReader(message: GetBusinessResponse, reader: jspb.BinaryReader): GetBusinessResponse;
}

export namespace GetBusinessResponse {
    export type AsObject = {
        businessesList: Array<Business.AsObject>,
    }
}

export class GetBusinessesRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetBusinessesRequest;
    getLimit(): number;
    setLimit(value: number): GetBusinessesRequest;
    getOffset(): number;
    setOffset(value: number): GetBusinessesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBusinessesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBusinessesRequest): GetBusinessesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBusinessesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBusinessesRequest;
    static deserializeBinaryFromReader(message: GetBusinessesRequest, reader: jspb.BinaryReader): GetBusinessesRequest;
}

export namespace GetBusinessesRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        limit: number,
        offset: number,
    }
}

export class GetBusinessesResponse extends jspb.Message { 
    clearBusinessesList(): void;
    getBusinessesList(): Array<BusinessWithCounts>;
    setBusinessesList(value: Array<BusinessWithCounts>): GetBusinessesResponse;
    addBusinesses(value?: BusinessWithCounts, index?: number): BusinessWithCounts;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.PaginationMeta | undefined;
    setMeta(value?: common_pb.PaginationMeta): GetBusinessesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBusinessesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBusinessesResponse): GetBusinessesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBusinessesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBusinessesResponse;
    static deserializeBinaryFromReader(message: GetBusinessesResponse, reader: jspb.BinaryReader): GetBusinessesResponse;
}

export namespace GetBusinessesResponse {
    export type AsObject = {
        businessesList: Array<BusinessWithCounts.AsObject>,
        meta?: common_pb.PaginationMeta.AsObject,
    }
}
