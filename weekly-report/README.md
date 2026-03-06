# Weekly Report / 个人技术周报系统

A full-stack learning project built with Next.js App Router, Tailwind CSS, Prisma, and PostgreSQL.

一个基于 Next.js App Router、Tailwind CSS、Prisma、PostgreSQL 的全栈学习项目。

## Project Status / 当前状态

- Day 1 - Day 7 completed.
- Day 1 - Day 7 已完成。
- Frontend display language has been refactored to English.
- 前端显示文案已重构为英文。

## Local Development / 本地开发

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate -- --name init
npm run dev
```

Open / 打开: `http://localhost:3000`

## Day-by-Day Changes / Day1-Day7 变更记录

1. Day 1 - Project bootstrap and React fundamentals.
   Day 1 - 完成项目初始化与 React 组件化基础。
   Key changes / 关键变化: Next.js App Router scaffold, Tailwind setup, basic page and reusable components.

2. Day 2 - Routing and nested layout.
   Day 2 - 完成路由拆分与嵌套布局。
   Key changes / 关键变化: `/login`, `/reports`, `/reports/new`, shared layout and navigation with active route highlight.

3. Day 3 - Server Component data flow.
   Day 3 - 完成服务端组件数据流分层。
   Key changes / 关键变化: `repository/service` structure, server-side data fetching, `loading.tsx` and `error.tsx`.

4. Day 4 - Server Actions for create report.
   Day 4 - 完成 Server Actions 提交周报。
   Key changes / 关键变化: form validation, submission state, revalidate + redirect flow.

5. Day 5 - Prisma + authentication.
   Day 5 - 接入 Prisma 与简易认证。
   Key changes / 关键变化: Prisma schema (`User` + `Report`), session cookie auth, login/register action, user-scoped reports.

6. Day 6 - UX polish.
   Day 6 - 完成交互与体验优化。
   Key changes / 关键变化: improved loading/error/empty states, better form accessibility and constraints, report date display.

7. Day 7 - Docker deployment for cloud server.
   Day 7 - 完成 Docker 云服务器部署方案。
   Key changes / 关键变化: multi-stage `Dockerfile`, `docker-compose.yml`, Nginx reverse proxy template, HTTPS deployment guide.

## Tech Stack / 技术栈

- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Docker + Nginx (deployment / 部署)

## Main Structure / 主要目录

- `src/app` - pages, layouts, route-level loading/error, server actions.
- `src/components` - UI components and form components.
- `src/lib/auth` - session and auth helpers.
- `src/lib/reports` - report service/repository/form state.
- `src/lib/prisma.ts` - Prisma client singleton.
- `prisma/schema.prisma` - database schema.
- `deploy/DEPLOY_DOCKER.md` - cloud deployment playbook.

## Docker Deployment (Cloud Server) / Docker 云部署

```bash
git clone <your_repo_url> weekly-report
cd weekly-report
echo 'POSTGRES_PASSWORD=304714' > .env
docker compose up -d --build
```

Then configure Nginx + HTTPS by following:

然后按以下文档完成 Nginx 与 HTTPS 配置：

- `deploy/DEPLOY_DOCKER.md`
- `deploy/nginx/weekly-report.conf`

## Verification Checklist / 验收清单

1. `/login` can sign in/register.
2. `/reports/new` can submit a report.
3. `/reports` shows only current user's reports.
4. Sign out works and redirects to login.
5. Docker service restarts successfully.

1. `/login` 可登录/注册。
2. `/reports/new` 可提交周报。
3. `/reports` 仅展示当前用户数据。
4. 退出登录可用并跳转登录页。
5. Docker 服务可稳定重启。
