"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function EarningsBookings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Earnings & Bookings</CardTitle>
        <CardDescription>Your tutoring overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">This Month</p>
              <p className="mt-1 text-2xl font-semibold text-green-600">$1,250</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Upcoming Sessions</p>
              <p className="mt-1 text-2xl font-semibold">12</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

