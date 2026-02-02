import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function ComparisonTable() {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  }

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section
      className="py-24 md:py-40 px-6 md:px-12 bg-background-dark"
      id="comparison"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary-blue font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('comparisonTable.badge')}
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-black leading-tight mb-8">
            {t('comparisonTable.title')} <span className="text-primary italic">{t('comparisonTable.titleVs')}</span> {t('comparisonTable.titleEnd')}
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            {t('comparisonTable.subtitle')}
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.table 
            className="w-full border-collapse"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <thead>
              <tr className="border-b border-border-dark">
                <th className="py-8 px-6 text-left text-text-secondary font-bold uppercase tracking-wider w-1/3">
                  {t('comparisonTable.keyMetrics')}
                </th>
                <th className="py-8 px-6 text-center text-primary font-black uppercase tracking-wider text-xl bg-primary/5 rounded-t-3xl border-t border-x border-primary/20">
                  {t('comparisonTable.primeMarketing')}
                </th>
                <th className="py-8 px-6 text-center text-text-secondary font-bold uppercase tracking-wider">
                  {t('comparisonTable.standardMarket')}
                </th>
              </tr>
            </thead>
            <motion.tbody className="divide-y divide-border-dark">
              {['longevity', 'trustScore', 'spending', 'support'].map((key, index) => (
                <motion.tr key={key} variants={rowVariants}>
                  <td className="py-10 px-6">
                    <p className="text-white font-bold text-lg">
                      {t(`comparisonTable.${key}.title`)}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {t(`comparisonTable.${key}.desc`)}
                    </p>
                  </td>
                  <td className={`py-10 px-6 text-center bg-primary/5 border-x border-primary/20 ${index === 3 ? 'rounded-b-3xl border-b' : ''}`}>
                    {index === 1 ? (
                       <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center gap-1 text-primary">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined fill-1">
                              star
                            </span>
                          ))}
                        </div>
                        <span className="text-white font-bold">{t(`comparisonTable.${key}.prime`)}</span>
                      </div>
                    ) : (
                      <span className="text-white font-black text-2xl">
                        {t(`comparisonTable.${key}.prime`)}
                      </span>
                    )}
                  </td>
                  <td className="py-10 px-6 text-center">
                     {index === 1 ? (
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center gap-1 text-text-secondary/40">
                          <span className="material-symbols-outlined fill-1">star</span>
                          <span className="material-symbols-outlined fill-1">star</span>
                          <span className="material-symbols-outlined">star</span>
                          <span className="material-symbols-outlined">star</span>
                          <span className="material-symbols-outlined">star</span>
                        </div>
                        <span className="text-text-secondary/60 font-medium">
                          {t(`comparisonTable.${key}.standard`)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-text-secondary/60 font-medium text-lg">
                        {t(`comparisonTable.${key}.standard`)}
                      </span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </motion.table>
        </div>
      </div>
    </section>
  )
}
