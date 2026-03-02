"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  initialCreateReportFormState,
  type CreateReportFormState,
} from "@/lib/reports/form-state";

type ReportFormProps = {
  action: (
    prevState: CreateReportFormState,
    formData: FormData,
  ) => Promise<CreateReportFormState>;
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-sky-300"
    >
      {pending ? "提交中..." : "提交"}
    </button>
  );
}

export function ReportForm({ action }: ReportFormProps) {
  const [state, formAction] = useActionState(action, initialCreateReportFormState);

  return (
    <form action={formAction} className="space-y-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">本周摘要</h2>
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-slate-700">
          标题
        </label>
        <input
          id="title"
          name="title"
          defaultValue={state.values.title}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500"
          placeholder="例如：完成认证模块重构"
        />
        {state.fieldErrors.title ? <p className="text-sm text-rose-600">{state.fieldErrors.title}</p> : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="summary" className="block text-sm font-medium text-slate-700">
          摘要
        </label>
        <textarea
          id="summary"
          name="summary"
          rows={4}
          defaultValue={state.values.summary}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500"
          placeholder="记录本周关键工作、学习和下一步计划"
        />
        {state.fieldErrors.summary ? <p className="text-sm text-rose-600">{state.fieldErrors.summary}</p> : null}
      </div>
      {state.message ? <p className="text-sm text-rose-700">{state.message}</p> : null}
      <SubmitButton />
    </form>
  );
}
