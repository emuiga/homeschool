"use client";

import { Button } from "@/components/ui/button";
import { Calendar, List, Grid3x3 } from "lucide-react";
import type { CalendarView } from "../../domain/types";

interface ViewToggleProps {
  view: CalendarView;
  onViewChange: (view: CalendarView) => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex gap-2 rounded-lg border bg-background p-1">
      <Button
        variant={view === "month" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewChange("month")}
      >
        <Grid3x3 className="h-4 w-4 mr-2" />
        Month
      </Button>
      <Button
        variant={view === "week" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewChange("week")}
      >
        <Calendar className="h-4 w-4 mr-2" />
        Week
      </Button>
      <Button
        variant={view === "day" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewChange("day")}
      >
        <Calendar className="h-4 w-4 mr-2" />
        Day
      </Button>
      <Button
        variant={view === "agenda" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewChange("agenda")}
      >
        <List className="h-4 w-4 mr-2" />
        Agenda
      </Button>
    </div>
  );
}


