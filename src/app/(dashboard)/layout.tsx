import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* LEFT */}
      <aside className="w-[25%] md:w-[8%] lg:w-[16%] xl:w-[25%] p-4 overflow-y-auto border-r scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo_02.jpg" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">BHN ENGLISH HR SEC SCHOOL</span>
        </Link>
        <Menu />
      </aside>
      {/* RIGHT */}
      <main className="flex-1 bg-[#F7F8FA] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
        <div className="flex flex-col h-full">
          <Navbar />
          {children}
        </div>
      </main>
    </div>
  );
}