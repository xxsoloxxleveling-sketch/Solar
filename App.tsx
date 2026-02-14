import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import SolarPanels from './pages/SolarPanels';
import Inverters from './pages/Inverters';
import Batteries from './pages/Batteries';
import Manufacturing from './pages/Manufacturing';
import Innovation from './pages/Innovation';
import Quality from './pages/Quality';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => new URL(window.location.href), [window.location.href]);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-body text-text bg-background">
        <Navbar />
        <main className="flex-grow pt-[88px] xl:pt-[72px]"> {/* Add padding for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/panels" element={<SolarPanels />} />
            <Route path="/products/inverters" element={<Inverters />} />
            <Route path="/products/batteries" element={<Batteries />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/rnd" element={<Innovation />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/global" element={<Quality />} /> {/* Reusing Quality for simplicity as per plan */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resources" element={<Home />} /> {/* Redirect to home for now or placeholder */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;