import type { ServiceError } from "@grpc/grpc-js";

/**
 * Converts a callback-style gRPC call into a Promise
 * @param call The gRPC call function that takes a callback
 * @returns A promise that resolves with the response or rejects with an error
 */
export function promisifyGrpcCall<T>(
  call: (callback: (error: ServiceError | null, response?: T) => void) => void
): Promise<T> {
  return new Promise((resolve, reject) => {
    call((error, response) => {
      if (error) reject(error);
      else if (!response) reject(new Error("No response"));
      else resolve(response);
    });
  });
}
