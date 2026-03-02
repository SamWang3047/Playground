import { ReportForm } from "@/components/ReportForm";

export default function NewReportPage() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">写周报</h2>
        <p className="mt-1 text-sm text-slate-500">这个页面对应路由 `/reports/new`，目前是客户端表单模拟提交。</p>
      </div>
      <ReportForm />
    </section>
  );
}
