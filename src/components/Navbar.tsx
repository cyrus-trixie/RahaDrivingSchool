// components/Navbar.tsx
import { useState } from "react";
import { Menu, X, Phone, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const makeCall = () => {
    window.location.href = 'tel:+254707808565';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-950 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Title with Polished Font */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white p-2 rounded-full">
                <Car className="w-5 h-5" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Raha <span className="text-primary font-extrabold">Driving School</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["hero", "about", "courses", "gallery", "testimonials", "contact"].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Call Now (Desktop) */}
          <div className="hidden md:block">
            <Button variant="outline" size="sm" onClick={makeCall}>
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground dark:text-gray-400 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-950 border-t dark:border-gray-800">
            {["hero", "about", "courses", "gallery", "testimonials", "contact"].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-3 py-2 text-muted-foreground dark:text-gray-400 hover:text-primary"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <div className="px-3 py-2">
              <Button variant="outline" size="sm" className="w-full" onClick={makeCall}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;