"use client";

import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function SSOCallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <AuthenticateWithRedirectCallback
          afterSignInUrl="/onboarding"
          afterSignUpUrl="/onboarding"
        />
        <div className="mt-4">
          <div className="mb-4 h-8 w-8 mx-auto animate-spin rounded-full border-4 border-gray-300 border-t-black" />
          <div className="text-xl font-semibold">Completing sign in...</div>
          <div className="text-muted-foreground">Please wait</div>
        </div>
      </div>
    </div>
  );
}
