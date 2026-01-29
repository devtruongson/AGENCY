import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactModal() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    projectDesc: '',
    contactMethod: 'Telegram',
    handle: ''
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
          subject: `New Expert Connection Request (${formData.contactMethod})`,
          html: `
            <h3>New Expert Connection Request</h3>
            <p><strong>Contact Method:</strong> ${formData.contactMethod}</p>
            <p><strong>Handle/ID:</strong> ${formData.handle}</p>
            <p><strong>Project Description:</strong></p>
            <p>${formData.projectDesc}</p>
          `
        }),
      })

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will match you with an expert shortly.' })
        setFormData({ projectDesc: '', contactMethod: 'Telegram', handle: '' })
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
    <div
      className="fixed inset-0 z-[100] hidden items-center justify-center bg-background-dark/80 backdrop-blur-md p-6 target:flex"
      id="contact-modal"
    >
      <div className="relative w-full max-w-xl bg-surface-dark border border-border-dark rounded-[2rem] p-8 md:p-12 shadow-[0_0_100px_rgba(255,149,0,0.1)] max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
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
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
              {t('contactModal.projectDesc')}
            </label>
            <textarea
              name="projectDesc"
              value={formData.projectDesc}
              onChange={handleChange}
              className="w-full bg-background-dark border-border-dark rounded-xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder={t('contactModal.projectPlaceholder')}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">
              {t('contactModal.contactMethod')}
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="cursor-pointer">
                <input
                  className="hidden peer"
                  name="contactMethod"
                  type="radio"
                  value="Telegram"
                  checked={formData.contactMethod === 'Telegram'}
                  onChange={handleChange}
                />
                <div className="w-full py-4 text-center border border-border-dark rounded-xl text-text-secondary peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary font-bold transition-all">
                  {t('contactModal.telegram')}
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  className="hidden peer"
                  name="contactMethod"
                  type="radio"
                  value="WhatsApp"
                  checked={formData.contactMethod === 'WhatsApp'}
                  onChange={handleChange}
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
              name="handle"
              value={formData.handle}
              onChange={handleChange}
              className="w-full bg-background-dark border-border-dark rounded-xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder={t('contactModal.handlePlaceholder')}
              type="text"
              required
            />
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
              t('contactModal.submit')
            )}
          </button>
        </form>

        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-white font-bold mb-6 text-center uppercase tracking-wider text-sm">
            {t('contact.subtitle') ? t('contactModal.orConnectDirectly') || "Hoặc liên hệ trực tiếp" : "Hoặc liên hệ trực tiếp"}
          </p>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a className="flex items-center gap-3 group p-3 rounded-xl hover:bg-white/5 transition-all" href="https://t.me/Prime_MarketingPro" target='_blank'>
                <div className="w-10 h-10 rounded-full bg-[#229ED9]/10 flex items-center justify-center text-[#229ED9] group-hover:bg-[#229ED9] group-hover:text-white transition-all shrink-0">
                  <span className="material-symbols-outlined text-xl">send</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t('contact.telegramSupport')}</p>
                  <p className="text-text-secondary text-xs">
                    @Prime_MarketingPro
                  </p>
                </div>
              </a>
              <a className="flex items-center gap-3 group p-3 rounded-xl hover:bg-white/5 transition-all" href="https://wa.me/84967682097"
  target="_blank"
  rel="noopener noreferrer">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all shrink-0">
                  <span className="material-symbols-outlined text-xl">chat_bubble</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t('contact.whatsappBusiness')}</p>
                  <p className="text-text-secondary text-xs">
                    +84967682097
                  </p>
                </div>
              </a>
              <a className="flex items-center gap-3 group p-3 rounded-xl hover:bg-white/5 transition-all sm:col-span-2 sm:w-1/2 sm:mx-auto" href="mailto:Helloagen1@gmail.com">
                <div className="w-10 h-10 rounded-full bg-[#EA4335]/10 flex items-center justify-center text-[#EA4335] group-hover:bg-[#EA4335] group-hover:text-white transition-all shrink-0">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t('contact.emailSupport')}</p>
                  <p className="text-text-secondary text-xs">
                    Helloagen1@gmail.com
                  </p>
                </div>
              </a> 
           </div>
        </div>
      </div>
    </div>
  )
}
