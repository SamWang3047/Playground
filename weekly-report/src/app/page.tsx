import { Header } from "@/components/Header";
import { ReportCard } from "@/components/ReportCard";
import { ReportForm } from "@/components/ReportForm";

const mockReports = [
  {
    title: "Next.js 路由学习",
    summary: "完成 App Router 基础阅读，理解 page.tsx 与 layout.tsx 的关系。",
    week: "2026-W08",
  },
  {
    title: "Java 到 React 思维迁移",
    summary: "把组件理解成可复用 UI Bean，状态理解成对象内部字段。",
    week: "2026-W08",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto grid w-full max-w-5xl gap-6 px-6 py-8 md:grid-cols-2">
        <section className="space-y-4">
          <h2 className="text-xl font-bold">历史周报</h2>
          {mockReports.map((report) => (
            <ReportCard key={report.title} {...report} />
          ))}
        </section>
        <section>
          <ReportForm />
        </section>
      </main>
    </div>
  );
}
