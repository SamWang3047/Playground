# Weekly Report (Next.js Day 3)

当前进度：完成 Day 3（Server Components 数据读取分层 + loading/error）。

## 启动

```bash
npm install
npm run dev
```

访问 <http://localhost:3000>

## 当前路由

- `/`：首页，服务端读取最近 2 条周报
- `/reports`：历史周报列表（服务端读取）
- `/reports/new`：创建周报（客户端表单模拟）
- `/login`：登录页面（客户端表单模拟）

## Day 3 项目结构（重点）

- `src/app/layout.tsx`
  - 根布局，包裹全应用。
- `src/app/(main)/layout.tsx`
  - 主业务布局，复用页面壳和导航。
- `src/app/(main)/reports/page.tsx`
  - Server Component 页面，调用 `getReportsForList()` 读取数据。
- `src/app/(main)/reports/loading.tsx`
  - 列表加载态。
- `src/app/(main)/reports/error.tsx`
  - 列表错误态与重试按钮。
- `src/lib/reports/types.ts`
  - 报告数据类型定义。
- `src/lib/reports/repository.ts`
  - 数据访问层（当前 mock，后续可替换 Prisma）。
- `src/lib/reports/service.ts`
  - 业务层（排序、截取最近数据）。
- `src/components/ReportList.tsx`
  - 列表展示组件（包含空状态处理）。
- `src/components/ReportCard.tsx`
  - 单条展示组件。

## Day 3 完成项

- 页面改为服务端取数（async Server Component）
- 引入 Repository/Service 分层
- 完成 `/reports` 的 `loading.tsx` 与 `error.tsx`
- 首页也复用服务层函数读取最近数据

## Day 4 计划

- 用 Server Actions 处理表单提交
- 实现“新增周报”后跳转和刷新列表
- 加入基础字段校验（标题必填、摘要长度）
