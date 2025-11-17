export default function Portfolio() {
  const items = [
    { title: 'Corporate Website', tag: 'Web Design' },
    { title: 'E-commerce Platform', tag: 'Web App' },
    { title: 'Internal Dashboard', tag: 'SaaS' },
    { title: 'Mobile Companion', tag: 'Mobile' },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Selected Work</h2>
          <p className="mt-2 text-gray-600">A few examples of what we can build for you.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="group relative rounded-xl border bg-white p-4 shadow-sm overflow-hidden">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-gray-100 to-gray-200" />
              <div className="mt-4">
                <div className="text-sm text-blue-600 font-medium">{it.tag}</div>
                <div className="font-semibold text-gray-900">{it.title}</div>
              </div>
              <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-blue-400 rounded-xl transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
