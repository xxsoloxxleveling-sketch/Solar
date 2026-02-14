import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Award, CheckCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sun className="h-8 w-8 text-secondary" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none">ARYIAN'S</span>
                <span className="font-body text-xs tracking-[0.2em] text-gray-400">ENERGY SOLUTION</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering the core of clean energy. We manufacture high-performance solar solutions for a sustainable industrial future.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-secondary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Flexible Products Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-secondary">Products</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/products/panels" className="hover:text-white transition-colors">Photovoltaic Modules</Link></li>
              <li><Link to="/products/inverters" className="hover:text-white transition-colors">Intelligent Inverters</Link></li>
              <li><Link to="/products/batteries" className="hover:text-white transition-colors">ESS Battery Storage</Link></li>
              <li><Link to="/manufacturing" className="hover:text-white transition-colors">Manufacturing Process</Link></li>
              <li><Link to="/rnd" className="hover:text-white transition-colors">R&D Innovation</Link></li>
            </ul>
          </div>

          {/* Company & Certs */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-secondary">Company</h3>
            <ul className="space-y-4 text-sm text-gray-300 mb-8">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/quality" className="hover:text-white transition-colors">Quality Assurance</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Global Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
            </ul>

            {/* Certifications - Mini Section */}
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Certifications</h4>
              <div className="flex gap-3">
                <div className="bg-gray-800 p-1.5 rounded text-xs font-bold text-gray-300 border border-gray-700">ISO 9001</div>
                <div className="bg-gray-800 p-1.5 rounded text-xs font-bold text-gray-300 border border-gray-700">IEC 61215</div>
                <div className="bg-gray-800 p-1.5 rounded text-xs font-bold text-gray-300 border border-gray-700">CE</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-secondary">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>123 Solar Valley Blvd,<br />Tech District, CA 94000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:sales@aryiansenergy.com" className="hover:text-white transition-colors">sales@aryiansenergy.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Aryian's Energy Solution. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;