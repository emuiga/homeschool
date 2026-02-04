"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import { useApiClient, getCurrentUser, type AuthUser } from "@/lib/auth-api";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MarketplaceServicesSection } from "@/features/marketplace/presentation/components/marketplace-services-section";
import { marketplaceServices } from "@/features/marketplace/data/services";

export default function ActivitiesRoute() {
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
              <Link href="/marketplace">
                <Button variant="ghost" size="sm" className="mb-4 gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Marketplace
                </Button>
              </Link>
            </div>

            {/* Hero Section */}
            <div className="relative mb-8 overflow-hidden rounded-xl border bg-gradient-to-r from-green-50 to-blue-50">
              <div className="absolute inset-0">
                <img
                  src="/images/kids.jpg"
                  alt="Activities"
                  className="h-full w-full object-cover opacity-20"
                />
              </div>
              <div className="relative p-8 md:p-12">
                <div className="max-w-2xl">
                  <h1 className="mb-3 text-3xl font-semibold md:text-4xl">
                    Services & Activities
                  </h1>
                  <p className="mb-4 text-muted-foreground md:text-lg">
                    Book educational trips, workshops, classes, and enrichment
                    activities for your homeschool journey. Discover hands-on
                    learning experiences and connect with other families.
                  </p>
                </div>
              </div>
            </div>

            <MarketplaceServicesSection
              services={marketplaceServices}
              title=""
              description=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

