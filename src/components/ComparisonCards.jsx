import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function ComparisonCards() {
  const { t } = useTranslation()

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  }

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5
      }
    })
  }

  return (
    <section className="py-24 px-6 md:px-12 bg-surface-dark/20 perspective-1000">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Competition Card */}
          <motion.div 
            className="bg-background-dark p-10 rounded-[2.5rem] border border-red-500/20 shadow-lg shadow-red-500/5 transform-preserve-3d"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <h3 className="text-white text-3xl font-black mb-10 flex items-center gap-4">
              <span className="text-4xl">❌</span> {t('comparison.competitionTitle')}
            </h3>
            <ul className="space-y-8">
              {['rejected', 'disabled', 'bans'].map((item, index) => (
                <motion.li 
                  key={item}
                  custom={index}
                  variants={listVariants}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl mt-1">
                    {index === 0 ? '⚠️' : index === 1 ? '🔒' : '🚫'}
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-xl">
                      {t(`comparison.competitionItems.${item}.title`)}
                    </h4>
                    <p className="text-text-secondary">
                      {t(`comparison.competitionItems.${item}.desc`)}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Prime Card */}
          <motion.div 
            className="bg-primary/5 p-10 rounded-[2.5rem] border border-primary/30 shadow-lg shadow-primary/10 transform-preserve-3d"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(234, 88, 12, 0.25)", transition: { duration: 0.3 } }}
          >
            <h3 className="text-white text-3xl font-black mb-10 flex items-center gap-4">
              <span className="text-4xl">👉</span> {t('comparison.primeTitle')}
            </h3>
            <ul className="space-y-8">
              {['trust', 'recovery', 'scaling'].map((item, index) => (
                <motion.li 
                  key={item}
                  custom={index}
                  variants={listVariants}
                  className="flex items-start gap-4"
                >
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {index === 0 ? 'task_alt' : index === 1 ? 'verified_user' : 'bolt'}
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-xl">
                      {t(`comparison.primeItems.${item}.title`)}
                    </h4>
                    <p className="text-text-secondary">
                      {t(`comparison.primeItems.${item}.desc`)}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
