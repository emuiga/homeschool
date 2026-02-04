"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Feed</CardTitle>
        <CardDescription>Latest updates from your community</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4 rounded-lg border p-4">
          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
            <img
              src="/images/nature.jpg"
              alt="Biology Kit"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">New in the Biology Kit</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Explore new resources and materials
            </p>
          </div>
        </div>
        <div className="flex gap-4 rounded-lg border p-4">
          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
            <img
              src="/images/group.jpg"
              alt="Local Groups"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Message from Local Groups</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Check out new availability in your area
            </p>
          </div>
        </div>
        <div className="flex gap-4 rounded-lg border p-4">
          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
            <img
              src="/images/hike.jpg"
              alt="Outdoor Activities"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Outdoor Learning Event</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Join the nature walk this weekend
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

