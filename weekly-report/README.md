# Weekly Report (Next.js Day 4)

当前进度：完成 Day 4（Server Actions 表单提交 + 校验 + 列表刷新）。

## 启动

```bash
npm install
npm run dev
```

访问 <http://localhost:3000>

## 当前路由

- `/`：首页，服务端读取最近 2 条周报
- `/reports`：历史周报列表（服务端读取）
- `/reports/new`：创建周报（Server Actions 提交）
- `/login`：登录页面（客户端表单模拟）

## Day 4 项目结构（重点）

- `src/app/(main)/reports/new/actions.ts`
  - Server Action：接收表单、校验、写入、`revalidatePath`、`redirect`。
- `src/components/ReportForm.tsx`
  - Client Component：通过 `useActionState` 调用 Server Action，展示字段错误和提交态。
- `src/lib/reports/repository.ts`
  - 新增 `insertReport()`，模拟仓储写入（内存存储）。
- `src/lib/reports/service.ts`
  - 新增 `createWeeklyReport()`，封装业务字段（`createdAt`、ISO week）。
- `src/lib/reports/form-state.ts`
  - 表单状态与错误结构定义，供前后端共用。

## Day 4 完成项

- 新建周报由“前端 alert 模拟”改为“Server Action 真提交”
- 服务端校验（标题必填且 <= 80；摘要必填且 >= 10）
- 校验错误回显到字段
- 提交成功后刷新 `/` 与 `/reports`，并跳转到 `/reports`

## 说明

- 当前写入使用内存仓库，重启开发服务后数据会重置。
- Day 5 将接入 Prisma + PostgreSQL/MySQL，替换仓储层实现。
