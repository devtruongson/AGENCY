import { useTranslation } from 'react-i18next'
import logo from '../assets/transpent.png'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="sticky bottom-0 z-[0] bg-black border-t border-white/10 pt-32 pb-32 px-6 md:px-12 min-h-[500px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="relative w-full max-w-[280px] flex items-center">
                 <img src={logo} alt="Prime Marketing" className="w-full h-auto object-contain" />
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
              <li>
                <a
                  className="text-text-secondary hover:text-primary transition-colors text-base"
                  href="https://www.facebook.com/CuiBapAgency/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.resources.facebook')}
                </a>
              </li>
              <li>
                <a
                  className="text-text-secondary hover:text-primary transition-colors text-base"
                  href="https://t.me/Mr_CuiBap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.resources.telegram')}
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
