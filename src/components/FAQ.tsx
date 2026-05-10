import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { q: 'How can Active benefit my business?', a: 'It can boost efficiency, improve customer service, organize data better, and increase sales by offering insights into customer behavior and preferences.' },
  { q: 'What kind of customer support do you provide?', a: 'We provide 24/7 priority support via email, chat, and phone depending on your plan. Our experts are always available to help.' },
  { q: 'Can I change or cancel my subscription?', a: 'Yes, you can upgrade, downgrade, or cancel your subscription at any time from your account settings with no hidden fees.' },
  { q: 'Can I try Active before making a purchase?', a: 'Yes, we offer a free 14-day trial with full access to all features so you can test it thoroughly before committing.' }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#fafaf7] flex flex-col items-center">
      <div className="text-center mb-12 w-full">
        <span className="bg-white border border-gray-200 text-gray-900 rounded-full px-4 py-1.5 text-sm font-bold block w-max mx-auto mb-6 shadow-sm">Common Question</span>
        <h3 className="text-3xl md:text-4xl font-display font-bold">Frequently Asked Questions</h3>
      </div>

      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`border ${openIndex === i ? 'border-primary/20 bg-white ring-1 ring-primary/10 shadow-sm' : 'border-gray-200 bg-white shadow-sm'} rounded-2xl overflow-hidden transition-all`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left px-8 py-6 font-bold font-display text-lg md:text-xl flex items-center justify-between hover:bg-gray-50/50 transition-colors"
            >
              <span className={openIndex === i ? 'text-gray-900' : 'text-gray-700'}>{faq.q}</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                <ChevronDown 
                  className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                  size={18}
                />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-8 pb-6 text-gray-500 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
