// package: nucleus.provisioning
// file: active-sessions.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class GetActiveSessionsRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetActiveSessionsRequest;
    getLimit(): number;
    setLimit(value: number): GetActiveSessionsRequest;
    getOffset(): number;
    setOffset(value: number): GetActiveSessionsRequest;

    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): string | undefined;
    setSearch(value: string): GetActiveSessionsRequest;
    clearNasDevicesList(): void;
    getNasDevicesList(): Array<string>;
    setNasDevicesList(value: Array<string>): GetActiveSessionsRequest;
    addNasDevices(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetActiveSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetActiveSessionsRequest): GetActiveSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetActiveSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetActiveSessionsRequest;
    static deserializeBinaryFromReader(message: GetActiveSessionsRequest, reader: jspb.BinaryReader): GetActiveSessionsRequest;
}

export namespace GetActiveSessionsRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        limit: number,
        offset: number,
        search?: string,
        nasDevicesList: Array<string>,
    }
}

export class GetActiveSessionsResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<ActiveSession>;
    setDataList(value: Array<ActiveSession>): GetActiveSessionsResponse;
    addData(value?: ActiveSession, index?: number): ActiveSession;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.PaginationMeta | undefined;
    setMeta(value?: common_pb.PaginationMeta): GetActiveSessionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetActiveSessionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetActiveSessionsResponse): GetActiveSessionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetActiveSessionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetActiveSessionsResponse;
    static deserializeBinaryFromReader(message: GetActiveSessionsResponse, reader: jspb.BinaryReader): GetActiveSessionsResponse;
}

export namespace GetActiveSessionsResponse {
    export type AsObject = {
        dataList: Array<ActiveSession.AsObject>,
        meta?: common_pb.PaginationMeta.AsObject,
    }
}

export class ActiveSession extends jspb.Message { 
    getId(): string;
    setId(value: string): ActiveSession;

    hasUsername(): boolean;
    clearUsername(): void;
    getUsername(): string | undefined;
    setUsername(value: string): ActiveSession;
    getNasipaddress(): string;
    setNasipaddress(value: string): ActiveSession;

    hasAcctstarttime(): boolean;
    clearAcctstarttime(): void;
    getAcctstarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAcctstarttime(value?: google_protobuf_timestamp_pb.Timestamp): ActiveSession;
    getAcctsessiontime(): number;
    setAcctsessiontime(value: number): ActiveSession;
    getAcctinputoctets(): number;
    setAcctinputoctets(value: number): ActiveSession;
    getAcctoutputoctets(): number;
    setAcctoutputoctets(value: number): ActiveSession;

    hasFramedipaddress(): boolean;
    clearFramedipaddress(): void;
    getFramedipaddress(): string | undefined;
    setFramedipaddress(value: string): ActiveSession;

    hasCallingstationid(): boolean;
    clearCallingstationid(): void;
    getCallingstationid(): string | undefined;
    setCallingstationid(value: string): ActiveSession;
    getAcctstatustype(): string;
    setAcctstatustype(value: string): ActiveSession;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveSession.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveSession): ActiveSession.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveSession, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveSession;
    static deserializeBinaryFromReader(message: ActiveSession, reader: jspb.BinaryReader): ActiveSession;
}

export namespace ActiveSession {
    export type AsObject = {
        id: string,
        username?: string,
        nasipaddress: string,
        acctstarttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        acctsessiontime: number,
        acctinputoctets: number,
        acctoutputoctets: number,
        framedipaddress?: string,
        callingstationid?: string,
        acctstatustype: string,
    }
}
