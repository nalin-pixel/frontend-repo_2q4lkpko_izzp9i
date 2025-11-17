import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          service: data.service,
          budget: data.budget || null,
          message: data.message || null,
          source: 'website',
        })
      })

      if (!res.ok) throw new Error('Failed to submit')
      const out = await res.json()
      setStatus({ type: 'success', message: 'Thanks! We will get back to you shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: 'Submission failed. Please try again.' })
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Start your project</h2>
            <p className="mt-2 text-gray-600">Tell us about your goals, timeline, and budget. We’ll reply within 1 business day.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Websites with modern stacks (React, Next.js, Vite)</li>
              <li>• Custom software and API development</li>
              <li>• UX/UI design and design systems</li>
              <li>• Ongoing maintenance and support</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Service</label>
                <select name="service" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <option>Website Development</option>
                  <option>Software Development</option>
                  <option>Mobile App</option>
                  <option>UI/UX Design</option>
                  <option>Maintenance</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Budget</label>
                <input name="budget" placeholder="e.g. $5k - $10k" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md">
              Send Inquiry
            </button>
            {status && (
              <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
