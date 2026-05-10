import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-indigo-700/50 backdrop-blur-sm border-b border-white/10 text-white">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-12 h-20 flex justify-between items-center">
        
        {/* Nav Left */}
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="w-10 h-10 flex items-center justify-center bg-brand-yellow rounded-xl overflow-hidden relative group cursor-pointer p-2">
            <svg viewBox="0 0 50 25" fill="#312E81" className="w-full h-full">
              <path fillRule="evenodd" clipRule="evenodd" d="M24.6953 7.73005C33.3767 7.73005 40.5429 14.2176 41.6103 22.6091C41.762 23.8022 40.7725 24.7822 39.5698 24.7822C38.3671 24.7822 37.4116 23.7995 37.2077 22.6142C36.1789 16.6348 30.9684 12.0854 24.6953 12.0854C18.4222 12.0854 13.2117 16.6348 12.1829 22.6142C11.979 23.7995 11.0235 24.7822 9.82082 24.7822C8.61811 24.7822 7.62854 23.8022 7.78029 22.6091C8.84764 14.2176 16.0138 7.73004 24.6953 7.73005Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M24.6953 15.1087C29.2952 15.1087 33.1453 18.3194 34.1267 22.622C34.3942 23.7946 33.3938 24.7822 32.1911 24.7822C30.9884 24.7822 30.0544 23.7674 29.575 22.6644C28.7565 20.7811 26.8797 19.4641 24.6953 19.4641C22.5109 19.4641 20.6341 20.7811 19.8156 22.6644C19.3362 23.7674 18.4022 24.7822 17.1995 24.7822C15.9968 24.7822 14.9965 23.7946 15.2639 22.622C16.2453 18.3194 20.0954 15.1087 24.6953 15.1087Z" fill="white" />
            </svg>
          </div>

          {/* Nav Center (Desktop) */}
          <div className="hidden md:flex items-center space-x-6 text-indigo-100 font-bold">
            {["Home", "About", "Case study", "Playground"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`hover:text-white transition-colors ${i === 0 ? 'text-white' : ''}`}
              >
                {i === 0 && <span className="absolute w-1 h-1 bg-brand-yellow rounded-full -ml-3 mt-2.5"></span>}
                <span className="relative z-10">{item}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Nav Right (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:michealkpelle5@gmail.com" className="group flex items-center h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 overflow-hidden px-0 hover:px-4 cursor-pointer">
            <span className="w-10 h-10 shrink-0 flex items-center justify-center font-bold text-xs">EM</span>
            <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 whitespace-nowrap text-sm font-bold truncate">michealkpelle5@gmail.com</span>
          </a>
          <a href="tel:+12345678900" className="group flex items-center h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 overflow-hidden px-0 hover:px-4 cursor-pointer">
            <span className="w-10 h-10 shrink-0 flex items-center justify-center font-bold text-xs">PH</span>
            <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 whitespace-nowrap text-sm font-bold truncate">+1 234 567 8900</span>
          </a>
          <a href="#contact" className="ml-2 shrink-0 bg-white text-indigo-600 px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transform transition uppercase">
            CONTACT
          </a>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-800/95 backdrop-blur-sm border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {["Home", "About", "Case study", "Playground"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-indigo-100 font-bold text-lg hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <hr className="border-white/10 my-2" />
          <a href="#contact" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold shadow-lg text-center uppercase" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>
        </div>
      )}
    </div>
  );
}
