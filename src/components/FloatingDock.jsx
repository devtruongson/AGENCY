import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function FloatingDock() {
  const { t, i18n } = useTranslation()
  const [hovered, setHovered] = useState(null)

  const links = [
    { id: 'services', icon: 'grid_view', label: t('header.services'), href: '#services' },
    { id: 'why', icon: 'psychology', label: t('header.whyPrime'), href: '#comparison' },
    { id: 'pricing', icon: 'payments', label: t('header.pricing'), href: '#pricing' },
    { id: 'contact', icon: 'mail', label: t('header.contact'), href: '#contact' },
  ]

  const changeLanguage = () => {
    const langs = ['en', 'ru', 'zh']
    const currentIndex = langs.indexOf(i18n.language)
    const nextLang = langs[(currentIndex + 1) % langs.length]
    i18n.changeLanguage(nextLang)
  }

  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      {/* Logo Icon */}
      <a href="#" className="p-3 bg-primary rounded-xl text-white font-black italic">
        P
      </a>

      <div className="w-[1px] h-8 bg-white/10 mx-1" />

      {links.map((link) => (
        <motion.a
          key={link.id}
          href={link.href}
          className="relative group p-3 rounded-xl hover:bg-white/10 transition-colors"
          onHoverStart={() => setHovered(link.id)}
          onHoverEnd={() => setHovered(null)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="material-symbols-outlined text-white/80 group-hover:text-white block">
            {link.icon}
          </span>
          
          {/* Tooltip - Desktop Only */}
          {hovered === link.id && (
            <motion.div
              className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs font-bold rounded-lg border border-white/10 whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
            >
              {link.label}
            </motion.div>
          )}
        </motion.a>
      ))}

      <div className="w-[1px] h-8 bg-white/10 mx-1" />

      {/* Language Switcher */}
      <motion.button
        onClick={changeLanguage}
        className="p-3 rounded-xl hover:bg-white/10 text-white/80 hover:text-white font-bold uppercase text-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {i18n.language}
      </motion.button>

      {/* CTA */}
      <motion.a
        href="#contact-modal"
        className="ml-2 px-5 py-2.5 bg-white text-black font-bold rounded-xl hover:bg-gray-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t('header.clientLogin')}
      </motion.a>
    </motion.div>
  )
}
