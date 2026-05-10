import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="cta" className="relative pt-12 md:pt-24 pb-32">
      {/* Split background */}
      <div className="absolute top-1/2 bottom-0 left-0 right-0 bg-[#f6f5f3] border-t border-gray-200/60 z-0" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-10 md:py-16 md:px-20 text-center relative overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
        >
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#fe6a2e]/15 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fe6a2e]/15 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2 z-0" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden md:block absolute top-[15%] right-[15%] w-16 h-16 z-20"
        >
          <img src="https://i.pravatar.cc/100?img=11" className="w-12 h-12 rounded-full border-[3px] border-white shadow-sm object-cover bg-gray-100 absolute top-0 right-0" alt="" />
          <div className="absolute -bottom-1 -left-3 text-primary rotate-[-15deg]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 2l6 18 2.5-7.5L20 10 4 2z" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:block absolute bottom-[25%] left-[20%] w-16 h-16 z-20"
        >
          <img src="https://i.pravatar.cc/100?img=5" className="w-12 h-12 rounded-full border-[3px] border-white shadow-sm object-cover bg-gray-100 absolute bottom-0 left-0" alt="" />
          <div className="absolute -top-4 -right-1 text-gray-900 rotate-[100deg]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 2l6 18 2.5-7.5L20 10 4 2z" />
            </svg>
          </div>
        </motion.div>

        <span className="bg-white border border-gray-100 text-gray-600 rounded-full px-5 py-2 text-sm font-medium block w-max mx-auto mb-8 relative z-10 shadow-sm">Elevate Your Business</span>
        <h4 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 relative z-10 max-w-4xl mx-auto leading-[1.1] tracking-tight">Ready to Transform<br />Your Customer Management?</h4>
        <p className="text-gray-500 max-w-xl mx-auto mb-12 relative z-10 text-lg font-medium">Sign up today and see the difference Active can make for your business.</p>
        
        <form className="flex flex-col sm:flex-row gap-2 justify-between w-full max-w-[480px] mx-auto relative z-10 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full p-2 border border-gray-100" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your Email Addres" 
            className="flex-grow rounded-full px-6 py-3 outline-none text-gray-900 bg-transparent border-none font-medium placeholder:text-gray-400"
            required 
          />
          <button type="submit" className="bg-[#1a1a1a] text-white font-bold rounded-full px-8 py-3.5 hover:bg-gray-800 shadow-[0_4px_14px_rgba(0,0,0,0.25)] ring-[3px] ring-gray-100 transition-all whitespace-nowrap text-[15px]">
            Get Started
          </button>
        </form>
      </motion.div>
      </div>
    </section>
  );
}
