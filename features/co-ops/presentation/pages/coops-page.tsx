"use client";

import { useState } from "react";
import { Search, Users, Calendar, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CoOpCard } from "../components/coop-card";
import { mockCoOps } from "../../data/mock-coops";

export default function CoOpsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const locations = Array.from(new Set(mockCoOps.map((coop) => coop.location)));
  const ageGroups = Array.from(
    new Set(mockCoOps.flatMap((coop) => coop.ageGroups))
  ).sort();
  const types: Array<{ value: string; label: string }> = [
    { value: "all", label: "All Types" },
    { value: "academics", label: "Academics" },
    { value: "gaming", label: "Gaming" },
    { value: "activities", label: "Activities" },
    { value: "sports", label: "Sports" },
    { value: "arts", label: "Arts" },
    { value: "stem", label: "STEM" },
    { value: "social", label: "Social" },
    { value: "islamic", label: "Islamic" },
    { value: "christian", label: "Christian" },
  ];

  const filteredCoOps = mockCoOps.filter((coop) => {
    const matchesSearch =
      coop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coop.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coop.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation =
      selectedLocation === "all" || coop.location === selectedLocation;
    const matchesAgeGroup =
      selectedAgeGroup === "all" ||
      coop.ageGroups.some((age) => age === selectedAgeGroup);
    const matchesType =
      selectedType === "all" || coop.type === selectedType;

    return matchesSearch && matchesLocation && matchesAgeGroup && matchesType;
  });

  return (
    <div className="flex-1 overflow-y-auto bg-muted/30">
      <div className="mx-auto max-w-7xl p-6">
        {/* Hero Section */}
        <div className="relative mb-8 overflow-hidden rounded-xl border bg-gradient-to-r from-green-50 to-blue-50">
          <div className="absolute inset-0">
            <img
              src="/images/group.jpg"
              alt="Homeschool co-ops"
              className="h-full w-full object-cover opacity-20"
            />
          </div>
          <div className="relative p-8 md:p-12">
            <div className="max-w-2xl">
              <h1 className="mb-3 text-3xl font-semibold md:text-4xl">
                Homeschool Co-ops
              </h1>
              <p className="mb-4 text-muted-foreground md:text-lg">
                Connect with local homeschooling families, share resources, and
                participate in group classes and activities. Co-ops provide
                socialization, specialized instruction, and a supportive
                community for your homeschooling journey.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search co-ops by name, location, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              {types.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="all">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <select
              value={selectedAgeGroup}
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="all">All Ages</option>
              {ageGroups.map((age) => (
                <option key={age} value={age}>
                  Ages {age}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-muted-foreground">
          Found {filteredCoOps.length} co-op{filteredCoOps.length !== 1 ? "s" : ""}
        </div>

        {/* Co-ops Grid */}
        {filteredCoOps.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCoOps.map((coop) => (
              <CoOpCard key={coop.id} coop={coop} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[400px] items-center justify-center rounded-lg border bg-background">
            <div className="text-center">
              <p className="mb-2 text-lg font-medium">No co-ops found</p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

