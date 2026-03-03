# Weekly Report (Next.js Day 6)

当前进度：完成 Day 6（UI 与交互优化，loading/error/empty 反馈完善）。

## 启动

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate -- --name init
npm run dev
```

## Day 6 本次优化

- 列表卡片展示提交日期，增强可读性。
- 历史页新增统计信息（周报总数）。
- 空状态增加“去写第一篇”快捷入口。
- `loading.tsx` 文案与骨架细节优化。
- `error.tsx` 提示更明确，支持重试。
- 写周报表单增强：
  - 提交期间禁用输入框
  - 标题 `maxLength=80`
  - 摘要 `minLength=10`
  - 辅助说明与可访问性 `aria-describedby`

## Day 6 结构重点

- `src/components/ReportCard.tsx`
- `src/components/ReportList.tsx`
- `src/components/ReportForm.tsx`
- `src/app/(main)/reports/page.tsx`
- `src/app/(main)/reports/loading.tsx`
- `src/app/(main)/reports/error.tsx`

## Day 7 计划

- 部署到 Vercel 或 Docker
- 配置线上数据库与环境变量
- 进行上线回归测试（登录、写周报、查看历史、退出登录）
