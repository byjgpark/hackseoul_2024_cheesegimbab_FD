# Dockerfile
FROM node:18-slim

WORKDIR /app

# Copy package.json, yarn.lock, and tsconfig.json
COPY package.json yarn.lock tsconfig.json ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of your application code
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Run the Next.js application
CMD ["yarn", "start"]
