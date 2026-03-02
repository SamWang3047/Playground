import { ReportCard } from "@/components/ReportCard";
import type { WeeklyReport } from "@/lib/reports/types";

type ReportListProps = {
  reports: WeeklyReport[];
};

export function ReportList({ reports }: ReportListProps) {
  if (reports.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
        还没有周报，先去“写周报”页面提交第一篇。
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {reports.map((report) => (
        <ReportCard key={report.id} title={report.title} summary={report.summary} week={report.week} />
      ))}
    </div>
  );
}
