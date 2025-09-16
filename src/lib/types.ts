export interface User {
  id: string
  name: string
  email: string
  datePurchased: string
  status: 'Active' | 'Inactive' | 'Pending'
  [key: string]: string | number | boolean
}

export interface Column {
  id: string
  name: string
  type: 'text' | 'email' | 'date' | 'select' | 'textarea'
  required: boolean
  options?: string[] // For select type
}

export interface AdminSession {
  isAdmin: boolean
  username: string
  loginTime: number
  expiresAt: number
}