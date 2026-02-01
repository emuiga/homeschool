"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardPage() {
  const pathname = usePathname();
  const userInitials = "JD";

  return (
    <div className="flex h-screen flex-col bg-background font-sans">
      <header className="border-b border-border bg-background px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Homeschool</div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  {userInitials}
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>My profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-48 border-r border-border bg-background">
          <div className="flex h-full flex-col p-4">
            <nav className="flex flex-1 flex-col gap-2">
              <Link href="/dashboard">
                <Button
                  variant={pathname === "/dashboard" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  Dashboard
                </Button>
              </Link>
              <Link href="/map">
                <Button
                  variant={pathname === "/map" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  Map
                </Button>
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl p-6">
            <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
              <div className="text-center">
                <h1 className="mb-4 text-4xl font-semibold">
                  You're all set 🎉
                </h1>
                <p className="mb-8 text-lg text-muted-foreground">
                  Welcome to your dashboard
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
