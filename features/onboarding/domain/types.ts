export type OnboardingStep = "welcome" | "profile" | "role" | "success";

export type UserRole = "parent" | "tutor";

export interface OnboardingFormData {
  name: string;
  username: string;
  role?: UserRole;
}




