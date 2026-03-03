import Link from "next/link";
import { ReportCard } from "@/components/ReportCard";
import type { WeeklyReport } from "@/lib/reports/types";

type ReportListProps = {
  reports: WeeklyReport[];
};

export function ReportList({ reports }: ReportListProps) {
  if (reports.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
        <p className="text-sm text-slate-600">还没有周报，先去“写周报”页面提交第一篇。</p>
        <Link
          href="/reports/new"
          className="mt-4 inline-flex rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
        >
          去写第一篇
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {reports.map((report) => (
        <ReportCard
          key={report.id}
          title={report.title}
          summary={report.summary}
          week={report.week}
          createdAt={report.createdAt}
        />
      ))}
    </div>
  );
}
