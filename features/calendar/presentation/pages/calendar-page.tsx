"use client";

import { useState } from "react";
import { ViewToggle } from "../components/view-toggle";
import { GoogleCalendarSync } from "../components/google-calendar-sync";
import { CreateEventButton } from "../components/create-event-button";
import { Calendar } from "@/components/calendar";
import type { CalendarView } from "../../domain/types";

export default function CalendarPage() {
  const [view, setView] = useState<CalendarView>("month");

  const handleCreateLesson = () => {
    console.log("Create lesson");
  };

  const handleCreateAssignment = () => {
    console.log("Create assignment");
  };

  const handleCreateEvent = () => {
    console.log("Create event");
  };

  const handleCreateDaysOff = () => {
    console.log("Create days off");
  };

  return (
    <div className="flex-1 overflow-y-auto bg-muted/30">
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold mb-2">Calendar</h1>
            <p className="text-muted-foreground">
              Manage your lessons, assignments, and events
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ViewToggle view={view} onViewChange={setView} />
            <CreateEventButton
              onCreateLesson={handleCreateLesson}
              onCreateAssignment={handleCreateAssignment}
              onCreateEvent={handleCreateEvent}
              onCreateDaysOff={handleCreateDaysOff}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-background rounded-lg border p-6">
              <div className="mb-4 text-center">
                <p className="text-muted-foreground">
                  {view === "month" && "Month View"}
                  {view === "week" && "Week View"}
                  {view === "day" && "Day View"}
                  {view === "agenda" && "Agenda View"}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Calendar view implementation coming soon
                </p>
              </div>
              <Calendar title="Family Calendar" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <GoogleCalendarSync />
          </div>
        </div>
      </div>
    </div>
  );
}


