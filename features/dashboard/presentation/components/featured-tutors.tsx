"use client";

import { Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeaturedTutorsProps {
  variant?: "grid" | "list";
}

export function FeaturedTutors({ variant = "grid" }: FeaturedTutorsProps) {
  if (variant === "list") {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Featured Tutors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-3 rounded-lg border p-3">
              <div className="h-12 w-12 flex-shrink-0 rounded-full bg-muted" />
              <div className="flex-1">
                <p className="text-sm font-medium">Mrs. Wanjiku (Math)</p>
                <div className="mt-1 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <Button size="sm" variant="outline">
                Save
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Featured Tutors</CardTitle>
        <CardDescription>Discover amazing educators in your area</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-lg border p-4">
              <div className="mb-3 h-32 w-full rounded-lg bg-muted" />
              <p className="text-sm font-medium">New in the Marketplace</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Explore local homeschooling resources
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

