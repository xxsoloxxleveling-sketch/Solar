import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy Loaded Pages
const Home = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const Residential = React.lazy(() => import('./pages/Residential'));
const Commercial = React.lazy(() => import('./pages/Commercial'));
const Industrial = React.lazy(() => import('./pages/Industrial'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'));
const Investment = React.lazy(() => import('./pages/Investment'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-midnight text-white selection:bg-gold selection:text-midnight scroll-smooth">
      <ScrollToTop />

      {/* Signature Scroll Line */}
      <div className="fixed left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/20 to-transparent -translate-x-1/2 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent animate-scroll-line"></div>
      </div>

      <Navbar />

      <main className="relative z-10 flex-grow">
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/residential" element={<Residential />} />
                <Route path="/commercial" element={<Commercial />} />
                <Route path="/industrial" element={<Industrial />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/investment" element={<Investment />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;