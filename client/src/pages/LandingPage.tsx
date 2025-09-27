import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import ThemeToggle from "@/components/ThemeToggle";
import { useLocation } from "wouter";

export default function LandingPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<"login" | "register">("login");
  const [, setLocation] = useLocation();

  const handleLoginClick = () => {
    setAuthModalTab("login");
    setIsAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthModalTab("register");
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (user: any) => {
    console.log('Auth successful:', user); // todo: remove mock functionality
    // Redirect to dashboard after successful auth
    setLocation("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation with Theme Toggle */}
      <div className="relative">
        <Navigation 
          onLoginClick={handleLoginClick}
          onRegisterClick={handleRegisterClick}
        />
        <div className="absolute top-4 right-20 z-50">
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <main>
        <HeroSection />
        
        <div id="features">
          <FeaturesSection />
        </div>
        
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        
        <div id="testimonials">
          <TestimonialsSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab={authModalTab}
        onLoginSuccess={handleAuthSuccess}
        onRegisterSuccess={handleAuthSuccess}
      />
    </div>
  );
}