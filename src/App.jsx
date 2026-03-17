import './App.css'
import Cards from './components/cards'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import QualityBanner from './components/QualityBanner'
import Services from './components/services'
import ShoppingCart from './components/ShoppingCart'

function App() {


  return (
    <>
      <Navbar />
      <div className='p-4 bg-blue-50'>

       <Hero />
       <Cards />
       <Services />
       <FAQ />
       <QualityBanner />
       <Footer />
       <ShoppingCart />
      </div>
    </>
  )
}

export default App
