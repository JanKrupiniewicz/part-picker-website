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

export function SubsiteTitle({ title }: { title: string }) {
  return (
    <div className="p-5 sm:p-8 md:p-12 bg-black">
      <h1 className="text-2xl md:text-4xl tracking-tight ml-2 font-bold text-center text-white">
        {title}
      </h1>
    </div>
  );
}
