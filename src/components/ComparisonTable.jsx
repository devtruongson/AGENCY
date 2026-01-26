import { useTranslation } from 'react-i18next'

export default function ComparisonTable() {
  const { t } = useTranslation()

  return (
    <section
      className="py-24 md:py-40 px-6 md:px-12 bg-background-dark"
      id="comparison"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-20">
          <span className="text-secondary-blue font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('comparisonTable.badge')}
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-black leading-tight mb-8">
            {t('comparisonTable.title')} <span className="text-primary italic">{t('comparisonTable.titleVs')}</span> {t('comparisonTable.titleEnd')}
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            {t('comparisonTable.subtitle')}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border-dark">
                <th className="py-8 px-6 text-left text-text-secondary font-bold uppercase tracking-wider w-1/3">
                  {t('comparisonTable.keyMetrics')}
                </th>
                <th className="py-8 px-6 text-center text-primary font-black uppercase tracking-wider text-xl bg-primary/5 rounded-t-3xl">
                  {t('comparisonTable.primeMarketing')}
                </th>
                <th className="py-8 px-6 text-center text-text-secondary font-bold uppercase tracking-wider">
                  {t('comparisonTable.standardMarket')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-dark">
              <tr>
                <td className="py-10 px-6">
                  <p className="text-white font-bold text-lg">
                    {t('comparisonTable.longevity.title')}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {t('comparisonTable.longevity.desc')}
                  </p>
                </td>
                <td className="py-10 px-6 text-center bg-primary/5">
                  <span className="text-white font-black text-2xl">
                    {t('comparisonTable.longevity.prime')}
                  </span>
                </td>
                <td className="py-10 px-6 text-center">
                  <span className="text-text-secondary/60 font-medium text-lg">
                    {t('comparisonTable.longevity.standard')}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-10 px-6">
                  <p className="text-white font-bold text-lg">
                    {t('comparisonTable.trustScore.title')}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {t('comparisonTable.trustScore.desc')}
                  </p>
                </td>
                <td className="py-10 px-6 text-center bg-primary/5">
                  <div className="flex items-center justify-center gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined fill-1">
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-white font-bold">{t('comparisonTable.trustScore.prime')}</span>
                </td>
                <td className="py-10 px-6 text-center">
                  <div className="flex items-center justify-center gap-1 text-text-secondary/40">
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                  </div>
                  <span className="text-text-secondary/60 font-medium">
                    {t('comparisonTable.trustScore.standard')}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-10 px-6">
                  <p className="text-white font-bold text-lg">
                    {t('comparisonTable.spending.title')}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {t('comparisonTable.spending.desc')}
                  </p>
                </td>
                <td className="py-10 px-6 text-center bg-primary/5">
                  <span className="text-white font-black text-2xl">
                    {t('comparisonTable.spending.prime')}
                  </span>
                </td>
                <td className="py-10 px-6 text-center">
                  <span className="text-text-secondary/60 font-medium text-lg">
                    {t('comparisonTable.spending.standard')}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-10 px-6">
                  <p className="text-white font-bold text-lg">{t('comparisonTable.support.title')}</p>
                  <p className="text-text-secondary text-sm">
                    {t('comparisonTable.support.desc')}
                  </p>
                </td>
                <td className="py-10 px-6 text-center bg-primary/5 rounded-b-3xl">
                  <span className="text-white font-black text-2xl">
                    {t('comparisonTable.support.prime')}
                  </span>
                </td>
                <td className="py-10 px-6 text-center">
                  <span className="text-text-secondary/60 font-medium text-lg">
                    {t('comparisonTable.support.standard')}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
