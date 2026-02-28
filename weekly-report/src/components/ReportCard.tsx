type ReportCardProps = {
  title: string;
  summary: string;
  week: string;
};

export function ReportCard({ title, summary, week }: ReportCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-sky-600">{week}</p>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>
    </article>
  );
}
