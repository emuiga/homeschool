"use client";

import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SavedTutors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Tutors</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between rounded-lg border p-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div>
                <p className="text-sm font-medium">Tutor {i}</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <Button size="sm">Message</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

