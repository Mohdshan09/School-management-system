import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="pt-16 px-4 flex-1">{children}</main>
      <Footer/>
    </div>
  );
}