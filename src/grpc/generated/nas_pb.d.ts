// package: nas
// file: nas.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

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

        hasRequireMa(): boolean;
        clearRequireMa(): void;
        getRequireMa(): string | undefined;
        setRequireMa(value: string): DeviceParams;

        hasLimitProxyState(): boolean;
        clearLimitProxyState(): void;
        getLimitProxyState(): string | undefined;
        setLimitProxyState(value: string): DeviceParams;

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
            requireMa?: string,
            limitProxyState?: string,
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

        hasRequireMa(): boolean;
        clearRequireMa(): void;
        getRequireMa(): string | undefined;
        setRequireMa(value: string): DeviceParams;

        hasLimitProxyState(): boolean;
        clearLimitProxyState(): void;
        getLimitProxyState(): string | undefined;
        setLimitProxyState(value: string): DeviceParams;
        getOrganizationId(): string;
        setOrganizationId(value: string): DeviceParams;

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
            requireMa?: string,
            limitProxyState?: string,
            organizationId: string,
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
