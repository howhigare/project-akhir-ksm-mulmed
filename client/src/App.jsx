import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import AdminHome from './pages/AdminHome'
import KasirHome from './pages/KasirHome'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [role, setRole] = useState(null)

  const handleLoginSuccess = (selectedRole) => {
    setRole(selectedRole)
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
    setRole(null)
  }

  if (!loggedIn) {
    return <LoginPage onSuccess={handleLoginSuccess} />
  }

  if (role === 'admin') {
    return (
      <AdminHome
        userName="Admin"
        onLogout={handleLogout}
        onNavigate={(page) => console.log('pindah ke halaman:', page)}
      />
    )
  }

  return (
    <KasirHome
      userName="Kasir"
      onLogout={handleLogout}
      onNavigate={(page) => console.log('pindah ke halaman:', page)}
    />
  )
}