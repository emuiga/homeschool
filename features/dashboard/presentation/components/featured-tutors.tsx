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
          {[
            { name: "Mrs. Wanjiku", subject: "Math", image: "/images/kidandtutor.jpg", rating: 4.8 },
            { name: "Mr. Kipchoge", subject: "Science", image: "/images/tutor.jpg", rating: 4.5 },
          ].map((tutor, i) => (
            <div key={i} className="flex gap-3 rounded-lg border p-3">
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{tutor.name} ({tutor.subject})</p>
                <div className="mt-1 flex items-center gap-1">
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
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
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
          {[
            { image: "/images/kidandtutor.jpg", title: "Math Tutoring", desc: "Expert educators available" },
            { image: "/images/teaching.jpg", title: "Science Programs", desc: "Hands-on learning experiences" },
            { image: "/images/kids.jpg", title: "Group Sessions", desc: "Learn together with peers" },
            { image: "/images/tutor.jpg", title: "Language Arts", desc: "Reading and writing support" },
          ].map((item, i) => (
            <div key={i} className="overflow-hidden rounded-lg border">
              <div className="relative h-32 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

