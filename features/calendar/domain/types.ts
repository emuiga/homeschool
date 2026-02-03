export type CalendarView = "month" | "week" | "day" | "agenda";

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  allDay?: boolean;
  type: "lesson" | "assignment" | "event" | "session" | "trip";
  color?: string;
  location?: string;
  attendees?: string[];
}

