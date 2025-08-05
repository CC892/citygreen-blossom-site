import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, Globe, MapPin, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-foreground/10 rounded-xl">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CityGreen</h3>
                <p className="text-sm text-primary-foreground/80">Landscaping Solutions</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              Your trusted landscaping partner in Sri Lanka, providing eco-friendly and 
              professional greenery solutions for commercial and residential spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-primary-foreground/80" />
                <div className="text-sm text-primary-foreground/90">
                  <p>29, G.H.Perera Mawatha</p>
                  <p>Boralesgamuwa, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <a 
                  href="mailto:citygreen.lk@gmail.com" 
                  className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  citygreen.lk@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <div className="text-sm text-primary-foreground/90">
                  <p>(+94) 777 575 521</p>
                  <p>(+94) 773 311 000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-primary-foreground/80" />
                <a 
                  href="https://citygreen.lk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  citygreen.lk
                </a>
              </div>
            </div>
          </div>

          {/* Social & Certification */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <div className="space-y-2 pt-4">
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <h5 className="font-semibold text-sm">GAP Certified</h5>
                <p className="text-xs text-primary-foreground/80 mt-1">
                  Following Good Agricultural Practices for quality and sustainable plant production.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} CityGreen. All rights reserved. | Built with care for nature.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;