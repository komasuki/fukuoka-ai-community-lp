import Header from './components/Header'
import Hero from './components/Hero'
import FounderMessage from './components/FounderMessage'
import WhyJoin from './components/WhyJoin'
import Benefits from './components/Benefits'
import Events from './components/Events'
import HowToJoin from './components/HowToJoin'
import Channels from './components/Channels'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="app loaded">
      <Header />
      <main>
        <Hero />
        <FounderMessage />
        <WhyJoin />
        <Benefits />
        <Events />
        <Channels />
        <HowToJoin />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
