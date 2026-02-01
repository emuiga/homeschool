"use client";

import { useSession } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (isPending) return;

    if (!session) {
      router.push("/");
      return;
    }

    const user = session.user as { onboarded?: boolean } | undefined;
    const isOnboarded = user?.onboarded ?? true;

    if (!isOnboarded) {
      router.push("/onboarding");
      return;
    }
  }, [session, isPending, router]);

  if (isPending) {
    return null;
  }

  if (!session) {
    return null;
  }

  const user = session.user as { onboarded?: boolean } | undefined;
  const isOnboarded = user?.onboarded ?? true;

  if (!isOnboarded) {
    return null;
  }

  return <>{children}</>;
}





