// package: plan
// file: plan.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as radius_pb from "./radius_pb";
import * as planbook_pb from "./planbook_pb";

export class CreatePlanRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): CreatePlanRequest;

    hasPlanParams(): boolean;
    clearPlanParams(): void;
    getPlanParams(): CreatePlanRequest.PlanParams | undefined;
    setPlanParams(value?: CreatePlanRequest.PlanParams): CreatePlanRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePlanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePlanRequest): CreatePlanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePlanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePlanRequest;
    static deserializeBinaryFromReader(message: CreatePlanRequest, reader: jspb.BinaryReader): CreatePlanRequest;
}

export namespace CreatePlanRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        planParams?: CreatePlanRequest.PlanParams.AsObject,
    }


    export class PlanParams extends jspb.Message { 
        getName(): string;
        setName(value: string): PlanParams;
        getUpSpeed(): number;
        setUpSpeed(value: number): PlanParams;
        getDownSpeed(): number;
        setDownSpeed(value: number): PlanParams;
        getUpSpeedUnit(): string;
        setUpSpeedUnit(value: string): PlanParams;
        getDownSpeedUnit(): string;
        setDownSpeedUnit(value: string): PlanParams;
        getIsPostFup(): boolean;
        setIsPostFup(value: boolean): PlanParams;

        hasDataLimit(): boolean;
        clearDataLimit(): void;
        getDataLimit(): string | undefined;
        setDataLimit(value: string): PlanParams;
        getType(): string;
        setType(value: string): PlanParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PlanParams.AsObject;
        static toObject(includeInstance: boolean, msg: PlanParams): PlanParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PlanParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PlanParams;
        static deserializeBinaryFromReader(message: PlanParams, reader: jspb.BinaryReader): PlanParams;
    }

    export namespace PlanParams {
        export type AsObject = {
            name: string,
            upSpeed: number,
            downSpeed: number,
            upSpeedUnit: string,
            downSpeedUnit: string,
            isPostFup: boolean,
            dataLimit?: string,
            type: string,
        }
    }

}

export class Plan extends jspb.Message { 
    getId(): string;
    setId(value: string): Plan;
    getName(): string;
    setName(value: string): Plan;
    getUpSpeed(): number;
    setUpSpeed(value: number): Plan;
    getDownSpeed(): number;
    setDownSpeed(value: number): Plan;
    getType(): string;
    setType(value: string): Plan;
    getUpSpeedUnit(): string;
    setUpSpeedUnit(value: string): Plan;
    getDownSpeedUnit(): string;
    setDownSpeedUnit(value: string): Plan;
    getIsPostFup(): boolean;
    setIsPostFup(value: boolean): Plan;

    hasDataLimit(): boolean;
    clearDataLimit(): void;
    getDataLimit(): string | undefined;
    setDataLimit(value: string): Plan;
    getTenantId(): string;
    setTenantId(value: string): Plan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Plan.AsObject;
    static toObject(includeInstance: boolean, msg: Plan): Plan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Plan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Plan;
    static deserializeBinaryFromReader(message: Plan, reader: jspb.BinaryReader): Plan;
}

export namespace Plan {
    export type AsObject = {
        id: string,
        name: string,
        upSpeed: number,
        downSpeed: number,
        type: string,
        upSpeedUnit: string,
        downSpeedUnit: string,
        isPostFup: boolean,
        dataLimit?: string,
        tenantId: string,
    }
}

export class PlanWithCounts extends jspb.Message { 
    getId(): string;
    setId(value: string): PlanWithCounts;
    getName(): string;
    setName(value: string): PlanWithCounts;
    getUpSpeed(): number;
    setUpSpeed(value: number): PlanWithCounts;
    getDownSpeed(): number;
    setDownSpeed(value: number): PlanWithCounts;
    getType(): string;
    setType(value: string): PlanWithCounts;
    getUpSpeedUnit(): string;
    setUpSpeedUnit(value: string): PlanWithCounts;
    getDownSpeedUnit(): string;
    setDownSpeedUnit(value: string): PlanWithCounts;
    getIsPostFup(): boolean;
    setIsPostFup(value: boolean): PlanWithCounts;

    hasDataLimit(): boolean;
    clearDataLimit(): void;
    getDataLimit(): string | undefined;
    setDataLimit(value: string): PlanWithCounts;
    getTenantId(): string;
    setTenantId(value: string): PlanWithCounts;
    getPlanbookCount(): number;
    setPlanbookCount(value: number): PlanWithCounts;
    getCustomerCount(): number;
    setCustomerCount(value: number): PlanWithCounts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlanWithCounts.AsObject;
    static toObject(includeInstance: boolean, msg: PlanWithCounts): PlanWithCounts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlanWithCounts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlanWithCounts;
    static deserializeBinaryFromReader(message: PlanWithCounts, reader: jspb.BinaryReader): PlanWithCounts;
}

export namespace PlanWithCounts {
    export type AsObject = {
        id: string,
        name: string,
        upSpeed: number,
        downSpeed: number,
        type: string,
        upSpeedUnit: string,
        downSpeedUnit: string,
        isPostFup: boolean,
        dataLimit?: string,
        tenantId: string,
        planbookCount: number,
        customerCount: number,
    }
}

export class CreatePlanResponse extends jspb.Message { 
    clearPlansList(): void;
    getPlansList(): Array<Plan>;
    setPlansList(value: Array<Plan>): CreatePlanResponse;
    addPlans(value?: Plan, index?: number): Plan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePlanResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePlanResponse): CreatePlanResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePlanResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePlanResponse;
    static deserializeBinaryFromReader(message: CreatePlanResponse, reader: jspb.BinaryReader): CreatePlanResponse;
}

export namespace CreatePlanResponse {
    export type AsObject = {
        plansList: Array<Plan.AsObject>,
    }
}

export class UpdatePlanRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): UpdatePlanRequest;
    getPlanId(): string;
    setPlanId(value: string): UpdatePlanRequest;

    hasPlanParams(): boolean;
    clearPlanParams(): void;
    getPlanParams(): UpdatePlanRequest.PlanParams | undefined;
    setPlanParams(value?: UpdatePlanRequest.PlanParams): UpdatePlanRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePlanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePlanRequest): UpdatePlanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePlanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePlanRequest;
    static deserializeBinaryFromReader(message: UpdatePlanRequest, reader: jspb.BinaryReader): UpdatePlanRequest;
}

export namespace UpdatePlanRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        planId: string,
        planParams?: UpdatePlanRequest.PlanParams.AsObject,
    }


    export class PlanParams extends jspb.Message { 

        hasName(): boolean;
        clearName(): void;
        getName(): string | undefined;
        setName(value: string): PlanParams;

        hasUpSpeed(): boolean;
        clearUpSpeed(): void;
        getUpSpeed(): number | undefined;
        setUpSpeed(value: number): PlanParams;

        hasDownSpeed(): boolean;
        clearDownSpeed(): void;
        getDownSpeed(): number | undefined;
        setDownSpeed(value: number): PlanParams;

        hasUpSpeedUnit(): boolean;
        clearUpSpeedUnit(): void;
        getUpSpeedUnit(): string | undefined;
        setUpSpeedUnit(value: string): PlanParams;

        hasDownSpeedUnit(): boolean;
        clearDownSpeedUnit(): void;
        getDownSpeedUnit(): string | undefined;
        setDownSpeedUnit(value: string): PlanParams;

        hasIsPostFup(): boolean;
        clearIsPostFup(): void;
        getIsPostFup(): boolean | undefined;
        setIsPostFup(value: boolean): PlanParams;

        hasDataLimit(): boolean;
        clearDataLimit(): void;
        getDataLimit(): string | undefined;
        setDataLimit(value: string): PlanParams;

        hasType(): boolean;
        clearType(): void;
        getType(): string | undefined;
        setType(value: string): PlanParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PlanParams.AsObject;
        static toObject(includeInstance: boolean, msg: PlanParams): PlanParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PlanParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PlanParams;
        static deserializeBinaryFromReader(message: PlanParams, reader: jspb.BinaryReader): PlanParams;
    }

    export namespace PlanParams {
        export type AsObject = {
            name?: string,
            upSpeed?: number,
            downSpeed?: number,
            upSpeedUnit?: string,
            downSpeedUnit?: string,
            isPostFup?: boolean,
            dataLimit?: string,
            type?: string,
        }
    }

}

export class UpdatePlanResponse extends jspb.Message { 
    clearUpdatedPlanList(): void;
    getUpdatedPlanList(): Array<Plan>;
    setUpdatedPlanList(value: Array<Plan>): UpdatePlanResponse;
    addUpdatedPlan(value?: Plan, index?: number): Plan;
    clearUpdatedPlanbookList(): void;
    getUpdatedPlanbookList(): Array<planbook_pb.Planbook>;
    setUpdatedPlanbookList(value: Array<planbook_pb.Planbook>): UpdatePlanResponse;
    addUpdatedPlanbook(value?: planbook_pb.Planbook, index?: number): planbook_pb.Planbook;
    clearUpdatedRadgroupreplyList(): void;
    getUpdatedRadgroupreplyList(): Array<radius_pb.Radgroupreply>;
    setUpdatedRadgroupreplyList(value: Array<radius_pb.Radgroupreply>): UpdatePlanResponse;
    addUpdatedRadgroupreply(value?: radius_pb.Radgroupreply, index?: number): radius_pb.Radgroupreply;
    clearUpdatedRadusergroupList(): void;
    getUpdatedRadusergroupList(): Array<radius_pb.Radusergroup>;
    setUpdatedRadusergroupList(value: Array<radius_pb.Radusergroup>): UpdatePlanResponse;
    addUpdatedRadusergroup(value?: radius_pb.Radusergroup, index?: number): radius_pb.Radusergroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePlanResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePlanResponse): UpdatePlanResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePlanResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePlanResponse;
    static deserializeBinaryFromReader(message: UpdatePlanResponse, reader: jspb.BinaryReader): UpdatePlanResponse;
}

export namespace UpdatePlanResponse {
    export type AsObject = {
        updatedPlanList: Array<Plan.AsObject>,
        updatedPlanbookList: Array<planbook_pb.Planbook.AsObject>,
        updatedRadgroupreplyList: Array<radius_pb.Radgroupreply.AsObject>,
        updatedRadusergroupList: Array<radius_pb.Radusergroup.AsObject>,
    }
}

export class GetPlanRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetPlanRequest;
    getPlanId(): string;
    setPlanId(value: string): GetPlanRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlanRequest): GetPlanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlanRequest;
    static deserializeBinaryFromReader(message: GetPlanRequest, reader: jspb.BinaryReader): GetPlanRequest;
}

export namespace GetPlanRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        planId: string,
    }
}

export class GetPlanResponse extends jspb.Message { 
    clearPlansList(): void;
    getPlansList(): Array<Plan>;
    setPlansList(value: Array<Plan>): GetPlanResponse;
    addPlans(value?: Plan, index?: number): Plan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlanResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlanResponse): GetPlanResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlanResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlanResponse;
    static deserializeBinaryFromReader(message: GetPlanResponse, reader: jspb.BinaryReader): GetPlanResponse;
}

export namespace GetPlanResponse {
    export type AsObject = {
        plansList: Array<Plan.AsObject>,
    }
}

export class GetPlansRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetPlansRequest;
    getLimit(): number;
    setLimit(value: number): GetPlansRequest;
    getOffset(): number;
    setOffset(value: number): GetPlansRequest;
    getSearch(): string;
    setSearch(value: string): GetPlansRequest;
    clearTypesList(): void;
    getTypesList(): Array<string>;
    setTypesList(value: Array<string>): GetPlansRequest;
    addTypes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlansRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlansRequest): GetPlansRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlansRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlansRequest;
    static deserializeBinaryFromReader(message: GetPlansRequest, reader: jspb.BinaryReader): GetPlansRequest;
}

export namespace GetPlansRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        limit: number,
        offset: number,
        search: string,
        typesList: Array<string>,
    }
}

export class GetPlansResponse extends jspb.Message { 
    clearPlansList(): void;
    getPlansList(): Array<PlanWithCounts>;
    setPlansList(value: Array<PlanWithCounts>): GetPlansResponse;
    addPlans(value?: PlanWithCounts, index?: number): PlanWithCounts;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.PaginationMeta | undefined;
    setMeta(value?: common_pb.PaginationMeta): GetPlansResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlansResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlansResponse): GetPlansResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlansResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlansResponse;
    static deserializeBinaryFromReader(message: GetPlansResponse, reader: jspb.BinaryReader): GetPlansResponse;
}

export namespace GetPlansResponse {
    export type AsObject = {
        plansList: Array<PlanWithCounts.AsObject>,
        meta?: common_pb.PaginationMeta.AsObject,
    }
}
