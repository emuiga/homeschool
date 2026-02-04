"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CreateEventButtonProps {
  onCreateLesson: () => void;
  onCreateAssignment: () => void;
  onCreateEvent: () => void;
  onCreateDaysOff: () => void;
}

export function CreateEventButton({
  onCreateLesson,
  onCreateAssignment,
  onCreateEvent,
  onCreateDaysOff,
}: CreateEventButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Create
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={onCreateLesson}>Create Lesson</DropdownMenuItem>
        <DropdownMenuItem onClick={onCreateAssignment}>Create Assignment</DropdownMenuItem>
        <DropdownMenuItem onClick={onCreateEvent}>Create Event</DropdownMenuItem>
        <DropdownMenuItem onClick={onCreateDaysOff}>Days Off</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


