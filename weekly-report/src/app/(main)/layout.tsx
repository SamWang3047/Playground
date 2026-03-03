import { AppShell } from "@/components/AppShell";
import { logoutAction } from "@/app/(main)/actions";
import { requireSessionUser } from "@/lib/auth/session";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await requireSessionUser();

  return (
    <AppShell
      title="Weekly Report"
      subtitle="Day 5: Prisma + Simple Auth"
      userEmail={user.email}
      onLogout={logoutAction}
    >
      {children}
    </AppShell>
  );
}
