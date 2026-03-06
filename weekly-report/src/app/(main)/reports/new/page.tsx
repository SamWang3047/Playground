import { ReportForm } from "@/components/ReportForm";
import { createReportAction } from "@/app/(main)/reports/new/actions";
import { messages } from "@/i18n/messages";

export default function NewReportPage() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{messages.reports.writePageTitle}</h2>
        <p className="mt-1 text-sm text-slate-500">{messages.reports.writePageDescription}</p>
      </div>
      <ReportForm action={createReportAction} />
    </section>
  );
}
