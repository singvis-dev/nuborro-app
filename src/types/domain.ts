// ============================================
// NUBORRO — Shared Domain Types
// ============================================

export type UUID = string

// ---- USER ----
export interface User {
  id: UUID
  email: string
  phone?: string
  name: string
  avatar_url?: string
  city?: string
  neighbourhood?: string
  lat?: number
  lng?: number
  is_phone_verified: boolean
  is_email_verified: boolean
  is_id_verified: boolean
  status: 'active' | 'suspended' | 'banned'
  created_at: string
}

// ---- LISTING ----
export type ListingCategory =
  | 'cameras_lenses'
  | 'power_tools'
  | 'camping_gear'
  | 'books'
  | 'musical_instruments'

export type ConditionGrade = 'excellent' | 'good' | 'fair' | 'poor'

export interface Listing {
  id: UUID
  owner_id: UUID
  title: string
  description?: string
  category: ListingCategory
  brand?: string
  model?: string
  price_per_day: number
  deposit_amount: number
  declared_value?: number
  condition_overall: ConditionGrade
  condition_details: Record<string, string>
  accessories_list: string[]
  ownership_proof_url?: string
  ownership_proof_type?: 'invoice' | 'warranty_card' | 'serial_number_photo' | 'asset_tag'
  is_available: boolean
  is_approved: boolean
  lat?: number
  lng?: number
  city?: string
  neighbourhood?: string
  created_at: string
  // Joined fields
  owner?: User
  photos?: ListingPhoto[]
}

export interface ListingPhoto {
  id: UUID
  listing_id: UUID
  url: string
  angle: 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom' | 'serial_number' | 'accessories' | 'other'
  is_primary: boolean
  order_index: number
}

// ---- BOOKING ----
export type BookingStatus =
  | 'pending'
  | 'accepted'
  | 'deposit_paid'
  | 'evidence_ready'
  | 'active'
  | 'return_initiated'
  | 'inspecting'
  | 'disputed'
  | 'completed'
  | 'cancelled'

export interface Booking {
  id: UUID
  listing_id: UUID
  borrower_id: UUID
  owner_id: UUID
  start_date: string
  end_date: string
  total_price: number
  deposit_amount: number
  platform_fee: number
  status: BookingStatus
  owner_response_deadline?: string
  inspection_deadline?: string
  dispute_window_expires_at?: string
  cancelled_by?: UUID
  cancel_reason?: string
  cancelled_at?: string
  created_at: string
  // Joined fields
  listing?: Listing
  borrower?: User
  owner?: User
}

// ---- MESSAGE ----
export interface Message {
  id: UUID
  booking_id: UUID
  sender_id: UUID
  content: string
  is_read: boolean
  created_at: string
  sender?: User
}

// ---- API RESPONSE ----
export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  cursor?: string
  hasMore: boolean
  total?: number
}
