import type { CoOp } from "../domain/types";

export const mockCoOps: CoOp[] = [
  {
    id: "1",
    name: "Westlands Co-op",
    description: "A vibrant community of homeschooling families in Nairobi offering diverse classes, field trips, and social activities. We focus on collaborative learning and building strong friendships among homeschooled children.",
    location: "Westlands, Nairobi",
    image: "/images/group.jpg",
    type: "academics",
    ageGroups: ["5-8", "9-12", "13-16"],
    curricula: ["CBC", "Cambridge", "Charlotte Mason"],
    meetingFrequency: "weekly",
    meetingDay: "Fridays",
    meetingTime: "9:00 AM - 2:00 PM",
    membershipFee: 5000,
    memberCount: 45,
    maxMembers: 60,
    contactPerson: "Sarah Muthoni",
    contactEmail: "sarah@nairobi-coop.org",
    website: "https://nairobi-coop.org",
    features: [
      "Science Lab Classes",
      "Art & Music Programs",
      "PE & Sports",
      "Field Trips",
      "Parent Support Group",
      "Curriculum Library"
    ],
    classes: [
      {
        id: "1",
        name: "Chemistry Lab",
        subject: "Science",
        ageRange: "13-16",
        description: "Hands-on chemistry experiments and lab work",
        instructor: "Dr. James Kariuki",
        day: "Friday",
        time: "10:00 AM - 11:30 AM",
        cost: 2000,
        maxStudents: 12,
        currentStudents: 8
      },
      {
        id: "2",
        name: "Art Studio",
        subject: "Arts",
        ageRange: "9-12",
        description: "Creative art projects and techniques",
        instructor: "Ms. Wanjiru",
        day: "Friday",
        time: "11:00 AM - 12:30 PM",
        cost: 1500,
        maxStudents: 15,
        currentStudents: 12
      },
      {
        id: "3",
        name: "Spanish Language",
        subject: "Language",
        ageRange: "9-16",
        description: "Beginner to intermediate Spanish",
        instructor: "Mrs. Rodriguez",
        day: "Friday",
        time: "1:00 PM - 2:00 PM",
        cost: 1800,
        maxStudents: 10,
        currentStudents: 6
      }
    ],
    upcomingEvents: [
      {
        id: "1",
        title: "Nature Walk at Karura Forest",
        description: "Educational nature walk and bird watching",
        date: "2024-03-15",
        time: "9:00 AM",
        location: "Karura Forest",
        type: "field-trip",
        image: "/images/nature.jpg"
      },
      {
        id: "2",
        title: "Science Fair",
        description: "Annual co-op science fair showcasing student projects",
        date: "2024-03-22",
        time: "10:00 AM",
        location: "Co-op Center",
        type: "workshop",
        image: "/images/kids.jpg"
      }
    ],
    reviews: [
      {
        id: "1",
        reviewerName: "Mary K.",
        rating: 5,
        comment: "Excellent co-op! My kids love the classes and have made great friends. The community is supportive and welcoming.",
        date: "2 weeks ago"
      },
      {
        id: "2",
        reviewerName: "John M.",
        rating: 4,
        comment: "Great variety of classes and well-organized. The field trips are always educational and fun.",
        date: "1 month ago"
      }
    ],
    rating: 4.7,
    establishedYear: 2018,
    requiresVolunteerHours: true,
    volunteerHoursPerMonth: 4
  },
  {
    id: "2",
    name: "Karen Co-op",
    description: "A close-knit group of families in Karen focusing on Charlotte Mason and classical education. We emphasize nature study, literature, and hands-on learning experiences.",
    location: "Karen, Nairobi",
    image: "/images/kids.jpg",
    type: "activities",
    ageGroups: ["5-10", "11-14"],
    curricula: ["Charlotte Mason", "Classical", "Good and Beautiful"],
    activities: [
      "Nature Hiking",
      "Playground Activities",
      "Outdoor Games",
      "Nature Journaling",
      "Picnics",
      "Field Trips"
    ],
    meetingFrequency: "bi-weekly",
    meetingDay: "Tuesdays",
    meetingTime: "10:00 AM - 1:00 PM",
    membershipFee: 3500,
    memberCount: 28,
    maxMembers: 35,
    contactPerson: "Elizabeth Wanjala",
    contactEmail: "elizabeth@karen-collective.org",
    features: [
      "Nature Study",
      "Literature Circles",
      "Handicrafts",
      "Music Appreciation",
      "Poetry Tea Time",
      "Book Club"
    ],
    classes: [
      {
        id: "4",
        name: "Nature Journaling",
        subject: "Science",
        ageRange: "7-12",
        description: "Outdoor nature observation and journaling",
        instructor: "Ms. Adhiambo",
        day: "Tuesday",
        time: "10:00 AM - 11:00 AM",
        cost: 1000,
        maxStudents: 12,
        currentStudents: 9
      },
      {
        id: "5",
        name: "Handicrafts",
        subject: "Arts",
        ageRange: "8-14",
        description: "Traditional crafts and skills",
        instructor: "Mrs. Kamau",
        day: "Tuesday",
        time: "11:30 AM - 12:30 PM",
        cost: 1200,
        maxStudents: 10,
        currentStudents: 7
      }
    ],
    upcomingEvents: [
      {
        id: "3",
        title: "Poetry Tea Time",
        description: "Monthly poetry reading and tea",
        date: "2024-03-12",
        time: "2:00 PM",
        location: "Member's Home",
        type: "social",
        image: "/images/teaching.jpg"
      }
    ],
    reviews: [
      {
        id: "3",
        reviewerName: "Susan L.",
        rating: 5,
        comment: "Perfect for families following Charlotte Mason. The community is wonderful and the activities are enriching.",
        date: "3 weeks ago"
      }
    ],
    rating: 4.9,
    establishedYear: 2020,
    requiresVolunteerHours: true,
    volunteerHoursPerMonth: 3
  },
  {
    id: "3",
    name: "Kilimani Co-op",
    description: "A diverse co-op serving families in Kilimani and surrounding areas. We offer academic enrichment classes, STEM programs, and social activities for all ages.",
    location: "Kilimani, Nairobi",
    image: "/images/hike.jpg",
    type: "stem",
    ageGroups: ["4-7", "8-11", "12-15", "16-18"],
    curricula: ["CBC", "Cambridge", "American", "IXL"],
    meetingFrequency: "weekly",
    meetingDay: "Wednesdays",
    meetingTime: "9:00 AM - 3:00 PM",
    membershipFee: 6000,
    memberCount: 62,
    maxMembers: 75,
    contactPerson: "David Ochieng",
    contactEmail: "david@kilimani-coop.org",
    features: [
      "STEM Lab",
      "Robotics Club",
      "Debate Team",
      "Drama & Theater",
      "Sports Teams",
      "Tutoring Support"
    ],
    classes: [
      {
        id: "6",
        name: "Robotics & Coding",
        subject: "STEM",
        ageRange: "10-14",
        description: "Introduction to robotics and programming",
        instructor: "Mr. Otieno",
        day: "Wednesday",
        time: "10:00 AM - 11:30 AM",
        cost: 2500,
        maxStudents: 12,
        currentStudents: 10
      },
      {
        id: "7",
        name: "Drama Club",
        subject: "Arts",
        ageRange: "8-16",
        description: "Theater skills and performance",
        instructor: "Ms. Njeri",
        day: "Wednesday",
        time: "2:00 PM - 3:30 PM",
        cost: 1800,
        maxStudents: 20,
        currentStudents: 15
      }
    ],
    upcomingEvents: [
      {
        id: "4",
        title: "Robotics Competition",
        description: "Inter-co-op robotics challenge",
        date: "2024-03-20",
        time: "10:00 AM",
        location: "Co-op Center",
        type: "workshop",
        image: "/images/game1.jpg"
      }
    ],
    reviews: [
      {
        id: "4",
        reviewerName: "Peter N.",
        rating: 5,
        comment: "Outstanding STEM programs! My son has learned so much in robotics class. Highly recommend!",
        date: "1 week ago"
      },
      {
        id: "5",
        reviewerName: "Grace M.",
        rating: 4,
        comment: "Great variety of classes and excellent instructors. The community is very active and engaged.",
        date: "2 weeks ago"
      }
    ],
    rating: 4.8,
    establishedYear: 2015,
    requiresVolunteerHours: true,
    volunteerHoursPerMonth: 5
  },
  {
    id: "4",
    name: "Runda Network Co-op",
    description: "A supportive network of homeschooling families in Runda. We focus on academic excellence, character development, and building lasting friendships.",
    location: "Runda, Nairobi",
    image: "/images/two-boys.jpg",
    type: "academics",
    ageGroups: ["6-9", "10-13", "14-17"],
    curricula: ["CBC", "Cambridge", "Memoria Press"],
    meetingFrequency: "weekly",
    meetingDay: "Thursdays",
    meetingTime: "9:30 AM - 2:30 PM",
    membershipFee: 4500,
    memberCount: 38,
    maxMembers: 50,
    contactPerson: "Ruth Kimani",
    contactEmail: "ruth@runda-network.org",
    features: [
      "Academic Tutoring",
      "Test Prep",
      "Study Groups",
      "Mentorship Program",
      "College Prep",
      "Scholarship Guidance"
    ],
    classes: [
      {
        id: "8",
        name: "SAT Prep",
        subject: "Test Prep",
        ageRange: "15-17",
        description: "Comprehensive SAT preparation",
        instructor: "Mr. Mwangi",
        day: "Thursday",
        time: "11:00 AM - 12:30 PM",
        cost: 3000,
        maxStudents: 8,
        currentStudents: 6
      },
      {
        id: "9",
        name: "Study Skills",
        subject: "Academic",
        ageRange: "12-16",
        description: "Effective study techniques and time management",
        instructor: "Ms. Wambui",
        day: "Thursday",
        time: "1:00 PM - 2:00 PM",
        cost: 1500,
        maxStudents: 15,
        currentStudents: 11
      }
    ],
    upcomingEvents: [
      {
        id: "5",
        title: "College Information Session",
        description: "Learn about college applications and scholarships",
        date: "2024-03-18",
        time: "2:00 PM",
        location: "Co-op Center",
        type: "workshop"
      }
    ],
    reviews: [
      {
        id: "6",
        reviewerName: "Michael K.",
        rating: 5,
        comment: "Excellent academic support. The SAT prep class helped my daughter significantly improve her scores.",
        date: "1 month ago"
      }
    ],
    rating: 4.6,
    establishedYear: 2019,
    requiresVolunteerHours: false
  },
  {
    id: "5",
    name: "Kiambu Rd Co-op",
    description: "A fun and engaging co-op for kids who love gaming! We combine educational gaming, coding, game design, and esports with social activities. Perfect for tech-savvy homeschoolers.",
    location: "Westlands, Nairobi",
    image: "/images/game1.jpg",
    type: "gaming",
    ageGroups: ["8-12", "13-16"],
    curricula: ["CBC", "American", "IXL"],
    activities: [
      "Gaming Tournaments",
      "Playground Time",
      "Team Building Games",
      "Board Games",
      "Outdoor Activities",
      "Social Gatherings"
    ],
    meetingFrequency: "weekly",
    meetingDay: "Saturdays",
    meetingTime: "10:00 AM - 3:00 PM",
    membershipFee: 4000,
    memberCount: 32,
    maxMembers: 40,
    contactPerson: "James Mwangi",
    contactEmail: "james@gaming-coop.org",
    features: [
      "Educational Gaming",
      "Game Design & Development",
      "Coding Classes",
      "Esports Teams",
      "Gaming Tournaments",
      "Tech Workshops"
    ],
    classes: [
      {
        id: "10",
        name: "Game Design Basics",
        subject: "Technology",
        ageRange: "10-14",
        description: "Learn to design and create your own games",
        instructor: "Mr. Kipchoge",
        day: "Saturday",
        time: "10:00 AM - 11:30 AM",
        cost: 2000,
        maxStudents: 12,
        currentStudents: 9
      },
      {
        id: "11",
        name: "Esports Training",
        subject: "Gaming",
        ageRange: "12-16",
        description: "Competitive gaming and team strategy",
        instructor: "Ms. Wanjala",
        day: "Saturday",
        time: "1:00 PM - 3:00 PM",
        cost: 1800,
        maxStudents: 16,
        currentStudents: 12
      }
    ],
    upcomingEvents: [
      {
        id: "6",
        title: "Gaming Tournament",
        description: "Monthly gaming competition for all members",
        date: "2024-03-16",
        time: "2:00 PM",
        location: "Co-op Center",
        type: "social",
        image: "/images/game2.jpg"
      }
    ],
    reviews: [
      {
        id: "7",
        reviewerName: "Tom M.",
        rating: 5,
        comment: "My son absolutely loves this co-op! Great balance of gaming and learning. The instructors are fantastic.",
        date: "1 week ago"
      }
    ],
    rating: 4.8,
    establishedYear: 2021,
    requiresVolunteerHours: false
  },
  {
    id: "6",
    name: "Ngong Rd Co-op",
    description: "A vibrant co-op focused on all forms of artistic expression. We offer classes in visual arts, music, drama, dance, and creative writing for homeschooled children.",
    location: "Kilimani, Nairobi",
    image: "/images/teaching.jpg",
    type: "arts",
    ageGroups: ["6-10", "11-14", "15-18"],
    curricula: ["CBC", "Charlotte Mason", "Classical"],
    meetingFrequency: "weekly",
    meetingDay: "Mondays",
    meetingTime: "1:00 PM - 4:00 PM",
    membershipFee: 4500,
    memberCount: 28,
    maxMembers: 35,
    contactPerson: "Grace Wanjiru",
    contactEmail: "grace@arts-coop.org",
    features: [
      "Visual Arts Studio",
      "Music Lessons",
      "Drama & Theater",
      "Dance Classes",
      "Creative Writing",
      "Art Exhibitions"
    ],
    classes: [
      {
        id: "12",
        name: "Painting & Drawing",
        subject: "Visual Arts",
        ageRange: "8-14",
        description: "Explore various painting and drawing techniques",
        instructor: "Ms. Akinyi",
        day: "Monday",
        time: "1:00 PM - 2:30 PM",
        cost: 1500,
        maxStudents: 12,
        currentStudents: 10
      }
    ],
    upcomingEvents: [
      {
        id: "7",
        title: "Art Exhibition",
        description: "Showcase of student artwork",
        date: "2024-03-25",
        time: "3:00 PM",
        location: "Co-op Center",
        type: "social",
        image: "/images/kids.jpg"
      }
    ],
    reviews: [
      {
        id: "8",
        reviewerName: "Sarah K.",
        rating: 5,
        comment: "Wonderful co-op for creative kids! My daughter has discovered her passion for art here.",
        date: "2 weeks ago"
      }
    ],
    rating: 4.9,
    establishedYear: 2020,
    requiresVolunteerHours: true,
    volunteerHoursPerMonth: 3
  },
  {
    id: "7",
    name: "Eastleigh Muslim Co-op",
    description: "A supportive community for Muslim homeschooling families. We provide Islamic education, Arabic language classes, Quran studies, and halal social activities for children.",
    location: "Eastleigh, Nairobi",
    image: "/images/teaching.jpg",
    type: "islamic",
    ageGroups: ["5-8", "9-12", "13-16"],
    curricula: ["CBC", "Cambridge", "Islamic Studies"],
    meetingFrequency: "weekly",
    meetingDay: "Saturdays",
    meetingTime: "9:00 AM - 2:00 PM",
    membershipFee: 4000,
    memberCount: 35,
    maxMembers: 45,
    contactPerson: "Sheikh Ahmed Hassan",
    contactEmail: "ahmed@muslim-coop.org",
    features: [
      "Madrasa Classes",
      "Quran Memorization",
      "Arabic Language",
      "Islamic Studies",
      "Halal Activities",
      "Community Events"
    ],
    classes: [
      {
        id: "13",
        name: "Quran Memorization",
        subject: "Islamic Studies",
        ageRange: "7-14",
        description: "Tajweed and Hifz classes",
        instructor: "Sheikh Ahmed",
        day: "Saturday",
        time: "9:00 AM - 10:30 AM",
        cost: 1500,
        maxStudents: 15,
        currentStudents: 12
      },
      {
        id: "14",
        name: "Arabic Language",
        subject: "Language",
        ageRange: "8-16",
        description: "Modern Standard Arabic",
        instructor: "Ustadha Fatima",
        day: "Saturday",
        time: "11:00 AM - 12:30 PM",
        cost: 1800,
        maxStudents: 12,
        currentStudents: 9
      }
    ],
    upcomingEvents: [
      {
        id: "8",
        title: "Eid Celebration",
        description: "Community Eid celebration with activities for kids",
        date: "2024-04-10",
        time: "10:00 AM",
        location: "Co-op Center",
        type: "social",
        image: "/images/kids.jpg"
      }
    ],
    reviews: [
      {
        id: "9",
        reviewerName: "Amina H.",
        rating: 5,
        comment: "Excellent Islamic education and wonderful community. My children love the madrasa classes!",
        date: "2 weeks ago"
      }
    ],
    rating: 4.8,
    establishedYear: 2019,
    requiresVolunteerHours: true,
    volunteerHoursPerMonth: 3
  },
  {
    id: "8",
    name: "Baptist Network Co-op",
    description: "A Christ-centered co-op for Christian homeschooling families. We integrate biblical studies, character development, and Christian fellowship into our educational activities.",
    location: "Karen, Nairobi",
    image: "/images/group.jpg",
    type: "christian",
    ageGroups: ["6-10", "11-14", "15-18"],
    curricula: ["CBC", "Classical", "BJU Press", "Abeka"],
    meetingFrequency: "weekly",
    meetingDay: "Fridays",
    meetingTime: "9:00 AM - 2:00 PM",
    membershipFee: 4500,
    memberCount: 42,
    maxMembers: 50,
    contactPerson: "Pastor John Mwangi",
    contactEmail: "john@christian-coop.org",
    features: [
      "Bible Study",
      "Chapel Services",
      "Christian Character Building",
      "Prayer Groups",
      "Mission Projects",
      "Worship Activities"
    ],
    classes: [
      {
        id: "15",
        name: "Bible Study",
        subject: "Religious Studies",
        ageRange: "8-14",
        description: "Age-appropriate Bible study and scripture memorization",
        instructor: "Pastor John",
        day: "Friday",
        time: "10:00 AM - 11:00 AM",
        cost: 1000,
        maxStudents: 20,
        currentStudents: 16
      },
      {
        id: "16",
        name: "Christian Character Building",
        subject: "Character",
        ageRange: "10-16",
        description: "Teaching Christian values and character",
        instructor: "Mrs. Grace",
        day: "Friday",
        time: "11:30 AM - 12:30 PM",
        cost: 1200,
        maxStudents: 15,
        currentStudents: 11
      }
    ],
    upcomingEvents: [
      {
        id: "9",
        title: "Community Service Day",
        description: "Serving the local community together",
        date: "2024-03-30",
        time: "9:00 AM",
        location: "Various Locations",
        type: "social",
        image: "/images/hike.jpg"
      }
    ],
    reviews: [
      {
        id: "10",
        reviewerName: "David M.",
        rating: 5,
        comment: "Wonderful Christian community! The Bible study classes have been a blessing for our family.",
        date: "1 week ago"
      }
    ],
    rating: 4.9,
    establishedYear: 2017,
    requiresVolunteerHours: true,
    volunteerHoursPerMonth: 4
  }
];

