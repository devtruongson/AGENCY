import { useTranslation } from 'react-i18next'

export default function ComparisonCards() {
  const { t } = useTranslation()

  return (
    <section className="py-24 px-6 md:px-12 bg-surface-dark/20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-background-dark p-10 rounded-[2.5rem] border border-red-500/20">
            <h3 className="text-white text-3xl font-black mb-10 flex items-center gap-4">
              <span className="text-4xl">❌</span> {t('comparison.competitionTitle')}
            </h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1">⚠️</span>
                <div>
                  <h4 className="text-white font-bold text-xl">
                    {t('comparison.competitionItems.rejected.title')}
                  </h4>
                  <p className="text-text-secondary">
                    {t('comparison.competitionItems.rejected.desc')}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1">🔒</span>
                <div>
                  <h4 className="text-white font-bold text-xl">
                    {t('comparison.competitionItems.disabled.title')}
                  </h4>
                  <p className="text-text-secondary">
                    {t('comparison.competitionItems.disabled.desc')}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl mt-1">🚫</span>
                <div>
                  <h4 className="text-white font-bold text-xl">
                    {t('comparison.competitionItems.bans.title')}
                  </h4>
                  <p className="text-text-secondary">
                    {t('comparison.competitionItems.bans.desc')}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-primary/5 p-10 rounded-[2.5rem] border border-primary/30">
            <h3 className="text-white text-3xl font-black mb-10 flex items-center gap-4">
              <span className="text-4xl">👉</span> {t('comparison.primeTitle')}
            </h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">
                  task_alt
                </span>
                <div>
                  <h4 className="text-white font-bold text-xl">
                    {t('comparison.primeItems.trust.title')}
                  </h4>
                  <p className="text-text-secondary">
                    {t('comparison.primeItems.trust.desc')}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">
                  verified_user
                </span>
                <div>
                  <h4 className="text-white font-bold text-xl">
                    {t('comparison.primeItems.recovery.title')}
                  </h4>
                  <p className="text-text-secondary">
                    {t('comparison.primeItems.recovery.desc')}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">
                  bolt
                </span>
                <div>
                  <h4 className="text-white font-bold text-xl">
                    {t('comparison.primeItems.scaling.title')}
                  </h4>
                  <p className="text-text-secondary">
                    {t('comparison.primeItems.scaling.desc')}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
