import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { TopBar } from './components/layout/TopBar';
import { Header } from './components/layout/Header';
import { MobileMenu } from './components/layout/MobileMenu';
import { HeroSection } from './components/hero/HeroSection';
import { BrandGrid } from './components/brands/BrandGrid';
import { RepairTracker } from './components/tracker/RepairTracker';
import { ServicesSection } from './components/services/ServicesSection';
import { BookingForm } from './components/booking/BookingForm';
import { SocialSection } from './components/social/SocialSection';
import { ContactLocation } from './components/contact/ContactLocation';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/ui/Toast';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-darker)] text-[var(--text-main)] font-body selection:bg-amber-500 selection:text-slate-950">
      {/* Top Utility Bar */}
      <TopBar />

      {/* Main Header */}
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <BrandGrid />
        <RepairTracker onToast={addToast} />
        <ServicesSection />
        <BookingForm onToast={addToast} />
        <SocialSection />
        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} />
    </div>
  );
}

export default App;
