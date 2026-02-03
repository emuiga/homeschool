"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen } from "lucide-react";
import type { Tutor } from "@/features/tutors/domain/types";

interface TutorAvailabilityProps {
  tutor: Tutor;
  onBookSession: () => void;
}

export function TutorAvailability({ tutor, onBookSession }: TutorAvailabilityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Availability</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tutor.availability && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Schedule</span>
            </div>
            <p className="text-muted-foreground">{tutor.availability}</p>
          </div>
        )}
        {tutor.curricula && tutor.curricula.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Curricula</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tutor.curricula.map((curriculum) => (
                <span
                  key={curriculum}
                  className="text-sm px-2 py-1 rounded-md bg-muted text-muted-foreground"
                >
                  {curriculum}
                </span>
              ))}
            </div>
          </div>
        )}
        <Button
          className="w-full bg-green-600 hover:bg-green-700"
          size="lg"
          onClick={onBookSession}
        >
          Book a Session
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          Pricing discussed during contact
        </p>
      </CardContent>
    </Card>
  );
}

