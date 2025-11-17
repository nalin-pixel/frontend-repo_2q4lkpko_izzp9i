import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <footer className="border-t py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Arsya Digital Indonesia. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
