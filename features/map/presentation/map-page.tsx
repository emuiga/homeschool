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
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);
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

  // Check WebGL/Mapbox GL support on mount
  useEffect(() => {
    if (typeof window === 'undefined') {
      setWebGLSupported(false);
      return;
    }
    
    // Use Mapbox GL's built-in support check
    const isSupported = mapboxgl.supported({
      failIfMajorPerformanceCaveat: false,
    });
    setWebGLSupported(isSupported);
  }, []);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current || !locationSet || webGLSupported !== true) return;

    const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    
    if (!accessToken) {
      console.error("Mapbox access token is missing. Please set NEXT_PUBLIC_MAPBOX_TOKEN in your .env.local file");
      return;
    }

    mapboxgl.accessToken = accessToken;

    // Ensure container has dimensions
    if (!mapContainer.current.offsetWidth || !mapContainer.current.offsetHeight) {
      // Wait for next frame to ensure container is rendered
      requestAnimationFrame(() => {
        if (!mapContainer.current || map.current) return;
        initializeMap();
      });
      return;
    }

    initializeMap();

    function initializeMap() {
      if (!mapContainer.current || map.current) return;

      const center = userLocation 
        ? [userLocation.lng, userLocation.lat] 
        : [36.8219, -1.2921];
      const zoom = showTutors ? 13 : 12;

      try {
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v12",
          center: center as [number, number],
          zoom: zoom,
          antialias: true,
          // Add failIfMajorPerformanceCaveat to provide better error messages
          failIfMajorPerformanceCaveat: false,
        });
      } catch (error) {
        console.error("Failed to initialize Mapbox map:", error);
        setMapLoaded(false);
        return;
      }

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

      map.current.on("error", (e) => {
        console.error("Mapbox error:", e);
        setMapLoaded(false);
      });
    }

    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [showTutors, userLocation, locationSet, webGLSupported]);

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
          <div className="relative flex-1 min-h-0">
            <div ref={mapContainer} className="h-full w-full" />
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
                <div className="text-center">
                  {webGLSupported === false ? (
                    <>
                      <p className="text-sm text-destructive font-semibold mb-2">
                        WebGL is not supported
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Your browser does not support WebGL, which is required to display the map.
                        Please try using a different browser or enable WebGL in your browser settings.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="mb-2 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                      <p className="text-sm text-muted-foreground">Loading map...</p>
                      {!process.env.NEXT_PUBLIC_MAPBOX_TOKEN && (
                        <p className="text-xs text-destructive mt-2">
                          Mapbox token missing. Please set NEXT_PUBLIC_MAPBOX_TOKEN
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
