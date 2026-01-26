import { useTranslation } from 'react-i18next'

export default function ServiceFeeTiers() {
  const { t } = useTranslation()

  const tiers = ['tier1', 'tier2', 'tier3', 'tier4']

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface-dark/30 border-y border-border-dark">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('serviceFees.badge')}
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-black mb-6">
            {t('serviceFees.title')}
          </h2>
          <div className="flex flex-wrap justify-center gap-12 mt-8 text-text-secondary font-bold">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                schedule
              </span>
              {t('serviceFees.delivery')}
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                support_agent
              </span>
              {t('serviceFees.support')}
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                build
              </span>
              {t('serviceFees.tools')}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="bg-surface-dark border border-border-dark p-8 rounded-3xl text-center group hover:border-primary transition-all"
            >
              <p className="text-text-secondary text-sm font-bold uppercase mb-4">
                {t(`serviceFees.tiers.${tier}.name`)}
              </p>
              <p className="text-white text-2xl font-black mb-2">
                {t(`serviceFees.tiers.${tier}.range`)}
              </p>
              <p className="text-primary text-4xl font-black">
                {t(`serviceFees.tiers.${tier}.fee`)}
              </p>
              <p className="text-text-secondary text-xs mt-4">
                {t(`serviceFees.tiers.${tier}.label`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
