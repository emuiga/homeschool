"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import { useApiClient, getCurrentUser, type AuthUser } from "@/lib/auth-api";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { FeaturedTutorsSection } from "@/features/marketplace/presentation/components/featured-tutors-section";
import { TutorsNearYouSection } from "@/features/marketplace/presentation/components/tutors-near-you-section";
import { featuredTutors, tutorsNearYou } from "@/features/marketplace/data/tutors";

export default function TutorsRoute() {
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
            <div className="mb-8">
              <Link href="/marketplace">
                <Button variant="ghost" size="sm" className="mb-4 gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Marketplace
                </Button>
              </Link>
              <h1 className="text-4xl font-semibold mb-2">Tutors</h1>
              <p className="text-muted-foreground">
                Find experienced educators familiar with your curriculum
              </p>
            </div>
            <FeaturedTutorsSection tutors={featuredTutors} />
            <TutorsNearYouSection tutors={tutorsNearYou} />
          </div>
        </div>
      </div>
    </div>
  );
}

