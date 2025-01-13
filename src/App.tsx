import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import TransactionsBySchool from './pages/TransactionsBySchool'
import TransactionStatus from './pages/TransactionStatus'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="transactions-by-school" element={<TransactionsBySchool />} />
        <Route path="transaction-status" element={<TransactionStatus />} />
      </Route>
    </Routes>
  )
}

export default App
