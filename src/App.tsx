import React from 'react';
import { Search, ShoppingBag, Truck, Headset, ShieldCheck, Gift } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-sage selection:text-forest bg-forest">
      {/* Navigation Bar */}
      <nav className="h-[100px] bg-forest text-white px-10 flex items-center justify-between z-50 border-b border-white/10">
        {/* Left: Logo */}
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-1 transition-transform group-hover:scale-105">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0A2F1F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V6M12 6c-2 0-4 1-5 3M12 6c2 0 4 1 5 3M7 14c-1 0-2 1-2 2s1 2 2 2h10c1 0 2-1 2-2s-1-2-2-2M12 9c-3 0-5 2-5 5M12 9c3 0 5 2 5 5" />
              <path d="M9 19c0-1.5 1.5-3 3-3s3 1.5 3 3" />
            </svg>
          </div>
          <span className="text-[10px] tracking-[4px] font-bold">BONSAI</span>
        </div>

        {/* Center: Menu */}
        <div className="hidden md:flex items-center gap-12">
          {['HOME', 'FEATURES', 'OUR PRODUCTS', 'CONTACTS'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[11px] tracking-[2.5px] font-medium opacity-70 hover:opacity-100 transition-opacity"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Search & Cart */}
        <div className="flex items-center gap-8">
          <div className="relative group hidden sm:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Search plants"
              className="bg-white/5 border border-white/20 rounded-full pl-12 pr-6 py-2.5 text-[12px] w-[240px] focus:border-sage/50 outline-none transition-all placeholder:text-white/20"
            />
          </div>
          <a 
            href="https://easternleaf.com/bonsai-trees-s/3.htm?srsltid=AfmBOorAuhJsR3Zzzr5ScWalX_DfnAejOo21pC48Xism0_H8sQBZ20xG" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative opacity-70 hover:opacity-100 transition-opacity"
          >
            <ShoppingBag className="w-6 h-6 border-white" strokeWidth={1.5} />
            <div className="absolute top-0 right-0 w-2 h-2 bg-sage rounded-full translate-x-1/4 -translate-y-1/4"></div>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col md:flex-row min-h-0">
        {/* Left Column: Dark Content */}
        <div className="md:w-[45%] bg-forest text-white px-20 flex flex-col justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <h1 className="font-display font-extralight text-[72px] lg:text-[88px] leading-[1.02] mb-10 tracking-tight">
              Office Plants.<br />
              Garden & Home
            </h1>
            <p className="text-white/50 max-w-[420px] text-[16px] leading-[1.7] mb-12 font-light">
              Shop your favorite plants in your favorable factor, Veggies, Seeds, Citrus, Fruit Trees, Herbs and more...
            </p>
            <motion.a
              whileHover={{ scale: 1.02, backgroundColor: "#fcfcfc" }}
              whileTap={{ scale: 0.98 }}
              href="https://easternleaf.com/bonsai-trees-s/3.htm?srsltid=AfmBOorAuhJsR3Zzzr5ScWalX_DfnAejOo21pC48Xism0_H8sQBZ20xG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-forest px-14 py-5 text-[13px] font-bold uppercase tracking-[2.5px] transition-all shadow-2xl"
            >
              Our Products
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Technical Composition */}
        <div className="md:w-[55%] bg-sage relative overflow-hidden flex items-end">
          {/* Subtle Ambient Light */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10"></div>
          
          {/* Graphics Composition */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Elegant Pendant Lights */}
            <div className="absolute top-0 right-[20%] flex gap-16">
              <div className="w-px h-[220px] bg-black/10 relative">
                <div className="absolute bottom-0 -translate-x-1/2 w-10 h-24 bg-white rounded-b-full shadow-lg"></div>
              </div>
              <div className="w-px h-[140px] bg-black/10 relative">
                <div className="absolute bottom-0 -translate-x-1/2 w-10 h-24 bg-white rounded-b-full shadow-lg"></div>
              </div>
            </div>

            {/* Interior Accessories Arrangement */}
            <div className="absolute bottom-44 right-24 flex items-end gap-10">
              {/* White Minimalist Pitcher */}
              <div className="w-20 h-36 bg-white rounded-t-xl shadow-2xl relative mb-2">
                <div className="absolute -left-3 top-6 w-5 h-10 border-[3px] border-white rounded-l-full"></div>
              </div>
              {/* Tall Golden Metallic Vase */}
              <div className="w-24 h-[240px] bg-gradient-to-b from-[#EAD07C] via-[#D4AF37] to-[#B08D26] rounded-t-[30px] shadow-[30px_30px_60px_rgba(0,0,0,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 blur-2xl -translate-x-4 translate-y-10 rotate-12"></div>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
              </div>
            </div>

            {/* Cactus in White Pot */}
            <div className="absolute bottom-44 left-24">
              <div className="w-16 h-14 bg-white rounded-sm shadow-xl relative z-20"></div>
              <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-12 h-16 bg-[#2D7A2F] rounded-t-full border-[1.5px] border-[#1E4D20]">
                 <div className="absolute inset-0 opacity-20 grid grid-cols-2 gap-2 p-2">
                   {[...Array(8)].map((_, i) => <div key={i} className="w-[1px] h-[1px] bg-white rounded-full"></div>)}
                 </div>
              </div>
            </div>

            {/* Lush Decorative Foliage Layers */}
            <div className="absolute bottom-0 left-0 w-full h-[70%]">
              {/* Foreground Dark Palms */}
              <div className="absolute -bottom-10 -left-20 w-[450px] h-[500px] bg-[#0E3524] rounded-[100%_0_100%_50%] rotate-[-12deg] opacity-95 blur-[1px]"></div>
              {/* Midground Bright Sage Leaves */}
              <div className="absolute bottom-20 left-[10%] w-[180px] h-[300px] bg-[#1E5D3E] rounded-[100%_0_100%_0] rotate-[-25deg] opacity-60"></div>
              {/* Background Depth */}
              <div className="absolute -bottom-20 right-0 w-[550px] h-[600px] bg-[#08281A] rounded-[100%_0_100%_0] rotate-[8deg] opacity-85 blur-sm"></div>
            </div>
            
            {/* Delicate Stems with Yellow Berries */}
            <div className="absolute bottom-[360px] right-[140px] flex gap-5">
               <div className="w-px h-40 bg-black/15 -rotate-[15deg] relative">
                 <div className="absolute -top-1 -translate-x-1/2 w-4 h-4 bg-[#FFD700] rounded-full shadow-sm"></div>
               </div>
               <div className="w-px h-32 bg-black/15 rotate-[5deg] relative">
                 <div className="absolute -top-1 -translate-x-1/2 w-3.5 h-3.5 bg-[#FFD700] rounded-full shadow-sm"></div>
               </div>
            </div>
          </div>
          
          {/* Professional Studio Surface Reflection */}
          <div className="w-full h-44 bg-black/5 border-t border-black/5"></div>
        </div>
      </main>

      {/* Trust Bar (Bottom Actions) */}
      <footer className="h-[140px] px-10 border-t border-white/10 flex items-center bg-forest">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-7xl mx-auto">
          <Feature
            icon={<Truck className="w-5 h-5 text-white/90" />}
            title="Fast and Free Delivery"
            description="Free delivery for all orders $140"
          />
          <Feature
            icon={<Headset className="w-5 h-5 text-white/90" />}
            title="24/7 Customer Support"
            description="Friendly 24/7 customer support"
          />
          <Feature
            icon={<ShieldCheck className="w-5 h-5 text-white/90" />}
            title="Money Back Guarantee"
            description="We return money within 30 days"
          />
          <Feature
            icon={<Gift className="w-5 h-5 text-white/90" />}
            title="Member Gifts"
            description="Discount coupons weekends."
          />
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex items-center gap-6 group hover:translate-y-[-2px] transition-transform duration-300">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center border border-white/5 shadow-inner transition-all group-hover:bg-sage/20 group-hover:border-sage/30">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-[14px] tracking-wide mb-0.5 text-white/90">{title}</h4>
        <p className="text-white/40 text-[11px] font-medium tracking-tight leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

