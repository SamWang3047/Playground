import { MainNav } from "@/components/navigation/MainNav";
import { messages } from "@/i18n/messages";

type AppShellProps = {
  title: string;
  subtitle: string;
  userEmail: string;
  onLogout: () => Promise<void>;
  children: React.ReactNode;
};

export function AppShell({ title, subtitle, userEmail, onLogout, children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h1>
            <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <MainNav />
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <span className="rounded-md bg-slate-100 px-2 py-1">{userEmail}</span>
              <form action={onLogout}>
                <button type="submit" className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  {messages.shell.signOut}
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl px-6 py-8">{children}</main>
    </div>
  );
}
