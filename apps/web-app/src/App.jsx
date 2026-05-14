import { useState } from 'react'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

function App() {
  const [page, setPage] = useState('login')

  if (page === 'register') {
    return <RegisterPage onLogin={() => setPage('login')} />
  }

  return <LoginPage onRegister={() => setPage('register')} />
}

export default App
