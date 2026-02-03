"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function QuickStartChecklist() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Start Checklist</CardTitle>
        <CardDescription>
          Complete these steps to get the most out of Homeschool
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary">
            <div className="h-3 w-3 rounded-full bg-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Complete your profile (2/5)</p>
            <div className="mt-1 h-2 w-full rounded-full bg-muted">
              <div className="h-2 w-2/5 rounded-full bg-primary" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-muted" />
          <p className="text-sm">Find your first tutor</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-muted" />
          <p className="text-sm">Join your local group</p>
        </div>
      </CardContent>
    </Card>
  );
}

