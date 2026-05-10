import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Henry Williams',
    role: 'Ops Manager, MarketPro',
    content: "The features are powerful and easy to use. We've optimized processes and grown faster with this solution.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Grace Johnson',
    role: 'VP Engineering, Vectra',
    content: "Their innovative approach streamlined our processes and boosted efficiency. Highly recommend!",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'James Thompson',
    role: 'Product Analyst, Realty',
    content: "Outstanding service from start to finish. They delivered exactly what we needed, on time and within budget.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#fafaf7]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="bg-white border border-gray-200 text-gray-900 rounded-full px-4 py-1.5 text-sm font-bold block w-max mx-auto mb-6 shadow-sm">Client Stories</span>
        <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">See What Our Clients Are Saying</h3>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium">Learn how our solutions have empowered our clients to achieve success!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm flex flex-col justify-between"
          >
            <div className="mb-6 flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-gray-700 mb-8 flex-grow font-medium leading-relaxed">"{review.content}"</p>
            <div className="flex items-center gap-4 mt-auto">
              <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border border-gray-200 object-cover" />
              <div>
                <h4 className="font-bold font-display">{review.name}</h4>
                <p className="text-sm text-gray-500 font-medium">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
