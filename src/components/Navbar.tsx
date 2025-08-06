// components/Navbar.tsx
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const makeCall = () => {
    window.location.href = "tel:+254707808565";
  };

  const sections = ["hero", "about", "courses", "gallery", "testimonials", "contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-950 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Title */}
          <div className="flex-shrink-0">
            <div className="flex flex-col">
              <h1 className="font-black italic tracking-wide text-gray-900 dark:text-white relative">
                <span
                  className="relative inline-block text-red-600 font-black italic text-3xl"
                  style={{
                    fontFamily: '"Comic Sans MS", "Chalkboard SE", "Bradley Hand", cursive, fantasy',
                    textShadow: '3px 3px 0px #1e40af, 6px 6px 8px rgba(0,0,0,0.4)',
                    WebkitTextStroke: '1px #dc2626',
                    filter: 'drop-shadow(2px 2px 0px #1e40af)',
                    transform: 'rotate(-2deg)',
                    letterSpacing: '0.1em'
                  }}
                >
                  Raha<span className="text-xl -ml-1">😊</span>
                </span>
                {" "}
                <span 
                  className="text-sm text-gray-800 dark:text-gray-200 font-bold italic tracking-wide"
                  style={{
                    fontFamily: '"Comic Sans MS", "Chalkboard SE", "Bradley Hand", cursive, fantasy',
                    transform: 'rotate(1deg)',
                    letterSpacing: '0.09em'
                  }}
                >
                  DRIVING<sup className="text-xs font-normal text-gray-600 ml-1">786</sup> SCHOOL
                </span>
              </h1>
              <span 
                className="text-xs text-muted-foreground mt-1 italic font-mono tracking-wider"
                style={{
                  fontFamily: '"Comic Sans MS", "Chalkboard SE", "Bradley Hand", cursive, fantasy',
                  transform: 'rotate(-1deg)'
                }}
              >
                Road to Success
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-muted-foreground hover:text-primary transition-colors text-base font-medium font-sans"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Call Now (Desktop) */}
          <div className="hidden md:block">
            <Button variant="outline" size="sm" onClick={makeCall}>
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
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
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-950 border-t dark:border-gray-800">
            {sections.map((section) => (
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