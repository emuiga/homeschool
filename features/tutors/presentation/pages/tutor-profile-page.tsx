"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TutorHeader } from "../components/tutor-header";
import { TutorAbout } from "../components/tutor-about";
import { TutorAvailability } from "../components/tutor-availability";
import { TutorReviews } from "../components/tutor-reviews";
import { TutorIXLSupport } from "../components/tutor-ixl-support";
import type { Tutor, TutorReview } from "@/features/tutors/domain/types";

// Mock data - replace with API call
const mockTutor: Tutor = {
  id: "1",
  name: "Mrs. Wanjiku",
  curricula: ["CBC", "Cambridge", "IXL", "Good and Beautiful"],
  rating: 4.8,
  location: "Nairobi, Kenya",
  image: "/images/kidandtutor.jpg",
  bio: "Experienced mathematics tutor with over 10 years of teaching experience. I specialize in making math fun and accessible for students of all ages. My teaching approach focuses on building strong foundational skills and confidence.",
  education: "Bachelor of Education (Mathematics), University of Nairobi",
  experience: "10+ years teaching mathematics to primary and secondary students",
  specialties: ["Primary Math", "Algebra", "Geometry"],
  availability: "Monday - Friday: 2:00 PM - 6:00 PM, Weekends: 9:00 AM - 1:00 PM",
  totalReviews: 24,
  responseTime: "within 2 hours",
  supportsIXL: true,
};

const mockReviews: TutorReview[] = [
  {
    id: "1",
    reviewerName: "Sarah M.",
    rating: 5,
    comment: "Mrs. Wanjiku is an excellent tutor! My daughter's math grades improved significantly. She's patient, kind, and makes learning fun.",
    date: "2 weeks ago",
  },
  {
    id: "2",
    reviewerName: "James K.",
    rating: 5,
    comment: "Highly recommend! My son was struggling with algebra, but after a few sessions with Mrs. Wanjiku, he's now confident and excelling.",
    date: "1 month ago",
  },
  {
    id: "3",
    reviewerName: "Mary W.",
    rating: 4,
    comment: "Great tutor, very professional. The sessions are well-structured and my child enjoys them.",
    date: "2 months ago",
  },
];

export default function TutorProfilePage({ tutorId }: { tutorId: string }) {
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(false);
  const [tutor] = useState<Tutor>(mockTutor);
  const [reviews] = useState<TutorReview[]>(mockReviews);

  const handleContact = () => {
    // Navigate to contact page or open contact modal
    console.log("Contact tutor:", tutor.id);
  };

  const handleWhatsApp = () => {
    // Open WhatsApp link
    window.open(`/contact/whatsapp/${tutor.id}`, "_blank");
  };

  const handleMessage = () => {
    // Navigate to messaging
    router.push(`/messages?tutor=${tutor.id}`);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // API call to save/unsave tutor
    console.log(isSaved ? "Unsaving tutor" : "Saving tutor");
  };

  const handleBookSession = () => {
    // Navigate to booking page
    router.push(`/tutors/${tutor.id}/book`);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-muted/30">
      <div className="mx-auto max-w-5xl p-6">
        <TutorHeader
          tutor={tutor}
          onContact={handleContact}
          onWhatsApp={handleWhatsApp}
          onMessage={handleMessage}
          onSave={handleSave}
          isSaved={isSaved}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {tutor.supportsIXL && <TutorIXLSupport tutor={tutor} />}
            <TutorAbout tutor={tutor} />
            <TutorReviews reviews={reviews} />
          </div>
          <div className="lg:col-span-1">
            <TutorAvailability tutor={tutor} onBookSession={handleBookSession} />
          </div>
        </div>
      </div>
    </div>
  );
}

