import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative bg-background-dark py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="flex-1 flex flex-col gap-10 lg:pr-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-surface-dark border border-border-dark w-fit shadow-sm">
              <span className="material-symbols-outlined text-primary text-sm">
                verified
              </span>
              <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                {t('hero.badge')}
              </span>
            </div>
            <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] tracking-[-0.04em]">
              {t('hero.title')} <span className="text-primary">{t('hero.titleHighlight')}</span>{' '}
              {t('hero.titleEnd')}
            </h1>
            <p className="text-text-secondary text-lg md:text-2xl font-normal leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-5 pt-6">
              <a
                className="flex items-center justify-center rounded-xl h-16 px-10 bg-primary hover:bg-orange-600 transition-all text-white text-xl font-bold shadow-xl shadow-orange-900/30"
                href="#pricing"
              >
                <span>{t('hero.viewPackages')}</span>
                <span className="material-symbols-outlined ml-3 text-lg">
                  arrow_forward
                </span>
              </a>
              <a
                className="flex items-center justify-center rounded-xl h-16 px-10 bg-surface-dark border border-border-dark hover:border-primary/50 text-white hover:text-primary transition-all text-xl font-bold"
                href="#contact-modal"
              >
                <span>{t('hero.contactExpert')}</span>
              </a>
            </div>
          </div>
          <div className="flex-1 w-full mt-12 lg:mt-0">
            <div className="relative w-full aspect-video">
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat scale-[1.2]"
                style={{
                  backgroundImage:
                    'url("/banner.png")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
