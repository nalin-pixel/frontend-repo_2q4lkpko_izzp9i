import { useEffect, useState } from 'react'

function useAuth() {
  const token = localStorage.getItem('adm_token')
  const logout = () => {
    localStorage.removeItem('adm_token')
    window.location.href = '/admin'
  }
  return { token, logout }
}

export default function AdminDashboard() {
  const { token, logout } = useAuth()
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/admin/leads`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        if (!res.ok) {
          const msg = await res.json().catch(() => ({ detail: 'Failed to load leads' }))
          throw new Error(msg.detail || 'Failed to load leads')
        }
        const data = await res.json()
        setLeads(data.items || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    if (token) fetchLeads()
  }, [token])

  const filtered = leads.filter(l => {
    const q = query.toLowerCase()
    return [l.name, l.email, l.phone, l.company, l.service, l.budget, l.message]
      .filter(Boolean)
      .some(v => String(v).toLowerCase().includes(q))
  })

  if (!token) {
    window.location.href = '/admin'
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Leads Dashboard</h1>
          <button onClick={logout} className="text-sm text-red-600 hover:underline">Log out</button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search leads..."
                className="w-full sm:w-80 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
              <a
                href="data:text/csv;charset=utf-8,"
                onClick={(e) => {
                  const header = ['Name','Email','Phone','Company','Service','Budget','Message','Created']
                  const rows = filtered.map(l => [l.name,l.email,l.phone||'',l.company||'',l.service||'',l.budget||'',(l.message||'').replace(/\n/g,' '),l.created_at||''])
                  const csv = [header, ...rows].map(r => r.map(v => '"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n')
                  e.currentTarget.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv)
                  e.currentTarget.download = `leads-${new Date().toISOString().slice(0,10)}.csv`
                }}
                className="ml-4 inline-flex items-center px-3 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
              >
                Export CSV
              </a>
            </div>

            <div className="overflow-auto border rounded-lg bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-3 py-2 text-left">Name</th>
                    <th className="px-3 py-2 text-left">Email</th>
                    <th className="px-3 py-2 text-left">Phone</th>
                    <th className="px-3 py-2 text-left">Company</th>
                    <th className="px-3 py-2 text-left">Service</th>
                    <th className="px-3 py-2 text-left">Budget</th>
                    <th className="px-3 py-2 text-left">Message</th>
                    <th className="px-3 py-2 text-left">Created</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="px-3 py-6 text-center text-gray-500">No leads found</td>
                    </tr>
                  ) : (
                    filtered.map((l, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="px-3 py-2">{l.name}</td>
                        <td className="px-3 py-2">{l.email}</td>
                        <td className="px-3 py-2">{l.phone || '-'}</td>
                        <td className="px-3 py-2">{l.company || '-'}</td>
                        <td className="px-3 py-2">{l.service || '-'}</td>
                        <td className="px-3 py-2">{l.budget || '-'}</td>
                        <td className="px-3 py-2 max-w-md truncate" title={l.message}>{l.message || '-'}</td>
                        <td className="px-3 py-2">{l.created_at ? new Date(l.created_at).toLocaleString() : '-'}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
