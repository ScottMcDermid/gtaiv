# syntax=docker/dockerfile:1

# ---- build ----
FROM node:22-alpine AS build
WORKDIR /app

# devDependencies are needed to build, so install before NODE_ENV is applied.
COPY package.json package-lock.json ./
RUN npm ci

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

COPY . .
RUN npm run build

# ---- serve ----
FROM nginx:1.27-alpine AS runtime
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
# 127.0.0.1, not localhost: localhost resolves to ::1 first and nginx is IPv4-only here.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ > /dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
