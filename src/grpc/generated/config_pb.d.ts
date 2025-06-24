// package: config
// file: config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class GetOrganizationConfigRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetOrganizationConfigRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrganizationConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrganizationConfigRequest): GetOrganizationConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrganizationConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrganizationConfigRequest;
    static deserializeBinaryFromReader(message: GetOrganizationConfigRequest, reader: jspb.BinaryReader): GetOrganizationConfigRequest;
}

export namespace GetOrganizationConfigRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
    }
}

export class Config extends jspb.Message { 
    getId(): string;
    setId(value: string): Config;
    getOrganizationId(): string;
    setOrganizationId(value: string): Config;

    hasDefaultPostFupId(): boolean;
    clearDefaultPostFupId(): void;
    getDefaultPostFupId(): string | undefined;
    setDefaultPostFupId(value: string): Config;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
    export type AsObject = {
        id: string,
        organizationId: string,
        defaultPostFupId?: string,
    }
}

export class GetOrganizationConfigResponse extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): Config | undefined;
    setConfig(value?: Config): GetOrganizationConfigResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrganizationConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrganizationConfigResponse): GetOrganizationConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrganizationConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrganizationConfigResponse;
    static deserializeBinaryFromReader(message: GetOrganizationConfigResponse, reader: jspb.BinaryReader): GetOrganizationConfigResponse;
}

export namespace GetOrganizationConfigResponse {
    export type AsObject = {
        config?: Config.AsObject,
    }
}

export class UpdateOrganizationConfigRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): UpdateOrganizationConfigRequest;

    hasConfigParams(): boolean;
    clearConfigParams(): void;
    getConfigParams(): UpdateOrganizationConfigRequest.ConfigParams | undefined;
    setConfigParams(value?: UpdateOrganizationConfigRequest.ConfigParams): UpdateOrganizationConfigRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOrganizationConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOrganizationConfigRequest): UpdateOrganizationConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOrganizationConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOrganizationConfigRequest;
    static deserializeBinaryFromReader(message: UpdateOrganizationConfigRequest, reader: jspb.BinaryReader): UpdateOrganizationConfigRequest;
}

export namespace UpdateOrganizationConfigRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        configParams?: UpdateOrganizationConfigRequest.ConfigParams.AsObject,
    }


    export class ConfigParams extends jspb.Message { 
        getOrganizationId(): string;
        setOrganizationId(value: string): ConfigParams;

        hasDefaultPostFupId(): boolean;
        clearDefaultPostFupId(): void;
        getDefaultPostFupId(): string | undefined;
        setDefaultPostFupId(value: string): ConfigParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ConfigParams.AsObject;
        static toObject(includeInstance: boolean, msg: ConfigParams): ConfigParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ConfigParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ConfigParams;
        static deserializeBinaryFromReader(message: ConfigParams, reader: jspb.BinaryReader): ConfigParams;
    }

    export namespace ConfigParams {
        export type AsObject = {
            organizationId: string,
            defaultPostFupId?: string,
        }
    }

}

export class UpdateOrganizationConfigResponse extends jspb.Message { 
    clearConfigList(): void;
    getConfigList(): Array<Config>;
    setConfigList(value: Array<Config>): UpdateOrganizationConfigResponse;
    addConfig(value?: Config, index?: number): Config;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOrganizationConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOrganizationConfigResponse): UpdateOrganizationConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOrganizationConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOrganizationConfigResponse;
    static deserializeBinaryFromReader(message: UpdateOrganizationConfigResponse, reader: jspb.BinaryReader): UpdateOrganizationConfigResponse;
}

export namespace UpdateOrganizationConfigResponse {
    export type AsObject = {
        configList: Array<Config.AsObject>,
    }
}
