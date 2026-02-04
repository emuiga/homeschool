"use client";

import Link from "next/link";
import { Star, MapPin, Users, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CoOp } from "../../domain/types";

interface CoOpCardProps {
  coop: CoOp;
}

const typeLabels: Record<string, string> = {
  academics: "Academics",
  gaming: "Gaming",
  activities: "Activities",
  sports: "Sports",
  arts: "Arts",
  stem: "STEM",
  social: "Social",
  islamic: "Islamic",
  christian: "Christian",
};

export function CoOpCard({ coop }: CoOpCardProps) {
  return (
    <Link href={`/co-ops/${coop.id}`}>
      <Card className="flex h-full flex-col overflow-hidden">
        <div className="relative h-48 w-full flex-shrink-0 overflow-hidden">
          <img
            src={coop.image}
            alt={coop.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center justify-between text-white">
              <div>
                <h3 className="text-lg font-semibold">{coop.name}</h3>
                <div className="mt-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{coop.rating}</span>
                  <span className="text-xs opacity-80">({coop.reviews.length} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardContent className="flex flex-1 flex-col p-4">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs">
              {typeLabels[coop.type] || coop.type}
            </Badge>
          </div>
          <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{coop.location}</span>
          </div>
          <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
            {coop.description}
          </p>
          <div className="mb-3 flex h-6 items-center gap-1 overflow-hidden">
            {(coop.type === "activities" || coop.type === "gaming") && coop.activities ? (
              <>
                {coop.activities.slice(0, 2).map((activity) => (
                  <Badge key={activity} variant="secondary" className="text-xs whitespace-nowrap flex-shrink-0">
                    {activity}
                  </Badge>
                ))}
                {coop.activities.length > 2 && (
                  <Badge variant="secondary" className="text-xs whitespace-nowrap flex-shrink-0">
                    +{coop.activities.length - 2}
                  </Badge>
                )}
              </>
            ) : (
              <>
                {coop.curricula.slice(0, 2).map((curriculum) => (
                  <Badge key={curriculum} variant="secondary" className="text-xs whitespace-nowrap flex-shrink-0">
                    {curriculum}
                  </Badge>
                ))}
                {coop.curricula.length > 2 && (
                  <Badge variant="secondary" className="text-xs whitespace-nowrap flex-shrink-0">
                    +{coop.curricula.length - 2}
                  </Badge>
                )}
              </>
            )}
          </div>
          <div className="mb-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{coop.memberCount} members</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{coop.meetingDay}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{coop.meetingTime}</span>
            </div>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

