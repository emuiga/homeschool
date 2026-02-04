"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import { useApiClient, getCurrentUser, type AuthUser } from "@/lib/auth-api";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function GroupsRoute() {
  const { fetchApi } = useApiClient();
  const { signOut } = useClerk();
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    getCurrentUser(fetchApi)
      .then(setUser)
      .catch(console.error);
  }, [fetchApi]);

  const handleSignOut = () => {
    signOut({ redirectUrl: "/auth" });
  };

  return (
    <div className="flex h-screen flex-col bg-background font-sans">
      <Header user={user} onSignOut={handleSignOut} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto bg-muted/30">
          <div className="mx-auto max-w-7xl p-6">
            <div className="mb-6">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="mb-4 gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>

            {/* Hero Section */}
            <div className="relative mb-8 overflow-hidden rounded-xl border bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="absolute inset-0">
                <img
                  src="/images/group.jpg"
                  alt="Groups"
                  className="h-full w-full object-cover opacity-20"
                />
              </div>
              <div className="relative p-8 md:p-12">
                <div className="max-w-2xl">
                  <h1 className="mb-3 text-3xl font-semibold md:text-4xl">
                    Study Groups & Communities
                  </h1>
                  <p className="mb-4 text-muted-foreground md:text-lg">
                    Join or create study groups, book clubs, and learning
                    communities. Connect with families who share your
                    educational philosophy and interests.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex min-h-[400px] items-center justify-center rounded-lg border bg-background">
              <div className="text-center">
                <p className="mb-2 text-lg font-medium text-muted-foreground">
                  Groups feature coming soon
                </p>
                <p className="text-sm text-muted-foreground">
                  Check out our Co-ops section for similar community features
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

