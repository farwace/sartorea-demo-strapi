# syntax=docker/dockerfile:1
#
# Build context is the project root: the seed reads ../shared/ui-strings.json.
#
#   docker build -f strapi/Dockerfile -t sartorea-cms .
#
FROM node:22.14.0-bookworm-slim AS base
# Pinned to the version that wrote pnpm-lock.yaml: corepack otherwise resolves
# the newest major, which does not match a lockfileVersion 9.0 install.
ENV PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH \
    CI=true
# better-sqlite3 falls back to compiling when no prebuild matches, so ship a toolchain.
RUN npm install -g pnpm@9.15.4 \
    && apt-get update \
    && apt-get install -y --no-install-recommends python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

FROM base AS build
WORKDIR /app
COPY strapi/package.json strapi/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY strapi/ ./
COPY shared/ /shared/
# `strapi build` loads the config, which validates secrets. Placeholders keep the
# image buildable; the real values arrive at runtime through the environment.
ENV APP_KEYS=build,only \
    API_TOKEN_SALT=build-only \
    ADMIN_JWT_SECRET=build-only \
    JWT_SECRET=build-only \
    TRANSFER_TOKEN_SALT=build-only \
    ENCRYPTION_KEY=build-only \
    SHARED_DIR=/shared
RUN pnpm build

FROM base AS runtime
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=1337 \
    SHARED_DIR=/shared \
    DATABASE_CLIENT=sqlite \
    DATABASE_FILENAME=.tmp/data.db
WORKDIR /app
COPY --from=build /app ./
COPY --from=build /shared /shared
RUN mkdir -p /app/.tmp /app/public/uploads
EXPOSE 1337
HEALTHCHECK --interval=15s --timeout=5s --start-period=90s --retries=5 \
    CMD node -e "fetch('http://127.0.0.1:1337/_health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["pnpm", "start"]
