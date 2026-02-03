"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CalendarProps {
  title?: string;
}

export function Calendar({ title = "Family Calendar" }: CalendarProps) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-2 font-medium text-muted-foreground">
              {day}
            </div>
          ))}
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square cursor-pointer rounded border p-1 text-xs hover:bg-accent"
            >
              {i + 1 <= 31 ? i + 1 : ""}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

