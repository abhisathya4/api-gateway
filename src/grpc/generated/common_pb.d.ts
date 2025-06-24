// package: common
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class AuthContext extends jspb.Message { 
    getToken(): string;
    setToken(value: string): AuthContext;
    getTenantId(): string;
    setTenantId(value: string): AuthContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthContext.AsObject;
    static toObject(includeInstance: boolean, msg: AuthContext): AuthContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthContext;
    static deserializeBinaryFromReader(message: AuthContext, reader: jspb.BinaryReader): AuthContext;
}

export namespace AuthContext {
    export type AsObject = {
        token: string,
        tenantId: string,
    }
}

export class PaginationMeta extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): PaginationMeta;
    getLimit(): number;
    setLimit(value: number): PaginationMeta;
    getOffset(): number;
    setOffset(value: number): PaginationMeta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaginationMeta.AsObject;
    static toObject(includeInstance: boolean, msg: PaginationMeta): PaginationMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaginationMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaginationMeta;
    static deserializeBinaryFromReader(message: PaginationMeta, reader: jspb.BinaryReader): PaginationMeta;
}

export namespace PaginationMeta {
    export type AsObject = {
        total: number,
        limit: number,
        offset: number,
    }
}

export class PaginationRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): PaginationRequest;
    getOffset(): number;
    setOffset(value: number): PaginationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaginationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PaginationRequest): PaginationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaginationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaginationRequest;
    static deserializeBinaryFromReader(message: PaginationRequest, reader: jspb.BinaryReader): PaginationRequest;
}

export namespace PaginationRequest {
    export type AsObject = {
        limit: number,
        offset: number,
    }
}
