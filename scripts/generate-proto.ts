/**
 * Script to generate TypeScript code from Protocol Buffer definitions
 */
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

// Directories
const PROTO_DIR = path.join(__dirname, "../proto");
const OUTPUT_DIR = path.join(__dirname, "../src/grpc/generated");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Find all .proto files
const protoFiles = fs
  .readdirSync(PROTO_DIR)
  .filter((file) => file.endsWith(".proto"))
  .map((file) => path.join(PROTO_DIR, file));

console.log("Generating TypeScript code from Protocol Buffer definitions...");
console.log(`Found ${protoFiles.length} proto files.`);

// Generate JavaScript code
execSync(`grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:${OUTPUT_DIR} \
  --grpc_out=grpc_js:${OUTPUT_DIR} \
  --proto_path=${PROTO_DIR} \
  ${protoFiles.join(" ")}`);

// Generate TypeScript definitions
execSync(`grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=grpc_js:${OUTPUT_DIR} \
  --proto_path=${PROTO_DIR} \
  ${protoFiles.join(" ")}`);

console.log("Code generation completed successfully!");
