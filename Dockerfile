# stage-1: build the frontend
FROM node:20-alpine AS frontend_builder

WORKDIR /app

# install frontend dependencies
COPY ./docker-compose/Frontend/package*.json ./

RUN npm install

# copy frontend source code
COPY ./docker-compose/Frontend ./

# build frontend
RUN npm run build


# stage-2: fullstack image
FROM node:20-alpine

WORKDIR /app

# install backend dependencies
COPY ./docker-compose/Backend/package*.json ./

RUN npm install

# copy frontend build files into backend public folder
COPY --from=frontend_builder /app/dist /app/public

# copy backend source code
COPY ./docker-compose/Backend ./

EXPOSE 3000

CMD ["node", "server.js"]