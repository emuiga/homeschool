import type { Tutor } from "@/features/tutors/domain/types";

export const featuredTutors: Tutor[] = [
  {
    id: "1",
    name: "Mrs. Wanjiku",
    curricula: ["CBC", "Cambridge", "IXL", "Good and Beautiful"],
    rating: 4.8,
    location: "Nairobi",
    image: "/images/kidandtutor.jpg",
    supportsIXL: true,
  },
  {
    id: "2",
    name: "Mr. Ochieng",
    curricula: ["ACE", "Memoria Press", "IXL"],
    rating: 4.9,
    location: "Kisumu",
    image: "/images/teaching.jpg",
    supportsIXL: true,
  },
  {
    id: "3",
    name: "Ms. Akinyi",
    curricula: ["Charlotte Mason", "Rafiki", "CBC"],
    rating: 4.7,
    location: "Nairobi",
    image: "/images/kids.jpg",
    supportsIXL: false,
  },
  {
    id: "4",
    name: "Dr. Kamau",
    curricula: ["CBC", "Cambridge", "IGCSE"],
    rating: 5.0,
    location: "Nairobi",
    image: "/images/child.jpg",
    supportsIXL: false,
  },
];

export const tutorsNearYou: Tutor[] = [
  {
    id: "5",
    name: "Mrs. Muthoni",
    curricula: ["Charlotte Mason", "Good and Beautiful"],
    rating: 4.6,
    location: "Westlands, Nairobi",
    image: "/images/kidandtutor.jpg",
    supportsIXL: false,
  },
  {
    id: "6",
    name: "Mr. Kipchoge",
    curricula: ["CBC", "ACE"],
    rating: 4.5,
    location: "Karen, Nairobi",
    image: "/images/teaching.jpg",
    supportsIXL: false,
  },
  {
    id: "7",
    name: "Ms. Adhiambo",
    curricula: ["Memoria Press", "IXL", "Cambridge"],
    rating: 4.9,
    location: "Kilimani, Nairobi",
    image: "/images/kids.jpg",
    supportsIXL: true,
  },
];

