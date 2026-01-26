import { useTranslation } from 'react-i18next'

export default function Pricing() {
  const { t } = useTranslation()

  const packages = ['single', 'basic', 'advanced', 'premium']

  const getPackageFeatures = (pkg) => {
    const features = t(`pricing.packages.${pkg}.features`, { returnObjects: true })
    return Object.values(features)
  }

  return (
    <section
      className="py-24 md:py-40 px-6 md:px-12 bg-background-dark"
      id="pricing"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('pricing.badge')}
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-black mb-8">
            {t('pricing.title')}
          </h2>
          <div className="inline-block bg-primary/10 border border-primary/20 p-6 rounded-2xl max-w-4xl text-left">
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary text-3xl shrink-0">
                info
              </span>
              <div>
                <p className="text-white font-bold mb-1">
                  {t('pricing.importantTitle')}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  <strong className="text-white">{t('pricing.agencyAsset')}</strong>{' '}
                  {t('pricing.agencyAssetDesc')}
                  <br />
                  <strong className="text-white">{t('pricing.clientAsset')}</strong>{' '}
                  {t('pricing.clientAssetDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => {
            const isHighlighted = pkg === 'advanced'
            const features = getPackageFeatures(pkg)

            return (
              <div
                key={index}
                className={`${
                  isHighlighted
                    ? 'bg-surface-dark border-[2px] border-primary p-10 rounded-[2.5rem] flex flex-col shadow-2xl shadow-primary/10 scale-105'
                    : 'bg-surface-dark border border-border-dark p-10 rounded-[2.5rem] flex flex-col hover:border-primary/50 transition-all'
                }`}
              >
                <h3 className="text-white text-xl font-bold mb-4">
                  {t(`pricing.packages.${pkg}.name`)}
                </h3>
                <div className="mb-8">
                  <span className="text-4xl font-black text-white">
                    {t(`pricing.packages.${pkg}.price`)}
                  </span>
                  {t(`pricing.packages.${pkg}.period`, { defaultValue: '' }) && (
                    <span className="text-text-secondary text-sm">
                      {t(`pricing.packages.${pkg}.period`)}
                    </span>
                  )}
                </div>
                <ul
                  className={`space-y-4 mb-10 flex-1 text-sm ${
                    isHighlighted ? 'text-white' : 'text-text-secondary'
                  }`}
                >
                  {features.map((feature, i) => {
                    const isBlueTick = feature.includes('Blue Tick') || feature.includes('dấu tích xanh') || feature.includes('蓝V') || feature.includes('Синяя галочка')
                    return (
                      <li
                        key={i}
                        className={`flex items-center gap-2 ${
                          isBlueTick ? 'font-bold text-white' : ''
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-primary text-lg ${
                            isBlueTick ? 'fill-1' : ''
                          }`}
                        >
                          {isBlueTick ? 'verified' : 'check'}
                        </span>
                        {feature}
                      </li>
                    )
                  })}
                </ul>
                <a
                  className={`py-4 text-center rounded-xl font-bold transition-all ${
                    isHighlighted
                      ? 'bg-primary text-white font-black hover:bg-orange-600'
                      : 'border border-white/10 text-white hover:bg-white/5'
                  }`}
                  href="#contact-modal"
                >
                  {t(`pricing.packages.${pkg}.cta`)}
                </a>
              </div>
            )
          })}
        </div>
        <div className="mt-20">
          <h4 className="text-white text-2xl font-black mb-10 text-center">
            {t('pricing.addonsTitle')}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {['image', 'video'].map((addon, index) => (
              <div
                key={index}
                className="bg-surface-dark border border-border-dark p-8 rounded-3xl flex items-center justify-between group hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-4xl">
                      {addon === 'image' ? 'image' : 'movie'}
                    </span>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg">
                      {t(`pricing.addons.${addon}.title`)}
                    </h5>
                    <p className="text-text-secondary text-sm">
                      {t(`pricing.addons.${addon}.desc`)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-primary text-2xl font-black">
                    {t(`pricing.addons.${addon}.price`)}
                  </p>
                  <p className="text-text-secondary text-[10px] uppercase font-bold">
                    {t(`pricing.addons.${addon}.label`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
