"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { initialLoginFormState, type LoginFormState } from "@/lib/auth/form-state";
import { messages } from "@/i18n/messages";

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
      {pending ? messages.login.submitting : messages.login.submit}
    </button>
  );
}

export function LoginForm({ action }: LoginFormProps) {
  const [state, formAction] = useActionState(action, initialLoginFormState);

  return (
    <form action={formAction} className="mx-auto w-full max-w-md space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">{messages.login.formTitle}</h2>
      <p className="text-sm text-slate-500">{messages.login.formHint}</p>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          {messages.login.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={state.values.email}
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500"
          placeholder={messages.login.emailPlaceholder}
        />
        {state.fieldErrors.email ? <p className="text-sm text-rose-600">{state.fieldErrors.email}</p> : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-slate-700">
          {messages.login.passwordLabel}
        </label>
        <input
          id="password"
          name="password"
          type="password"
          defaultValue={state.values.password}
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500"
          placeholder={messages.login.passwordPlaceholder}
        />
        {state.fieldErrors.password ? <p className="text-sm text-rose-600">{state.fieldErrors.password}</p> : null}
      </div>
      {state.message ? <p className="text-sm text-rose-700">{state.message}</p> : null}
      <SubmitButton />
    </form>
  );
}
