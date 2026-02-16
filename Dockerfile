# Node image

FROM node:20-alpine

# Create app dir

WORKDIR /app

# Copy package files first (better caching)

COPY package*.json ./

# Indtall dependecies

RUN npm install

# Copy rest of project

COPY . .

# Expose port

EXPOSE 3000

# Start app

CMD [ "npm", "start"]
