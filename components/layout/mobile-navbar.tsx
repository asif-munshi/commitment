"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

const navLinks: { id: number; title: string; href: string }[] = [
  {
    id: 1,
    title: "Capacities",
    href: "/capacities",
  },
  {
    id: 2,
    title: "Certifications",
    href: "/certifications",
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact",
  },
];

export const MobileNavbar = () => {
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Menu className="hover:cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <SheetClose asChild>
              <Link href={"/"}>
                <Image
                  className="bg-none"
                  src="/commitment.svg"
                  alt="commitment logo"
                  width={48}
                  height={48}
                  priority
                />
              </Link>
            </SheetClose>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="grid gap-0 py-8">
          <SheetClose asChild>
            <Link
              href="/"
              className={cn(
                navigationMenuTriggerStyle(),
                "flex w-full justify-start",
                pathname.match(/^[/]$/)
                  ? "text-[#f25936ff] hover:bg-transparent hover:text-[#f25936ff] focus:bg-transparent focus:text-[#f25936ff]"
                  : "text-black"
              )}
            >
              <p>Home</p>
            </Link>
          </SheetClose>

          <div className="group flex h-9 w-full cursor-pointer items-center justify-start rounded-md bg-background px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
            Commitment
          </div>

          {navLinks.map((link) => (
            <SheetClose asChild key={link.id}>
              <Link
                href={link.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "flex w-full justify-start",
                  pathname.match(link.href)
                    ? "text-[#f25936ff] hover:bg-transparent hover:text-[#f25936ff] focus:bg-transparent focus:text-[#f25936ff]"
                    : "text-black"
                )}
              >
                <p>{link.title}</p>
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
