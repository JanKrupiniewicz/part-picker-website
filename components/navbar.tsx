import { Cpu } from "lucide-react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="flex flex-row space-x-12 max-w-screen-2xl items-center mx-10 my-5">
      <div className="basis-1/6">
        <Link className="flex items-center justify-center" href="/">
          <Cpu className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">PCPartPicker</span>
        </Link>
      </div>
      <div className="flex basis-5/6 justify-start items-center">
        <NavigationMenu>
          <NavigationMenuList className="space-x-10">
            <NavigationMenuItem>
              <Link href="/list" legacyBehavior passHref>
                <NavigationMenuLink>Builder</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/guides" legacyBehavior passHref>
                <NavigationMenuLink>Poradniki</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/completed-builds" legacyBehavior passHref>
                <NavigationMenuLink>Ukończone Buildy</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/trends" legacyBehavior passHref>
                <NavigationMenuLink>Trendy</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
