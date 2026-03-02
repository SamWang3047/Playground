# Weekly Report (Next.js Day 2)

一个用于 7 天全栈冲刺的训练项目。当前完成 Day 2：App Router 路由、嵌套布局、导航拆分。

## 启动

```bash
npm install
npm run dev
```

访问 <http://localhost:3000>

## 当前路由

- `/`：项目首页（位于 `src/app/(main)/page.tsx`）
- `/reports`：历史周报列表（位于 `src/app/(main)/reports/page.tsx`）
- `/reports/new`：创建周报页面（位于 `src/app/(main)/reports/new/page.tsx`）
- `/login`：登录页面（位于 `src/app/login/page.tsx`）

## 目录说明

- `src/app/layout.tsx`：根布局，包裹整个应用
- `src/app/(main)/layout.tsx`：主业务区布局（导航 + 页面容器）
- `src/components/AppShell.tsx`：主壳组件，负责头部和主内容区域框架
- `src/components/navigation/MainNav.tsx`：导航菜单
- `src/components/navigation/NavLink.tsx`：导航项（带当前路由高亮）
- `src/components/ReportList.tsx`：周报列表容器（处理空列表态）
- `src/components/ReportCard.tsx`：单条周报展示卡片
- `src/components/ReportForm.tsx`：写周报表单（Client Component，含 `useState`）
- `src/components/LoginForm.tsx`：登录表单（Client Component）
- `src/lib/mockReports.ts`：模拟数据源

## Day 2 完成项

- 使用 App Router 建立多页面路由
- 使用 `layout.tsx` 抽取共享页面壳
- 导航高亮与页面间跳转
- 列表页与表单页分离

## Day 3 计划

- 引入 Server Component 数据获取思路
- 增加 `loading.tsx` 和 `error.tsx`
- 让列表页从“模拟数组”过渡到“服务端读取”
