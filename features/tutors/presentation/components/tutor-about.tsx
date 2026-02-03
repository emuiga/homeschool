"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Tutor } from "@/features/tutors/domain/types";

interface TutorAboutProps {
  tutor: Tutor;
}

export function TutorAbout({ tutor }: TutorAboutProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tutor.bio && (
          <div>
            <p className="text-muted-foreground whitespace-pre-line">{tutor.bio}</p>
          </div>
        )}
        {tutor.education && (
          <div>
            <h3 className="font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground">{tutor.education}</p>
          </div>
        )}
        {tutor.experience && (
          <div>
            <h3 className="font-semibold mb-2">Experience</h3>
            <p className="text-muted-foreground">{tutor.experience}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

