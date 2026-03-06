import Link from "next/link";
import { ReportList } from "@/components/ReportList";
import { requireSessionUser } from "@/lib/auth/session";
import { getRecentReports } from "@/lib/reports/service";
import { messages } from "@/i18n/messages";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const user = await requireSessionUser();
  const recentReports = await getRecentReports(user.id, 2);

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">{messages.home.heroTitle}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{messages.home.heroDescription}</p>
        <div className="mt-4 flex gap-3">
          <Link href="/reports" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
            {messages.home.viewReports}
          </Link>
          <Link href="/reports/new" className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700">
            {messages.home.writeNewReport}
          </Link>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">{messages.home.recentSubmissions}</h3>
        <ReportList reports={recentReports} />
      </section>
    </div>
  );
}
