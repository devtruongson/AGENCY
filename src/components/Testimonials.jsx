import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

export default function Testimonials() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax transforms for 3 columns
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]) // Faster
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]) // Slower

  const allReviews = t('testimonials.reviews', { returnObjects: true })
  
  // Distribute reviews into 3 columns
  const col1 = allReviews.filter((_, i) => i % 3 === 0)
  const col2 = allReviews.filter((_, i) => i % 3 === 1)
  const col3 = allReviews.filter((_, i) => i % 3 === 2)

  const TestimonialCard = ({ testimonial }) => (
    <div className="mb-8 break-inside-avoid">
      <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:border-primary/50 transition-colors">
        <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0">
                {testimonial.image ? (
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover shadow-lg border-2 border-primary/20" />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-black text-lg shadow-lg">
                    {testimonial.name.charAt(0)}
                    </div>
                )}
                
                {testimonial.verified && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-black rounded-full flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined text-primary text-[10px] fill-1">
                    verified
                    </span>
                </div>
                )}
            </div>
            <div>
                <h4 className="text-white font-bold text-base leading-tight">{testimonial.name}</h4>
                <p className="text-white/40 text-xs font-medium uppercase tracking-wide mt-1">
                {testimonial.role}
                </p>
            </div>
            </div>

            {/* Company Logo/Name Optional */}
            {testimonial.company && (
                <div className="hidden sm:flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    {testimonial.logo ? (
                         <img src={testimonial.logo} alt={testimonial.company} className="w-5 h-5 rounded-full object-contain opacity-80" />
                    ) : (
                        <span className="material-symbols-outlined text-white/40 text-sm">business</span>
                    )}
                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">{testimonial.company}</span>
                </div>
            )}
        </div>
        
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`material-symbols-outlined text-lg ${
                i < testimonial.rating ? 'text-primary fill-1' : 'text-white/10'
              }`}
            >
              star
            </span>
          ))}
        </div>
        
        <p className="text-white/70 leading-relaxed text-sm">
          "{testimonial.text}"
        </p>
      </div>
    </div>
  )

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 bg-black overflow-hidden" id="testimonials">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-32">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-white/50 text-xl max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[800px]">
          {/* Column 1 */}
          <motion.div style={{ y: y1 }}>
             {col1.map((item, i) => <TestimonialCard key={i} testimonial={item} />)}
             {/* Repeat for length */}
             {col1.map((item, i) => <TestimonialCard key={`dup1-${i}`} testimonial={item} />)}
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="pt-20">
             {col2.map((item, i) => <TestimonialCard key={i} testimonial={item} />)}
             {col2.map((item, i) => <TestimonialCard key={`dup2-${i}`} testimonial={item} />)}
          </motion.div>
          
          {/* Column 3 */}
          <motion.div style={{ y: y3 }} className="pt-40">
             {col3.map((item, i) => <TestimonialCard key={i} testimonial={item} />)}
             {col3.map((item, i) => <TestimonialCard key={`dup3-${i}`} testimonial={item} />)}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
