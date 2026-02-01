import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold">Homeschool</div>
          <Link href="/auth">
            <Button variant="ghost">Sign in</Button>
          </Link>
        </nav>
      </header>
      <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-16">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
            Now in early access
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Homeschooling works better together.
          </h1>
        </div>
      </main>
    </div>
  );
}





