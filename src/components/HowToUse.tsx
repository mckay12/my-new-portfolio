import { motion } from 'motion/react';
import { User, FileUp, GitBranch, Star } from 'lucide-react';

const steps = [
  {
    step: 'Step 1',
    title: 'Sign Up',
    desc: 'Register in just a few minutes and kickstart your CRM journey.',
    icon: User
  },
  {
    step: 'Step 2',
    title: 'Upload Data',
    desc: 'Easily upload existing customer data for seamless access.',
    icon: FileUp
  },
  {
    step: 'Step 3',
    title: 'Set Workflow',
    desc: 'Personalize the CRM features to align with your processes.',
    icon: GitBranch
  },
  {
    step: 'Done 🎉',
    title: 'Finish & Go',
    desc: 'Finalize the setup & start managing your customers right away.',
    icon: Star
  }
];

export default function HowToUse() {
  return (
    <section id="how" className="py-24 px-6 md:px-12 bg-white flex flex-col items-center">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="bg-white border border-gray-200 text-gray-900 rounded-full px-5 py-2 text-sm font-medium block w-max mx-auto mb-6 shadow-sm">
          How to Use?
        </span>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 tracking-tight leading-[1.15] mb-6">
          Simple Steps to Get Started
        </h3>
        <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
          Experience CRM at its finest with smooth integration, insightful analytics, and a user experience built for the future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col items-start gap-12 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center w-full">
              <span className="text-gray-400 font-medium">{step.step}</span>
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center ring-4 ring-primary/5">
                <step.icon size={20} className="text-primary fill-primary/20" strokeWidth={2.5} />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
