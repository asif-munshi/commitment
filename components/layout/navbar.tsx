"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navLinks: { id: number; title: string; href: string }[] = [
  {
    id: 1,
    title: "Capacities",
    href: "/capacities",
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

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="col-span-2 justify-end">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "hover:text-[#f25936ff]",
                navigationMenuTriggerStyle(),
                pathname.match(/^[/]$/)
                  ? "bg-transparent text-[#f25936ff] hover:bg-transparent hover:text-[#f25936ff] focus:bg-transparent focus:text-[#f25936ff]"
                  : "text-black"
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              pathname.includes("about-us")
                ? "bg-transparent text-[#f25936ff] hover:bg-transparent hover:text-[#f25936ff] focus:bg-transparent focus:text-[#f25936ff]"
                : "text-black"
            )}
          >
            Commitment
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 md:w-[150px] lg:max-w-[400px]">
              <ListItem
                href="/about-us"
                title="About Us"
                className={cn(
                  pathname.match("/about-us")
                    ? "bg-transparent text-[#f25936ff] hover:bg-transparent hover:text-[#f25936ff] focus:bg-transparent focus:text-[#f25936ff]"
                    : "text-black"
                )}
              />
              <ListItem
                href="/concerns"
                title="Concerns"
                className={cn(
                  pathname.match("/concerns")
                    ? "bg-transparent text-[#f25936ff] hover:bg-transparent hover:text-[#f25936ff] focus:bg-transparent focus:text-[#f25936ff]"
                    : "text-black"
                )}
              />
              <ListItem
                href="/buyers"
                title="Buyers"
                className={cn(
                  pathname.match("/buyers")
                    ? "text-[#f25936ff] hover:bg-transparent hover:text-[#f25936ff] focus:bg-transparent focus:text-[#f25936ff]"
                    : "text-black"
                )}
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {navLinks.map((link) => (
          <NavigationMenuItem key={link.id}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  pathname.match(link.href)
                    ? "bg-transparent text-[#f25936ff] hover:bg-transparent hover:text-[#f25936ff] focus:bg-transparent focus:text-[#f25936ff]"
                    : "text-black"
                )}
              >
                {link.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
