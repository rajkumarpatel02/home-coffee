
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 font-serif text-coffee-dark">
          <Coffee className="h-6 w-6" />
          <span className="text-xl font-medium">Brew Haven</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/menu" 
            className={({isActive}) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Menu
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </NavLink>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-medium"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-coffee-dark" />
          ) : (
            <Menu className="h-6 w-6 text-coffee-dark" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '61px' }}
      >
        <nav className="flex flex-col py-6 px-4 space-y-4">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `block px-4 py-2 text-lg ${isActive ? 'text-coffee-dark font-medium' : 'text-coffee-medium'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/menu" 
            className={({isActive}) => 
              `block px-4 py-2 text-lg ${isActive ? 'text-coffee-dark font-medium' : 'text-coffee-medium'}`
            }
          >
            Menu
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `block px-4 py-2 text-lg ${isActive ? 'text-coffee-dark font-medium' : 'text-coffee-medium'}`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `block px-4 py-2 text-lg ${isActive ? 'text-coffee-dark font-medium' : 'text-coffee-medium'}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
