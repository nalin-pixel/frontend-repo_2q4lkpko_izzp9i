export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Build Outstanding Websites & Software
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Arsya Digital Indonesia helps businesses launch beautiful, fast, and scalable digital products.
              From landing pages to complex systems, we design, build, and maintain with care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700">
                Start a Project
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 font-semibold hover:bg-gray-50">
                Our Services
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4">
              <div>
                <dt className="text-2xl font-bold text-gray-900">50+</dt>
                <dd className="text-sm text-gray-600">Projects Delivered</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-gray-900">8+ yrs</dt>
                <dd className="text-sm text-gray-600">Experience</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-gray-900">100%</dt>
                <dd className="text-sm text-gray-600">Client Focus</dd>
              </div>
            </dl>
          </div>
          <div>
            <div className="relative rounded-xl border bg-white p-4 shadow-xl">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-600 to-purple-600" />
              <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-blue-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
