"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle2 } from "lucide-react";
import type { Tutor } from "@/features/tutors/domain/types";

interface TutorIXLSupportProps {
  tutor: Tutor;
}

export function TutorIXLSupport({ tutor }: TutorIXLSupportProps) {
  if (!tutor.supportsIXL) return null;

  return (
    <Card className="border-green-200 bg-green-50/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-green-600" />
          <CardTitle>IXL Learning Support</CardTitle>
        </div>
        <CardDescription>
          This tutor can help complement your IXL learning journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Help with IXL content</p>
              <p className="text-sm text-muted-foreground">
                Get personalized support for IXL Math, Language Arts, Science, and more
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Bridge online and offline learning</p>
              <p className="text-sm text-muted-foreground">
                Connect IXL practice with hands-on activities and real-world applications
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Progress tracking support</p>
              <p className="text-sm text-muted-foreground">
                Help interpret IXL analytics and create targeted learning plans
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-muted-foreground mb-2">
            Using IXL? This tutor understands how to complement your digital learning with
            personalized guidance.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

