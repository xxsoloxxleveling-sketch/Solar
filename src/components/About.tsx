import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="relative py-24 bg-midnight border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Sticky Left Content */}
        <div className="lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-cyan font-sans tracking-widest text-sm uppercase mb-4">Our Vision</h4>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-8 leading-tight">
              Redefining Energy <br /> for the <span className="text-gold">Modern Era</span>
            </h2>
            <p className="text-gray-400 font-sans leading-relaxed mb-6 text-lg">
              At ARYIAN, we believe energy independence is the ultimate luxury. We combine architectural aesthetics with cutting-edge solar technology to create systems that are as beautiful as they are powerful.
            </p>
            <p className="text-gray-400 font-sans leading-relaxed mb-8 text-lg">
              Our mission is to accelerate the world's transition to sustainable energy without compromising on design or performance.
            </p>

            <ul className="space-y-4">
              {['Transparency in Pricing', 'Innovation in Design', 'Reliability in Service'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white font-sans">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Scrollable Imagery */}
        <div className="space-y-12">
          {[
            {
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
              title: "The Team",
              desc: "Engineers, Architects, and Visionaries working in unison."
            },
            {
              img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
              title: "The Technology",
              desc: "Tier-1 panels and smart batteries from the world's top manufacturers."
            },
            {
              img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop",
              title: "The Promise",
              desc: "A seamless journey from consultation to activation."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden border border-white/5 rounded-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-midnight/90 to-transparent">
                <h3 className="font-display text-2xl text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 font-sans text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;