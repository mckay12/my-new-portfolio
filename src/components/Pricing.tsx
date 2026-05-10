import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Basic Plan',
    for: 'Small businesses',
    price: 19,
    features: ['Contact Management', 'Task and Activity Tracking', 'Automation Workflows', 'Customizable Dashboards', '24/7 Priority Support']
  },
  {
    name: 'Pro Plan',
    for: 'Growing businesses',
    price: 49,
    popular: true,
    features: ['Contact Management', 'Task and Activity Tracking', 'Automation Workflows', 'Customizable Dashboards', '24/7 Priority Support']
  },
  {
    name: 'Enterprise Plan',
    for: 'Large business',
    price: 99,
    features: ['Contact Management', 'Task and Activity Tracking', 'Automation Workflows', 'Customizable Dashboards', '24/7 Priority Support']
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-white rounded-t-[3rem] border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-gray-50 border border-gray-200 text-gray-900 rounded-full px-4 py-1.5 text-sm font-bold block w-max mx-auto mb-6">Our Pricing Plan</span>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Choose the Best Plan for Your Business</h3>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 font-medium">Find the right plan for your needs, with flexible choices and transparent pricing details.</p>
          
          <div className="inline-flex bg-gray-100 p-1.5 rounded-full relative z-10">
            <button 
              onClick={() => setIsYearly(false)} 
              className={`px-8 py-3 rounded-full font-bold transition-all ${!isYearly ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)} 
              className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${isYearly ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Yearly
              <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Save 30%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border ${plan.popular ? 'border-primary ring-1 ring-primary shadow-2xl shadow-primary/10 relative z-10 scale-100 md:scale-105 bg-white' : 'border-gray-200 shadow-sm bg-gray-50/50'} rounded-[2.5rem] p-10 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold font-display mb-1">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-6 font-medium">{plan.for}</p>
              
              <div className="mb-8 flex items-baseline">
                <span className="text-5xl font-black font-display tracking-tight">${isYearly ? Math.floor(plan.price * 0.7) : plan.price}</span>
                <span className="text-gray-500 ml-2 font-medium">/month</span>
              </div>
              
              <a href="#" className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-colors mb-8 ${plan.popular ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/20' : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 shadow-sm'}`}>
                Get Started <ArrowRight size={18} />
              </a>
              
              <div className="border-t border-gray-100 pt-6 mt-auto">
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <div className="w-5 h-5 min-w-[20px] rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
