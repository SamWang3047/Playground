"use client";

import { useState } from "react";

export function ReportForm() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`提交成功（Day 1 模拟）\\n标题: ${title}\\n摘要: ${summary}`);
    setTitle("");
    setSummary("");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">本周摘要</h2>
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-slate-700">
          标题
        </label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500"
          placeholder="例如：完成认证模块重构"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="summary" className="block text-sm font-medium text-slate-700">
          摘要
        </label>
        <textarea
          id="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={4}
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500"
          placeholder="记录本周关键工作、学习和下一步计划"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
      >
        提交
      </button>
    </form>
  );
}
