type ReportCardProps = {
  title: string;
  summary: string;
  week: string;
  createdAt: string;
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export function ReportCard({ title, summary, week, createdAt }: ReportCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-sky-600">{week}</p>
        <p className="text-xs text-slate-500">提交于 {formatDate(createdAt)}</p>
      </div>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>
    </article>
  );
}
