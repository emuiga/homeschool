"use client";

import { useAuth } from "@clerk/nextjs";
import { getApiBaseUrl } from "./api-client";

export type UserRole = "parent" | "tutor";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  picture: string | null;
  role: UserRole | null;
  onboarded: boolean;
}

/**
 * Hook to create an API client that automatically includes Clerk authentication.
 *
 * Usage:
 * ```tsx
 * function MyComponent() {
 *   const { fetchApi } = useApiClient();
 *
 *   const handleClick = async () => {
 *     const user = await fetchApi<AuthUser>('/auth/me');
 *     console.log(user);
 *   };
 * }
 * ```
 */
export function useApiClient() {
  const { getToken } = useAuth();

  async function fetchApi<T = unknown>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = await getToken();
    const baseUrl = getApiBaseUrl();

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    };

    const response = await fetch(`${baseUrl}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const errorMessage =
        errorData?.detail ||
        errorData?.message ||
        errorData?.error ||
        `Request failed (${response.status})`;
      throw new Error(errorMessage);
    }

    return response.json() as Promise<T>;
  }

  return { fetchApi, getToken };
}

/**
 * Get current user profile from the backend.
 * This syncs the Clerk user with your backend database.
 */
export async function getCurrentUser(
  fetchApi: <T>(endpoint: string, options?: RequestInit) => Promise<T>
): Promise<AuthUser> {
  return fetchApi<AuthUser>("/auth/me");
}

/**
 * Set user role (can only be done once during onboarding).
 */
export async function setUserRole(
  fetchApi: <T>(endpoint: string, options?: RequestInit) => Promise<T>,
  role: UserRole
): Promise<AuthUser> {
  return fetchApi<AuthUser>("/auth/set-role", {
    method: "POST",
    body: JSON.stringify({ role }),
  });
}
