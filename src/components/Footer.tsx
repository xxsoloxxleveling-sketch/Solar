import React, { useEffect, useState } from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const [stats, setStats] = useState({ mw: 1240, trees: 85000 });

  useEffect(() => {
    // Simulate live ticker
    const interval = setInterval(() => {
      setStats(prev => ({
        mw: prev.mw + (Math.random() > 0.5 ? 0.01 : 0),
        trees: prev.trees + (Math.random() > 0.7 ? 1 : 0)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="font-display font-bold text-3xl tracking-widest text-white mb-6 block">
              ARYIAN'S Energy Solution
            </span>
            <p className="text-gray-500 font-sans max-w-sm mb-8">
              Architecting the future of energy for the world's most visionary homes and businesses.
            </p>
            <div className="flex gap-6">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-gold transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-500 font-sans text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Residential</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Commercial</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Industrial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-lg mb-6">Client</h4>
            <ul className="space-y-4 text-gray-500 font-sans text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Client Portal</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Live Ticker */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-12">
            <div className="text-center md:text-left">
              <div className="text-gold font-mono text-xl">{stats.mw.toFixed(2)} MW</div>
              <div className="text-xs text-gray-600 uppercase tracking-widest">Total Generated</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-cyan font-mono text-xl">{Math.floor(stats.trees).toLocaleString()}</div>
              <div className="text-xs text-gray-600 uppercase tracking-widest">Trees Saved</div>
            </div>
          </div>

          <div className="text-gray-600 text-xs font-sans">
            © 2024 ARYIAN'S Energy Solution. All rights reserved. Privacy Policy.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;