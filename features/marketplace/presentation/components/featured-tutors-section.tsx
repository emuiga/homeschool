"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, ArrowRight } from "lucide-react";
import type { Tutor } from "@/features/tutors/domain/types";

interface FeaturedTutorsSectionProps {
  tutors: Tutor[];
}

export function FeaturedTutorsSection({ tutors }: FeaturedTutorsSectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Featured Tutors</h2>
          <p className="text-muted-foreground">Discover amazing educators in your area</p>
        </div>
        <Link href="/tutors">
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
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {tutors.map((tutor) => (
          <Card key={tutor.id} className="overflow-hidden flex flex-col border-2 border-green-100 hover:border-green-300 transition-colors shadow-md">
            <CardContent className="p-5 flex flex-col flex-1">
              <div className="flex gap-4 mb-4">
                <div className="h-20 w-20 flex-shrink-0 rounded-full bg-muted flex items-center justify-center text-2xl font-semibold ring-2 ring-green-200">
                  {tutor.image ? (
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    tutor.name.charAt(0)
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1 truncate">{tutor.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < Math.floor(tutor.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-xs font-medium">({tutor.rating})</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    <span className="truncate">{tutor.location}</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-xs text-muted-foreground mb-2">Curricula:</p>
                <div className="flex flex-wrap gap-1">
                  {tutor.curricula.slice(0, 2).map((curriculum) => (
                    <Badge key={curriculum} variant="secondary" className="text-xs">
                      {curriculum}
                    </Badge>
                  ))}
                  {tutor.curricula.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{tutor.curricula.length - 2}
                    </Badge>
                  )}
                </div>
                {tutor.supportsIXL && (
                  <Badge variant="outline" className="text-xs border-green-600 text-green-600 mt-2">
                    IXL Support
                  </Badge>
                )}
              </div>
              <div className="mt-auto pt-3">
                <Link href={`/tutors/${tutor.id}`} className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    View Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

