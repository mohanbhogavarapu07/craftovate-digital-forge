import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "@/assets/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    // Only add scroll listener on home page
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

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
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-8rem)] max-w-3xl mx-auto ${
      isHomePage 
        ? (isScrolled 
            ? 'bg-white/10 backdrop-blur-lg border-2 border-white/20 shadow-lg rounded-2xl' 
            : 'bg-white/10 backdrop-blur-lg border-2 border-white/20 shadow-lg rounded-2xl')
        : 'bg-white/10 backdrop-blur-lg border-2 border-white/20 shadow-lg rounded-2xl'
    }`}>
      <div className="px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 relative">
          {/* Logo - Left side with handcrafted styling */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={logoImage} 
                alt="Craftovate Logo" 
                className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-xl font-bold font-sans">
              <span className="text-gray-800">Craft</span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">ovate</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered with handcrafted styling */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 font-sans relative group ${
                  isActive(link.href)
                    ? "bg-blue-100 text-blue-800 border-2 border-blue-300"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button with handcrafted styling */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 border-2 font-sans text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-gray-300 hover:border-blue-300`}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation with handcrafted styling */}
        {isOpen && (
          <div className="lg:hidden py-6 animate-fade-in-up">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 font-sans relative group ${
                    isActive(link.href)
                      ? "bg-blue-100 text-blue-800 border-2 border-blue-300"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200"
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
