import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function DesignServices() {
  const { t } = useTranslation()

  const benefits = t('designServices.benefits.items', { returnObjects: true })
  const priceItems = t('designServices.pricing.items', { returnObjects: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const getIcon = (name) => {
    const n = name.toLowerCase()
    if (n.includes('logo')) return 'pentagon'
    if (n.includes('banner')) return 'image'
    if (n.includes('youtube')) return 'play_circle'
    if (n.includes('post') || n.includes('social')) return 'share'
    if (n.includes('info')) return 'analytics'
    if (n.includes('flyer') || n.includes('tờ rơi')) return 'description'
    if (n.includes('edit') || n.includes(' photoshop')) return 'auto_fix_high'
    if (n.includes('vector')) return 'layers'
    if (n.includes('illustration') || n.includes('minh họa')) return 'brush'
    if (n.includes('character') || n.includes('nhân vật')) return 'face'
    if (n.includes('thread') || n.includes('bhw')) return 'forum'
    return 'palette'
  }

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-background-dark/50" id="design-services">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block"
          >
            {t('designServices.badge')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-6xl font-black mb-8"
          >
            {t('designServices.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-xl max-w-3xl mx-auto"
          >
            {t('designServices.subtitle')}
          </motion.p>
        </div>

        {/* Why Choose Us */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-surface-dark/40 backdrop-blur-sm border border-border-dark rounded-[2.5rem] p-8 md:p-12 mb-12 relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h3 className="text-white text-2xl font-black mb-6 uppercase">
                    {t('designServices.whyChooseUs.title')}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                    {t('designServices.whyChooseUs.desc')}
                </p>
            </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="mb-24 text-center">
             <h3 className="text-white text-2xl font-black mb-12 uppercase">
                {t('designServices.benefits.title')}
            </h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
            {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -10, borderColor: 'rgba(234, 88, 12, 0.5)' }}
                  className="bg-surface-dark border border-border-dark p-8 rounded-3xl transition-all group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12 blur-2xl group-hover:bg-primary/10 transition-colors" />
                    <h4 className="text-white font-bold text-lg mb-4 group-hover:text-primary transition-colors">
                        {benefit.title}
                    </h4>
                    <p className="text-text-secondary text-sm">
                        {benefit.desc}
                    </p>
                </motion.div>
            ))}
            </motion.div>
        </div>

        {/* Pricing List */}
        <div className="max-w-6xl mx-auto">
            <h3 className="text-white text-2xl font-black mb-12 text-center uppercase">
                {t('designServices.pricing.title')}
            </h3>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
                {priceItems.map((item, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.02,
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            borderColor: 'rgba(234, 88, 12, 0.3)'
                        }}
                        className="flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 px-6 py-5 rounded-2xl transition-all shadow-lg hover:shadow-primary/5 group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <span className="material-symbols-outlined text-primary text-xl">
                                    {getIcon(item.name)}
                                </span>
                            </div>
                            <span className="text-white font-semibold tracking-wide">{item.name}</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-primary font-black text-lg bg-primary/10 px-4 py-1.5 rounded-xl border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                {item.price}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>

      </div>
    </section>
  )
}
