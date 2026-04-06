import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Pricing() {
  const { t } = useTranslation()

  const packages = ['single', 'basic', 'advanced', 'premium']

  const getPackageFeatures = (pkg) => {
    const features = t(`pricing.packages.${pkg}.features`, { returnObjects: true })
    return Object.values(features)
  }

  return (
    <section
      className="py-24 md:py-40 px-6 md:px-12 bg-black min-h-screen relative overflow-hidden"
      id="pricing"
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('pricing.badge')}
          </span>
          <h2 className="text-white text-5xl md:text-7xl font-black mb-8 leading-tight">
            {t('pricing.title')}
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-primary/10 border border-primary/20 p-6 rounded-2xl max-w-4xl text-left backdrop-blur-md"
          >
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary text-3xl shrink-0">info</span>
              <div>
                <p className="text-white font-bold mb-1">{t('pricing.importantTitle')}</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  <strong className="text-white">{t('pricing.agencyAsset')}</strong>{' '}
                  {t('pricing.agencyAssetDesc')}
                  <br />
                  <strong className="text-white">{t('pricing.clientAsset')}</strong>{' '}
                  {t('pricing.clientAssetDesc')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Coverflow Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full py-12"
          >
            {packages.map((pkg, index) => {
              const isHighlighted = pkg === 'advanced'
              const features = getPackageFeatures(pkg)

              return (
                <SwiperSlide key={index} className="!w-auto">
                  <div
                    className={`w-[85vw] max-w-[340px] md:w-[380px] md:max-w-none bg-black/80 backdrop-blur-xl border ${
                      isHighlighted
                        ? 'border-primary shadow-[0_0_50px_rgba(234,88,12,0.25)]'
                        : 'border-white/10'
                    } rounded-[2.5rem] p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-primary/50 transition-colors`}
                  >
                    {/* Top gradient line for highlighted */}
                    {isHighlighted && (
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    )}

                    {/* Package name */}
                    <h3 className="text-white text-2xl font-black mb-2">
                      {t(`pricing.packages.${pkg}.name`)}
                    </h3>

                    {/* Price */}
                    <div className="mb-8">
                      <span className="text-5xl font-black text-white tracking-tight">
                        {t(`pricing.packages.${pkg}.price`)}
                      </span>
                      {t(`pricing.packages.${pkg}.period`, { defaultValue: '' }) && (
                        <span className="text-white/50 text-sm ml-1">
                          {t(`pricing.packages.${pkg}.period`)}
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-10 flex-1 text-sm">
                      {features.map((feature, i) => {
                        const isBlueTick =
                          feature.includes('Blue Tick') ||
                          feature.includes('dấu tích xanh') ||
                          feature.includes('蓝V') ||
                          feature.includes('Синяя галочка')
                        return (
                          <li
                            key={i}
                            className={`flex items-center gap-3 ${
                              isBlueTick ? 'font-bold text-white' : 'text-white/70'
                            }`}
                          >
                            <span
                              className={`material-symbols-outlined text-primary text-lg shrink-0 ${
                                isBlueTick ? 'fill-1' : ''
                              }`}
                            >
                              {isBlueTick ? 'verified' : 'check_circle'}
                            </span>
                            {feature}
                          </li>
                        )
                      })}
                    </ul>

                    {/* CTA */}
                    <motion.a
                      href="#contact-modal"
                      whileHover={
                        isHighlighted
                          ? { scale: 1.05, backgroundColor: '#fff', color: '#000' }
                          : { scale: 1.03 }
                      }
                      whileTap={{ scale: 0.95 }}
                      className={`block w-full py-4 text-center rounded-2xl font-bold text-lg transition-all relative z-10 ${
                        isHighlighted
                          ? 'bg-primary text-white shadow-lg shadow-primary/20'
                          : 'border border-white/10 text-white hover:bg-white/5'
                      }`}
                    >
                      {t(`pricing.packages.${pkg}.cta`)}
                    </motion.a>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </motion.div>

        {/* Add-ons */}
        <div className="mt-12">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-2xl font-black mb-10 text-center"
          >
            {t('pricing.addonsTitle')}
          </motion.h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {['image', 'video'].map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 0 40px rgba(234,88,12,0.2)',
                  transition: { duration: 0.3 },
                }}
                className="bg-black/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex items-center justify-between group relative overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-4xl">
                      {addon === 'image' ? 'image' : 'movie'}
                    </span>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg">
                      {t(`pricing.addons.${addon}.title`)}
                    </h5>
                    <p className="text-white/50 text-sm">{t(`pricing.addons.${addon}.desc`)}</p>
                  </div>
                </div>
                <div className="text-right relative z-10">
                  <p className="text-primary text-2xl font-black">
                    {t(`pricing.addons.${addon}.price`)}
                  </p>
                  <p className="text-white/40 text-[10px] uppercase font-bold">
                    {t(`pricing.addons.${addon}.label`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
