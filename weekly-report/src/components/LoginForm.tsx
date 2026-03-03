"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { initialLoginFormState, type LoginFormState } from "@/lib/auth/form-state";

type LoginFormProps = {
  action: (prevState: LoginFormState, formData: FormData) => Promise<LoginFormState>;
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-sky-300"
    >
      {pending ? "登录中..." : "登录"}
    </button>
  );
}

export function LoginForm({ action }: LoginFormProps) {
  const [state, formAction] = useActionState(action, initialLoginFormState);

  return (
    <form action={formAction} className="mx-auto w-full max-w-md space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">用户登录</h2>
      <p className="text-sm text-slate-500">首次登录会自动创建账户，后续使用同邮箱 + 密码登录。</p>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          邮箱
        </label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={state.values.email}
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500"
          placeholder="you@example.com"
        />
        {state.fieldErrors.email ? <p className="text-sm text-rose-600">{state.fieldErrors.email}</p> : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-slate-700">
          密码
        </label>
        <input
          id="password"
          name="password"
          type="password"
          defaultValue={state.values.password}
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500"
          placeholder="请输入密码"
        />
        {state.fieldErrors.password ? <p className="text-sm text-rose-600">{state.fieldErrors.password}</p> : null}
      </div>
      {state.message ? <p className="text-sm text-rose-700">{state.message}</p> : null}
      <SubmitButton />
    </form>
  );
}
