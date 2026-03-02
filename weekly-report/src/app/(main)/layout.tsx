import { AppShell } from "@/components/AppShell";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppShell
      title="Weekly Report"
      subtitle="Day 2: App Router, Layout, Nested Routes"
    >
      {children}
    </AppShell>
  );
}
