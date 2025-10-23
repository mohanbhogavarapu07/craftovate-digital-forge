import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "@/assets/Logo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    // Add scroll listener on all pages
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  const isHomePage = location.pathname === '/';
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-12 relative">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Craftovate Digital Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation - Dynamic styling based on scroll */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 relative group ${
                  isActive(link.href)
                    ? isScrolled 
                      ? "text-gray-900 font-semibold"
                      : "text-gray-900 font-semibold"
                    : isScrolled
                      ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:rounded-xl"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:rounded-xl"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive(link.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button with dynamic styling */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl transition-all duration-300 text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-300 hover:border-gray-400"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation with dynamic styling */}
        {isOpen && (
          <div className="lg:hidden pt-4 animate-fade-in-up">
            <div className="flex flex-col space-y-2 items-end">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 relative group ${
                    isActive(link.href)
                      ? "text-gray-900 bg-gray-100 rounded-xl font-semibold"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:rounded-xl"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
