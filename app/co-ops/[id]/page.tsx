"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import { useApiClient, getCurrentUser, type AuthUser } from "@/lib/auth-api";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, MapPin, Users, Calendar, DollarSign, Mail, Globe, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockCoOps } from "@/features/co-ops/data/mock-coops";
import type { CoOp } from "@/features/co-ops/domain/types";

export default function CoOpDetailRoute() {
  const params = useParams();
  const router = useRouter();
  const coopId = params.id as string;
  const { fetchApi } = useApiClient();
  const { signOut } = useClerk();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [coop, setCoop] = useState<CoOp | null>(null);

  useEffect(() => {
    getCurrentUser(fetchApi)
      .then(setUser)
      .catch(console.error);
    
    const foundCoop = mockCoOps.find((c) => c.id === coopId);
    setCoop(foundCoop || null);
  }, [fetchApi, coopId]);

  const handleSignOut = () => {
    signOut({ redirectUrl: "/auth" });
  };

  if (!coop) {
    return (
      <div className="flex h-screen flex-col bg-background font-sans">
        <Header user={user} onSignOut={handleSignOut} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-y-auto bg-muted/30">
            <div className="mx-auto max-w-7xl p-6">
              <p>Co-op not found</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-background font-sans">
      <Header user={user} onSignOut={handleSignOut} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto bg-muted/30">
          <div className="mx-auto max-w-7xl p-6">
            <div className="mb-6">
              <Link href="/co-ops">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Co-ops
                </Button>
              </Link>
            </div>

            {/* Hero Section */}
            <div className="relative mb-6 overflow-hidden rounded-xl">
              <div className="relative h-64 w-full md:h-80">
                <img
                  src={coop.image}
                  alt={coop.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="mb-2 text-3xl font-semibold text-white md:text-4xl">
                    {coop.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-white">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{coop.rating}</span>
                      <span className="text-sm opacity-80">
                        ({coop.reviews.length} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{coop.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{coop.memberCount} members</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <Card>
                  <CardHeader>
                    <CardTitle>About This Co-op</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{coop.description}</p>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card>
                  <CardHeader>
                    <CardTitle>Features & Offerings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {coop.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Classes */}
                <Card>
                  <CardHeader>
                    <CardTitle>Available Classes</CardTitle>
                    <CardDescription>
                      {coop.classes.length} classes offered
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {coop.classes.map((classItem) => (
                      <div
                        key={classItem.id}
                        className="rounded-lg border p-4"
                      >
                        <div className="mb-2 flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{classItem.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {classItem.subject} • Ages {classItem.ageRange}
                            </p>
                          </div>
                          <Badge variant="secondary">
                            {classItem.currentStudents}/{classItem.maxStudents}
                          </Badge>
                        </div>
                        <p className="mb-3 text-sm text-muted-foreground">
                          {classItem.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{classItem.day}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{classItem.time}</span>
                            </div>
                            <div>
                              <span>Instructor: {classItem.instructor}</span>
                            </div>
                          </div>
                          <div className="font-semibold text-green-600">
                            KES {classItem.cost.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                {coop.upcomingEvents.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {coop.upcomingEvents.map((event) => (
                        <div
                          key={event.id}
                          className="flex gap-4 rounded-lg border p-4"
                        >
                          {event.image && (
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="mb-1 flex items-center gap-2">
                              <h4 className="font-semibold">{event.title}</h4>
                              <Badge variant="outline" className="text-xs">
                                {event.type.replace("-", " ")}
                              </Badge>
                            </div>
                            <p className="mb-2 text-sm text-muted-foreground">
                              {event.description}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Reviews */}
                {coop.reviews.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Reviews</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {coop.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-4 last:border-0 last:pb-0">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium">{review.reviewerName}</span>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="mb-1 text-sm text-muted-foreground">
                            {review.comment}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {review.date}
                          </span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Membership Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        <span>Monthly Fee</span>
                      </div>
                      <p className="text-xl font-semibold text-green-600">
                        KES {coop.membershipFee.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Meeting Schedule</span>
                      </div>
                      <p className="font-medium">{coop.meetingDay}</p>
                      <p className="text-sm text-muted-foreground">
                        {coop.meetingTime} ({coop.meetingFrequency})
                      </p>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Members</span>
                      </div>
                      <p className="font-medium">
                        {coop.memberCount}
                        {coop.maxMembers && ` / ${coop.maxMembers}`} families
                      </p>
                    </div>
                    {coop.requiresVolunteerHours && (
                      <div>
                        <div className="mb-1 text-sm text-muted-foreground">
                          Volunteer Hours
                        </div>
                        <p className="font-medium">
                          {coop.volunteerHoursPerMonth} hours/month required
                        </p>
                      </div>
                    )}
                    <div>
                      <div className="mb-1 text-sm text-muted-foreground">
                        Established
                      </div>
                      <p className="font-medium">{coop.establishedYear}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="mb-1 text-sm text-muted-foreground">
                        Contact Person
                      </p>
                      <p className="font-medium">{coop.contactPerson}</p>
                    </div>
                    <div>
                      <a
                        href={`mailto:${coop.contactEmail}`}
                        className="flex items-center gap-2 text-sm text-green-600 hover:underline"
                      >
                        <Mail className="h-4 w-4" />
                        <span>{coop.contactEmail}</span>
                      </a>
                    </div>
                    {coop.website && (
                      <div>
                        <a
                          href={coop.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-green-600 hover:underline"
                        >
                          <Globe className="h-4 w-4" />
                          <span>Visit Website</span>
                        </a>
                      </div>
                    )}
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Join This Co-op
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Age Groups</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {coop.ageGroups.map((age) => (
                        <Badge key={age} variant="secondary">
                          Ages {age}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {(coop.type === "activities" || coop.type === "gaming") && coop.activities ? (
                  <Card>
                    <CardHeader>
                      <CardTitle>Activities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {coop.activities.map((activity) => (
                          <Badge key={activity} variant="outline">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle>Curricula</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {coop.curricula.map((curriculum) => (
                          <Badge key={curriculum} variant="outline">
                            {curriculum}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

