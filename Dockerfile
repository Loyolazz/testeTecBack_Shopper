FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate dev
RUN npm run build
COPY .env.example .env

FROM node:18-alpine

WORKDIR /app

# Instalar o psql
RUN apk add --no-cache postgresql-client

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000

CMD ["npm", "start"]
