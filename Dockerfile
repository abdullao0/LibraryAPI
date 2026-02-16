# Node image

FROM node:20-alpine

# Create app dir

WORKDIR /usr/src/app

# Copy package files and install dependencies

COPY package*.json ./
RUN npm install

# Copy rest of project

COPY . .

# Expose port

EXPOSE 3000

# Start app

CMD [ "npm", "start"]
