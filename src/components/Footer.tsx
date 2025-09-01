import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/quality", label: "Quality Standards" },
    { path: "/clients", label: "Clients" },
    { path: "/contact", label: "Contact Us" },
  ];

  const products = [
    "LDPE Polythene Bags",
    "Antistatic Polythene Bags",
    "Rolls", 
    "Polythene Sheets",
    "VCI Polythene Bags",
    "Self Seal Covers",
    "Custom Packaging Solutions",
    "Printed Polythene Bags",
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/dcbb5089-214d-45c3-99e3-168735804483.png" 
                alt="Srinivasa Polypack Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-foreground">Srinivasa Polypack</h3>
                <p className="text-sm text-muted-foreground">Quality LDPE Solutions</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Leading manufacturer and supplier of high-quality LDPE polythene bags for pharmaceutical 
              and industrial applications. Committed to excellence and customer satisfaction.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Adj to shed no.:13/A/5, Phase IV, IDA Jeedimetla, Hyderabad - 55</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9866106621</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>srinivasapolypack@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon - Sat: 9:30 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:srinivasapolypack@yahoo.com?subject=Inquiry from Website"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  title="Click to open email client or copy: srinivasapolypack@yahoo.com"
                >
                  Email Us (srinivasapolypack@yahoo.com)
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-muted-foreground text-sm">{product}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h5 className="font-medium text-foreground mb-2">Certifications</h5>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">ISO 9001:2015</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">ZED Certified</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">MSME</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Srinivasa Polypack. All rights reserved. | 
            Designed for excellence in LDPE manufacturing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;