import { motion } from 'motion/react';
import { Crown, BarChart2, Wand2, Zap, Users, ShieldCheck } from 'lucide-react';

const benefitsList = [
  { title: 'Expert Team', desc: 'An expert team ready to tackle your challenges with innovative solutions and proven strategies.', icon: Crown },
  { title: 'Fast and Scalable', desc: 'Scale your business effortlessly with our SaaS, designed to grow alongside your evolving needs.', icon: BarChart2 },
  { title: 'Customizable for You', desc: 'Customize the platform to perfectly align with your business\'s unique requirements and goals.', icon: Wand2 },
  { title: 'Maximum Efficiency', desc: 'Maximize efficiency with integrated solutions that eliminate bottlenecks, saving time and costs.', icon: Zap },
  { title: 'User Friendly', desc: 'A simple and accessible interface for users of all skill levels, making it easy to find what you need.', icon: Users },
  { title: 'Security You Can Trust', desc: 'Protect sensitive data with industry leading security to prevent unauthorized breaches.', icon: ShieldCheck }
];

const tags = [
  'Robust Security',
  'Customizable',
  'Accessibility',
  'Automated Efficiency',
  'Centralized Data'
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-32 bg-white px-6 md:px-12 relative overflow-hidden rounded-t-[3rem] border-t border-gray-100 gap-16 md:gap-24 flex">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative w-full">
        {/* Left Column */}
        <div className="lg:w-5/12 shrink-0">
          <div className="sticky top-32">
            <span className="border border-gray-100 bg-white rounded-full px-5 py-1.5 text-sm font-medium text-gray-600 shadow-[0_2px_8px_rgba(0,0,0,0.04)] block w-max mb-8">
              Benefits
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-black mb-6 text-gray-900 tracking-tight leading-[1.1]">
              Unlock a New Era of Operational Excellence and Innovation
            </h3>
            <p className="text-gray-500 font-medium text-lg leading-relaxed mb-10 max-w-sm">
              Unlock operational excellence and innovation with our advanced tools and streamlined processes.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span key={tag} className="bg-[#f6f5f3] text-gray-700 px-5 py-2.5 text-[15px] font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-7/12 relative">
          {/* Continuous vertical line with fading ends */}
          <div className="absolute left-[2px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          
          <div className="flex flex-col gap-14 lg:gap-16">
            {benefitsList.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-10 md:pl-16"
              >
                {/* Glowing orange tick on the left border */}
                <div className="absolute left-[-0.5px] top-3 w-[4.5px] h-[30px] bg-primary rounded-full shadow-[0_0_8px_rgba(254,106,46,0.6)] z-10" />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 flex items-center justify-center shrink-0 border border-gray-50">
                    <benefit.icon className="text-primary w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl md:text-[1.7rem] font-bold font-display text-gray-900 tracking-tight">{benefit.title}</h3>
                </div>
                <p className="text-gray-500 font-medium leading-relaxed text-lg max-w-xl">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
