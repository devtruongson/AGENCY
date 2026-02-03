import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  // Deep Parallax with Extended Range
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Aggressive parallax values for "Immersion"
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 400])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150])
  
  // 3D Tilt State
  const x = useSpring(0, { stiffness: 400, damping: 30 })
  const y = useSpring(0, { stiffness: 400, damping: 30 })

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    
    // Increased tilt intensity for radical 3D effect
    const xPct = (mouseX / width - 0.5) * 40 
    const yPct = (mouseY / height - 0.5) * -40
    
    x.set(xPct)
    y.set(yPct)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden perspective-2000"
    >
      {/* Immersive Background Layer */}
      <motion.div 
        className="absolute inset-0 bg-black z-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-secondary-blue/10 rounded-full blur-[120px]" />
      </motion.div>

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
          
        {/* Text Content - Floating Layer */}
        <motion.div 
          className="flex flex-col gap-10 justify-center h-full pb-20"
          style={{ y: textY, z: 100 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md">
            <span className="material-symbols-outlined text-primary text-base animate-pulse">
              verified
            </span>
            <span className="text-sm font-bold text-white uppercase tracking-[0.2em]">
              {t('hero.badge')}
            </span>
          </div>
          
          <h1 className="text-white text-5xl sm:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter mix-blend-screen">
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "circOut" }}
                className="block"
              >
                {t('hero.title')}
              </motion.span>
            </span>
            <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                className="block"
              >
                {t('hero.titleHighlight')}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "circOut" }}
                className="block"
              >
                {t('hero.titleEnd')}
              </motion.span>
            </span>
          </h1>

          <motion.p 
            className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <div className="flex flex-wrap gap-5 pt-8">
            <motion.a
              className="flex items-center justify-center rounded-2xl h-16 px-10 bg-white text-black text-xl font-bold shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transition-all cursor-pointer group"
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t('hero.viewPackages')}</span>
              <span className="material-symbols-outlined ml-3 text-2xl group-hover:translate-x-1 transition-transform">
                arrow_outward
              </span>
            </motion.a>
            <motion.a
              className="flex items-center justify-center rounded-2xl h-16 px-10 bg-white/5 border border-white/10 text-white text-xl font-bold backdrop-blur-sm cursor-pointer hover:bg-white/10"
              href="#contact-modal"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t('hero.contactExpert')}</span>
            </motion.a>
          </div>
        </motion.div>

        {/* 3D Image Container - Floating Object */}
        <div className="perspective-1000 w-full h-full flex items-center justify-center relative pointer-events-none lg:pointer-events-auto">
          <motion.div 
            className="relative w-full aspect-square max-w-[500px] lg:max-w-[800px] flex items-center justify-center scale-90 md:scale-100"
            style={{ 
              y: imageY,
              rotateX: y,
              rotateY: x,
              transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.8, z: -200 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            transition={{ duration: 1.2, ease: "custom" }}
          >
            {/* Banner Image as 3D Plane */}
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat scale-[1.3] drop-shadow-[0_50px_100px_rgba(234,88,12,0.3)]"
              style={{
                backgroundImage: 'url("/banner.png")',
                transform: "translateZ(50px)"
              }}
            ></div>
            
            {/* Floating Glass Card 1 */}
            <motion.div 
              className="absolute top-[25%] right-[0%] p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex flex-col items-center gap-2 shadow-2xl"
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(150px)" }}
            >
               <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-400 text-3xl">verified_user</span>
               </div>
               <span className="text-white font-bold text-lg tracking-wide">Trusted Asset</span>
            </motion.div>

            {/* Floating Glass Card 2 */}
            <motion.div 
              className="absolute bottom-[25%] left-[0%] p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex flex-col items-center gap-2 shadow-2xl"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ transform: "translateZ(200px)" }}
            >
               <span className="text-white font-black text-4xl">30m</span>
               <span className="text-white/60 text-sm font-medium tracking-widest uppercase">Avg Delivery</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
