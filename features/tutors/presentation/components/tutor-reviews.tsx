"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { TutorReview } from "@/features/tutors/domain/types";

interface TutorReviewsProps {
  reviews: TutorReview[];
}

export function TutorReviews({ reviews }: TutorReviewsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reviews ({reviews.length})</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {reviews.length === 0 ? (
          <p className="text-muted-foreground">No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="border-b last:border-0 pb-4 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold">{review.reviewerName}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(review.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}


