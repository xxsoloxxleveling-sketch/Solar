import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Residential', path: '/residential' },
    { name: 'Commercial', path: '/commercial' },
    { name: 'Industrial', path: '/industrial' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${isScrolled || location.pathname !== '/'
        ? 'bg-midnight border-b border-gold'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Sun className="w-8 h-8 text-gold group-hover:text-white transition-colors duration-500" />
            <div className="absolute inset-0 blur-md bg-gold/20 rounded-full group-hover:bg-gold/40 transition-colors duration-500"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl tracking-[0.2em] text-white">
              ARYIAN'S
            </span>
            <span className="text-[0.5rem] font-sans tracking-[0.3em] text-gold uppercase text-center -mt-1">
              Energy Solution
            </span>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 relative
                after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300
                ${isActive ? 'text-white after:w-full' : 'text-gray-400 hover:text-gold after:w-0 hover:after:w-full'}
              `}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/investment"
            className={({ isActive }) => `
              px-6 py-2 border border-gold font-sans text-xs tracking-widest transition-all duration-300 uppercase
              ${isActive ? 'bg-gold text-midnight' : 'text-gold hover:bg-gold hover:text-midnight'}
            `}
          >
            Calculate ROI
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-midnight/95 backdrop-blur-xl border-b border-gold/20 h-screen">
          <div className="flex flex-col items-center py-12 gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `
                  text-xl font-display tracking-widest transition-colors
                  ${isActive ? 'text-gold' : 'text-white hover:text-gold'}
                `}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/investment"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 bg-gold text-midnight font-bold tracking-widest hover:bg-white transition-colors"
            >
              ROI CALCULATOR
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;