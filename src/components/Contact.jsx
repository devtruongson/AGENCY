import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telegram: '',
    service: 'Managed Ad Packages'
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const response = await fetch('https://publish-mail.fstack.io.vn/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: "Helloagen1@gmail.com",
          subject: `New Contact Request from ${formData.fullName}`,
          html: `
            <h3>New Contact Request</h3>
            <p><strong>Name:</strong> ${formData.fullName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Telegram:</strong> ${formData.telegram}</p>
            <p><strong>Service:</strong> ${formData.service}</p>
          `
        }),
      })

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will contact you shortly.' })
        setFormData({ fullName: '', email: '', telegram: '', service: 'Managed Ad Packages' })
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus({ type: 'error', message: 'An error occurred. Please check your connection and try again.' })
    } finally {
      setLoading(false)
    }
  }

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
                    {t('contact.form.fullName')}
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-surface-dark border-border-dark rounded-xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t('contact.form.fullNamePlaceholder')}
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
                    {t('contact.form.email')}
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-dark border-border-dark rounded-xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t('contact.form.emailPlaceholder')}
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
                    {t('contact.form.telegram')}
                  </label>
                  <input
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    className="w-full bg-surface-dark border-border-dark rounded-xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t('contact.form.telegramPlaceholder')}
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
                    {t('contact.form.service')}
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-surface-dark border-border-dark rounded-xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  >
                    <option value="Managed Ad Packages">{t('contact.form.serviceOptions.managed')}</option>
                    <option value="Account Rentals">{t('contact.form.serviceOptions.rentals')}</option>
                    <option value="Asset Marketplace">{t('contact.form.serviceOptions.marketplace')}</option>
                    <option value="Enterprise Solutions">{t('contact.form.serviceOptions.enterprise')}</option>
                  </select>
                </div>
              </div>

              {status && (
                <div className={`p-4 rounded-xl text-sm font-bold ${
                  status.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                className="w-full py-5 rounded-2xl bg-primary text-white font-black text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/40 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  t('contact.form.submit')
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
