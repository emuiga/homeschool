"use client";

import { Star, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Tutor } from "@/features/tutors/domain/types";

interface TutorHeaderProps {
  tutor: Tutor;
  onContact: () => void;
  onWhatsApp: () => void;
  onMessage: () => void;
  onSave: () => void;
  isSaved: boolean;
}

export function TutorHeader({
  tutor,
  onContact,
  onWhatsApp,
  onMessage,
  onSave,
  isSaved,
}: TutorHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <Avatar className="h-32 w-32">
            <AvatarImage src={tutor.image} alt={tutor.name} />
            <AvatarFallback className="text-3xl bg-muted">
              {tutor.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-semibold mb-2">{tutor.name}</h1>
              <div className="mb-3">
                <p className="text-sm text-muted-foreground mb-2">Familiar with:</p>
                <div className="flex flex-wrap gap-2">
                  {tutor.curricula.map((curriculum) => (
                    <Badge key={curriculum} variant="secondary">
                      {curriculum}
                    </Badge>
                  ))}
                </div>
              </div>
              {tutor.supportsIXL && (
                <div className="mb-3 flex items-center gap-2 text-sm">
                  <Badge variant="outline" className="border-green-600 text-green-600">
                    IXL Support Available
                  </Badge>
                  <span className="text-muted-foreground">
                    Can help with IXL content and practice
                  </span>
                </div>
              )}
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(tutor.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-semibold">{tutor.rating}</span>
                  {tutor.totalReviews && (
                    <span className="ml-1 text-muted-foreground">
                      ({tutor.totalReviews} reviews)
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{tutor.location}</span>
                </div>
                {tutor.responseTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Responds in {tutor.responseTime}</span>
                  </div>
                )}
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={onSave}
              className={isSaved ? "text-green-600 border-green-600" : ""}
            >
              <svg
                className="h-5 w-5"
                fill={isSaved ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 flex-1 min-w-[140px]"
              onClick={onContact}
            >
              Contact
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 min-w-[140px]"
              onClick={onWhatsApp}
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 min-w-[140px]"
              onClick={onMessage}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

