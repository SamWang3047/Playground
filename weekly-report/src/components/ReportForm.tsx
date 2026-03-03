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

function Fields({ state }: { state: CreateReportFormState }) {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-slate-700">
          标题
        </label>
        <input
          id="title"
          name="title"
          maxLength={80}
          defaultValue={state.values.title}
          disabled={pending}
          aria-describedby="title-help title-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500 disabled:bg-slate-100"
          placeholder="例如：完成认证模块重构"
        />
        <p id="title-help" className="text-xs text-slate-500">最多 80 个字符。</p>
        {state.fieldErrors.title ? <p id="title-error" className="text-sm text-rose-600">{state.fieldErrors.title}</p> : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="summary" className="block text-sm font-medium text-slate-700">
          摘要
        </label>
        <textarea
          id="summary"
          name="summary"
          rows={5}
          minLength={10}
          defaultValue={state.values.summary}
          disabled={pending}
          aria-describedby="summary-help summary-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500 disabled:bg-slate-100"
          placeholder="记录本周关键工作、学习和下一步计划"
        />
        <p id="summary-help" className="text-xs text-slate-500">至少 10 个字符，建议包含成果和下周计划。</p>
        {state.fieldErrors.summary ? <p id="summary-error" className="text-sm text-rose-600">{state.fieldErrors.summary}</p> : null}
      </div>
    </>
  );
}

export function ReportForm({ action }: ReportFormProps) {
  const [state, formAction] = useActionState(action, initialCreateReportFormState);

  return (
    <form action={formAction} className="space-y-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">本周摘要</h2>
      <Fields state={state} />
      <p aria-live="polite" className="text-sm text-rose-700">{state.message}</p>
      <SubmitButton />
    </form>
  );
}
