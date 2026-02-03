"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import { useApiClient, getCurrentUser, type AuthUser } from "@/lib/auth-api";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MarketplaceItemsSection } from "@/features/marketplace/presentation/components/marketplace-items-section";
import { marketplaceItems } from "@/features/marketplace/data/items";

export default function ResourcesRoute() {
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
              <h1 className="text-4xl font-semibold mb-2">Resources & Items</h1>
              <p className="text-muted-foreground">
                Buy and sell educational materials, books, and supplies
              </p>
            </div>
            <MarketplaceItemsSection
              items={marketplaceItems}
              title=""
              description=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

