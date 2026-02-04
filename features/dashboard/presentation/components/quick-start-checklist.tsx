"use client";

import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function QuickStartChecklist() {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-green-100 opacity-20 blur-2xl" />
      <CardHeader>
        <CardTitle>Quick Start Checklist</CardTitle>
        <CardDescription>
          Complete these steps to get the most out of Homeschool
        </CardDescription>
      </CardHeader>
      <CardContent className="relative space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-green-600 bg-green-50">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Complete your profile (2/5)</p>
            <div className="mt-1 h-2 w-full rounded-full bg-muted">
              <div className="h-2 w-2/5 rounded-full bg-green-600 transition-all" />
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

