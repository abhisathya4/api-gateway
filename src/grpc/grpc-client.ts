import * as grpc from "@grpc/grpc-js";
import { ActiveSessionsServiceClient } from "./generated/active-sessions_grpc_pb";
import { AdminServiceClient } from "./generated/admin_grpc_pb";
import { BusinessServiceClient } from "./generated/business_grpc_pb";
import { ConfigServiceClient } from "./generated/config_grpc_pb";
import { CustomerServiceClient } from "./generated/customers_grpc_pb";
import { NasServiceClient } from "./generated/nas_grpc_pb";
import { OrganizationServiceClient } from "./generated/organization_grpc_pb";
import { PlanServiceClient } from "./generated/plan_grpc_pb";
import { PlanbookServiceClient } from "./generated/planbook_grpc_pb";
import { env } from "../config/env";

export class GrpcClient {
  private static instance: GrpcClient;
  private clients: Map<string, any>;

  private constructor() {
    this.clients = new Map();
  }

  public static getInstance(): GrpcClient {
    if (!GrpcClient.instance) {
      GrpcClient.instance = new GrpcClient();
    }
    return GrpcClient.instance;
  }

  private getClient<T>(
    name: string,
    ClientClass: new (
      address: string,
      credentials: grpc.ChannelCredentials
    ) => T,
    address: string = env.GRPC_SERVER_ADDRESS || "localhost:50051"
  ): T {
    if (!this.clients.has(name)) {
      this.clients.set(
        name,
        new ClientClass(address, grpc.credentials.createInsecure())
      );
    }
    return this.clients.get(name) as T;
  }

  public getAdminClient(): AdminServiceClient {
    return this.getClient("admin", AdminServiceClient);
  }

  public getBusinessClient(): BusinessServiceClient {
    return this.getClient("business", BusinessServiceClient);
  }

  public getConfigClient(): ConfigServiceClient {
    return this.getClient("config", ConfigServiceClient);
  }

  public getCustomerClient(): CustomerServiceClient {
    return this.getClient("customer", CustomerServiceClient);
  }

  public getNasClient(): NasServiceClient {
    return this.getClient("nas", NasServiceClient);
  }

  public getOrganizationClient(): OrganizationServiceClient {
    return this.getClient("organization", OrganizationServiceClient);
  }

  public getPlanClient(): PlanServiceClient {
    return this.getClient("plan", PlanServiceClient);
  }

  public getPlanbookClient(): PlanbookServiceClient {
    return this.getClient("planbook", PlanbookServiceClient);
  }

  public getActiveSessionsClient(): ActiveSessionsServiceClient {
    return this.getClient("active-sessions", ActiveSessionsServiceClient);
  }

  public closeAll(): void {
    this.clients.forEach((client) => {
      if (client && typeof client.close === "function") {
        client.close();
      }
    });
    this.clients.clear();
  }
}
