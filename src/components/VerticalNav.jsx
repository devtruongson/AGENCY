import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function VerticalNav() {
  const { t, i18n } = useTranslation()
  const [activeSection, setActiveSection] = useState('')
  const [hovered, setHovered] = useState(null)

  const links = [
    { 
      id: 'services', 
      icon: 'grid_view', 
      label: t('header.services'), 
      href: '#services',
      subItems: [
        { label: 'Rent / Sell Accounts', href: '#marketplace' },
        { label: 'Create Campaigns', href: '#pricing' },
        { label: 'Design Services', href: '#design-services' }
      ]
    },
    { id: 'why', icon: 'psychology', label: t('header.whyPrime'), href: '#comparison' },
    { id: 'pricing', icon: 'payments', label: t('header.pricing'), href: '#pricing' },
    { id: 'contact', icon: 'mail', label: t('header.contact'), href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section)
                break
            }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [links])



  return (
    <motion.div 
      className="fixed right-8 bottom-[50px] z-50 flex flex-col items-center gap-6 hidden md:flex"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      {/* Navigation Pills */}
      <div className="flex flex-col gap-4 bg-black/40 backdrop-blur-xl border border-white/10 p-3 rounded-full shadow-2xl shadow-black/50">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            
            return (
                <div key={link.id} className="relative group">
                     <motion.a
                        href={link.href}
                        className={`relative p-3 rounded-full transition-all duration-300 flex items-center justify-center ${
                            isActive ? 'bg-primary text-white shadow-[0_0_15px_rgba(234,88,12,0.5)]' : 'hover:bg-white/10 text-white/60 hover:text-white'
                        }`}
                        onHoverStart={() => setHovered(link.id)}
                        onHoverEnd={() => setHovered(null)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        >
                        <span className="material-symbols-outlined text-2xl">
                            {link.icon}
                        </span>
                    </motion.a>

                    {/* Tooltip Label (Left Side) */}
                    <AnimatePresence>
                        {hovered === link.id && !link.subItems && (
                            <motion.div
                                className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-1 bg-black/80 text-white text-xs font-bold rounded-lg border border-white/10 whitespace-nowrap backdrop-blur-md"
                                initial={{ opacity: 0, x: 10, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 10, scale: 0.8 }}
                            >
                                {link.label}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    {/* Sub-menu (Flyout Left) */}
                    <AnimatePresence>
                         {hovered === link.id && link.subItems && (
                            <motion.div
                                className="absolute right-full top-0 mr-4 w-56 flex flex-col gap-1 p-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50"
                                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                onMouseEnter={() => setHovered(link.id)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {link.subItems.map((sub, i) => (
                                    <a 
                                        key={i}
                                        href={sub.href}
                                        className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-right"
                                    >
                                        {sub.label}
                                    </a>
                                ))}
                            </motion.div>
                         )}
                    </AnimatePresence>

                </div>
            )
          })}
          {['en', 'ru', 'zh'].map((lang) => (
            <motion.button
              key={lang}
              onClick={() => i18n.changeLanguage(lang)}
              className={`border relative p-3 rounded-full transition-all duration-300 flex items-center justify-center uppercase text-xs font-bold ${
                i18n.language === lang
                  ? 'bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                  : 'border-white/10 hover:bg-white/10 text-white/60 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang}
            </motion.button>
          ))}
      </div>
      

      {/* Language Switcher */}
      
      
       {/* App Logo / Home Link at Bottom */}
       <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-black italic shadow-lg shadow-primary/20 hover:bg-orange-600 transition-colors">
        P
      </a>

    </motion.div>
  )
}
