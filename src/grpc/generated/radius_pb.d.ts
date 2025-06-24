// package: radius
// file: radius.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Radgroupreply extends jspb.Message { 
    getId(): string;
    setId(value: string): Radgroupreply;
    getGroupname(): string;
    setGroupname(value: string): Radgroupreply;
    getAttribute(): string;
    setAttribute(value: string): Radgroupreply;
    getOp(): string;
    setOp(value: string): Radgroupreply;
    getValue(): string;
    setValue(value: string): Radgroupreply;
    getTenantId(): string;
    setTenantId(value: string): Radgroupreply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Radgroupreply.AsObject;
    static toObject(includeInstance: boolean, msg: Radgroupreply): Radgroupreply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Radgroupreply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Radgroupreply;
    static deserializeBinaryFromReader(message: Radgroupreply, reader: jspb.BinaryReader): Radgroupreply;
}

export namespace Radgroupreply {
    export type AsObject = {
        id: string,
        groupname: string,
        attribute: string,
        op: string,
        value: string,
        tenantId: string,
    }
}

export class Radusergroup extends jspb.Message { 
    getId(): string;
    setId(value: string): Radusergroup;
    getUsername(): string;
    setUsername(value: string): Radusergroup;
    getGroupname(): string;
    setGroupname(value: string): Radusergroup;
    getPriority(): number;
    setPriority(value: number): Radusergroup;
    getTenantId(): string;
    setTenantId(value: string): Radusergroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Radusergroup.AsObject;
    static toObject(includeInstance: boolean, msg: Radusergroup): Radusergroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Radusergroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Radusergroup;
    static deserializeBinaryFromReader(message: Radusergroup, reader: jspb.BinaryReader): Radusergroup;
}

export namespace Radusergroup {
    export type AsObject = {
        id: string,
        username: string,
        groupname: string,
        priority: number,
        tenantId: string,
    }
}

export class RadCheck extends jspb.Message { 
    getId(): string;
    setId(value: string): RadCheck;
    getUsername(): string;
    setUsername(value: string): RadCheck;
    getAttribute(): string;
    setAttribute(value: string): RadCheck;
    getOp(): string;
    setOp(value: string): RadCheck;
    getValue(): string;
    setValue(value: string): RadCheck;
    getTenantId(): string;
    setTenantId(value: string): RadCheck;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RadCheck.AsObject;
    static toObject(includeInstance: boolean, msg: RadCheck): RadCheck.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RadCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RadCheck;
    static deserializeBinaryFromReader(message: RadCheck, reader: jspb.BinaryReader): RadCheck;
}

export namespace RadCheck {
    export type AsObject = {
        id: string,
        username: string,
        attribute: string,
        op: string,
        value: string,
        tenantId: string,
    }
}
