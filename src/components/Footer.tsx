export default function Footer() {
  return (
    <footer className="bg-[#f6f5f3] py-16 px-6 md:px-12 text-sm font-medium">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <a href="#" className="font-display font-bold text-2xl tracking-tight text-gray-900 block mb-6">
            Active<span className="text-primary">.</span>
          </a>
          <p className="text-gray-500 mb-6 max-w-sm leading-relaxed">Streamline workflows and grow your business with effective lead management and automated strategies.</p>
          <a href="mailto:hello.active@gmail.com" className="hover:text-primary transition-colors text-gray-800 font-bold border-b border-gray-200 pb-1 hover:border-primary">hello.active@gmail.com</a>
        </div>
        
        <div>
          <h4 className="font-bold font-display text-gray-900 mb-6 uppercase tracking-wider text-xs bg-gray-50 px-3 py-1 rounded w-max">Features</h4>
          <ul className="space-y-4 text-gray-500">
            <li><a href="#benefits" className="hover:text-primary transition-colors">Benefits</a></li>
            <li><a href="#why" className="hover:text-primary transition-colors">Why Choose Us</a></li>
            <li><a href="#how" className="hover:text-primary transition-colors">How To Use</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold font-display text-gray-900 mb-6 uppercase tracking-wider text-xs bg-gray-50 px-3 py-1 rounded w-max">Social</h4>
          <ul className="space-y-4 text-gray-500">
            <li><a href="#" className="hover:text-primary transition-colors">Twitter (X)</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Dribbble</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-gray-400 gap-4 text-center sm:text-left">
        <div>&copy; {new Date().getFullYear()} Active SaaS. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
