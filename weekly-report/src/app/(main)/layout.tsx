import { AppShell } from "@/components/AppShell";
import { logoutAction } from "@/app/(main)/actions";
import { requireSessionUser } from "@/lib/auth/session";
import { messages } from "@/i18n/messages";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await requireSessionUser();

  return (
    <AppShell
      title={messages.shell.title}
      subtitle={messages.shell.subtitle}
      userEmail={user.email}
      onLogout={logoutAction}
    >
      {children}
    </AppShell>
  );
}
