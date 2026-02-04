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
          <div className="flex items-center gap-2 rounded-md border bg-background px-2 py-1.5 shadow-sm">
            <div className="h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-foreground truncate">All systems operational</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

