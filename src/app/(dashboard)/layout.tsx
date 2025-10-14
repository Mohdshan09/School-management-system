import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[25%] md:w-[8%] lg:w-[16%] xl:w-[25%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">BHN ENGLISH HR SEC SCHOOL</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[75%] md:w-[92%] lg:w-[84%] xl:w-[75%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}