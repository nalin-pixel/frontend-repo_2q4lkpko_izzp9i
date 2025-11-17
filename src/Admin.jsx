import { useEffect, useState } from 'react'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'

export default function Admin() {
  const [authed, setAuthed] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('adm_token')
    if (!token) {
      setChecking(false)
      return
    }
    const verify = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/auth/me`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        setAuthed(res.ok)
      } catch {
        setAuthed(false)
      } finally {
        setChecking(false)
      }
    }
    verify()
  }, [])

  if (checking) return <div className="min-h-screen flex items-center justify-center text-gray-600">Checking session...</div>

  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />

  return <AdminDashboard />
}
