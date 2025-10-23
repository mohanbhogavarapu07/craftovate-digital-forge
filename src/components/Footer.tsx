import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo2.png";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const servicesLinks = [
    { name: "Branding & Identity", href: "/services" },
    { name: "Website Design", href: "/services" },
    { name: "Company Profile", href: "/services" },
    { name: "Digital Strategy", href: "/services" }
  ];

  const resourcesLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "FAQ", href: "/faq" },
    { name: "Pricing", href: "/pricing" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src={logoImage} 
                  alt="Craftovate Logo" 
                  className="h-10 w-10 object-contain"
                />
                <h3 className="text-xl font-bold">
                  <span className="text-white">Craft</span>
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">ovate</span>
                </h3>
              </div>
              <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                Craft. Innovate. Elevate your brand with our creative digital solutions.
              </p>
              <div className="flex space-x-3">
                <a href="https://www.instagram.com/craftovate/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 p-1 rounded-full hover:bg-blue-500/10">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://x.com/Contacttea67111" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 p-1 rounded-full hover:bg-blue-500/10">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/craftovate-in-79a88838a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 p-1 rounded-full hover:bg-blue-500/10">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-3 text-white text-sm">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 block text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold mb-3 text-white text-sm">Services</h4>
              <ul className="space-y-2">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 block text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold mb-3 text-white text-sm">Resources</h4>
              <ul className="space-y-2">
                {resourcesLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 block text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-gray-700 pt-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <div className="p-1.5 rounded-full bg-blue-500/20">
                  <Mail className="w-3 h-3 text-blue-400" />
                </div>
                <span className="text-xs">contactcraftovate@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <div className="p-1.5 rounded-full bg-blue-500/20">
                  <Phone className="w-3 h-3 text-blue-400" />
                </div>
                <span className="text-xs">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <div className="p-1.5 rounded-full bg-blue-500/20">
                  <MapPin className="w-3 h-3 text-blue-400" />
                </div>
                <span className="text-xs">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-gray-700">
            <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap text-xs">
              © {new Date().getFullYear()} Craftovate. All rights reserved. 
              <span className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> by Craftovate Team
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
