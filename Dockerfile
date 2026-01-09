FROM node:20-alpine AS build

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
ENV NEXT_PUBLIC_GIT_BRANCH=develop
ENV NEXT_PUBLIC_API_URL=https://res2026-backend.crocos.kz

RUN corepack enable && corepack prepare pnpm@latest --activate \
    && pnpm install --frozen-lockfile

COPY . .
RUN pnpm build



FROM node:20-alpine AS app

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build --chown=nextjs:nodejs /app/next.config.ts ./
COPY --from=build --chown=nextjs:nodejs /app/public ./public/
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static


USER nextjs
EXPOSE 3000
ENV NODE_ENV=production
ENV NEXT_PUBLIC_GIT_BRANCH=production
ENV PORT=3000

CMD ["node", "server.js"]