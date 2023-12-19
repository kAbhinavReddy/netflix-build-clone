# # Use an official Node runtime as a parent image
FROM node:latest
# # Set the working directory in the container
WORKDIR /app
# # Copy package.json and package-lock.json to the working directory
COPY package.json ./
# # Install app dependencies
RUN npm install
# # Copy the app files to the working directory
COPY . .
# # Start the server
CMD ["npm","start"]