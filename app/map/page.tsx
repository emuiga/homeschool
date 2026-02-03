import { Suspense } from "react";
import MapPage from "@/features/map/presentation/map-page";

export default function MapRoute() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-2 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
          <p className="text-sm text-muted-foreground">Loading map...</p>
        </div>
      </div>
    }>
      <MapPage />
    </Suspense>
  );
}





