import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import ReactQueryProvider from "./providers/QueryProvider";

export const metadata: Metadata = {
  title: "BHN ENGLISH HR SEC SCHOOL DASHBOARD",
  description: "Next.js School Management System",
  icons: {
    icon: "/logoBHN.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
