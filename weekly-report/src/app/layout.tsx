import type { Metadata } from "next";
import { messages } from "@/i18n/messages";
import "./globals.css";

export const metadata: Metadata = {
  title: messages.app.metadataTitle,
  description: messages.app.metadataDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={messages.app.lang}>
      <body>{children}</body>
    </html>
  );
}
