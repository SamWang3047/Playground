import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="mb-6 text-2xl font-bold text-slate-900">登录页面</h1>
        <LoginForm />
      </div>
    </div>
  );
}
