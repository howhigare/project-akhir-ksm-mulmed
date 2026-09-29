import { useState } from 'react'
import LoginPage from './pages/LoginPage'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [role, setRole] = useState(null)

  if (!loggedIn) {
    return <LoginPage onSuccess={(r) => { setRole(r); setLoggedIn(true) }} />
  }

  return (
    <div style={{ padding: 32 }}>
      <p>Role dipilih: {role}</p>
      <button onClick={() => setLoggedIn(false)}>Kembali</button>
    </div>
  )
}