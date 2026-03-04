# Weekly Report (Next.js Day 7)

当前进度：完成 Day 7（Docker 部署到云服务器）。

## 本地开发

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate -- --name init
npm run dev
```

## Docker 化文件

- `Dockerfile`：多阶段构建，Next.js standalone 运行。
- `.dockerignore`：忽略本地构建产物和敏感文件。
- `docker-compose.yml`：一键启动 `app + postgres`。
- `deploy/nginx/weekly-report.conf`：Nginx 反向代理模板。
- `deploy/DEPLOY_DOCKER.md`：完整云服务器部署步骤。

## 快速部署（云服务器）

```bash
git clone <your_repo_url> weekly-report
cd weekly-report
echo 'POSTGRES_PASSWORD=304714' > .env
docker compose up -d --build
```

然后按 `deploy/DEPLOY_DOCKER.md` 配置 Nginx 和 HTTPS。

## 验证

1. `/login` 登录/注册
2. `/reports/new` 提交周报
3. `/reports` 查看历史
4. 退出登录
