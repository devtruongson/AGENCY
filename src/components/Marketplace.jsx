import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Marketplace() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('accounts')

  const tabs = [
    { id: 'accounts', label: t('marketplace.tabs.accounts'), icon: 'account_circle' },
    { id: 'bm', label: t('marketplace.tabs.bm'), icon: 'business' },
    { id: 'fanpage', label: t('marketplace.tabs.fanpage'), icon: 'groups' },
    { id: 'profiles', label: t('marketplace.tabs.profiles'), icon: 'badge' },
    { id: 'verification', label: t('marketplace.tabs.verification'), icon: 'verified' },
  ]

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-black min-h-screen relative overflow-hidden" id="marketplace">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary-blue/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('marketplace.badge')}
          </span>
          <h2 className="text-white text-5xl md:text-7xl font-black mb-8 leading-tight">
            {t('marketplace.title')}
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            {t('marketplace.subtitle')}
          </p>
        </motion.div>

        {/* 3D Tabs Rail */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 perspective-1000">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.1, z: 20 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md border ${
                activeTab === tab.id
                  ? 'bg-primary text-white border-primary shadow-[0_0_30px_rgba(234,88,12,0.4)]'
                  : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <span className="material-symbols-outlined text-2xl">{tab.icon}</span>
              <span className="uppercase tracking-wider text-sm">{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* 3D Carousel Content */}
        <div className="w-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    transition={{ duration: 0.5 }}
                >
                    {activeTab === 'accounts' && <AccountCarousel />}
                    {activeTab === 'bm' && <BMCarousel />}
                    {activeTab === 'fanpage' && <FanpageCarousel />}
                    {activeTab === 'profiles' && <ProfileCarousel />}
                    {activeTab === 'verification' && <VerificationCarousel />}
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

// Carousel Styles
const swiperSettings = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: { clickable: true },
    modules: [EffectCoverflow, Pagination, Navigation],
    className: "w-full py-12"
}

const Card = ({ children, highlighted = false }) => (
    <div className={`w-[85vw] max-w-[350px] md:w-[400px] md:max-w-none bg-black/80 backdrop-blur-xl border ${highlighted ? 'border-primary shadow-[0_0_50px_rgba(234,88,12,0.2)]' : 'border-white/10'} rounded-[2.5rem] p-8 md:p-10 h-full flex flex-col relative overflow-hidden group hover:border-primary/50 transition-colors`}>
        {highlighted && <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />}
        {children}
    </div>
)

const OrderButton = ({ t }) => (
    <motion.a
        href="#contact-modal"
        className="mt-auto block w-full py-4 text-center rounded-2xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 relative overflow-hidden z-10"
        whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
        whileTap={{ scale: 0.95 }}
    >
        {t('marketplace.orderNow')}
    </motion.a>
)


// Account Carousel
function AccountCarousel() {
  const { t } = useTranslation()
  const accounts = t('marketplace.accounts.items', { returnObjects: true })

  return (
    <Swiper {...swiperSettings}>
      {accounts.map((account, index) => (
        <SwiperSlide key={index} className="!w-auto">
           <Card>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                    <span className="material-symbols-outlined text-primary text-3xl">monetization_on</span>
                </div>
                <h3 className="text-white text-3xl font-black mb-2 leading-none">{account.name}</h3>
                <p className="text-white/50 text-sm mb-8">{account.description}</p>
                
                <div className="space-y-4 mb-10">
                    {account.options.map((option, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-white font-bold">{option.limit}</span>
                        <span className="text-primary text-xl font-black">{option.price}</span>
                    </div>
                    ))}
                </div>
                <OrderButton t={t} />
           </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

function BMCarousel() {
    const { t } = useTranslation()
    const packages = t('marketplace.bm.packages', { returnObjects: true })
  
    return (
      <Swiper {...swiperSettings}>
        {packages.map((pkg, index) => (
          <SwiperSlide key={index} className="!w-auto">
             <Card highlighted={pkg.highlighted}>
                  <div className="text-center mb-8">
                      <span className="text-primary text-5xl font-black block mb-2">{pkg.price}</span>
                      <h3 className="text-white text-2xl font-bold">{pkg.name}</h3>
                      <p className="text-white/50 text-sm">{pkg.accounts}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-10">
                      {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/70">
                          <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                          {feature}
                      </li>
                      ))}
                  </ul>
                  <OrderButton t={t} />
             </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }

  function FanpageCarousel() {
    const { t } = useTranslation()
    const tiers = t('marketplace.fanpage.tiers', { returnObjects: true })
  
    return (
      <Swiper {...swiperSettings}>
        {tiers.map((tier, index) => (
          <SwiperSlide key={index} className="!w-auto">
             <Card>
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 animate-pulse">
                    <span className="material-symbols-outlined text-primary text-4xl">groups</span>
                </div>
                <div className="text-center mb-8">
                    <h3 className="text-white text-2xl font-black mb-2">{tier.range}</h3>
                    <p className="text-white/50 text-sm">{tier.followers}</p>
                </div>
                <div className="text-center text-primary text-5xl font-black mb-10">{tier.price}</div>
                <OrderButton t={t} />
             </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }

  function ProfileCarousel() {
    const { t } = useTranslation()
    const profiles = t('marketplace.profiles.types', { returnObjects: true })
  
    return (
      <Swiper {...swiperSettings}>
        {profiles.map((profile, index) => (
          <SwiperSlide key={index} className="!w-auto">
             <Card>
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-white text-2xl">person</span>
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-bold leading-none mb-1">{profile.name}</h3>
                        <span className="text-primary font-black text-2xl">{profile.price}</span>
                    </div>
                </div>
                <p className="text-white/50 text-sm mb-8 min-h-[40px]">{profile.description}</p>
                <ul className="space-y-3 mb-10">
                    {profile.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                        <span className="material-symbols-outlined text-primary text-sm">check</span>
                        {feature}
                    </li>
                    ))}
                </ul>
                <OrderButton t={t} />
             </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }

  function VerificationCarousel() {
    const { t } = useTranslation()
    const services = t('marketplace.verification.services', { returnObjects: true })
  
    return (
      <Swiper {...swiperSettings}>
        {services.map((service, index) => (
          <SwiperSlide key={index} className="!w-auto">
             <Card highlighted>
                <div className="flex items-center gap-6 mb-8">
                    <span className="material-symbols-outlined text-primary text-6xl fill-1 drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]">
                        verified
                    </span>
                    <div>
                        <h3 className="text-white text-2xl font-black">{service.platform}</h3>
                        <p className="text-white/50 text-sm">Blue Tick Verification</p>
                    </div>
                </div>
                <div className="text-5xl font-black text-white mb-10 tracking-tight">{service.price}</div>
                <ul className="space-y-3 mb-10">
                    {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                        {feature}
                    </li>
                    ))}
                </ul>
                <OrderButton t={t} />
             </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }
