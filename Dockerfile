# Use official Bun base image
FROM oven/bun:1.1.13 as base

# Set environment variables
ENV GRPC_SERVER_ADDRESS="grpc.nucleus-cloud.in:50051"
ENV NODE_ENV="prod"
ENV PORT=3000

# Set working directory
WORKDIR /app

# Copy deps and install
COPY bun.lock package.json tsconfig.json ./
RUN bun install --production

# Copy source code
COPY . .

# Expose app port
EXPOSE 3000

# Run the app
CMD ["bun", "run", "start"]
