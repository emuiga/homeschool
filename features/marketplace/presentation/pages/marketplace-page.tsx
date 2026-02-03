"use client";

import { FeaturedTutorsSection } from "../components/featured-tutors-section";
import { TutorsNearYouSection } from "../components/tutors-near-you-section";
import { MarketplaceItemsSection } from "../components/marketplace-items-section";
import { MarketplaceServicesSection } from "../components/marketplace-services-section";
import { featuredTutors, tutorsNearYou } from "../../data/tutors";
import { marketplaceItems } from "../../data/items";
import { marketplaceServices } from "../../data/services";

export default function MarketplacePage() {
  return (
    <div className="flex-1 overflow-y-auto bg-muted/30">
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold mb-2">Marketplace</h1>
          <p className="text-muted-foreground">
            Discover tutors, resources, and services for your homeschooling journey
          </p>
        </div>

        <FeaturedTutorsSection tutors={featuredTutors} />
        <TutorsNearYouSection tutors={tutorsNearYou} />
        <MarketplaceItemsSection
          items={marketplaceItems}
          title="Resources & Items"
          description="Buy and sell educational materials, books, and supplies"
          viewMoreHref="/resources"
        />
        <MarketplaceServicesSection
          services={marketplaceServices}
          title="Services & Activities"
          description="Book educational trips, workshops, and classes"
          viewMoreHref="/activities"
        />
      </div>
    </div>
  );
}

