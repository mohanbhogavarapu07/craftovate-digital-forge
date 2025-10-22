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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHomePage 
        ? (isScrolled 
            ? 'bg-background/95 backdrop-blur-lg border-b shadow-lg' 
            : 'bg-transparent backdrop-blur-none border-transparent')
        : 'bg-background/95 backdrop-blur-lg border-b shadow-lg'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          {/* Logo - Left side */}
          <Link to="/" className="absolute left-0 flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Craftovate Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold">
              <span className={isHomePage ? (isScrolled ? "text-foreground" : "text-white") : "text-foreground"}>Craft</span>
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">ovate</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  isActive(link.href)
                    ? isHomePage 
                      ? (isScrolled 
                          ? "bg-brand-blue/10 text-brand-blue" 
                          : "bg-white/20 text-white")
                      : "bg-brand-blue/10 text-brand-blue"
                    : isHomePage
                      ? (isScrolled
                          ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                          : "text-white/90 hover:text-white hover:bg-white/10")
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden absolute right-0 p-2 rounded-lg transition-smooth ${
              isHomePage 
                ? (isScrolled 
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : "text-white/90 hover:text-white hover:bg-white/10")
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                    isActive(link.href)
                      ? isHomePage 
                        ? (isScrolled 
                            ? "bg-brand-blue/10 text-brand-blue" 
                            : "bg-white/20 text-white")
                        : "bg-brand-blue/10 text-brand-blue"
                      : isHomePage
                        ? (isScrolled
                            ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                            : "text-white/90 hover:text-white hover:bg-white/10")
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
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
