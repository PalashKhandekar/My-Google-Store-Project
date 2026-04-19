# Build frontend
FROM node:18-alpine as frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Build backend
FROM node:18-alpine as backend
WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend/ .
COPY --from=frontend /app/frontend/dist ./public
EXPOSE 4000
CMD ["npm", "start"]
