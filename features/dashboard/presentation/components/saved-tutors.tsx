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
        {[
          { name: "Mrs. Wanjiku", image: "/images/kidandtutor.jpg", rating: 4.8 },
          { name: "Mr. Kipchoge", image: "/images/tutor.jpg", rating: 4.5 },
          { name: "Ms. Adhiambo", image: "/images/teaching.jpg", rating: 4.9 },
        ].map((tutor, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg border p-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-sm font-medium">{tutor.name}</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-3 w-3 ${
                        star <= Math.floor(tutor.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-xs text-muted-foreground">({tutor.rating})</span>
                </div>
              </div>
            </div>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">Message</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

