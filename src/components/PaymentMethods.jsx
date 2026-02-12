import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const methods = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: 'https://cdn.worldvectorlogo.com/logos/bitcoin.svg',
    color: '#F7931A'
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    icon: 'https://cdn.worldvectorlogo.com/logos/tether-1.svg',
    color: '#50AF95'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'https://cdn.worldvectorlogo.com/logos/ethereum-1.svg',
    color: '#627EEA'
  },
  {
    name: 'Bank Transfer',
    symbol: 'SWIFT/SEPA',
    icon: 'account_balance', // Material Icon
    color: '#FFFFFF'
  }
]

export default function PaymentMethods() {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              {t('paymentMethods.title', 'Flexible Payment Options')}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              {t('paymentMethods.subtitle', 'Seamless transactions with major cryptocurrencies and international gateways.')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
              
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-6 group-hover:border-primary/50 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
                  {method.icon.startsWith('http') ? (
                    <img src={method.icon} alt={method.name} className="w-full h-full object-contain" />
                  ) : (
                    <span className="material-symbols-outlined text-3xl text-white">{method.icon}</span>
                  )}
                </div>
                
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg mb-1">{method.name}</h3>
                  <span className="text-white/40 text-sm font-medium tracking-wider">{method.symbol}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
