"use client";

import { useEffect, useState } from "react";
import { useClerk } from "@clerk/nextjs";
import { useApiClient, getCurrentUser, type AuthUser } from "@/lib/auth-api";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Welcome } from "@/components/welcome";
import { QuickStartChecklist } from "../components/quick-start-checklist";
import { ActivityFeed } from "../components/activity-feed";
import { FeaturedTutors } from "../components/featured-tutors";
import { SavedTutors } from "../components/saved-tutors";
import { LocalMeetups } from "../components/local-meetups";
import { EarningsBookings } from "../components/earnings-bookings";

export default function DashboardPage() {
  const { fetchApi } = useApiClient();
  const { signOut } = useClerk();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser(fetchApi)
      .then((userData) => {
        setUser(userData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch user:", error);
        setIsLoading(false);
      });
  }, [fetchApi]);

  const handleSignOut = () => {
    signOut({ redirectUrl: "/auth" });
  };

  // Determine view based on user role - separate dashboards for parent vs tutor
  const isParent = user?.role === "parent" || !user?.role;
  const isTutor = user?.role === "tutor";

  return (
    <div className="flex h-screen flex-col bg-background font-sans">
      <Header user={user} onSignOut={handleSignOut} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto bg-muted/30">
          <div className="mx-auto max-w-7xl p-6">
            {/* Header with Welcome */}
            <div className="mb-6">
              <Welcome user={user} />
            </div>

            {/* Hero Banner */}
            <div className="relative mb-6 overflow-hidden rounded-xl border bg-gradient-to-r from-green-50 to-blue-50">
              <div className="absolute inset-0">
                <img
                  src="/images/kids.jpg"
                  alt="Homeschool community"
                  className="h-full w-full object-cover opacity-20"
                  loading="lazy"
                />
              </div>
              <div className="relative p-8 md:p-12">
                <div className="max-w-2xl">
                  <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
                    Welcome to Your Homeschool Community
                  </h2>
                  <p className="mb-4 text-muted-foreground md:text-lg">
                    Connect with local educators, discover resources, and join meetups in your area.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/tutors"
                      className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                    >
                      Find Tutors
                    </a>
                    <a
                      href="/marketplace"
                      className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                    >
                      Browse Marketplace
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <QuickStartChecklist />
                <ActivityFeed />
                <FeaturedTutors variant="grid" />

                {/* Show different content based on role */}
                {isTutor && <EarningsBookings />}
              </div>

              {/* Right Column - Sidebar Widgets */}
              <div className="space-y-6">
                <FeaturedTutors variant="list" />
                {isParent && <SavedTutors />}
                <LocalMeetups />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
