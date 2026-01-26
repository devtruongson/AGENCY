import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = t('faq.questions', { returnObjects: true })

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-background-dark" id="faq">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('faq.badge')}
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight">
            {t('faq.title')}
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface-dark border border-border-dark rounded-2xl overflow-hidden transition-all hover:border-primary/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <h3 className="text-white text-lg font-bold pr-8 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <span
                  className={`material-symbols-outlined text-primary text-3xl transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-text-secondary text-lg mb-6">
            {t('faq.stillHaveQuestions')}
          </p>
          <a
            href="#contact-modal"
            className="inline-flex items-center justify-center rounded-xl h-14 px-10 bg-primary hover:bg-orange-600 transition-all text-white text-lg font-bold shadow-xl shadow-orange-900/30"
          >
            <span>{t('faq.contactButton')}</span>
            <span className="material-symbols-outlined ml-3">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
