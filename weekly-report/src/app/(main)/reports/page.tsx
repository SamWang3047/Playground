import { ReportList } from "@/components/ReportList";
import { getReportsForList } from "@/lib/reports/service";

export const dynamic = "force-dynamic";

export default async function ReportsPage() {
  const reports = await getReportsForList();

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">历史周报</h2>
        <p className="mt-1 text-sm text-slate-500">这个页面对应路由 `/reports`，使用 Server Component 在服务端读取数据。</p>
      </div>
      <ReportList reports={reports} />
    </section>
  );
}
