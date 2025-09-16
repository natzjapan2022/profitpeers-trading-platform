'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { User, Column } from '@/lib/types'
import {
  Users,
  Plus,
  Search,
  Download,
  Settings,
  Trash2,
  Edit3,
  LogOut,
  ChevronLeft,
  ChevronRight,
  X,
  Save,
  UserPlus,
  Database,
  Activity,
  TrendingUp
} from 'lucide-react'

export default function AdminDashboard() {
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [columns, setColumns] = useState<Column[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [isLoading, setIsLoading] = useState(true)
  const [showUserModal, setShowUserModal] = useState(false)
  const [showColumnModal, setShowColumnModal] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [editingColumn, setEditingColumn] = useState<Column | null>(null)

  // Check admin authentication
  useEffect(() => {
    const checkAuth = () => {
      const sessionData = localStorage.getItem('adminSession')
      if (!sessionData) {
        router.push('/admin/login')
        return
      }

      try {
        const session = JSON.parse(sessionData)
        if (!session.isAdmin || Date.now() > session.expiresAt) {
          localStorage.removeItem('adminSession')
          router.push('/admin/login')
          return
        }
      } catch {
        localStorage.removeItem('adminSession')
        router.push('/admin/login')
        return
      }

      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  // Load data from localStorage
  useEffect(() => {
    if (!isLoading) {
      loadUsers()
      loadColumns()
    }
  }, [isLoading])

  const loadUsers = () => {
    const savedUsers = localStorage.getItem('adminUsers')
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers))
    }
  }

  const loadColumns = () => {
    const savedColumns = localStorage.getItem('adminColumns')
    if (savedColumns) {
      setColumns(JSON.parse(savedColumns))
    } else {
      // Set default columns
      const defaultColumns: Column[] = [
        { id: 'name', name: 'Name', type: 'text', required: true },
        { id: 'email', name: 'Email', type: 'email', required: true },
        { id: 'datePurchased', name: 'Date Purchased', type: 'date', required: true },
        { id: 'status', name: 'Status', type: 'select', required: true, options: ['Active', 'Inactive', 'Pending'] }
      ]
      setColumns(defaultColumns)
      localStorage.setItem('adminColumns', JSON.stringify(defaultColumns))
    }
  }

  const saveUsers = (updatedUsers: User[]) => {
    setUsers(updatedUsers)
    localStorage.setItem('adminUsers', JSON.stringify(updatedUsers))
  }

  const saveColumns = (updatedColumns: Column[]) => {
    setColumns(updatedColumns)
    localStorage.setItem('adminColumns', JSON.stringify(updatedColumns))
  }

  const handleLogout = () => {
    localStorage.removeItem('adminSession')
    router.push('/admin/login')
  }

  const handleAddUser = (userData: Record<string, string | number | boolean>) => {
    const newUser: User = {
      id: Date.now().toString(),
      ...userData
    } as User

    const updatedUsers = [...users, newUser]
    saveUsers(updatedUsers)
    setShowUserModal(false)
    setEditingUser(null)
  }

  const handleEditUser = (userData: Record<string, string | number | boolean>) => {
    if (!editingUser) return

    const updatedUsers = users.map(user =>
      user.id === editingUser.id ? { ...user, ...userData } : user
    )
    saveUsers(updatedUsers)
    setShowUserModal(false)
    setEditingUser(null)
  }

  const handleDeleteUser = (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter(user => user.id !== userId)
      saveUsers(updatedUsers)
    }
  }

  const handleAddColumn = (columnData: Omit<Column, 'id'>) => {
    const newColumn: Column = {
      id: Date.now().toString(),
      ...columnData
    }

    const updatedColumns = [...columns, newColumn]
    saveColumns(updatedColumns)
    setShowColumnModal(false)
    setEditingColumn(null)
  }

  const handleDeleteColumn = (columnId: string) => {
    // Don&apos;t allow deleting default columns
    const defaultColumnIds = ['name', 'email', 'datePurchased', 'status']
    if (defaultColumnIds.includes(columnId)) {
      alert('Cannot delete default columns')
      return
    }

    if (confirm('Are you sure you want to delete this column? This will remove the data from all users.')) {
      const updatedColumns = columns.filter(col => col.id !== columnId)
      saveColumns(updatedColumns)

      // Remove the column data from all users
      const updatedUsers = users.map(user => {
        const { [columnId]: removed, ...rest } = user
        return rest as User
      })
      saveUsers(updatedUsers)
    }
  }

  const exportData = () => {
    const dataStr = JSON.stringify({ users, columns }, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `profitpeers-users-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  // Filter and paginate users
  const filteredUsers = users.filter(user =>
    Object.values(user).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Logo size="md" />
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{users.length}</p>
                <p className="text-gray-600 text-sm">Total Users</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {users.filter(u => u.status === 'Active').length}
                </p>
                <p className="text-gray-600 text-sm">Active Users</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {users.filter(u => u.datePurchased && new Date(u.datePurchased) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
                </p>
                <p className="text-gray-600 text-sm">New This Week</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{columns.length}</p>
                <p className="text-gray-600 text-sm">Data Fields</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Controls */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowColumnModal(true)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Settings size={18} />
                  <span>Manage Fields</span>
                </button>
                <button
                  onClick={exportData}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Download size={18} />
                  <span>Export</span>
                </button>
                <button
                  onClick={() => setShowUserModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <UserPlus size={18} />
                  <span>Add User</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column) => (
                    <th key={column.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {column.name}
                    </th>
                  ))}
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedUsers.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length + 1} className="px-6 py-8 text-center text-gray-500">
                      {searchTerm ? 'No users found matching your search.' : 'No users yet. Add your first user!'}
                    </td>
                  </tr>
                ) : (
                  paginatedUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      {columns.map((column) => (
                        <td key={column.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {column.type === 'date' && user[column.id]
                            ? new Date(user[column.id] as string).toLocaleDateString()
                            : column.type === 'select' && column.id === 'status'
                            ? (
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                user[column.id] === 'Active'
                                  ? 'bg-green-100 text-green-800'
                                  : user[column.id] === 'Inactive'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {String(user[column.id] || '')}
                              </span>
                            )
                            : String(user[column.id] || '')}
                        </td>
                      ))}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => {
                              setEditingUser(user)
                              setShowUserModal(true)
                            }}
                            className="text-primary-600 hover:text-primary-900"
                          >
                            <Edit3 size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredUsers.length)} of {filteredUsers.length} users
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* User Modal */}
      {showUserModal && (
        <UserModal
          user={editingUser}
          columns={columns}
          onSave={editingUser ? handleEditUser : handleAddUser}
          onClose={() => {
            setShowUserModal(false)
            setEditingUser(null)
          }}
        />
      )}

      {/* Column Modal */}
      {showColumnModal && (
        <ColumnModal
          columns={columns}
          onSave={handleAddColumn}
          onDelete={handleDeleteColumn}
          onClose={() => setShowColumnModal(false)}
        />
      )}
    </div>
  )
}

// User Modal Component
interface UserModalProps {
  user: User | null
  columns: Column[]
  onSave: (userData: Record<string, string | number | boolean>) => void
  onClose: () => void
}

function UserModal({ user, columns, onSave, onClose }: UserModalProps) {
  const [formData, setFormData] = useState<Record<string, string | number | boolean>>({})

  useEffect(() => {
    if (user) {
      setFormData(user)
    } else {
      // Initialize with empty values
      const initialData: Record<string, string | number | boolean> = {}
      columns.forEach(col => {
        initialData[col.id] = ''
      })
      setFormData(initialData)
    }
  }, [user, columns])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  const handleChange = (columnId: string, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [columnId]: value
    }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {user ? 'Edit User' : 'Add New User'}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {columns.map((column) => (
              <div key={column.id}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {column.name} {column.required && <span className="text-red-500">*</span>}
                </label>
                {column.type === 'select' ? (
                  <select
                    value={String(formData[column.id] || '')}
                    onChange={(e) => handleChange(column.id, e.target.value)}
                    required={column.required}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select {column.name}</option>
                    {column.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : column.type === 'textarea' ? (
                  <textarea
                    value={String(formData[column.id] || '')}
                    onChange={(e) => handleChange(column.id, e.target.value)}
                    required={column.required}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder={`Enter ${column.name}`}
                  />
                ) : (
                  <input
                    type={column.type}
                    value={String(formData[column.id] || '')}
                    onChange={(e) => handleChange(column.id, e.target.value)}
                    required={column.required}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder={`Enter ${column.name}`}
                  />
                )}
              </div>
            ))}

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
                <Save size={18} />
                <span>{user ? 'Update' : 'Add'} User</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// Column Modal Component
interface ColumnModalProps {
  columns: Column[]
  onSave: (columnData: Omit<Column, 'id'>) => void
  onDelete: (columnId: string) => void
  onClose: () => void
}

function ColumnModal({ columns, onSave, onDelete, onClose }: ColumnModalProps) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    type: 'text' as Column['type'],
    required: false,
    options: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const columnData: Omit<Column, 'id'> = {
      name: formData.name,
      type: formData.type,
      required: formData.required,
      ...(formData.type === 'select' && formData.options ? {
        options: formData.options.split(',').map(opt => opt.trim()).filter(Boolean)
      } : {})
    }
    onSave(columnData)
    setFormData({ name: '', type: 'text', required: false, options: '' })
    setShowAddForm(false)
  }

  const defaultColumnIds = ['name', 'email', 'datePurchased', 'status']

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Manage Data Fields</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>

          {/* Current Columns */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Current Fields</h3>
            <div className="space-y-2">
              {columns.map((column) => (
                <div key={column.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">{column.name}</span>
                    <span className="text-sm text-gray-500 ml-2">({column.type})</span>
                    {column.required && <span className="text-red-500 ml-1">*</span>}
                  </div>
                  {!defaultColumnIds.includes(column.id) && (
                    <button
                      onClick={() => onDelete(column.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Add New Column */}
          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-400 hover:text-primary-600 transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              <span>Add New Field</span>
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Field Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="e.g., Phone Number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Field Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as Column['type'] }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="text">Text</option>
                  <option value="email">Email</option>
                  <option value="date">Date</option>
                  <option value="select">Select (Dropdown)</option>
                  <option value="textarea">Textarea</option>
                </select>
              </div>

              {formData.type === 'select' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Options (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.options}
                    onChange={(e) => setFormData(prev => ({ ...prev, options: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Option 1, Option 2, Option 3"
                  />
                </div>
              )}

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="required"
                  checked={formData.required}
                  onChange={(e) => setFormData(prev => ({ ...prev, required: e.target.checked }))}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="required" className="ml-2 text-sm text-gray-700">
                  Required field
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus size={18} />
                  <span>Add Field</span>
                </button>
              </div>
            </form>
          )}

          <div className="flex justify-end mt-6">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}