import ComparisonCards from './components/ComparisonCards'
import ComparisonTable from './components/ComparisonTable'
import Contact from './components/Contact'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import ServiceFeeTiers from './components/ServiceFeeTiers'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <ComparisonCards />
      <ComparisonTable />
      <ServiceFeeTiers />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <ContactModal />
    </div>
  )
}

export default App
