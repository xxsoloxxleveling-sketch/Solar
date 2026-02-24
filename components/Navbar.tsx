import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solar Panels', path: '/products/panels' },
    { name: 'Energy Storage', path: '/products/batteries' },
    { name: 'Inverters', path: '/products/inverters' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Virtual Tour', path: '/manufacturing/tour' },
    { name: 'OEM', path: '/manufacturing/oem' },
    { name: 'Quality', path: '/quality' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    // Simple check for now, can be more robust
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
        }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Sun className={`h-8 w-8 text-secondary transition-colors duration-300`} />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none tracking-tight text-primary">ARYIAN'S</span>
              <span className="font-body text-xs tracking-[0.2em] text-muted">ENERGY SOLUTION</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-bold tracking-wide uppercase transition-colors duration-200 nav-link py-2
                  ${isActive(link.path) ? 'text-primary' : 'text-gray-600 hover:text-primary'}
                `}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0'}`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-blue-900 transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              Inquire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col pt-24 px-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`py-4 text-xl font-heading font-bold border-b border-gray-100 flex justify-between items-center ${isActive(link.path) ? 'text-primary' : 'text-gray-800'
                }`}
            >
              {link.name}
              {isActive(link.path) && <span className="h-2 w-2 rounded-full bg-secondary"></span>}
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/contact"
            className="block w-full text-center py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-blue-900 shadow-lg"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;