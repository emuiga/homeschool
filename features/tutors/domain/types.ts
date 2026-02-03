export type Curriculum =
  | "Rafiki"
  | "ACE"
  | "Memoria Press"
  | "Charlotte Mason"
  | "Cambridge"
  | "Good and Beautiful"
  | "IXL"
  | "CBC"
  | "IGCSE"
  | "Other";

export interface Tutor {
  id: string;
  name: string;
  curricula: Curriculum[];
  rating: number;
  location: string;
  image?: string;
  description?: string;
  bio?: string;
  experience?: string;
  education?: string;
  specialties?: string[];
  availability?: string;
  totalReviews?: number;
  responseTime?: string;
  supportsIXL?: boolean; // Can help with IXL content
}

export interface TutorReview {
  id: string;
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
}
