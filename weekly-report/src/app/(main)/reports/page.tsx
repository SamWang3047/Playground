import { ReportList } from "@/components/ReportList";
import { mockReports } from "@/lib/mockReports";

export default function ReportsPage() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">历史周报</h2>
        <p className="mt-1 text-sm text-slate-500">这个页面对应路由 `/reports`，专门用于浏览历史记录。</p>
      </div>
      <ReportList reports={mockReports} />
    </section>
  );
}
