"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { OnboardingStep, UserRole, OnboardingFormData } from "../domain/types";
import { welcomeSlides } from "../data/welcome-slides";
import { saveOnboardingData } from "../repo/onboarding-repo";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<OnboardingStep>("welcome");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState<OnboardingFormData>({
    name: "",
    username: "",
  });

  const handleSkipWelcome = () => {
    setStep("profile");
  };

  const handleNextSlide = () => {
    if (currentSlide < welcomeSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setStep("profile");
    }
  };

  const handleProfileNext = () => {
    setStep("role");
  };

  const handleRoleSelect = async (role: UserRole) => {
    const finalData: OnboardingFormData = {
      ...formData,
      role,
    };
    await saveOnboardingData(finalData);
    setStep("success");
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  if (step === "welcome") {
    return (
      <div className="min-h-screen bg-background font-sans">
        <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-12">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <div className="mb-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {currentSlide + 1} of {welcomeSlides.length}
                  </span>
                  <div className="flex gap-1">
                    {welcomeSlides.map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-8 rounded-full ${
                          i === currentSlide ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <CardTitle className="text-3xl">
                {welcomeSlides[currentSlide].title}
              </CardTitle>
              <CardDescription className="text-base">
                {welcomeSlides[currentSlide].description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between pt-4">
                <Button variant="ghost" onClick={handleSkipWelcome}>
                  Skip
                </Button>
                <Button onClick={handleNextSlide}>
                  {currentSlide < welcomeSlides.length - 1 ? "Next" : "Continue"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (step === "profile") {
    return (
      <div className="min-h-screen bg-background font-sans">
        <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-12">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-3xl">Let's set up your profile</CardTitle>
              <CardDescription>
                Personalize your experience and make it yours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Username
                  </label>
                  <Input
                    placeholder="Choose a username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    This can be updated from your profile later
                  </p>
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button onClick={handleProfileNext}>Continue</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (step === "role") {
    return (
      <div className="min-h-screen bg-background font-sans">
        <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-12">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-3xl">What brings you here?</CardTitle>
              <CardDescription>
                This helps us personalize your experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Button
                  type="button"
                  variant="outline"
                  className="h-32 flex-col gap-3"
                  onClick={() => handleRoleSelect("parent")}
                >
                  <span className="text-4xl">👩‍💻</span>
                  <span className="text-lg font-semibold">Parent</span>
                  <span className="text-sm text-muted-foreground">
                    I'm homeschooling my children
                  </span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-32 flex-col gap-3"
                  onClick={() => handleRoleSelect("tutor")}
                >
                  <span className="text-4xl">🧠</span>
                  <span className="text-lg font-semibold">Tutor</span>
                  <span className="text-sm text-muted-foreground">
                    I'm a tutor or educator
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="min-h-screen bg-background font-sans">
        <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-12">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-center text-3xl">
                You're all set 🎉
              </CardTitle>
              <CardDescription className="text-center">
                Redirecting to your dashboard...
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  return null;
}
