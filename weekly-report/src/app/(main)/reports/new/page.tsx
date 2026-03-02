import { ReportForm } from "@/components/ReportForm";
import { createReportAction } from "@/app/(main)/reports/new/actions";

export default function NewReportPage() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">写周报</h2>
        <p className="mt-1 text-sm text-slate-500">这个页面对应路由 `/reports/new`，通过 Server Actions 提交并落库（当前为内存仓库）。</p>
      </div>
      <ReportForm action={createReportAction} />
    </section>
  );
}
