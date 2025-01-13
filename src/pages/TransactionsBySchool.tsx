import { useState, useEffect } from 'react'
import TransactionTable from '../components/TransactionTable'
import { Transaction, School } from '../types'

export default function TransactionsBySchool() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [schools, setSchools] = useState<School[]>([])
  const [selectedSchool, setSelectedSchool] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data for demonstration
  useEffect(() => {
    const mockSchools: School[] = [
      { _id: '67308b27e9bbcdf5f22d24c1', name: 'School A' },
      { _id: '67308b27e9bbcdf5f22d24c2', name: 'School B' },
      // Add more mock schools as needed
    ]

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
      // Add more mock transactions as needed
    ]

    setSchools(mockSchools)
    setTimeout(() => {
      setTransactions(mockTransactions)
      setIsLoading(false)
    }, 1000)
  }, [])

  const handleSchoolChange = (schoolId: string) => {
    setSelectedSchool(schoolId)
    setIsLoading(true)
    // In a real application, you would fetch transactions for the selected school here
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="max-w-xl">
            <label htmlFor="school" className="block text-sm font-medium text-gray-700">
              Select School
            </label>
            <select
              id="school"
              name="school"
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
              value={selectedSchool}
              onChange={(e) => handleSchoolChange(e.target.value)}
            >
              <option value="">Select a school</option>
              {schools.map((school) => (
                <option key={school._id} value={school._id}>
                  {school.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {selectedSchool && (
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <TransactionTable transactions={transactions} isLoading={isLoading} />
          </div>
        </div>
      )}
    </div>
  )
}
