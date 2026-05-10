import { motion } from 'motion/react';
import { Hourglass, CalendarDays, Users, MessageSquare, PenTool } from 'lucide-react';

const features = [
  {
    title: 'Real Time Analytics',
    description: 'Monitor result performance with real time insights.',
    icon: Hourglass,
    colSpan: 'lg:col-span-2 md:col-span-3 shrink-0',
    image: 'https://framerusercontent.com/images/xJ3fjboUJLVolfGqf752ILN4.png'
  },
  {
    title: 'Content Scheduling',
    description: 'Plan and schedule content across all platforms.',
    icon: CalendarDays,
    colSpan: 'lg:col-span-2 md:col-span-3 shrink-0',
    image: 'https://framerusercontent.com/images/jrY5DWrX2645mgGTeVIjpXjVIU.png'
  },
  {
    title: 'Team Collaboration',
    description: 'Manage and improve campaigns efficiently.',
    icon: Users,
    colSpan: 'lg:col-span-2 md:col-span-6 shrink-0',
    image: 'https://framerusercontent.com/images/A7cCrglKezIsVIm88768rZVcFJo.png'
  },
  {
    title: 'Streamline Comunication',
    description: 'Manage conversations for smooth coordination.',
    icon: MessageSquare,
    colSpan: 'lg:col-span-3 md:col-span-6 shrink-0',
    image: 'https://framerusercontent.com/images/jg8cLHHFSZlOGSdg3rGKij2x6s.png'
  },
  {
    title: 'Customizable Dashboards',
    description: 'Adapt your workspace to highlight critical metrics.',
    icon: PenTool,
    colSpan: 'lg:col-span-3 md:col-span-6 shrink-0',
    image: 'https://framerusercontent.com/images/5r3kUhEMVU4NmtE1VtIsUjTO0.png'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="bg-white border border-gray-200 shadow-sm text-gray-900 rounded-full px-4 py-1.5 text-sm font-bold block w-max mx-auto mb-6">Valuable Features</span>
        <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Customizable Solutions for Every Need</h3>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium">Adapt our platform to suit your unique business needs with flexible, scalable solutions designed to grow with you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">
        {features.map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-[#f6f5f3] rounded-[2.5rem] pt-10 px-8 flex flex-col overflow-hidden relative shadow-sm border border-black/5 hover:shadow-md transition-all duration-300 group min-h-[380px] lg:min-h-[420px] ${feature.colSpan}`}
          >
            <div className="flex justify-between items-start mb-8 relative z-10 gap-4">
              <div className="max-w-[260px]">
                <h3 className="text-[1.6rem] leading-tight font-bold font-display text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-lg font-medium leading-relaxed">{feature.description}</p>
              </div>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 ring-4 ring-white/50">
                <feature.icon size={22} className="text-primary" strokeWidth={2.5} />
              </div>
            </div>
            
            <div className="relative flex-grow flex items-end justify-center transform origin-bottom mt-auto">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full max-w-[90%] md:max-w-full h-auto object-contain object-bottom group-hover:-translate-y-2 transition-transform duration-500 will-change-transform" 
                />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
