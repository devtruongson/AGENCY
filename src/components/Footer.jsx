import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-surface-dark border-t border-border-dark pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg
                  className="w-full h-full text-primary"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                >
                  <path d="M20 10 L80 10 L80 40 L50 40 L50 60 L20 60 Z"></path>
                  <path d="M20 65 L20 90 L50 65 Z"></path>
                </svg>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-primary text-2xl logo-font-prime uppercase leading-none">
                  Prime
                </span>
                <span className="text-secondary-blue text-[10px] logo-font-marketing uppercase font-bold tracking-[0.35em] leading-none">
                  Marketing
                </span>
              </div>
            </div>
            <p className="text-text-secondary text-base leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="text-white font-black mb-10 text-xl">
              {t('footer.infrastructure.title')}
            </h4>
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  className="text-text-secondary hover:text-primary transition-colors text-base"
                  href="#"
                >
                  {t('footer.infrastructure.rental')}
                </a>
              </li>
              <li>
                <a
                  className="text-text-secondary hover:text-primary transition-colors text-base"
                  href="#"
                >
                  {t('footer.infrastructure.marketplace')}
                </a>
              </li>
              <li>
                <a
                  className="text-text-secondary hover:text-primary transition-colors text-base"
                  href="#"
                >
                  {t('footer.infrastructure.scaling')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black mb-10 text-xl">{t('footer.company.title')}</h4>
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  className="text-text-secondary hover:text-primary transition-colors text-base"
                  href="#"
                >
                  {t('footer.company.about')}
                </a>
              </li>
              <li>
                <a
                  className="text-text-secondary hover:text-primary transition-colors text-base"
                  href="#"
                >
                  {t('footer.company.support')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black mb-10 text-xl">{t('footer.resources.title')}</h4>
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  className="text-text-secondary hover:text-primary transition-colors text-base"
                  href="#"
                >
                  {t('footer.resources.terms')}
                </a>
              </li>
              <li>
                <a
                  className="text-text-secondary hover:text-primary transition-colors text-base"
                  href="#"
                >
                  {t('footer.resources.privacy')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border-dark pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-text-secondary text-sm font-medium tracking-wide">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-8">
            <a
              className="text-text-secondary hover:text-primary transition-all scale-110"
              href="#"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              className="text-text-secondary hover:text-primary transition-all scale-110"
              href="#"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a
              className="text-text-secondary hover:text-primary transition-all scale-110"
              href="#"
            >
              <span className="material-symbols-outlined">chat</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
