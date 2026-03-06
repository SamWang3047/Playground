import { ReportList } from "@/components/ReportList";
import { requireSessionUser } from "@/lib/auth/session";
import { getReportsForList } from "@/lib/reports/service";
import { messages } from "@/i18n/messages";

export const dynamic = "force-dynamic";

export default async function ReportsPage() {
  const user = await requireSessionUser();
  const reports = await getReportsForList(user.id);

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{messages.reports.pageTitle}</h2>
          <p className="mt-1 text-sm text-slate-500">{messages.reports.pageDescription}</p>
        </div>
        <div className="rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-600">
          {messages.dynamic.reportsTotal(reports.length)}
        </div>
      </div>
      <ReportList reports={reports} />
    </section>
  );
}
