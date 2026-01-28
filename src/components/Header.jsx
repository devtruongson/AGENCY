import { useTranslation } from 'react-i18next'
import logo from '../assets/transpent.png'

export default function Header() {
  const { t, i18n } = useTranslation()

  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ru', name: 'RU', flag: '🇷🇺' },
  ]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    // Update URL parameter
    const url = new URL(window.location)
    url.searchParams.set('lang', lng)
    window.history.pushState({}, '', url)
  }

  return (
    <header className="border-b border-solid border-border-dark bg-background-dark/95 backdrop-blur sticky top-0 z-50">
      <div className="px-6 md:px-12 py-5 max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Prime Marketing" className="h-16 md:h-20 w-auto object-contain" />
          </div>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
          <div className="flex items-center gap-9">
            <a
              className="text-white/80 text-sm font-semibold hover:text-primary transition-colors"
              href="#services"
            >
              {t('header.services')}
            </a>
            <a
              className="text-white/80 text-sm font-semibold hover:text-primary transition-colors"
              href="#comparison"
            >
              {t('header.whyPrime')}
            </a>
            <a
              className="text-white/80 text-sm font-semibold hover:text-primary transition-colors"
              href="#pricing"
            >
              {t('header.pricing')}
            </a>
            <a
              className="text-white/80 text-sm font-semibold hover:text-primary transition-colors"
              href="#contact"
            >
              {t('header.contact')}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-surface-dark border border-border-dark rounded-lg px-2 py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-2 py-1 text-xs font-semibold rounded transition-all ${
                    i18n.language === lang.code
                      ? 'bg-primary text-white'
                      : 'text-text-secondary hover:text-white'
                  }`}
                  title={lang.name}
                >
                  {lang.flag} {lang.name}
                </button>
              ))}
            </div>
            <a 
              href="#contact-modal"
              className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-7 bg-primary hover:bg-orange-600 transition-all text-white text-sm font-bold tracking-wide shadow-lg shadow-orange-900/20"
            >
              <span className="truncate">{t('header.clientLogin')}</span>
            </a>
          </div>
        </div>
        <div className="md:hidden text-white">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </div>
      </div>
    </header>
  )
}
