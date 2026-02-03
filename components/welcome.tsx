"use client";

import type { AuthUser } from "@/lib/auth-api";

interface WelcomeProps {
  user: AuthUser | null;
}

export function Welcome({ user }: WelcomeProps) {
  return (
    <div>
      <h1 className="text-3xl font-semibold">
        Welcome Back{user?.name ? `, ${user.name.split(" ")[0]}` : ""}! 👋
      </h1>
      <p className="mt-1 text-muted-foreground">
        Here's what's happening in your homeschooling community
      </p>
    </div>
  );
}

