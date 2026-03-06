import { redirect } from "next/navigation";
import { LoginForm } from "@/components/LoginForm";
import { loginAction } from "@/app/login/actions";
import { getSessionUser } from "@/lib/auth/session";
import { messages } from "@/i18n/messages";

export default async function LoginPage() {
  const user = await getSessionUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="mb-6 text-2xl font-bold text-slate-900">{messages.login.pageTitle}</h1>
        <LoginForm action={loginAction} />
      </div>
    </div>
  );
}
