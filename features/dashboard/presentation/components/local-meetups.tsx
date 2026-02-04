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
        <div className="mb-4 flex h-48 items-center justify-center rounded-lg border bg-muted/50">
          <div className="text-center">
            <Map className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Map preview</p>
          </div>
        </div>
        <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
          View All Meetups
        </Button>
      </CardContent>
    </Card>
  );
}

