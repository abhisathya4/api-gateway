// package: planbook
// file: planbook.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as radius_pb from "./radius_pb";

export class Planbook extends jspb.Message { 
    getId(): string;
    setId(value: string): Planbook;
    getPlanId(): string;
    setPlanId(value: string): Planbook;
    getBusinessId(): string;
    setBusinessId(value: string): Planbook;
    getPeriod(): string;
    setPeriod(value: string): Planbook;
    getPrice(): string;
    setPrice(value: string): Planbook;
    getGroupname(): string;
    setGroupname(value: string): Planbook;
    getBillingType(): string;
    setBillingType(value: string): Planbook;
    getTenantId(): string;
    setTenantId(value: string): Planbook;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Planbook.AsObject;
    static toObject(includeInstance: boolean, msg: Planbook): Planbook.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Planbook, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Planbook;
    static deserializeBinaryFromReader(message: Planbook, reader: jspb.BinaryReader): Planbook;
}

export namespace Planbook {
    export type AsObject = {
        id: string,
        planId: string,
        businessId: string,
        period: string,
        price: string,
        groupname: string,
        billingType: string,
        tenantId: string,
    }
}

export class PlanbookDetails extends jspb.Message { 
    getId(): string;
    setId(value: string): PlanbookDetails;
    getPlanId(): string;
    setPlanId(value: string): PlanbookDetails;
    getPlanName(): string;
    setPlanName(value: string): PlanbookDetails;
    getPlanType(): string;
    setPlanType(value: string): PlanbookDetails;
    getPlanUpspeed(): string;
    setPlanUpspeed(value: string): PlanbookDetails;
    getPlanDownspeed(): string;
    setPlanDownspeed(value: string): PlanbookDetails;
    getPlanUpspeedUnit(): string;
    setPlanUpspeedUnit(value: string): PlanbookDetails;
    getPlanDownspeedUnit(): string;
    setPlanDownspeedUnit(value: string): PlanbookDetails;
    getBusinessId(): string;
    setBusinessId(value: string): PlanbookDetails;
    getBusinessName(): string;
    setBusinessName(value: string): PlanbookDetails;
    getPeriod(): string;
    setPeriod(value: string): PlanbookDetails;
    getPrice(): string;
    setPrice(value: string): PlanbookDetails;
    getGroupname(): string;
    setGroupname(value: string): PlanbookDetails;
    getBillingType(): string;
    setBillingType(value: string): PlanbookDetails;
    getTenantId(): string;
    setTenantId(value: string): PlanbookDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlanbookDetails.AsObject;
    static toObject(includeInstance: boolean, msg: PlanbookDetails): PlanbookDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlanbookDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlanbookDetails;
    static deserializeBinaryFromReader(message: PlanbookDetails, reader: jspb.BinaryReader): PlanbookDetails;
}

export namespace PlanbookDetails {
    export type AsObject = {
        id: string,
        planId: string,
        planName: string,
        planType: string,
        planUpspeed: string,
        planDownspeed: string,
        planUpspeedUnit: string,
        planDownspeedUnit: string,
        businessId: string,
        businessName: string,
        period: string,
        price: string,
        groupname: string,
        billingType: string,
        tenantId: string,
    }
}

export class CreatePlanbookRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): CreatePlanbookRequest;

    hasPlanbookParams(): boolean;
    clearPlanbookParams(): void;
    getPlanbookParams(): CreatePlanbookRequest.PlanbookParams | undefined;
    setPlanbookParams(value?: CreatePlanbookRequest.PlanbookParams): CreatePlanbookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePlanbookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePlanbookRequest): CreatePlanbookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePlanbookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePlanbookRequest;
    static deserializeBinaryFromReader(message: CreatePlanbookRequest, reader: jspb.BinaryReader): CreatePlanbookRequest;
}

export namespace CreatePlanbookRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        planbookParams?: CreatePlanbookRequest.PlanbookParams.AsObject,
    }


    export class PlanbookParams extends jspb.Message { 
        getPlanId(): string;
        setPlanId(value: string): PlanbookParams;
        getBillingType(): string;
        setBillingType(value: string): PlanbookParams;

        hasBusinessId(): boolean;
        clearBusinessId(): void;
        getBusinessId(): string | undefined;
        setBusinessId(value: string): PlanbookParams;

        hasPrice(): boolean;
        clearPrice(): void;
        getPrice(): number | undefined;
        setPrice(value: number): PlanbookParams;

        hasPeriod(): boolean;
        clearPeriod(): void;
        getPeriod(): string | undefined;
        setPeriod(value: string): PlanbookParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PlanbookParams.AsObject;
        static toObject(includeInstance: boolean, msg: PlanbookParams): PlanbookParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PlanbookParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PlanbookParams;
        static deserializeBinaryFromReader(message: PlanbookParams, reader: jspb.BinaryReader): PlanbookParams;
    }

    export namespace PlanbookParams {
        export type AsObject = {
            planId: string,
            billingType: string,
            businessId?: string,
            price?: number,
            period?: string,
        }
    }

}

export class CreatePlanbookResponse extends jspb.Message { 
    clearPlanbooksList(): void;
    getPlanbooksList(): Array<Planbook>;
    setPlanbooksList(value: Array<Planbook>): CreatePlanbookResponse;
    addPlanbooks(value?: Planbook, index?: number): Planbook;
    clearRadgroupreplyEntryList(): void;
    getRadgroupreplyEntryList(): Array<radius_pb.Radgroupreply>;
    setRadgroupreplyEntryList(value: Array<radius_pb.Radgroupreply>): CreatePlanbookResponse;
    addRadgroupreplyEntry(value?: radius_pb.Radgroupreply, index?: number): radius_pb.Radgroupreply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePlanbookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePlanbookResponse): CreatePlanbookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePlanbookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePlanbookResponse;
    static deserializeBinaryFromReader(message: CreatePlanbookResponse, reader: jspb.BinaryReader): CreatePlanbookResponse;
}

export namespace CreatePlanbookResponse {
    export type AsObject = {
        planbooksList: Array<Planbook.AsObject>,
        radgroupreplyEntryList: Array<radius_pb.Radgroupreply.AsObject>,
    }
}

export class UpdatePlanbookRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): UpdatePlanbookRequest;
    getPlanbookId(): string;
    setPlanbookId(value: string): UpdatePlanbookRequest;

    hasPlanbookParams(): boolean;
    clearPlanbookParams(): void;
    getPlanbookParams(): UpdatePlanbookRequest.PlanbookParams | undefined;
    setPlanbookParams(value?: UpdatePlanbookRequest.PlanbookParams): UpdatePlanbookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePlanbookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePlanbookRequest): UpdatePlanbookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePlanbookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePlanbookRequest;
    static deserializeBinaryFromReader(message: UpdatePlanbookRequest, reader: jspb.BinaryReader): UpdatePlanbookRequest;
}

export namespace UpdatePlanbookRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        planbookId: string,
        planbookParams?: UpdatePlanbookRequest.PlanbookParams.AsObject,
    }


    export class PlanbookParams extends jspb.Message { 

        hasPrice(): boolean;
        clearPrice(): void;
        getPrice(): number | undefined;
        setPrice(value: number): PlanbookParams;

        hasPeriod(): boolean;
        clearPeriod(): void;
        getPeriod(): string | undefined;
        setPeriod(value: string): PlanbookParams;

        hasBillingType(): boolean;
        clearBillingType(): void;
        getBillingType(): string | undefined;
        setBillingType(value: string): PlanbookParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PlanbookParams.AsObject;
        static toObject(includeInstance: boolean, msg: PlanbookParams): PlanbookParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PlanbookParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PlanbookParams;
        static deserializeBinaryFromReader(message: PlanbookParams, reader: jspb.BinaryReader): PlanbookParams;
    }

    export namespace PlanbookParams {
        export type AsObject = {
            price?: number,
            period?: string,
            billingType?: string,
        }
    }

}

export class UpdatePlanbookResponse extends jspb.Message { 
    clearPlanbooksList(): void;
    getPlanbooksList(): Array<Planbook>;
    setPlanbooksList(value: Array<Planbook>): UpdatePlanbookResponse;
    addPlanbooks(value?: Planbook, index?: number): Planbook;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePlanbookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePlanbookResponse): UpdatePlanbookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePlanbookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePlanbookResponse;
    static deserializeBinaryFromReader(message: UpdatePlanbookResponse, reader: jspb.BinaryReader): UpdatePlanbookResponse;
}

export namespace UpdatePlanbookResponse {
    export type AsObject = {
        planbooksList: Array<Planbook.AsObject>,
    }
}

export class GetPlanbookRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetPlanbookRequest;
    getPlanbookId(): string;
    setPlanbookId(value: string): GetPlanbookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlanbookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlanbookRequest): GetPlanbookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlanbookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlanbookRequest;
    static deserializeBinaryFromReader(message: GetPlanbookRequest, reader: jspb.BinaryReader): GetPlanbookRequest;
}

export namespace GetPlanbookRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        planbookId: string,
    }
}

export class GetPlanbookResponse extends jspb.Message { 
    clearPlanbooksList(): void;
    getPlanbooksList(): Array<Planbook>;
    setPlanbooksList(value: Array<Planbook>): GetPlanbookResponse;
    addPlanbooks(value?: Planbook, index?: number): Planbook;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlanbookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlanbookResponse): GetPlanbookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlanbookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlanbookResponse;
    static deserializeBinaryFromReader(message: GetPlanbookResponse, reader: jspb.BinaryReader): GetPlanbookResponse;
}

export namespace GetPlanbookResponse {
    export type AsObject = {
        planbooksList: Array<Planbook.AsObject>,
    }
}

export class GetPlanbooksRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetPlanbooksRequest;
    getLimit(): number;
    setLimit(value: number): GetPlanbooksRequest;
    getOffset(): number;
    setOffset(value: number): GetPlanbooksRequest;

    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): string | undefined;
    setSearch(value: string): GetPlanbooksRequest;
    clearPlanTypesList(): void;
    getPlanTypesList(): Array<string>;
    setPlanTypesList(value: Array<string>): GetPlanbooksRequest;
    addPlanTypes(value: string, index?: number): string;
    clearBusinessIdsList(): void;
    getBusinessIdsList(): Array<string>;
    setBusinessIdsList(value: Array<string>): GetPlanbooksRequest;
    addBusinessIds(value: string, index?: number): string;
    clearPlanIdsList(): void;
    getPlanIdsList(): Array<string>;
    setPlanIdsList(value: Array<string>): GetPlanbooksRequest;
    addPlanIds(value: string, index?: number): string;
    clearBillingTypesList(): void;
    getBillingTypesList(): Array<string>;
    setBillingTypesList(value: Array<string>): GetPlanbooksRequest;
    addBillingTypes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlanbooksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlanbooksRequest): GetPlanbooksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlanbooksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlanbooksRequest;
    static deserializeBinaryFromReader(message: GetPlanbooksRequest, reader: jspb.BinaryReader): GetPlanbooksRequest;
}

export namespace GetPlanbooksRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        limit: number,
        offset: number,
        search?: string,
        planTypesList: Array<string>,
        businessIdsList: Array<string>,
        planIdsList: Array<string>,
        billingTypesList: Array<string>,
    }
}

export class GetPlanbooksResponse extends jspb.Message { 
    clearPlanbooksList(): void;
    getPlanbooksList(): Array<PlanbookDetails>;
    setPlanbooksList(value: Array<PlanbookDetails>): GetPlanbooksResponse;
    addPlanbooks(value?: PlanbookDetails, index?: number): PlanbookDetails;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.PaginationMeta | undefined;
    setMeta(value?: common_pb.PaginationMeta): GetPlanbooksResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlanbooksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlanbooksResponse): GetPlanbooksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlanbooksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlanbooksResponse;
    static deserializeBinaryFromReader(message: GetPlanbooksResponse, reader: jspb.BinaryReader): GetPlanbooksResponse;
}

export namespace GetPlanbooksResponse {
    export type AsObject = {
        planbooksList: Array<PlanbookDetails.AsObject>,
        meta?: common_pb.PaginationMeta.AsObject,
    }
}

export class BusinessPlanbookForPlan extends jspb.Message { 
    getId(): string;
    setId(value: string): BusinessPlanbookForPlan;
    getName(): string;
    setName(value: string): BusinessPlanbookForPlan;
    getType(): string;
    setType(value: string): BusinessPlanbookForPlan;
    getBillingType(): string;
    setBillingType(value: string): BusinessPlanbookForPlan;
    getCustomerCount(): number;
    setCustomerCount(value: number): BusinessPlanbookForPlan;
    getPrice(): string;
    setPrice(value: string): BusinessPlanbookForPlan;
    getPeriod(): string;
    setPeriod(value: string): BusinessPlanbookForPlan;
    getTenantId(): string;
    setTenantId(value: string): BusinessPlanbookForPlan;
    getBusinessId(): string;
    setBusinessId(value: string): BusinessPlanbookForPlan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BusinessPlanbookForPlan.AsObject;
    static toObject(includeInstance: boolean, msg: BusinessPlanbookForPlan): BusinessPlanbookForPlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BusinessPlanbookForPlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BusinessPlanbookForPlan;
    static deserializeBinaryFromReader(message: BusinessPlanbookForPlan, reader: jspb.BinaryReader): BusinessPlanbookForPlan;
}

export namespace BusinessPlanbookForPlan {
    export type AsObject = {
        id: string,
        name: string,
        type: string,
        billingType: string,
        customerCount: number,
        price: string,
        period: string,
        tenantId: string,
        businessId: string,
    }
}

export class GetBusinessesPlanbookForPlanRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetBusinessesPlanbookForPlanRequest;

    hasPlanId(): boolean;
    clearPlanId(): void;
    getPlanId(): string | undefined;
    setPlanId(value: string): GetBusinessesPlanbookForPlanRequest;
    getLimit(): number;
    setLimit(value: number): GetBusinessesPlanbookForPlanRequest;
    getOffset(): number;
    setOffset(value: number): GetBusinessesPlanbookForPlanRequest;

    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): string | undefined;
    setSearch(value: string): GetBusinessesPlanbookForPlanRequest;
    clearTypeList(): void;
    getTypeList(): Array<string>;
    setTypeList(value: Array<string>): GetBusinessesPlanbookForPlanRequest;
    addType(value: string, index?: number): string;
    clearBillingTypeList(): void;
    getBillingTypeList(): Array<string>;
    setBillingTypeList(value: Array<string>): GetBusinessesPlanbookForPlanRequest;
    addBillingType(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBusinessesPlanbookForPlanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBusinessesPlanbookForPlanRequest): GetBusinessesPlanbookForPlanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBusinessesPlanbookForPlanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBusinessesPlanbookForPlanRequest;
    static deserializeBinaryFromReader(message: GetBusinessesPlanbookForPlanRequest, reader: jspb.BinaryReader): GetBusinessesPlanbookForPlanRequest;
}

export namespace GetBusinessesPlanbookForPlanRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        planId?: string,
        limit: number,
        offset: number,
        search?: string,
        typeList: Array<string>,
        billingTypeList: Array<string>,
    }
}

export class GetBusinessesPlanbookForPlanResponse extends jspb.Message { 
    clearBusinessesList(): void;
    getBusinessesList(): Array<BusinessPlanbookForPlan>;
    setBusinessesList(value: Array<BusinessPlanbookForPlan>): GetBusinessesPlanbookForPlanResponse;
    addBusinesses(value?: BusinessPlanbookForPlan, index?: number): BusinessPlanbookForPlan;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.PaginationMeta | undefined;
    setMeta(value?: common_pb.PaginationMeta): GetBusinessesPlanbookForPlanResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBusinessesPlanbookForPlanResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBusinessesPlanbookForPlanResponse): GetBusinessesPlanbookForPlanResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBusinessesPlanbookForPlanResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBusinessesPlanbookForPlanResponse;
    static deserializeBinaryFromReader(message: GetBusinessesPlanbookForPlanResponse, reader: jspb.BinaryReader): GetBusinessesPlanbookForPlanResponse;
}

export namespace GetBusinessesPlanbookForPlanResponse {
    export type AsObject = {
        businessesList: Array<BusinessPlanbookForPlan.AsObject>,
        meta?: common_pb.PaginationMeta.AsObject,
    }
}

export class PlansPlanbookForBusiness extends jspb.Message { 
    getId(): string;
    setId(value: string): PlansPlanbookForBusiness;
    getName(): string;
    setName(value: string): PlansPlanbookForBusiness;
    getUpSpeed(): number;
    setUpSpeed(value: number): PlansPlanbookForBusiness;
    getDownSpeed(): number;
    setDownSpeed(value: number): PlansPlanbookForBusiness;
    getUpSpeedUnit(): string;
    setUpSpeedUnit(value: string): PlansPlanbookForBusiness;
    getDownSpeedUnit(): string;
    setDownSpeedUnit(value: string): PlansPlanbookForBusiness;
    getIsPostFup(): boolean;
    setIsPostFup(value: boolean): PlansPlanbookForBusiness;

    hasDataLimit(): boolean;
    clearDataLimit(): void;
    getDataLimit(): string | undefined;
    setDataLimit(value: string): PlansPlanbookForBusiness;
    getType(): string;
    setType(value: string): PlansPlanbookForBusiness;
    getBillingType(): string;
    setBillingType(value: string): PlansPlanbookForBusiness;
    getPrice(): string;
    setPrice(value: string): PlansPlanbookForBusiness;
    getPeriod(): string;
    setPeriod(value: string): PlansPlanbookForBusiness;
    getCustomerCount(): number;
    setCustomerCount(value: number): PlansPlanbookForBusiness;
    getTenantId(): string;
    setTenantId(value: string): PlansPlanbookForBusiness;
    getPlanId(): string;
    setPlanId(value: string): PlansPlanbookForBusiness;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlansPlanbookForBusiness.AsObject;
    static toObject(includeInstance: boolean, msg: PlansPlanbookForBusiness): PlansPlanbookForBusiness.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlansPlanbookForBusiness, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlansPlanbookForBusiness;
    static deserializeBinaryFromReader(message: PlansPlanbookForBusiness, reader: jspb.BinaryReader): PlansPlanbookForBusiness;
}

export namespace PlansPlanbookForBusiness {
    export type AsObject = {
        id: string,
        name: string,
        upSpeed: number,
        downSpeed: number,
        upSpeedUnit: string,
        downSpeedUnit: string,
        isPostFup: boolean,
        dataLimit?: string,
        type: string,
        billingType: string,
        price: string,
        period: string,
        customerCount: number,
        tenantId: string,
        planId: string,
    }
}

export class GetPlansPlanbookForBusinessRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetPlansPlanbookForBusinessRequest;
    getLimit(): number;
    setLimit(value: number): GetPlansPlanbookForBusinessRequest;
    getOffset(): number;
    setOffset(value: number): GetPlansPlanbookForBusinessRequest;
    getSearch(): string;
    setSearch(value: string): GetPlansPlanbookForBusinessRequest;
    clearTypesList(): void;
    getTypesList(): Array<string>;
    setTypesList(value: Array<string>): GetPlansPlanbookForBusinessRequest;
    addTypes(value: string, index?: number): string;
    clearBillingTypesList(): void;
    getBillingTypesList(): Array<string>;
    setBillingTypesList(value: Array<string>): GetPlansPlanbookForBusinessRequest;
    addBillingTypes(value: string, index?: number): string;

    hasBusinessId(): boolean;
    clearBusinessId(): void;
    getBusinessId(): string | undefined;
    setBusinessId(value: string): GetPlansPlanbookForBusinessRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlansPlanbookForBusinessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlansPlanbookForBusinessRequest): GetPlansPlanbookForBusinessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlansPlanbookForBusinessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlansPlanbookForBusinessRequest;
    static deserializeBinaryFromReader(message: GetPlansPlanbookForBusinessRequest, reader: jspb.BinaryReader): GetPlansPlanbookForBusinessRequest;
}

export namespace GetPlansPlanbookForBusinessRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        limit: number,
        offset: number,
        search: string,
        typesList: Array<string>,
        billingTypesList: Array<string>,
        businessId?: string,
    }
}

export class GetPlansPlanbookForBusinessResponse extends jspb.Message { 
    clearPlansList(): void;
    getPlansList(): Array<PlansPlanbookForBusiness>;
    setPlansList(value: Array<PlansPlanbookForBusiness>): GetPlansPlanbookForBusinessResponse;
    addPlans(value?: PlansPlanbookForBusiness, index?: number): PlansPlanbookForBusiness;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.PaginationMeta | undefined;
    setMeta(value?: common_pb.PaginationMeta): GetPlansPlanbookForBusinessResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlansPlanbookForBusinessResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlansPlanbookForBusinessResponse): GetPlansPlanbookForBusinessResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlansPlanbookForBusinessResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlansPlanbookForBusinessResponse;
    static deserializeBinaryFromReader(message: GetPlansPlanbookForBusinessResponse, reader: jspb.BinaryReader): GetPlansPlanbookForBusinessResponse;
}

export namespace GetPlansPlanbookForBusinessResponse {
    export type AsObject = {
        plansList: Array<PlansPlanbookForBusiness.AsObject>,
        meta?: common_pb.PaginationMeta.AsObject,
    }
}

export class GetPlanbooksFromFiltersRequest extends jspb.Message { 

    hasAuthContext(): boolean;
    clearAuthContext(): void;
    getAuthContext(): common_pb.AuthContext | undefined;
    setAuthContext(value?: common_pb.AuthContext): GetPlanbooksFromFiltersRequest;
    getLimit(): number;
    setLimit(value: number): GetPlanbooksFromFiltersRequest;
    getOffset(): number;
    setOffset(value: number): GetPlanbooksFromFiltersRequest;

    hasPlanId(): boolean;
    clearPlanId(): void;
    getPlanId(): string | undefined;
    setPlanId(value: string): GetPlanbooksFromFiltersRequest;

    hasBusinessId(): boolean;
    clearBusinessId(): void;
    getBusinessId(): string | undefined;
    setBusinessId(value: string): GetPlanbooksFromFiltersRequest;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): string | undefined;
    setPeriod(value: string): GetPlanbooksFromFiltersRequest;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): string | undefined;
    setPrice(value: string): GetPlanbooksFromFiltersRequest;

    hasBillingType(): boolean;
    clearBillingType(): void;
    getBillingType(): string | undefined;
    setBillingType(value: string): GetPlanbooksFromFiltersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlanbooksFromFiltersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlanbooksFromFiltersRequest): GetPlanbooksFromFiltersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlanbooksFromFiltersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlanbooksFromFiltersRequest;
    static deserializeBinaryFromReader(message: GetPlanbooksFromFiltersRequest, reader: jspb.BinaryReader): GetPlanbooksFromFiltersRequest;
}

export namespace GetPlanbooksFromFiltersRequest {
    export type AsObject = {
        authContext?: common_pb.AuthContext.AsObject,
        limit: number,
        offset: number,
        planId?: string,
        businessId?: string,
        period?: string,
        price?: string,
        billingType?: string,
    }
}

export class GetPlanbooksFromFiltersResponse extends jspb.Message { 
    clearPlanbooksList(): void;
    getPlanbooksList(): Array<Planbook>;
    setPlanbooksList(value: Array<Planbook>): GetPlanbooksFromFiltersResponse;
    addPlanbooks(value?: Planbook, index?: number): Planbook;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): common_pb.PaginationMeta | undefined;
    setMeta(value?: common_pb.PaginationMeta): GetPlanbooksFromFiltersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlanbooksFromFiltersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlanbooksFromFiltersResponse): GetPlanbooksFromFiltersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlanbooksFromFiltersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlanbooksFromFiltersResponse;
    static deserializeBinaryFromReader(message: GetPlanbooksFromFiltersResponse, reader: jspb.BinaryReader): GetPlanbooksFromFiltersResponse;
}

export namespace GetPlanbooksFromFiltersResponse {
    export type AsObject = {
        planbooksList: Array<Planbook.AsObject>,
        meta?: common_pb.PaginationMeta.AsObject,
    }
}
