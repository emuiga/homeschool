"use client";

import { DollarSign, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function EarningsBookings() {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute right-0 top-0 h-40 w-40 -translate-y-12 translate-x-12 rounded-full bg-green-100 opacity-20 blur-3xl" />
      <CardHeader>
        <CardTitle>Earnings & Bookings</CardTitle>
        <CardDescription>Your tutoring overview</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-lg border bg-gradient-to-br from-green-50 to-green-100/50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="rounded-full bg-green-600 p-1.5">
                  <DollarSign className="h-4 w-4 text-white" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">This Month</p>
              <p className="mt-1 text-2xl font-semibold text-green-600">$1,250</p>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-gradient-to-br from-blue-50 to-blue-100/50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="rounded-full bg-blue-600 p-1.5">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Upcoming Sessions</p>
              <p className="mt-1 text-2xl font-semibold">12</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

