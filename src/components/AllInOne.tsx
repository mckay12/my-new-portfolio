import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Building2, ShoppingBag, GraduationCap, Wallet, Play } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  { id: 'agencies', label: 'Agencies', icon: Briefcase },
  { id: 'real-estate', label: 'Real Estate', icon: Building2 },
  { id: 'e-commerce', label: 'E-Commerce', icon: ShoppingBag },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'finance', label: 'Finance', icon: Wallet },
];

export default function AllInOne() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-24 px-6 md:px-12 bg-white flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <span className="bg-white border border-gray-200 text-gray-900 rounded-full px-5 py-2 text-sm font-medium block w-max mx-auto mb-6 shadow-sm">
          All in One Solution
        </span>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
          Optimized to Serve Every Use Case Across Industries
        </h3>
        <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-2xl mx-auto mb-16">
          Our platform adapts to various use cases and industries.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 mb-12 border-b border-gray-100 overflow-x-auto w-full hide-scrollbar pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-3 pb-4 relative transition-colors px-2 ${
                activeTab === tab.id ? 'text-gray-900 font-bold' : 'text-gray-500 font-medium hover:text-gray-700'
              }`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm border ${
                activeTab === tab.id ? 'bg-white ring-4 ring-primary/5 border-gray-100' : 'bg-gray-50 border-transparent'
              }`}>
                <tab.icon size={22} className={activeTab === tab.id ? 'text-primary' : 'text-gray-400'} strokeWidth={2.5} />
              </div>
              <span className="text-[15px]">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabBottom"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Video / Image Container */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-5xl aspect-video md:aspect-[21/9] bg-gray-100 rounded-[2.5rem] relative overflow-hidden group cursor-pointer border border-gray-200 shadow-sm"
        >
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000" 
            alt="Colleagues laughing" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] group-hover:scale-110 transition-transform duration-300">
            <Play className="text-primary fill-primary ml-1" size={32} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
