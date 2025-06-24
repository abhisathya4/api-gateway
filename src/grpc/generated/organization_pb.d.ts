// package: organization
// file: organization.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as business_pb from "./business_pb";
import * as config_pb from "./config_pb";

export class CreateOrganizationRequest extends jspb.Message { 

    hasOrgParams(): boolean;
    clearOrgParams(): void;
    getOrgParams(): Organization | undefined;
    setOrgParams(value?: Organization): CreateOrganizationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrganizationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrganizationRequest): CreateOrganizationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrganizationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrganizationRequest;
    static deserializeBinaryFromReader(message: CreateOrganizationRequest, reader: jspb.BinaryReader): CreateOrganizationRequest;
}

export namespace CreateOrganizationRequest {
    export type AsObject = {
        orgParams?: Organization.AsObject,
    }
}

export class Organization extends jspb.Message { 
    getId(): string;
    setId(value: string): Organization;
    getName(): string;
    setName(value: string): Organization;
    getAuthId(): string;
    setAuthId(value: string): Organization;
    getSecurityLevel(): string;
    setSecurityLevel(value: string): Organization;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Organization.AsObject;
    static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Organization;
    static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
    export type AsObject = {
        id: string,
        name: string,
        authId: string,
        securityLevel: string,
    }
}

export class CreateOrganizationResponse extends jspb.Message { 

    hasOrg(): boolean;
    clearOrg(): void;
    getOrg(): Organization | undefined;
    setOrg(value?: Organization): CreateOrganizationResponse;
    clearBusinessList(): void;
    getBusinessList(): Array<business_pb.Business>;
    setBusinessList(value: Array<business_pb.Business>): CreateOrganizationResponse;
    addBusiness(value?: business_pb.Business, index?: number): business_pb.Business;
    clearConfigList(): void;
    getConfigList(): Array<config_pb.Config>;
    setConfigList(value: Array<config_pb.Config>): CreateOrganizationResponse;
    addConfig(value?: config_pb.Config, index?: number): config_pb.Config;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrganizationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrganizationResponse): CreateOrganizationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrganizationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrganizationResponse;
    static deserializeBinaryFromReader(message: CreateOrganizationResponse, reader: jspb.BinaryReader): CreateOrganizationResponse;
}

export namespace CreateOrganizationResponse {
    export type AsObject = {
        org?: Organization.AsObject,
        businessList: Array<business_pb.Business.AsObject>,
        configList: Array<config_pb.Config.AsObject>,
    }
}

export class GetOrganizationRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetOrganizationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrganizationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrganizationRequest): GetOrganizationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrganizationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrganizationRequest;
    static deserializeBinaryFromReader(message: GetOrganizationRequest, reader: jspb.BinaryReader): GetOrganizationRequest;
}

export namespace GetOrganizationRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
    }
}

export class GetOrganizationResponse extends jspb.Message { 

    hasOrganization(): boolean;
    clearOrganization(): void;
    getOrganization(): Organization | undefined;
    setOrganization(value?: Organization): GetOrganizationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrganizationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrganizationResponse): GetOrganizationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrganizationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrganizationResponse;
    static deserializeBinaryFromReader(message: GetOrganizationResponse, reader: jspb.BinaryReader): GetOrganizationResponse;
}

export namespace GetOrganizationResponse {
    export type AsObject = {
        organization?: Organization.AsObject,
    }
}

export class UpdateOrganizationRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): UpdateOrganizationRequest;

    hasOrgParams(): boolean;
    clearOrgParams(): void;
    getOrgParams(): UpdateOrganizationRequest.OrganizationParams | undefined;
    setOrgParams(value?: UpdateOrganizationRequest.OrganizationParams): UpdateOrganizationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOrganizationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOrganizationRequest): UpdateOrganizationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOrganizationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOrganizationRequest;
    static deserializeBinaryFromReader(message: UpdateOrganizationRequest, reader: jspb.BinaryReader): UpdateOrganizationRequest;
}

export namespace UpdateOrganizationRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        orgParams?: UpdateOrganizationRequest.OrganizationParams.AsObject,
    }


    export class OrganizationParams extends jspb.Message { 
        getName(): string;
        setName(value: string): OrganizationParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OrganizationParams.AsObject;
        static toObject(includeInstance: boolean, msg: OrganizationParams): OrganizationParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OrganizationParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OrganizationParams;
        static deserializeBinaryFromReader(message: OrganizationParams, reader: jspb.BinaryReader): OrganizationParams;
    }

    export namespace OrganizationParams {
        export type AsObject = {
            name: string,
        }
    }

}

export class UpdateOrganizationResponse extends jspb.Message { 

    hasUpdatedOrg(): boolean;
    clearUpdatedOrg(): void;
    getUpdatedOrg(): Organization | undefined;
    setUpdatedOrg(value?: Organization): UpdateOrganizationResponse;
    clearUpdatedBusinessList(): void;
    getUpdatedBusinessList(): Array<business_pb.Business>;
    setUpdatedBusinessList(value: Array<business_pb.Business>): UpdateOrganizationResponse;
    addUpdatedBusiness(value?: business_pb.Business, index?: number): business_pb.Business;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOrganizationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOrganizationResponse): UpdateOrganizationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOrganizationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOrganizationResponse;
    static deserializeBinaryFromReader(message: UpdateOrganizationResponse, reader: jspb.BinaryReader): UpdateOrganizationResponse;
}

export namespace UpdateOrganizationResponse {
    export type AsObject = {
        updatedOrg?: Organization.AsObject,
        updatedBusinessList: Array<business_pb.Business.AsObject>,
    }
}
