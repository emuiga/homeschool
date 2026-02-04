"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ArrowRight } from "lucide-react";
import type { MarketplaceItem } from "../../domain/types";

interface MarketplaceItemsSectionProps {
  items: MarketplaceItem[];
  title: string;
  description: string;
  viewMoreHref?: string;
}

export function MarketplaceItemsSection({
  items,
  title,
  description,
  viewMoreHref = "/resources",
}: MarketplaceItemsSectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          {title && <h2 className="text-2xl font-semibold">{title}</h2>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
        {title && (
          <Link href={viewMoreHref}>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 min-w-[100px] justify-end"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? (
                <span>View More</span>
              ) : (
                <ArrowRight className="h-5 w-5" />
              )}
            </Button>
          </Link>
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden flex flex-col">
            <div className="relative h-48 w-full overflow-hidden bg-muted">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <Package className="h-16 w-16 text-muted-foreground" />
                </div>
              )}
            </div>
            <CardContent className="p-4 flex flex-col flex-1">
              <div className="mb-2">
                <span className="text-xs font-medium text-muted-foreground">{item.category}</span>
                <h3 className="mt-1 font-semibold line-clamp-2">{item.title}</h3>
              </div>
              <div className="mb-3">
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              </div>
              <div className="mt-auto">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-semibold text-green-600">{item.price}</span>
                  <span className="text-xs text-muted-foreground">{item.location}</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

