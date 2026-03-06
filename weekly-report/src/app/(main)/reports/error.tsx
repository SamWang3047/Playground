"use client";

import { useEffect } from "react";
import { messages } from "@/i18n/messages";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ReportsError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="space-y-4 rounded-lg border border-rose-200 bg-rose-50 p-6">
      <h2 className="text-xl font-bold text-rose-700">{messages.reports.loadErrorTitle}</h2>
      <p className="text-sm text-rose-600">{messages.reports.loadErrorDescription}</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700"
      >
        {messages.reports.retry}
      </button>
    </section>
  );
}
