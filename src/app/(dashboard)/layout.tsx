import Navbar from "@/components/navbar/Navbar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16 px-4">{children}</main>
    </div>
  );
}
