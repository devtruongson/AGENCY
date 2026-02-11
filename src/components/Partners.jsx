import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const partners = [
  { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png', width: 80 },
  { name: 'Binance', logo: 'https://brandpalettes.com/wp-content/uploads/2021/03/Binance-Logo.png', width: 100 },
  { name: 'Meta', logo: 'https://static.vecteezy.com/system/resources/previews/055/210/885/non_2x/meta-logo-free-download-meta-logo-free-png.png', width: 90 },
  { name: 'TikTok', logo: 'https://p16-tiktokcdn-com.akamaized.net/obj/tiktok-obj/1e2e6ef88378fb5da3a0e2937df4d6d7', width: 90 },
  { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/960px-Shopify_logo_2018.svg.png', width: 90 },
   { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png', width: 80 },
  { name: 'Binance', logo: 'https://brandpalettes.com/wp-content/uploads/2021/03/Binance-Logo.png', width: 100 },
  { name: 'Meta', logo: 'https://static.vecteezy.com/system/resources/previews/055/210/885/non_2x/meta-logo-free-download-meta-logo-free-png.png', width: 90 },
  { name: 'TikTok', logo: 'https://p16-tiktokcdn-com.akamaized.net/obj/tiktok-obj/1e2e6ef88378fb5da3a0e2937df4d6d7', width: 90 },
  { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/960px-Shopify_logo_2018.svg.png', width: 90 },
   { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png', width: 80 },
  { name: 'Binance', logo: 'https://brandpalettes.com/wp-content/uploads/2021/03/Binance-Logo.png', width: 100 },
  { name: 'Meta', logo: 'https://static.vecteezy.com/system/resources/previews/055/210/885/non_2x/meta-logo-free-download-meta-logo-free-png.png', width: 90 },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.pngg', width: 80 },
  { name: 'TikTok', logo: 'https://p16-tiktokcdn-com.akamaized.net/obj/tiktok-obj/1e2e6ef88378fb5da3a0e2937df4d6d7', width: 90 },
  { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/960px-Shopify_logo_2018.svg.png', width: 90 },
  
   { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png', width: 80 },
  { name: 'Binance', logo: 'https://brandpalettes.com/wp-content/uploads/2021/03/Binance-Logo.png', width: 100 },
  { name: 'Meta', logo: 'https://static.vecteezy.com/system/resources/previews/055/210/885/non_2x/meta-logo-free-download-meta-logo-free-png.png', width: 90 },
  { name: 'TikTok', logo: 'https://p16-tiktokcdn-com.akamaized.net/obj/tiktok-obj/1e2e6ef88378fb5da3a0e2937df4d6d7', width: 90 },
  { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/960px-Shopify_logo_2018.svg.png', width: 90 },
   { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png', width: 80 },
  { name: 'Binance', logo: 'https://brandpalettes.com/wp-content/uploads/2021/03/Binance-Logo.png', width: 100 },
  { name: 'Meta', logo: 'https://static.vecteezy.com/system/resources/previews/055/210/885/non_2x/meta-logo-free-download-meta-logo-free-png.png', width: 90 },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.pngg', width: 80 },
  { name: 'TikTok', logo: 'https://p16-tiktokcdn-com.akamaized.net/obj/tiktok-obj/1e2e6ef88378fb5da3a0e2937df4d6d7', width: 90 },
  { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/960px-Shopify_logo_2018.svg.png', width: 90 },
  
]

export default function Partners() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-black overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full opacity-20" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            <span className="text-white">Trusted</span> <span className="text-primary">Partners</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base">
            {t('partners.subtitle')}
          </p>
        </div>

        <div className="relative w-full overflow-hidden mask-linear-fade">
          {/* Left/Right Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-30" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-30" />

          <motion.div 
            className="flex items-center gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="w-[160px] h-[80px] bg-white rounded-2xl flex items-center justify-center p-6 shadow-lg shadow-white/5 hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  style={{ width: partner.width }}
                  className="object-contain max-h-full opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Third set to ensure smoothness on wide screens if needed */}
             {partners.map((partner, index) => (
              <div 
                key={`extra-${index}`}
                className="w-[160px] h-[80px] bg-white rounded-2xl flex items-center justify-center p-6 shadow-lg shadow-white/5 hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  style={{ width: partner.width }}
                  className="object-contain max-h-full opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
