import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-600"></div>
            <span className="font-bold text-gray-900">Arsya Digital Indonesia</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollTo('services')} className="text-gray-700 hover:text-blue-600">Services</button>
            <button onClick={() => scrollTo('portfolio')} className="text-gray-700 hover:text-blue-600">Portfolio</button>
            <button onClick={() => scrollTo('contact')} className="text-gray-700 hover:text-blue-600">Contact</button>
            <a href="/test" className="text-gray-500 hover:text-gray-700">System Test</a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollTo('services')} className="text-left text-gray-700">Services</button>
              <button onClick={() => scrollTo('portfolio')} className="text-left text-gray-700">Portfolio</button>
              <button onClick={() => scrollTo('contact')} className="text-left text-gray-700">Contact</button>
              <a href="/test" className="text-left text-gray-500">System Test</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
