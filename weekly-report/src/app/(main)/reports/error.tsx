"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ReportsError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Day 3 示例：实际项目里可上报到 Sentry。
    console.error(error);
  }, [error]);

  return (
    <section className="space-y-4 rounded-lg border border-rose-200 bg-rose-50 p-6">
      <h2 className="text-xl font-bold text-rose-700">读取周报失败</h2>
      <p className="text-sm text-rose-600">服务暂时不可用，请稍后重试。</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700"
      >
        重试
      </button>
    </section>
  );
}
