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
import { LearningJourney } from "../components/learning-journey";
import { EarningsBookings } from "../components/earnings-bookings";
import { Calendar } from "@/components/calendar";

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

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <QuickStartChecklist />
                <ActivityFeed />
                <FeaturedTutors variant="grid" />

                {/* Show different content based on role */}
                {isParent && <LearningJourney />}
                {isTutor && <EarningsBookings />}
              </div>

              {/* Right Column - Sidebar Widgets */}
              <div className="space-y-6">
                <FeaturedTutors variant="list" />
                {isParent && <SavedTutors />}
                <LocalMeetups />
                {isParent && <Calendar />}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
