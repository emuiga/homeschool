"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import { useApiClient, getCurrentUser, type AuthUser } from "@/lib/auth-api";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import TutorProfilePage from "@/features/tutors/presentation/pages/tutor-profile-page";

export default function TutorProfileRoute() {
  const params = useParams();
  const tutorId = params.id as string;
  const { fetchApi } = useApiClient();
  const { signOut } = useClerk();
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    getCurrentUser(fetchApi)
      .then(setUser)
      .catch(console.error);
  }, [fetchApi]);

  const handleSignOut = () => {
    signOut({ redirectUrl: "/auth" });
  };

  return (
    <div className="flex h-screen flex-col bg-background font-sans">
      <Header user={user} onSignOut={handleSignOut} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <TutorProfilePage tutorId={tutorId} />
      </div>
    </div>
  );
}

