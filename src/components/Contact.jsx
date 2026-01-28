import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section
      className="py-24 md:py-40 px-6 md:px-12 bg-surface-dark/40 border-y border-border-dark"
      id="contact"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
              {t('contact.badge')}
            </span>
            <h2 className="text-white text-5xl font-black mb-8 leading-tight">
              {t('contact.title')}
            </h2>
            <p className="text-text-secondary text-xl mb-12">
              {t('contact.subtitle')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <a className="flex items-center gap-5 group" href="https://t.me/Prime_MarketingPro" target='_blank'>
                <div className="w-14 h-14 rounded-full bg-[#229ED9]/10 flex items-center justify-center text-[#229ED9] group-hover:bg-[#229ED9] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">send</span>
                </div>
                <div>
                  <p className="text-white font-bold">{t('contact.telegramSupport')}</p>
                  <p className="text-text-secondary text-sm">
                    @Prime_MarketingPro
                  </p>
                </div>
              </a>
              <a className="flex items-center gap-5 group" href="https://wa.me/84967682097"
  target="_blank"
  rel="noopener noreferrer">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">chat_bubble</span>
                </div>
                <div>
                  <p className="text-white font-bold">{t('contact.whatsappBusiness')}</p>
                  <p className="text-text-secondary text-sm">
                    +84967682097
                  </p>
                </div>
              </a>
              <a className="flex items-center gap-5 group" href="mailto:Helloagen1@gmail.com">
                <div className="w-14 h-14 rounded-full bg-[#EA4335]/10 flex items-center justify-center text-[#EA4335] group-hover:bg-[#EA4335] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-white font-bold">{t('contact.emailSupport')}</p>
                  <p className="text-text-secondary text-sm">
                    Helloagen1@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-background-dark p-8 md:p-12 rounded-[2.5rem] border border-border-dark shadow-2xl">
            <form className="space-y-6" action="mailto:Helloagen1@gmail.com" method="post" encType="text/plain">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
                    {t('contact.form.fullName')}
                  </label>
                  <input
                    className="w-full bg-surface-dark border-border-dark rounded-xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t('contact.form.fullNamePlaceholder')}
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
                    {t('contact.form.email')}
                  </label>
                  <input
                    className="w-full bg-surface-dark border-border-dark rounded-xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t('contact.form.emailPlaceholder')}
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
                    {t('contact.form.telegram')}
                  </label>
                  <input
                    className="w-full bg-surface-dark border-border-dark rounded-xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t('contact.form.telegramPlaceholder')}
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
                    {t('contact.form.service')}
                  </label>
                  <select className="w-full bg-surface-dark border-border-dark rounded-xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                    <option>{t('contact.form.serviceOptions.managed')}</option>
                    <option>{t('contact.form.serviceOptions.rentals')}</option>
                    <option>{t('contact.form.serviceOptions.marketplace')}</option>
                    <option>{t('contact.form.serviceOptions.enterprise')}</option>
                  </select>
                </div>
              </div>
              <button
                className="w-full py-5 rounded-2xl bg-primary text-white font-black text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/40"
                type="submit"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
