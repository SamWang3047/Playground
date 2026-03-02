import Link from "next/link";
import { ReportList } from "@/components/ReportList";
import { getRecentReports } from "@/lib/reports/service";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const recentReports = await getRecentReports(2);

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">欢迎来到你的个人技术周报系统</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          这套页面演示了 Next.js App Router 的路由拆分方式。你可以直接进入“历史周报”查看列表，或者去“写周报”体验表单页面。
        </p>
        <div className="mt-4 flex gap-3">
          <Link href="/reports" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
            查看历史
          </Link>
          <Link href="/reports/new" className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700">
            写本周周报
          </Link>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">最近提交</h3>
        <ReportList reports={recentReports} />
      </section>
    </div>
  );
}
