"use client";

import { Map } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LocalMeetups() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Local Meetups</CardTitle>
        <CardDescription>3 events near you</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4 h-48 overflow-hidden rounded-lg border">
          <img
            src="/images/group.jpg"
            alt="Local meetups"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center gap-2 text-white">
              <Map className="h-4 w-4" />
              <p className="text-sm font-medium">3 events near you</p>
            </div>
          </div>
        </div>
        <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
          View All Meetups
        </Button>
      </CardContent>
    </Card>
  );
}

