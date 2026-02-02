import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ComparisonPinning() {
  const targetRef = useRef(null)
  
  // Use scroll hook to track the progress of the container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Horizontal scroll transform based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"])

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Horizontal Container */}
        <motion.div style={{ x }} className="flex gap-10 md:gap-40 px-10 md:px-40 items-center">
          
          {/* Slide 1: Introduction Title */}
          <div className="w-[80vw] h-[80vh] flex-shrink-0 flex items-center justify-center relative">
             <div className="text-center">
                <h2 className="text-[12vw] font-black text-white leading-[0.85] mb-8 tracking-tighter">
                   THE<br/>TRUTH.
                </h2>
                <p className="text-xl md:text-3xl text-white/50 max-w-2xl mx-auto font-light">
                   Most agencies rely on "farmed" accounts. <br/> <span className="text-white font-bold">We build infrastructure.</span>
                </p>
                <div className="mt-20 animate-bounce">
                    <span className="material-symbols-outlined text-6xl text-white/20">arrow_forward</span>
                </div>
             </div>
          </div>

          {/* Slide 2: The Problem (Red) */}
          <div className="w-[85vw] md:w-[70vw] h-[80vh] flex-shrink-0 bg-red-900/10 rounded-[3rem] border border-red-500/20 p-12 md:p-24 flex flex-col justify-center relative overflow-hidden group hover:border-red-500/40 transition-colors duration-500">
            {/* Background Blob */}
            <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
            
            <h3 className="text-5xl md:text-7xl font-black text-white mb-16 relative z-10 leading-tight">
               <span className="text-red-500 block text-lg md:text-2xl mb-4 font-bold tracking-[0.3em] uppercase">The Status Quo</span>
               BROKEN<br/>SYSTEMS.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
               {[
                  { icon: "block", title: "Constant Bans", desc: "Accounts disabled without reason." },
                  { icon: "sentiment_dissatisfied", title: "Zero Support", desc: "24-48 hour response times." },
                  { icon: "money_off", title: "Lost Spend", desc: "Budgets capped at $50/day." }
               ].map((item, i) => (
                  <div key={i} className="bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-red-500/10 hover:border-red-500/30 transition-all hover:-translate-y-2">
                     <span className="material-symbols-outlined text-5xl text-red-500 mb-6">{item.icon}</span>
                     <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                     <p className="text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
          </div>

          {/* Slide 3: The Solution (Green/Orange) */}
          <div className="w-[85vw] md:w-[70vw] h-[80vh] flex-shrink-0 bg-primary/10 rounded-[3rem] border border-primary/20 p-12 md:p-24 flex flex-col justify-center relative overflow-hidden group hover:border-primary/40 transition-colors duration-500">
             <div className="absolute bottom-[-20%] left-[-20%] w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
             
             <h3 className="text-5xl md:text-7xl font-black text-white mb-16 relative z-10 leading-tight">
               <span className="text-primary block text-lg md:text-2xl mb-4 font-bold tracking-[0.3em] uppercase">Prime Marketing</span>
               BUILT TO<br/>SCALE.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
               {[
                  { icon: "verified", title: "Verified Trust", desc: "Internal metadata whitelist." },
                  { icon: "bolt", title: "Instant Scale", desc: "Unlimited daily spend limits." },
                  { icon: "support_agent", title: "15m Support", desc: "Direct Telegram replacement." }
               ].map((item, i) => (
                  <div key={i} className="bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-2">
                     <span className="material-symbols-outlined text-5xl text-primary mb-6">{item.icon}</span>
                     <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                     <p className="text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
