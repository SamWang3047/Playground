function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="h-4 w-20 rounded bg-slate-200" />
      <div className="mt-3 h-6 w-48 rounded bg-slate-200" />
      <div className="mt-3 h-4 w-full rounded bg-slate-200" />
      <div className="mt-2 h-4 w-5/6 rounded bg-slate-200" />
    </div>
  );
}

export default function ReportsLoading() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">历史周报</h2>
        <p className="mt-1 text-sm text-slate-500">正在从服务端读取数据...</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </section>
  );
}
