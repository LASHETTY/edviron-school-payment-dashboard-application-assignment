import { useState, useEffect } from 'react'
import TransactionTable from '../components/TransactionTable'
import { Transaction } from '../types'

export default function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  // Mock data for demonstration
  useEffect(() => {
    const mockTransactions: Transaction[] = [
      {
        _id: '1',
        collect_id: '6730d9b926c65c39b0ee0149',
        status: 'SUCCESS',
        payment_method: 'upi',
        gateway: 'CASHFREE',
        transaction_amount: 10100,
        bank_reference: 'YESBNK221'
      },
      {
        _id: '2',
        collect_id: '6730d9b926c65c39b0ee014a',
        status: 'PENDING',
        payment_method: 'credit_card',
        gateway: 'PHONEPE',
        transaction_amount: 22100,
        bank_reference: 'YESBNK222'
      },
      // Add more mock transactions as needed
    ]

    setTimeout(() => {
      setTransactions(mockTransactions)
      setIsLoading(false)
    }, 1000)
  }, [])

  const filteredTransactions = transactions.filter(transaction => {
    if (statusFilter !== 'all' && transaction.status !== statusFilter) {
      return false
    }
    // Add date filtering logic here when implemented
    return true
  })

  return (
    <div className="space-y-6">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                id="status"
                name="status"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="SUCCESS">Success</option>
                <option value="PENDING">Pending</option>
                <option value="FAILURE">Failed</option>
              </select>
            </div>

            <div>
              <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                name="start-date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                name="end-date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <TransactionTable transactions={filteredTransactions} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}
