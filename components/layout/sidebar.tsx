"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, MapPin, Store, TrendingUp, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/marketplace", label: "Marketplace", icon: Store },
  { href: "/calendar", label: "Calendar", icon: Calendar },
  { href: "/map", label: "Map", icon: MapPin },
  { href: "/co-ops", label: "Co-ops", icon: Users },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r border-border bg-sidebar">
      <div className="flex h-full flex-col p-4">
        <nav className="flex flex-1 flex-col gap-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.label} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className="w-full justify-start gap-3"
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>
        <div className="pt-4">
          <Button className="w-full gap-2 bg-green-600 hover:bg-green-700">
            <TrendingUp className="h-4 w-4" />
            System up-to-date
          </Button>
        </div>
      </div>
    </aside>
  );
}

