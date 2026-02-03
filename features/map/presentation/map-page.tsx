"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import { useApiClient, getCurrentUser, type AuthUser } from "@/lib/auth-api";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { tutorsNearYou } from "@/features/marketplace/data/tutors";

export default function MapPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const searchParams = useSearchParams();
  const view = searchParams.get("view");
  const showTutors = view === "tutors";
  
  const { fetchApi } = useApiClient();
  const { signOut } = useClerk();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationSet, setLocationSet] = useState(false);

  useEffect(() => {
    getCurrentUser(fetchApi)
      .then(setUser)
      .catch(console.error);
  }, [fetchApi]);

  // Get user location
  useEffect(() => {
    if (showTutors && navigator.geolocation && !locationSet) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setLocationSet(true);
        },
        () => {
          // Default to Nairobi, Kenya if geolocation fails
          setUserLocation({ lat: -1.2921, lng: 36.8219 });
          setLocationSet(true);
        }
      );
    } else if (!showTutors && !locationSet) {
      // Default to Nairobi, Kenya
      setUserLocation({ lat: -1.2921, lng: 36.8219 });
      setLocationSet(true);
    }
  }, [showTutors, locationSet]);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current || !locationSet) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

    const center = userLocation 
      ? [userLocation.lng, userLocation.lat] 
      : [36.8219, -1.2921];
    const zoom = showTutors ? 13 : 12;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: center as [number, number],
      zoom: zoom,
    });

    map.current.on("load", () => {
      setMapLoaded(true);
      
      // Add user location marker if showing tutors
      if (showTutors && userLocation) {
        new mapboxgl.Marker({ color: "#22c55e" })
          .setLngLat([userLocation.lng, userLocation.lat])
          .setPopup(new mapboxgl.Popup().setHTML("<div class='p-2'><strong>Your Location</strong></div>"))
          .addTo(map.current!);
      }
      
      // Add tutor markers if showing tutors
      if (showTutors && userLocation) {
        tutorsNearYou.forEach((tutor) => {
          // Generate random nearby coordinates for demo
          const lat = userLocation.lat + (Math.random() - 0.5) * 0.1;
          const lng = userLocation.lng + (Math.random() - 0.5) * 0.1;
          
          const el = document.createElement("div");
          el.className = "tutor-marker";
          el.style.width = "32px";
          el.style.height = "32px";
          el.style.borderRadius = "50%";
          el.style.backgroundColor = "#3b82f6";
          el.style.border = "3px solid white";
          el.style.cursor = "pointer";
          
          const marker = new mapboxgl.Marker(el)
            .setLngLat([lng, lat])
            .setPopup(
              new mapboxgl.Popup().setHTML(
                `<div class='p-3'><strong>${tutor.name}</strong><br/>${tutor.location}<br/>${tutor.curricula.join(", ")}</div>`
              )
            )
            .addTo(map.current!);
          
          markersRef.current.push(marker);
        });
      }
    });

    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      map.current?.remove();
      map.current = null;
    };
  }, [showTutors, userLocation, locationSet]);

  const handleSignOut = () => {
    signOut({ redirectUrl: "/auth" });
  };

  return (
    <div className="flex h-screen flex-col bg-background font-sans">
      <Header user={user} onSignOut={handleSignOut} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="border-b border-border bg-background px-6 py-4">
            <div>
              <h1 className="text-2xl font-semibold">Map</h1>
              <p className="text-sm text-muted-foreground">
                {showTutors 
                  ? "Find tutors near your location" 
                  : "Explore homeschooling resources in your area"}
              </p>
            </div>
          </div>
          <div className="relative flex-1">
            <div ref={mapContainer} className="h-full w-full" />
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                <div className="text-center">
                  <div className="mb-2 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                  <p className="text-sm text-muted-foreground">Loading map...</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
