import { useTranslation } from 'react-i18next'

export default function ContactModal() {
  const { t } = useTranslation()

  return (
    <div
      className="fixed inset-0 z-[100] hidden items-center justify-center bg-background-dark/80 backdrop-blur-md p-6"
      id="contact-modal"
    >
      <div className="relative w-full max-w-xl bg-surface-dark border border-border-dark rounded-[2rem] p-8 md:p-12 shadow-[0_0_100px_rgba(255,149,0,0.1)]">
        <a
          className="absolute top-6 right-6 text-text-secondary hover:text-white"
          href="#"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </a>
        <div className="mb-8">
          <h3 className="text-white text-3xl font-black mb-3">
            {t('contactModal.title')}
          </h3>
          <p className="text-text-secondary">
            {t('contactModal.subtitle')}
          </p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
              {t('contactModal.projectDesc')}
            </label>
            <textarea
              className="w-full bg-background-dark border-border-dark rounded-xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder={t('contactModal.projectPlaceholder')}
              rows="4"
            ></textarea>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
              {t('contactModal.contactMethod')}
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="cursor-pointer">
                <input
                  defaultChecked
                  className="hidden peer"
                  name="contact-method"
                  type="radio"
                />
                <div className="w-full py-4 text-center border border-border-dark rounded-xl text-text-secondary peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary font-bold transition-all">
                  {t('contactModal.telegram')}
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  className="hidden peer"
                  name="contact-method"
                  type="radio"
                />
                <div className="w-full py-4 text-center border border-border-dark rounded-xl text-text-secondary peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary font-bold transition-all">
                  {t('contactModal.whatsapp')}
                </div>
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
              {t('contactModal.handle')}
            </label>
            <input
              className="w-full bg-background-dark border-border-dark rounded-xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder={t('contactModal.handlePlaceholder')}
              type="text"
            />
          </div>
          <button
            className="w-full py-5 rounded-2xl bg-primary text-white font-black text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/40"
            type="submit"
          >
            {t('contactModal.submit')}
          </button>
        </form>
      </div>
    </div>
  )
}
