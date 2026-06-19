import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind class merging utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format currency in INR
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

// Calculate deposit based on declared value
export function calculateDeposit(declaredValue: number): number {
  if (declaredValue <= 5000) return Math.ceil(declaredValue * 0.20)
  if (declaredValue <= 20000) return Math.ceil(declaredValue * 0.30)
  return Math.ceil(declaredValue * 0.40)
}

// Calculate rental days between two dates
export function calculateRentalDays(startDate: string, endDate: string): number {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const diff = end.getTime() - start.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

// Format date for display
export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}

// Truncate text
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

// Category display names
export const CATEGORY_LABELS: Record<string, string> = {
  cameras_lenses: 'Cameras & Lenses',
  power_tools: 'Power Tools',
  camping_gear: 'Camping Gear',
  books: 'Books & Study',
  musical_instruments: 'Musical Instruments',
}

// Category icons
export const CATEGORY_ICONS: Record<string, string> = {
  cameras_lenses: '📷',
  power_tools: '🔧',
  camping_gear: '🏕️',
  books: '📚',
  musical_instruments: '🎵',
}
