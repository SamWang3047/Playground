export type WeeklyReport = {
  id: string;
  week: string;
  title: string;
  summary: string;
  createdAt: string;
};

export const mockReports: WeeklyReport[] = [
  {
    id: "rpt-001",
    week: "2026-W08",
    title: "Next.js 路由学习",
    summary: "完成 App Router 基础阅读，理解 page.tsx 与 layout.tsx 的关系。",
    createdAt: "2026-02-26",
  },
  {
    id: "rpt-002",
    week: "2026-W08",
    title: "Java 到 React 思维迁移",
    summary: "把组件理解成可复用 UI Bean，状态理解成对象内部字段。",
    createdAt: "2026-02-27",
  },
  {
    id: "rpt-003",
    week: "2026-W07",
    title: "Tailwind 样式重构",
    summary: "将旧样式统一为 Tailwind class，减少重复 CSS 并提升维护性。",
    createdAt: "2026-02-19",
  },
];
