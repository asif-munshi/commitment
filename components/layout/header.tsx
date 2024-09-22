import Link from "next/link";
import Image from "next/image";

import { Navbar } from "@/components/layout/navbar";
import { MobileNavbar } from "@/components/layout/mobile-navbar";

export const Header = () => {
  return (
    <div className="z-50 flex h-16 items-center justify-between bg-none px-8">
      <Link href={"/"}>
        <Image
          src="/commitment.svg"
          alt="commitment logo"
          width={48}
          height={48}
          priority
        />
      </Link>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden flex-col md:flex">
        <Navbar />
      </div>
    </div>
  );
};
