"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    title: "Products",
    href: "/products",
  },
  {
    id: 3,
    title: "Certifications",
    href: "/certifications",
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
  },
];

export const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="hover:cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
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
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-0 py-8">
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

          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.id}
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
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
