"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import type { MarketplaceService } from "../../domain/types";

interface MarketplaceServicesSectionProps {
  services: MarketplaceService[];
  title: string;
  description: string;
  viewMoreHref?: string;
}

export function MarketplaceServicesSection({
  services,
  title,
  description,
  viewMoreHref = "/activities",
}: MarketplaceServicesSectionProps) {
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
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden flex flex-col">
            <div className="relative h-48 w-full overflow-hidden bg-muted">
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <Users className="h-16 w-16 text-muted-foreground" />
                </div>
              )}
            </div>
            <CardContent className="p-4 flex flex-col flex-1">
              <div className="mb-2">
                <span className="text-xs font-medium text-muted-foreground">{service.type}</span>
                <h3 className="mt-1 font-semibold line-clamp-2">{service.title}</h3>
              </div>
              <div className="mb-3">
                <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
              </div>
              {service.date && (
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{service.date}</span>
                </div>
              )}
              <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{service.location}</span>
              </div>
              <div className="mt-auto">
                <div className="mb-3">
                  <span className="font-semibold text-green-600">{service.price}</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

