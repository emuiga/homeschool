export type CoOpType = "academics" | "gaming" | "activities" | "sports" | "arts" | "stem" | "social" | "islamic" | "christian";

export interface CoOp {
  id: string;
  name: string;
  description: string;
  location: string;
  image: string;
  type: CoOpType;
  ageGroups: string[];
  curricula: string[];
  activities?: string[]; // For activities/gaming co-ops
  meetingFrequency: "weekly" | "bi-weekly" | "monthly";
  meetingDay: string;
  meetingTime: string;
  membershipFee: number;
  memberCount: number;
  maxMembers?: number;
  contactPerson: string;
  contactEmail: string;
  website?: string;
  features: string[];
  classes: CoOpClass[];
  upcomingEvents: CoOpEvent[];
  reviews: CoOpReview[];
  rating: number;
  establishedYear: number;
  requiresVolunteerHours: boolean;
  volunteerHoursPerMonth?: number;
}

export interface CoOpClass {
  id: string;
  name: string;
  subject: string;
  ageRange: string;
  description: string;
  instructor: string;
  day: string;
  time: string;
  cost: number;
  maxStudents: number;
  currentStudents: number;
}

export interface CoOpEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "field-trip" | "social" | "workshop" | "meeting";
  image?: string;
}

export interface CoOpReview {
  id: string;
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
}

