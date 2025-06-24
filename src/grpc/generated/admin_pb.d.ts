// package: admin
// file: admin.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class CreateAdminRequest extends jspb.Message { 

    hasAdminParams(): boolean;
    clearAdminParams(): void;
    getAdminParams(): CreateAdminRequest.AdminParams | undefined;
    setAdminParams(value?: CreateAdminRequest.AdminParams): CreateAdminRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAdminRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAdminRequest): CreateAdminRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAdminRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAdminRequest;
    static deserializeBinaryFromReader(message: CreateAdminRequest, reader: jspb.BinaryReader): CreateAdminRequest;
}

export namespace CreateAdminRequest {
    export type AsObject = {
        adminParams?: CreateAdminRequest.AdminParams.AsObject,
    }


    export class AdminParams extends jspb.Message { 
        getId(): string;
        setId(value: string): AdminParams;
        getOrganizationId(): string;
        setOrganizationId(value: string): AdminParams;
        getEmail(): string;
        setEmail(value: string): AdminParams;
        getName(): string;
        setName(value: string): AdminParams;
        getAuthId(): string;
        setAuthId(value: string): AdminParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AdminParams.AsObject;
        static toObject(includeInstance: boolean, msg: AdminParams): AdminParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AdminParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AdminParams;
        static deserializeBinaryFromReader(message: AdminParams, reader: jspb.BinaryReader): AdminParams;
    }

    export namespace AdminParams {
        export type AsObject = {
            id: string,
            organizationId: string,
            email: string,
            name: string,
            authId: string,
        }
    }

}

export class Admin extends jspb.Message { 
    getId(): string;
    setId(value: string): Admin;
    getOrganizationId(): string;
    setOrganizationId(value: string): Admin;
    getEmail(): string;
    setEmail(value: string): Admin;
    getName(): string;
    setName(value: string): Admin;
    getAuthId(): string;
    setAuthId(value: string): Admin;
    getCreatedAt(): string;
    setCreatedAt(value: string): Admin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Admin.AsObject;
    static toObject(includeInstance: boolean, msg: Admin): Admin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Admin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Admin;
    static deserializeBinaryFromReader(message: Admin, reader: jspb.BinaryReader): Admin;
}

export namespace Admin {
    export type AsObject = {
        id: string,
        organizationId: string,
        email: string,
        name: string,
        authId: string,
        createdAt: string,
    }
}

export class CreateAdminResponse extends jspb.Message { 
    clearAdminsList(): void;
    getAdminsList(): Array<Admin>;
    setAdminsList(value: Array<Admin>): CreateAdminResponse;
    addAdmins(value?: Admin, index?: number): Admin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAdminResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAdminResponse): CreateAdminResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAdminResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAdminResponse;
    static deserializeBinaryFromReader(message: CreateAdminResponse, reader: jspb.BinaryReader): CreateAdminResponse;
}

export namespace CreateAdminResponse {
    export type AsObject = {
        adminsList: Array<Admin.AsObject>,
    }
}

export class GetAdminRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetAdminRequest;
    getFilter(): string;
    setFilter(value: string): GetAdminRequest;
    getValue(): string;
    setValue(value: string): GetAdminRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAdminRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAdminRequest): GetAdminRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAdminRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAdminRequest;
    static deserializeBinaryFromReader(message: GetAdminRequest, reader: jspb.BinaryReader): GetAdminRequest;
}

export namespace GetAdminRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        filter: string,
        value: string,
    }
}

export class GetAdminResponse extends jspb.Message { 

    hasAdmin(): boolean;
    clearAdmin(): void;
    getAdmin(): Admin | undefined;
    setAdmin(value?: Admin): GetAdminResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAdminResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAdminResponse): GetAdminResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAdminResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAdminResponse;
    static deserializeBinaryFromReader(message: GetAdminResponse, reader: jspb.BinaryReader): GetAdminResponse;
}

export namespace GetAdminResponse {
    export type AsObject = {
        admin?: Admin.AsObject,
    }
}

export class GetAllAdminsRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetAllAdminsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllAdminsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllAdminsRequest): GetAllAdminsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllAdminsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllAdminsRequest;
    static deserializeBinaryFromReader(message: GetAllAdminsRequest, reader: jspb.BinaryReader): GetAllAdminsRequest;
}

export namespace GetAllAdminsRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
    }
}

export class GetAllAdminsResponse extends jspb.Message { 
    clearAdminsList(): void;
    getAdminsList(): Array<Admin>;
    setAdminsList(value: Array<Admin>): GetAllAdminsResponse;
    addAdmins(value?: Admin, index?: number): Admin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllAdminsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllAdminsResponse): GetAllAdminsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllAdminsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllAdminsResponse;
    static deserializeBinaryFromReader(message: GetAllAdminsResponse, reader: jspb.BinaryReader): GetAllAdminsResponse;
}

export namespace GetAllAdminsResponse {
    export type AsObject = {
        adminsList: Array<Admin.AsObject>,
    }
}

export class UpdateAdminRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): UpdateAdminRequest;
    getAdminId(): string;
    setAdminId(value: string): UpdateAdminRequest;

    hasAdminParams(): boolean;
    clearAdminParams(): void;
    getAdminParams(): UpdateAdminRequest.AdminParams | undefined;
    setAdminParams(value?: UpdateAdminRequest.AdminParams): UpdateAdminRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAdminRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAdminRequest): UpdateAdminRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAdminRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAdminRequest;
    static deserializeBinaryFromReader(message: UpdateAdminRequest, reader: jspb.BinaryReader): UpdateAdminRequest;
}

export namespace UpdateAdminRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        adminId: string,
        adminParams?: UpdateAdminRequest.AdminParams.AsObject,
    }


    export class AdminParams extends jspb.Message { 

        hasEmail(): boolean;
        clearEmail(): void;
        getEmail(): string | undefined;
        setEmail(value: string): AdminParams;

        hasName(): boolean;
        clearName(): void;
        getName(): string | undefined;
        setName(value: string): AdminParams;

        hasAuthId(): boolean;
        clearAuthId(): void;
        getAuthId(): string | undefined;
        setAuthId(value: string): AdminParams;

        hasOrganizationId(): boolean;
        clearOrganizationId(): void;
        getOrganizationId(): string | undefined;
        setOrganizationId(value: string): AdminParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AdminParams.AsObject;
        static toObject(includeInstance: boolean, msg: AdminParams): AdminParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AdminParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AdminParams;
        static deserializeBinaryFromReader(message: AdminParams, reader: jspb.BinaryReader): AdminParams;
    }

    export namespace AdminParams {
        export type AsObject = {
            email?: string,
            name?: string,
            authId?: string,
            organizationId?: string,
        }
    }

}

export class UpdateAdminResponse extends jspb.Message { 
    clearAdminsList(): void;
    getAdminsList(): Array<Admin>;
    setAdminsList(value: Array<Admin>): UpdateAdminResponse;
    addAdmins(value?: Admin, index?: number): Admin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAdminResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAdminResponse): UpdateAdminResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAdminResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAdminResponse;
    static deserializeBinaryFromReader(message: UpdateAdminResponse, reader: jspb.BinaryReader): UpdateAdminResponse;
}

export namespace UpdateAdminResponse {
    export type AsObject = {
        adminsList: Array<Admin.AsObject>,
    }
}

export class DeleteAdminRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): DeleteAdminRequest;
    getAdminId(): string;
    setAdminId(value: string): DeleteAdminRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAdminRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAdminRequest): DeleteAdminRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAdminRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAdminRequest;
    static deserializeBinaryFromReader(message: DeleteAdminRequest, reader: jspb.BinaryReader): DeleteAdminRequest;
}

export namespace DeleteAdminRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        adminId: string,
    }
}

export class DeleteAdminResponse extends jspb.Message { 
    clearAdminsList(): void;
    getAdminsList(): Array<Admin>;
    setAdminsList(value: Array<Admin>): DeleteAdminResponse;
    addAdmins(value?: Admin, index?: number): Admin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAdminResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAdminResponse): DeleteAdminResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAdminResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAdminResponse;
    static deserializeBinaryFromReader(message: DeleteAdminResponse, reader: jspb.BinaryReader): DeleteAdminResponse;
}

export namespace DeleteAdminResponse {
    export type AsObject = {
        adminsList: Array<Admin.AsObject>,
    }
}
