import React from 'react';
import { Section, Button, Counter } from '../components/UIComponents';
import { ArrowRight, Factory, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-transparent"></div>

        <div className="relative z-20 h-full flex items-center px-6 md:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-8 animate-slide-up">
            <h1 className="text-[38px] md:text-[56px] lg:text-[72px] font-heading font-bold text-white leading-[1.1]">
              Engineering the <span className="text-secondary">Core</span> of <br />Clean Energy.
            </h1>

            {/* Strong Metric */}
            <div className="flex items-center gap-4 border-l-4 border-secondary pl-6">
              <div className="space-y-1">
                <p className="text-white text-lg md:text-xl font-bold tracking-wide">2GW Annual Production Capacity</p>
                <p className="text-gray-400 text-sm md:text-base">Serving 18+ Global Markets</p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
              We manufacture high-efficiency 22.8% photovoltaic modules, intelligent inverters, and advanced battery energy storage systems for utility-scale applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button to="/products" variant="primary" icon className="w-full sm:w-auto text-center justify-center hover:-translate-y-0.5 transition-transform duration-300 shadow-lg shadow-blue-900/20">Explore Products</Button>
              <Button to="/contact" variant="outline" className="w-full sm:w-auto text-center justify-center border-secondary text-secondary hover:bg-secondary hover:text-white hover:-translate-y-0.5 transition-all duration-300">Request Quote</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Signals - New Section */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Trusted by EPC Contractors Across 18 Countries</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos - replacing generic text with visual rhythm cues */}
            <div className="text-2xl font-heading font-bold text-gray-400">SOLAR<span className="text-primary">TECH</span></div>
            <div className="text-2xl font-heading font-bold text-gray-400">ECO<span className="text-green-600">GRID</span></div>
            <div className="text-2xl font-heading font-bold text-gray-400">SUN<span className="text-secondary">POWER</span></div>
            <div className="text-2xl font-heading font-bold text-gray-400">RENEW<span className="text-blue-400">ABLE</span></div>
          </div>
        </div>
      </div>

      {/* Asymmetric Product Overview - Light Grey bg */}
      <Section background="grey">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Engineered for Performance</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Our end-to-end manufacturing process ensures quality control from cell to module, delivering industry-leading efficiency and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[650px]">

          {/* Panels - Large Left */}
          <Link to="/products/panels" className="lg:col-span-7 relative group overflow-hidden bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2916&auto=format&fit=crop"
              alt="Solar Panels"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Photovoltaic Modules</h3>
              <p className="text-gray-300 mb-6 max-w-md text-lg">High-efficiency N-Type TOPCon modules with 22.8% conversion efficiency.</p>
              <span className="text-secondary flex items-center gap-2 font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform">
                View Specifications <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            {/* Inverters - Top Right */}
            <Link to="/products/inverters" className="relative flex-1 group overflow-hidden bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1620288627223-537a242c9116?q=80&w=2609&auto=format&fit=crop" // Abstract industrial tech
                alt="Inverters"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Smart Inverters</h3>
                <p className="text-gray-300 text-sm">Grid-tied and hybrid inverters with intelligent MPPT.</p>
              </div>
            </Link>

            {/* Batteries - Bottom Right */}
            <Link to="/products/batteries" className="relative flex-1 group overflow-hidden bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1611416517780-eff3a13b0359?q=80&w=3149&auto=format&fit=crop" // Tech/server room look for batteries
                alt="Batteries"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Energy Storage</h3>
                <p className="text-gray-300 text-sm">LFP Battery Systems with 6000+ cycle life.</p>
              </div>
            </Link>
          </div>
        </div>
      </Section>

      {/* Manufacturing Preview - White bg */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Manufacturing Scale</h2>
          <p className="text-muted md:text-lg max-w-3xl mx-auto leading-relaxed">
            State-of-the-art automated production lines delivering consistent quality and massive capacity.
            Our 50,000 sqm facility operates 24/7 to meet global energy demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-gray-100 py-12">
          <Counter end={2.5} suffix="GW" label="Annual Capacity" />
          <Counter end={500} suffix="k+" label="Modules / Month" />
          <Counter end={100} suffix="%" label="Automated QC" />
        </div>

        <div className="mt-12 text-center">
          <Button to="/manufacturing" variant="outline" className="border-gray-300 text-primary hover:border-primary">View Manufacturing Process</Button>
        </div>
      </Section>

      {/* Innovation / Why Us - Soft Blue Tint bg */}
      <Section className="bg-blue-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-heading font-bold text-primary">Advanced R&D Facility</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-white p-4 h-fit rounded shadow-sm"><Factory className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Automated Precision</h4>
                  <p className="text-muted leading-relaxed">100% automated soldering and lamination process ensuring zero-defect manufacturing consistency.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-4 h-fit rounded shadow-sm"><ShieldCheck className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Rigorous Testing</h4>
                  <p className="text-muted leading-relaxed">Triple EL testing and AI-driven quality control across 40+ checkpoints locally.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-4 h-fit rounded shadow-sm"><Globe className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Global Certification</h4>
                  <p className="text-muted leading-relaxed">Certified by TUV, UL, CE, and IEC for durability and performance in extreme climates.</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button to="/rnd" variant="text" icon className="text-lg">Explore R&D</Button>
            </div>
          </div>
          <div className="relative h-[600px] bg-gray-200 rounded-sm overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
              alt="Lab Technician"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-white p-8 shadow-2xl max-w-sm hidden lg:block border-t-4 border-secondary">
              <p className="font-heading font-bold text-primary text-5xl mb-2">22.8%</p>
              <p className="text-sm text-muted uppercase tracking-wider font-bold">Max Module Efficiency</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA - Dark bg */}
      <Section background="dark" className="text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Partner with a Global Leader</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          Secure your supply chain with our bankable, high-performance energy solutions.
          Ready for immediate deployment across 18 countries.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button to="/contact" variant="primary" className="px-10 py-4 text-lg hover:-translate-y-1 shadow-lg shadow-blue-900/50">Contact Sales</Button>
          <Button to="/portfolio" variant="outline" className="px-10 py-4 text-lg hover:-translate-y-1">View Case Studies</Button>
        </div>
      </Section>
    </>
  );
};

export default Home;