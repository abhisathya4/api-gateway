// package: nas
// file: nas.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class RegisterNasDeviceRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): RegisterNasDeviceRequest;

    hasDeviceParams(): boolean;
    clearDeviceParams(): void;
    getDeviceParams(): RegisterNasDeviceRequest.DeviceParams | undefined;
    setDeviceParams(value?: RegisterNasDeviceRequest.DeviceParams): RegisterNasDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterNasDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterNasDeviceRequest): RegisterNasDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterNasDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterNasDeviceRequest;
    static deserializeBinaryFromReader(message: RegisterNasDeviceRequest, reader: jspb.BinaryReader): RegisterNasDeviceRequest;
}

export namespace RegisterNasDeviceRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        deviceParams?: RegisterNasDeviceRequest.DeviceParams.AsObject,
    }


    export class DeviceParams extends jspb.Message { 
        getNasname(): string;
        setNasname(value: string): DeviceParams;
        getShortname(): string;
        setShortname(value: string): DeviceParams;
        getType(): string;
        setType(value: string): DeviceParams;

        hasPorts(): boolean;
        clearPorts(): void;
        getPorts(): number | undefined;
        setPorts(value: number): DeviceParams;
        getSecret(): string;
        setSecret(value: string): DeviceParams;

        hasServer(): boolean;
        clearServer(): void;
        getServer(): string | undefined;
        setServer(value: string): DeviceParams;

        hasCommunity(): boolean;
        clearCommunity(): void;
        getCommunity(): string | undefined;
        setCommunity(value: string): DeviceParams;

        hasDescription(): boolean;
        clearDescription(): void;
        getDescription(): string | undefined;
        setDescription(value: string): DeviceParams;

        hasLocation(): boolean;
        clearLocation(): void;
        getLocation(): string | undefined;
        setLocation(value: string): DeviceParams;

        hasActive(): boolean;
        clearActive(): void;
        getActive(): boolean | undefined;
        setActive(value: boolean): DeviceParams;

        hasRequireMa(): boolean;
        clearRequireMa(): void;
        getRequireMa(): string | undefined;
        setRequireMa(value: string): DeviceParams;

        hasLimitProxyState(): boolean;
        clearLimitProxyState(): void;
        getLimitProxyState(): string | undefined;
        setLimitProxyState(value: string): DeviceParams;

        hasTenantId(): boolean;
        clearTenantId(): void;
        getTenantId(): string | undefined;
        setTenantId(value: string): DeviceParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DeviceParams.AsObject;
        static toObject(includeInstance: boolean, msg: DeviceParams): DeviceParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DeviceParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DeviceParams;
        static deserializeBinaryFromReader(message: DeviceParams, reader: jspb.BinaryReader): DeviceParams;
    }

    export namespace DeviceParams {
        export type AsObject = {
            nasname: string,
            shortname: string,
            type: string,
            ports?: number,
            secret: string,
            server?: string,
            community?: string,
            description?: string,
            location?: string,
            active?: boolean,
            requireMa?: string,
            limitProxyState?: string,
            tenantId?: string,
        }
    }

}

export class SysRegisterNasDeviceRequest extends jspb.Message { 

    hasDeviceParams(): boolean;
    clearDeviceParams(): void;
    getDeviceParams(): SysRegisterNasDeviceRequest.DeviceParams | undefined;
    setDeviceParams(value?: SysRegisterNasDeviceRequest.DeviceParams): SysRegisterNasDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SysRegisterNasDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SysRegisterNasDeviceRequest): SysRegisterNasDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SysRegisterNasDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SysRegisterNasDeviceRequest;
    static deserializeBinaryFromReader(message: SysRegisterNasDeviceRequest, reader: jspb.BinaryReader): SysRegisterNasDeviceRequest;
}

export namespace SysRegisterNasDeviceRequest {
    export type AsObject = {
        deviceParams?: SysRegisterNasDeviceRequest.DeviceParams.AsObject,
    }


    export class DeviceParams extends jspb.Message { 
        getNasname(): string;
        setNasname(value: string): DeviceParams;
        getShortname(): string;
        setShortname(value: string): DeviceParams;
        getType(): string;
        setType(value: string): DeviceParams;

        hasPorts(): boolean;
        clearPorts(): void;
        getPorts(): number | undefined;
        setPorts(value: number): DeviceParams;
        getSecret(): string;
        setSecret(value: string): DeviceParams;

        hasServer(): boolean;
        clearServer(): void;
        getServer(): string | undefined;
        setServer(value: string): DeviceParams;

        hasCommunity(): boolean;
        clearCommunity(): void;
        getCommunity(): string | undefined;
        setCommunity(value: string): DeviceParams;

        hasDescription(): boolean;
        clearDescription(): void;
        getDescription(): string | undefined;
        setDescription(value: string): DeviceParams;

        hasLocation(): boolean;
        clearLocation(): void;
        getLocation(): string | undefined;
        setLocation(value: string): DeviceParams;

        hasActive(): boolean;
        clearActive(): void;
        getActive(): boolean | undefined;
        setActive(value: boolean): DeviceParams;

        hasRequireMa(): boolean;
        clearRequireMa(): void;
        getRequireMa(): string | undefined;
        setRequireMa(value: string): DeviceParams;

        hasLimitProxyState(): boolean;
        clearLimitProxyState(): void;
        getLimitProxyState(): string | undefined;
        setLimitProxyState(value: string): DeviceParams;
        getTenantId(): string;
        setTenantId(value: string): DeviceParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DeviceParams.AsObject;
        static toObject(includeInstance: boolean, msg: DeviceParams): DeviceParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DeviceParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DeviceParams;
        static deserializeBinaryFromReader(message: DeviceParams, reader: jspb.BinaryReader): DeviceParams;
    }

    export namespace DeviceParams {
        export type AsObject = {
            nasname: string,
            shortname: string,
            type: string,
            ports?: number,
            secret: string,
            server?: string,
            community?: string,
            description?: string,
            location?: string,
            active?: boolean,
            requireMa?: string,
            limitProxyState?: string,
            tenantId: string,
        }
    }

}

export class Nas extends jspb.Message { 
    getId(): string;
    setId(value: string): Nas;
    getNasname(): string;
    setNasname(value: string): Nas;
    getShortname(): string;
    setShortname(value: string): Nas;
    getType(): string;
    setType(value: string): Nas;

    hasPorts(): boolean;
    clearPorts(): void;
    getPorts(): number | undefined;
    setPorts(value: number): Nas;
    getSecret(): string;
    setSecret(value: string): Nas;

    hasServer(): boolean;
    clearServer(): void;
    getServer(): string | undefined;
    setServer(value: string): Nas;

    hasCommunity(): boolean;
    clearCommunity(): void;
    getCommunity(): string | undefined;
    setCommunity(value: string): Nas;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): Nas;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): string | undefined;
    setLocation(value: string): Nas;

    hasActive(): boolean;
    clearActive(): void;
    getActive(): boolean | undefined;
    setActive(value: boolean): Nas;

    hasLastSeen(): boolean;
    clearLastSeen(): void;
    getLastSeen(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastSeen(value?: google_protobuf_timestamp_pb.Timestamp): Nas;
    getRequireMa(): string;
    setRequireMa(value: string): Nas;
    getLimitProxyState(): string;
    setLimitProxyState(value: string): Nas;
    getTenantId(): string;
    setTenantId(value: string): Nas;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Nas.AsObject;
    static toObject(includeInstance: boolean, msg: Nas): Nas.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Nas, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Nas;
    static deserializeBinaryFromReader(message: Nas, reader: jspb.BinaryReader): Nas;
}

export namespace Nas {
    export type AsObject = {
        id: string,
        nasname: string,
        shortname: string,
        type: string,
        ports?: number,
        secret: string,
        server?: string,
        community?: string,
        description?: string,
        location?: string,
        active?: boolean,
        lastSeen?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        requireMa: string,
        limitProxyState: string,
        tenantId: string,
    }
}

export class RegisterNasDeviceResponse extends jspb.Message { 
    clearNasDevicesList(): void;
    getNasDevicesList(): Array<Nas>;
    setNasDevicesList(value: Array<Nas>): RegisterNasDeviceResponse;
    addNasDevices(value?: Nas, index?: number): Nas;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterNasDeviceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterNasDeviceResponse): RegisterNasDeviceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterNasDeviceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterNasDeviceResponse;
    static deserializeBinaryFromReader(message: RegisterNasDeviceResponse, reader: jspb.BinaryReader): RegisterNasDeviceResponse;
}

export namespace RegisterNasDeviceResponse {
    export type AsObject = {
        nasDevicesList: Array<Nas.AsObject>,
    }
}

export class NasWithDetails extends jspb.Message { 
    getId(): string;
    setId(value: string): NasWithDetails;
    getNasname(): string;
    setNasname(value: string): NasWithDetails;
    getShortname(): string;
    setShortname(value: string): NasWithDetails;
    getType(): string;
    setType(value: string): NasWithDetails;

    hasPorts(): boolean;
    clearPorts(): void;
    getPorts(): number | undefined;
    setPorts(value: number): NasWithDetails;
    getSecret(): string;
    setSecret(value: string): NasWithDetails;

    hasServer(): boolean;
    clearServer(): void;
    getServer(): string | undefined;
    setServer(value: string): NasWithDetails;

    hasCommunity(): boolean;
    clearCommunity(): void;
    getCommunity(): string | undefined;
    setCommunity(value: string): NasWithDetails;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): NasWithDetails;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): string | undefined;
    setLocation(value: string): NasWithDetails;

    hasActive(): boolean;
    clearActive(): void;
    getActive(): boolean | undefined;
    setActive(value: boolean): NasWithDetails;

    hasLastSeen(): boolean;
    clearLastSeen(): void;
    getLastSeen(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastSeen(value?: google_protobuf_timestamp_pb.Timestamp): NasWithDetails;
    getRequireMa(): string;
    setRequireMa(value: string): NasWithDetails;
    getLimitProxyState(): string;
    setLimitProxyState(value: string): NasWithDetails;
    getTenantId(): string;
    setTenantId(value: string): NasWithDetails;
    getActiveSessions(): number;
    setActiveSessions(value: number): NasWithDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NasWithDetails.AsObject;
    static toObject(includeInstance: boolean, msg: NasWithDetails): NasWithDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NasWithDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NasWithDetails;
    static deserializeBinaryFromReader(message: NasWithDetails, reader: jspb.BinaryReader): NasWithDetails;
}

export namespace NasWithDetails {
    export type AsObject = {
        id: string,
        nasname: string,
        shortname: string,
        type: string,
        ports?: number,
        secret: string,
        server?: string,
        community?: string,
        description?: string,
        location?: string,
        active?: boolean,
        lastSeen?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        requireMa: string,
        limitProxyState: string,
        tenantId: string,
        activeSessions: number,
    }
}

export class GetNasDevicesRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetNasDevicesRequest;
    getLimit(): number;
    setLimit(value: number): GetNasDevicesRequest;
    getOffset(): number;
    setOffset(value: number): GetNasDevicesRequest;

    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): string | undefined;
    setSearch(value: string): GetNasDevicesRequest;
    clearTypesList(): void;
    getTypesList(): Array<string>;
    setTypesList(value: Array<string>): GetNasDevicesRequest;
    addTypes(value: string, index?: number): string;
    clearLocationsList(): void;
    getLocationsList(): Array<string>;
    setLocationsList(value: Array<string>): GetNasDevicesRequest;
    addLocations(value: string, index?: number): string;
    clearServersList(): void;
    getServersList(): Array<string>;
    setServersList(value: Array<string>): GetNasDevicesRequest;
    addServers(value: string, index?: number): string;
    clearCommunitiesList(): void;
    getCommunitiesList(): Array<string>;
    setCommunitiesList(value: Array<string>): GetNasDevicesRequest;
    addCommunities(value: string, index?: number): string;
    clearStatusList(): void;
    getStatusList(): Array<boolean>;
    setStatusList(value: Array<boolean>): GetNasDevicesRequest;
    addStatus(value: boolean, index?: number): boolean;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNasDevicesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNasDevicesRequest): GetNasDevicesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNasDevicesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNasDevicesRequest;
    static deserializeBinaryFromReader(message: GetNasDevicesRequest, reader: jspb.BinaryReader): GetNasDevicesRequest;
}

export namespace GetNasDevicesRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        limit: number,
        offset: number,
        search?: string,
        typesList: Array<string>,
        locationsList: Array<string>,
        serversList: Array<string>,
        communitiesList: Array<string>,
        statusList: Array<boolean>,
    }
}

export class GetNasDevicesResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<NasWithDetails>;
    setDataList(value: Array<NasWithDetails>): GetNasDevicesResponse;
    addData(value?: NasWithDetails, index?: number): NasWithDetails;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.PaginationMeta | undefined;
    setMeta(value?: common_pb.PaginationMeta): GetNasDevicesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNasDevicesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetNasDevicesResponse): GetNasDevicesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNasDevicesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNasDevicesResponse;
    static deserializeBinaryFromReader(message: GetNasDevicesResponse, reader: jspb.BinaryReader): GetNasDevicesResponse;
}

export namespace GetNasDevicesResponse {
    export type AsObject = {
        dataList: Array<NasWithDetails.AsObject>,
        meta?: common_pb.PaginationMeta.AsObject,
    }
}

export class UpdateNasDeviceRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): UpdateNasDeviceRequest;

    hasDeviceParams(): boolean;
    clearDeviceParams(): void;
    getDeviceParams(): UpdateNasDeviceRequest.DeviceParams | undefined;
    setDeviceParams(value?: UpdateNasDeviceRequest.DeviceParams): UpdateNasDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateNasDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateNasDeviceRequest): UpdateNasDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateNasDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateNasDeviceRequest;
    static deserializeBinaryFromReader(message: UpdateNasDeviceRequest, reader: jspb.BinaryReader): UpdateNasDeviceRequest;
}

export namespace UpdateNasDeviceRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        deviceParams?: UpdateNasDeviceRequest.DeviceParams.AsObject,
    }


    export class DeviceParams extends jspb.Message { 
        getId(): string;
        setId(value: string): DeviceParams;
        getNasname(): string;
        setNasname(value: string): DeviceParams;
        getShortname(): string;
        setShortname(value: string): DeviceParams;
        getType(): string;
        setType(value: string): DeviceParams;

        hasPorts(): boolean;
        clearPorts(): void;
        getPorts(): number | undefined;
        setPorts(value: number): DeviceParams;
        getSecret(): string;
        setSecret(value: string): DeviceParams;

        hasServer(): boolean;
        clearServer(): void;
        getServer(): string | undefined;
        setServer(value: string): DeviceParams;

        hasCommunity(): boolean;
        clearCommunity(): void;
        getCommunity(): string | undefined;
        setCommunity(value: string): DeviceParams;

        hasDescription(): boolean;
        clearDescription(): void;
        getDescription(): string | undefined;
        setDescription(value: string): DeviceParams;

        hasLocation(): boolean;
        clearLocation(): void;
        getLocation(): string | undefined;
        setLocation(value: string): DeviceParams;

        hasActive(): boolean;
        clearActive(): void;
        getActive(): boolean | undefined;
        setActive(value: boolean): DeviceParams;

        hasRequireMa(): boolean;
        clearRequireMa(): void;
        getRequireMa(): string | undefined;
        setRequireMa(value: string): DeviceParams;

        hasLimitProxyState(): boolean;
        clearLimitProxyState(): void;
        getLimitProxyState(): string | undefined;
        setLimitProxyState(value: string): DeviceParams;

        hasTenantId(): boolean;
        clearTenantId(): void;
        getTenantId(): string | undefined;
        setTenantId(value: string): DeviceParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DeviceParams.AsObject;
        static toObject(includeInstance: boolean, msg: DeviceParams): DeviceParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DeviceParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DeviceParams;
        static deserializeBinaryFromReader(message: DeviceParams, reader: jspb.BinaryReader): DeviceParams;
    }

    export namespace DeviceParams {
        export type AsObject = {
            id: string,
            nasname: string,
            shortname: string,
            type: string,
            ports?: number,
            secret: string,
            server?: string,
            community?: string,
            description?: string,
            location?: string,
            active?: boolean,
            requireMa?: string,
            limitProxyState?: string,
            tenantId?: string,
        }
    }

}

export class UpdateNasDeviceResponse extends jspb.Message { 
    clearNasDevicesList(): void;
    getNasDevicesList(): Array<Nas>;
    setNasDevicesList(value: Array<Nas>): UpdateNasDeviceResponse;
    addNasDevices(value?: Nas, index?: number): Nas;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateNasDeviceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateNasDeviceResponse): UpdateNasDeviceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateNasDeviceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateNasDeviceResponse;
    static deserializeBinaryFromReader(message: UpdateNasDeviceResponse, reader: jspb.BinaryReader): UpdateNasDeviceResponse;
}

export namespace UpdateNasDeviceResponse {
    export type AsObject = {
        nasDevicesList: Array<Nas.AsObject>,
    }
}
