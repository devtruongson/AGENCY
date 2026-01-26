import { useState } from 'react'
import { useTranslation } from 'react-i18next'

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
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface-dark/20" id="marketplace">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('marketplace.badge')}
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight">
            {t('marketplace.title')}
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            {t('marketplace.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-surface-dark text-text-secondary border border-border-dark hover:border-primary/50'
              }`}
            >
              <span className="material-symbols-outlined">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'accounts' && <AccountSales />}
          {activeTab === 'bm' && <BusinessManager />}
          {activeTab === 'fanpage' && <FanpageShop />}
          {activeTab === 'profiles' && <ProfileAccounts />}
          {activeTab === 'verification' && <VerificationServices />}
        </div>
      </div>
    </section>
  )
}

// Account Sales Component
function AccountSales() {
  const { t } = useTranslation()
  const accounts = t('marketplace.accounts.items', { returnObjects: true })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {accounts.map((account, index) => (
        <div
          key={index}
          className="bg-background-dark border border-border-dark rounded-3xl p-8 hover:border-primary/50 transition-all"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-white text-2xl font-black mb-2">{account.name}</h3>
              <p className="text-text-secondary text-sm">{account.description}</p>
            </div>
            <span className="material-symbols-outlined text-primary text-4xl">
              monetization_on
            </span>
          </div>
          <div className="space-y-4 mb-8">
            {account.options.map((option, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-surface-dark rounded-xl">
                <span className="text-white font-bold">{option.limit}</span>
                <span className="text-primary text-xl font-black">{option.price}</span>
              </div>
            ))}
          </div>
          <a
            href="#contact-modal"
            className="block w-full py-4 text-center rounded-xl bg-primary/10 border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
          >
            {t('marketplace.orderNow')}
          </a>
        </div>
      ))}
    </div>
  )
}

// Business Manager Component
function BusinessManager() {
  const { t } = useTranslation()
  const packages = t('marketplace.bm.packages', { returnObjects: true })

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {packages.map((pkg, index) => (
        <div
          key={index}
          className={`bg-background-dark border rounded-3xl p-8 hover:border-primary/50 transition-all ${
            pkg.highlighted ? 'border-primary shadow-xl shadow-primary/10' : 'border-border-dark'
          }`}
        >
          <div className="text-center mb-6">
            <h3 className="text-white text-3xl font-black mb-2">{pkg.name}</h3>
            <p className="text-text-secondary text-sm">{pkg.accounts}</p>
          </div>
          <div className="text-center mb-8">
            <span className="text-primary text-4xl font-black">{pkg.price}</span>
          </div>
          <ul className="space-y-3 mb-8">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-text-secondary">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="#contact-modal"
            className={`block w-full py-4 text-center rounded-xl font-bold transition-all ${
              pkg.highlighted
                ? 'bg-primary text-white hover:bg-orange-600'
                : 'bg-surface-dark border border-white/10 text-white hover:bg-white/5'
            }`}
          >
            {t('marketplace.orderNow')}
          </a>
        </div>
      ))}
    </div>
  )
}

// Fanpage Shop Component
function FanpageShop() {
  const { t } = useTranslation()
  const tiers = t('marketplace.fanpage.tiers', { returnObjects: true })

  return (
    <div>
      <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl mb-12">
        <p className="text-white text-center">
          <span className="material-symbols-outlined align-middle mr-2">info</span>
          {t('marketplace.fanpage.note')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className="bg-background-dark border border-border-dark rounded-3xl p-8 text-center hover:border-primary/50 transition-all"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl">groups</span>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">{tier.range}</h3>
            <p className="text-text-secondary text-sm mb-6">{tier.followers}</p>
            <div className="text-primary text-3xl font-black mb-8">{tier.price}</div>
            <a
              href="#contact-modal"
              className="block w-full py-3 text-center rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
            >
              {t('marketplace.orderNow')}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

// Profile Accounts Component
function ProfileAccounts() {
  const { t } = useTranslation()
  const profiles = t('marketplace.profiles.types', { returnObjects: true })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="bg-background-dark border border-border-dark rounded-3xl p-8 hover:border-primary/50 transition-all"
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary-blue flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white text-3xl">person</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white text-xl font-bold mb-2">{profile.name}</h3>
              <p className="text-text-secondary text-sm mb-4">{profile.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-primary text-3xl font-black">{profile.price}</span>
              </div>
            </div>
          </div>
          <ul className="space-y-2 mb-6">
            {profile.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                <span className="material-symbols-outlined text-primary text-sm">check</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="#contact-modal"
            className="block w-full py-3 text-center rounded-xl bg-primary text-white font-bold hover:bg-orange-600 transition-all"
          >
            {t('marketplace.orderNow')}
          </a>
        </div>
      ))}
    </div>
  )
}

// Verification Services Component
function VerificationServices() {
  const { t } = useTranslation()
  const services = t('marketplace.verification.services', { returnObjects: true })

  return (
    <div>
      <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl mb-12 text-center">
        <p className="text-white text-lg">
          <span className="material-symbols-outlined align-middle mr-2 fill-1">verified</span>
          {t('marketplace.verification.note')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-background-dark border border-border-dark rounded-3xl p-10 hover:border-primary/50 transition-all group"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-5xl fill-1">
                  verified
                </span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-black mb-1">{service.platform}</h3>
                <p className="text-text-secondary">{t('marketplace.verification.blueTick')}</p>
              </div>
            </div>
            <div className="mb-8">
              <span className="text-primary text-5xl font-black">{service.price}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#contact-modal"
              className="block w-full py-4 text-center rounded-xl bg-primary text-white font-black text-lg hover:bg-orange-600 transition-all shadow-lg shadow-primary/20"
            >
              {t('marketplace.orderNow')}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
