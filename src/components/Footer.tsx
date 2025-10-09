import { Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-muted/30 border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Logo and tagline */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple bg-clip-text text-transparent">
                Craftovate
              </span>
            </h3>
            <p className="text-muted-foreground">Craft. Innovate. Elevate.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t">
            <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
              © {new Date().getFullYear()} Craftovate. All rights reserved. 
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Craftovate Team
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
