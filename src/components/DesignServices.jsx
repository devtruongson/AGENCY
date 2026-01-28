import { useTranslation } from 'react-i18next'

export default function DesignServices() {
  const { t } = useTranslation()

  const benefits = t('designServices.benefits.items', { returnObjects: true })
  const priceItems = t('designServices.pricing.items', { returnObjects: true })

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-background-dark/50" id="design-services">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('designServices.badge')}
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-black mb-8">
            {t('designServices.title')}
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            {t('designServices.subtitle')}
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-surface-dark border border-border-dark rounded-[2.5rem] p-8 md:p-12 mb-12">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-white text-2xl font-black mb-6 uppercase">
                    {t('designServices.whyChooseUs.title')}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                    {t('designServices.whyChooseUs.desc')}
                </p>
            </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-24 text-center">
             <h3 className="text-white text-2xl font-black mb-12 uppercase">
                {t('designServices.benefits.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
                <div key={index} className="bg-surface-dark border border-border-dark p-8 rounded-3xl hover:border-primary/50 transition-all group">
                    <h4 className="text-white font-bold text-lg mb-4 group-hover:text-primary transition-colors">
                        {benefit.title}
                    </h4>
                    <p className="text-text-secondary text-sm">
                        {benefit.desc}
                    </p>
                </div>
            ))}
            </div>
        </div>

        {/* Pricing List */}
        <div className="max-w-5xl mx-auto">
            <h3 className="text-white text-2xl font-black mb-12 text-center uppercase">
                {t('designServices.pricing.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {priceItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-surface-dark border border-border-dark px-6 py-4 rounded-xl hover:border-primary/30 transition-all">
                        <span className="text-white font-medium">{item.name}</span>
                        <span className="text-primary font-bold bg-primary/10 px-3 py-1 rounded-lg">{item.price}</span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  )
}
