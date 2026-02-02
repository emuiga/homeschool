/**
 * Auth API types and utilities.
 * Uses Clerk for authentication - tokens are managed by Clerk automatically.
 */

export type { AuthUser, UserRole } from "./api-helpers";
export { useApiClient, getCurrentUser, setUserRole } from "./api-helpers";
