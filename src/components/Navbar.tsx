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
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-11/12 max-w-4xl ${
      isHomePage 
        ? (isScrolled 
            ? 'bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-2xl' 
            : 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl')
        : 'bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-2xl'
    }`}>
      <div className="px-8 py-3">
        <div className="flex items-center justify-between h-12 w-full gap-12">
          {/* Logo - Left side */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="Craftovate Logo" 
              className="h-8 w-8 object-contain mr-2"
            />
            <span className="text-xl font-bold">
              <span className={isHomePage ? (isScrolled ? "text-gray-900" : "text-white") : "text-gray-900"}>Craft</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-0.5">ovate</span>
            </span>
          </Link>

          {/* Desktop Navigation - Right side */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? isHomePage 
                      ? (isScrolled 
                          ? "bg-blue-500/10 text-blue-600 border border-blue-200/50" 
                          : "bg-white/20 text-white border border-white/30")
                      : "bg-blue-500/10 text-blue-600 border border-blue-200/50"
                    : isHomePage
                      ? (isScrolled
                          ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                          : "text-white/80 hover:text-white hover:bg-white/10")
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-200 ${
              isHomePage 
                ? (isScrolled 
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                    : "text-white/80 hover:text-white hover:bg-white/10")
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
            }`}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? isHomePage 
                        ? (isScrolled 
                            ? "bg-blue-500/10 text-blue-600 border border-blue-200/50" 
                            : "bg-white/20 text-white border border-white/30")
                        : "bg-blue-500/10 text-blue-600 border border-blue-200/50"
                      : isHomePage
                        ? (isScrolled
                            ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                            : "text-white/80 hover:text-white hover:bg-white/10")
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                  }`}
                >
                  {link.name}
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
