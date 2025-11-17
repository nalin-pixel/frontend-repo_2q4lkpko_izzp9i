import { Code, Smartphone, Paintbrush, Wrench } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Website Development',
    desc: 'Modern, responsive websites optimized for speed, SEO, and conversions.'
  },
  {
    icon: Smartphone,
    title: 'Software Development',
    desc: 'Custom web apps, portals, and internal tools tailored to your workflows.'
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Design',
    desc: 'Clean, user-centered design systems that make your product a joy to use.'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    desc: 'Reliable, proactive care to keep your site or app healthy and secure.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Services</h2>
          <p className="mt-2 text-gray-600">Everything you need to go from idea to launch and beyond.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
