"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function LearningJourney() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Journey</CardTitle>
        <CardDescription>Track your child's progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="h-48 rounded-lg border bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground">Progress chart placeholder</p>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 rounded-lg border p-4 text-center">
              <div className="mb-2 text-2xl font-semibold text-green-600">85%</div>
              <div className="text-sm text-muted-foreground">Math</div>
            </div>
            <div className="flex-1 rounded-lg border p-4 text-center">
              <div className="mb-2 text-2xl font-semibold text-green-600">70%</div>
              <div className="text-sm text-muted-foreground">Science</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

