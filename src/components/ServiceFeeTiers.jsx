import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function ServiceFeeTiers() {
  const { t } = useTranslation()

  const tiers = ['tier1', 'tier2', 'tier3', 'tier4']

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  }

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-black relative overflow-hidden" id="services">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('serviceFees.badge')}
          </motion.span>
          <motion.h2 
            className="text-white text-4xl md:text-6xl font-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('serviceFees.title')}
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 text-white/60 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: 'schedule', label: t('serviceFees.delivery') },
              { icon: 'support_agent', label: t('serviceFees.support') },
              { icon: 'build', label: t('serviceFees.tools') }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary text-xl">
                  {item.icon}
                </span>
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 5, 
                rotateY: 5,
                zIndex: 10,
                boxShadow: "0 25px 50px -12px rgba(234, 88, 12, 0.25)"
              }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] text-center group hover:border-primary/50 transition-all transform-preserve-3d flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-6">
                  {t(`serviceFees.tiers.${tier}.name`)}
                </p>
                <p className="text-white text-3xl font-black mb-4 group-hover:scale-110 transition-transform duration-300">
                  {t(`serviceFees.tiers.${tier}.range`)}
                </p>
              </div>
              
              <div>
                <p className="text-primary text-6xl font-black tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]">
                  {t(`serviceFees.tiers.${tier}.fee`)}
                </p>
                <p className="text-white/40 text-xs uppercase tracking-wider font-medium">
                  {t(`serviceFees.tiers.${tier}.label`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
