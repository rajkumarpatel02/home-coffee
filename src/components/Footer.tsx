
import { NavLink } from 'react-router-dom';
import { Coffee, Mail, MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-espresso text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6" />
              <span className="font-serif text-xl font-medium">Brew Haven</span>
            </div>
            <p className="text-coffee-light/90 mb-6">
              Crafting exceptional coffee experiences since 2015. Every cup tells a story.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-coffee-light/70 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-coffee-light/70 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-coffee-light/70 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-coffee-light/80 hover:text-white transition-colors duration-200">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className="text-coffee-light/80 hover:text-white transition-colors duration-200">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-coffee-light/80 hover:text-white transition-colors duration-200">
                  Our Story
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-coffee-light/80 hover:text-white transition-colors duration-200">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-coffee-medium mt-0.5" />
                <span className="text-coffee-light/80">123 Coffee Street, Brew City, BC 10101</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-coffee-medium" />
                <span className="text-coffee-light/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-coffee-medium" />
                <span className="text-coffee-light/80">hello@brewhaven.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-lg font-medium mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-coffee-medium mt-0.5" />
                <div>
                  <p className="text-coffee-light/80">Monday - Friday</p>
                  <p className="text-coffee-light/90 font-medium">7:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-coffee-medium mt-0.5" />
                <div>
                  <p className="text-coffee-light/80">Saturday - Sunday</p>
                  <p className="text-coffee-light/90 font-medium">8:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-dark/30 mt-12 pt-6 text-center text-coffee-light/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Brew Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
