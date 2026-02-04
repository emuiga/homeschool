"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, ArrowRight } from "lucide-react";
import type { Tutor } from "@/features/tutors/domain/types";

interface TutorsNearYouSectionProps {
  tutors: Tutor[];
}

export function TutorsNearYouSection({ tutors }: TutorsNearYouSectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Tutors Near You</h2>
          <p className="text-muted-foreground">Find local educators in your community</p>
        </div>
        <Link href="/map?view=tutors">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 min-w-[120px] justify-end"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <span>View on Map</span>
            ) : (
              <ArrowRight className="h-5 w-5" />
            )}
          </Button>
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tutors.map((tutor) => (
          <Card key={tutor.id} className="py-0 gap-0">
            <CardContent className="p-3">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 flex-shrink-0 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
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
                  <h3 className="font-semibold text-sm mb-0.5 truncate">{tutor.name}</h3>
                  <div className="flex items-center gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-2.5 w-2.5 ${
                          i < Math.floor(tutor.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="ml-0.5 text-[10px] font-medium">({tutor.rating})</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-[10px] text-muted-foreground mb-1">
                    <MapPin className="h-2.5 w-2.5 flex-shrink-0" />
                    <span className="truncate">{tutor.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {tutor.curricula.slice(0, 2).map((curriculum) => (
                      <Badge key={curriculum} variant="secondary" className="text-[10px] px-1.5 py-0">
                        {curriculum}
                      </Badge>
                    ))}
                    {tutor.curricula.length > 2 && (
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                        +{tutor.curricula.length - 2}
                      </Badge>
                    )}
                    {tutor.supportsIXL && (
                      <Badge variant="outline" className="text-[10px] border-green-600 text-green-600 px-1.5 py-0">
                        IXL Support
                      </Badge>
                    )}
                  </div>
                </div>
                <Link href={`/tutors/${tutor.id}`} className="flex-shrink-0">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs px-3 py-1.5 h-auto whitespace-nowrap">
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

