import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  icon?: boolean;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon = false,
  className = '',
  to,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider";

  const variants = {
    primary: "bg-primary text-white hover:bg-blue-900 focus:ring-primary shadow-lg hover:shadow-xl",
    secondary: "bg-secondary text-white hover:bg-yellow-600 focus:ring-secondary",
    outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent",
    text: "text-primary hover:text-blue-800 underline-offset-4 hover:underline p-0 bg-transparent",
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
};

// Section Component
interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
  background?: 'white' | 'grey' | 'dark';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white'
}) => {
  const bgColors = {
    white: 'bg-background',
    grey: 'bg-section',
    dark: 'bg-gray-900 text-white',
  };

  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-8 lg:px-16 ${bgColors[background]} ${className}`}>
      <div className="max-w-7xl mx-auto h-full">
        {children}
      </div>
    </section>
  );
};

// Animated Counter
export const Counter: React.FC<{ end: number; suffix?: string; duration?: number; label: string }> = ({
  end,
  suffix = '',
  duration = 2000,
  label
}) => {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={countRef} className="text-center group p-6 border border-gray-200 hover:border-secondary transition-colors duration-300 bg-white">
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted font-medium uppercase tracking-widest">{label}</div>
    </div>
  );
};

// Card Component
export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-2 border-transparent hover:border-secondary ${className}`}>
    {children}
  </div>
);

// Page Header
export const PageHeader: React.FC<{ title: string; subtitle?: string; image?: string }> = ({ title, subtitle, image }) => (
  <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src={image || "https://picsum.photos/1920/600?grayscale"}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
    </div>
    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 animate-slide-up">{title}</h1>
      {subtitle && <p className="text-lg md:text-xl font-light text-gray-200 animate-fade-in delay-100">{subtitle}</p>}
    </div>
  </div>
);

// Tabs Component
interface TabsProps {
  tabs: { id: string; label: string; content: React.ReactNode }[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200 overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 px-6 text-sm font-medium uppercase tracking-wider whitespace-nowrap transition-colors duration-300 relative ${activeTab === tab.id ? 'text-primary' : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabBadge"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                initial={false}
              />
            )}
          </button>
        ))}
      </div>
      <div className="py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {tabs.find((t) => t.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Accordion Component
interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = React.useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="border border-gray-200 rounded-sm bg-white overflow-hidden">
          <button
            onClick={() => toggle(item.id)}
            className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
          >
            <span className="font-bold text-gray-900">{item.title}</span>
            <motion.span
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.span>
          </button>
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};