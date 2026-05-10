import { motion } from 'motion/react';
import { Lightbulb, Smartphone } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-24 px-6 md:px-12 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col items-start text-left">
          <span className="bg-white border border-gray-200 text-gray-900 rounded-full px-5 py-2 text-sm font-medium mb-8 shadow-sm">
            Why Choose Us?
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900 tracking-tight leading-[1.15]">
            The Best Fit for Your <br className="hidden lg:block" /> Unique Business Needs
          </h3>
          <p className="text-gray-500 font-medium text-lg leading-relaxed mb-12 max-w-xl">
            We prioritize your success by offering tailored solutions designed to meet your unique needs.
          </p>

          <div className="flex items-center gap-8 md:gap-12">
            <div>
              <h3 className="text-4xl md:text-[2.5rem] font-display font-bold text-gray-900 mb-2">100k+</h3>
              <p className="text-gray-500 font-medium text-lg leading-snug">Positive<br />Reviews</p>
            </div>
            <div className="w-px h-16 bg-gray-200" />
            <div>
              <h3 className="text-4xl md:text-[2.5rem] font-display font-bold text-gray-900 mb-2">78k+</h3>
              <p className="text-gray-500 font-medium text-lg leading-snug">Users<br />Satisfied</p>
            </div>
            <div className="w-px h-16 bg-gray-200 hidden sm:block" />
            <div className="hidden sm:block">
              <h3 className="text-4xl md:text-[2.5rem] font-display font-bold text-gray-900 mb-2">4.9/5</h3>
              <p className="text-gray-500 font-medium text-lg leading-snug">Overall<br />Ratings</p>
            </div>
          </div>
          {/* Mobile only 3rd stat */}
          <div className="mt-8 sm:hidden">
              <h3 className="text-4xl md:text-[2.5rem] font-display font-bold text-gray-900 mb-2">4.9/5</h3>
              <p className="text-gray-500 font-medium text-lg leading-snug">Overall<br />Ratings</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex flex-col gap-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
                <Lightbulb size={20} className="fill-white" />
              </div>
              <h3 className="text-2xl font-bold font-display text-gray-900 tracking-tight">Smart Automation</h3>
            </div>
            <p className="text-gray-500 text-lg font-medium leading-relaxed pl-16">
              Explain how automated workflows improve efficiency in managing leads, supporting customers, and closing sales.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
                <Smartphone size={20} className="fill-white" />
              </div>
              <h3 className="text-2xl font-bold font-display text-gray-900 tracking-tight">Mobile Compatibility</h3>
            </div>
            <p className="text-gray-500 text-lg font-medium leading-relaxed pl-16">
              Emphasize how the mobile experience allows seamless customer relationship management from anywhere.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
