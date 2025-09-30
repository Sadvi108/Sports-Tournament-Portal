"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { AppState, Player, Registration, HotelBooking, MealBooking, Payment } from "@/lib/types"
import { getCurrentUser } from "@/lib/auth"

interface AppContextType extends AppState {
  setCurrentPlayer: (player: Player | null) => void
  addRegistration: (registration: Registration) => void
  addHotelBooking: (booking: HotelBooking) => void
  addMealBooking: (booking: MealBooking) => void
  addPayment: (payment: Payment) => void
  updateRegistration: (id: string, updates: Partial<Registration>) => void
  updateHotelBooking: (id: string, updates: Partial<HotelBooking>) => void
  updateMealBooking: (id: string, updates: Partial<MealBooking>) => void
  getAllRegistrations: () => Registration[]
  getAllHotelBookings: () => HotelBooking[]
  getAllMealBookings: () => MealBooking[]
  getAllPayments: () => Payment[]
  refreshAuth: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    currentPlayer: null,
    registrations: [],
    hotelBookings: [],
    mealBookings: [],
    payments: [],
    isAdmin: false,
  })

  // Load data from localStorage on mount
  useEffect(() => {
    const user = getCurrentUser()
    if (user) {
      setState((prev) => ({
        ...prev,
        currentPlayer: user.player,
        isAdmin: user.isAdmin,
      }))
    }

    // Load all data
    const registrationsData = localStorage.getItem("tournament_registrations")
    const hotelBookingsData = localStorage.getItem("tournament_hotel_bookings")
    const mealBookingsData = localStorage.getItem("tournament_meal_bookings")
    const paymentsData = localStorage.getItem("tournament_payments")

    setState((prev) => ({
      ...prev,
      registrations: registrationsData ? JSON.parse(registrationsData) : [],
      hotelBookings: hotelBookingsData ? JSON.parse(hotelBookingsData) : [],
      mealBookings: mealBookingsData ? JSON.parse(mealBookingsData) : [],
      payments: paymentsData ? JSON.parse(paymentsData) : [],
    }))
  }, [])

  const setCurrentPlayer = (player: Player | null) => {
    setState((prev) => ({ ...prev, currentPlayer: player }))
  }

  const refreshAuth = () => {
    const user = getCurrentUser()
    if (user) {
      setState((prev) => ({
        ...prev,
        currentPlayer: user.player,
        isAdmin: user.isAdmin,
      }))
    } else {
      setState((prev) => ({
        ...prev,
        currentPlayer: null,
        isAdmin: false,
      }))
    }
  }

  const addRegistration = (registration: Registration) => {
    const updated = [...state.registrations, registration]
    setState((prev) => ({ ...prev, registrations: updated }))
    localStorage.setItem("tournament_registrations", JSON.stringify(updated))
  }

  const addHotelBooking = (booking: HotelBooking) => {
    const updated = [...state.hotelBookings, booking]
    setState((prev) => ({ ...prev, hotelBookings: updated }))
    localStorage.setItem("tournament_hotel_bookings", JSON.stringify(updated))
  }

  const addMealBooking = (booking: MealBooking) => {
    const updated = [...state.mealBookings, booking]
    setState((prev) => ({ ...prev, mealBookings: updated }))
    localStorage.setItem("tournament_meal_bookings", JSON.stringify(updated))
  }

  const addPayment = (payment: Payment) => {
    const updated = [...state.payments, payment]
    setState((prev) => ({ ...prev, payments: updated }))
    localStorage.setItem("tournament_payments", JSON.stringify(updated))
  }

  const updateRegistration = (id: string, updates: Partial<Registration>) => {
    const updated = state.registrations.map((r) => (r.id === id ? { ...r, ...updates } : r))
    setState((prev) => ({ ...prev, registrations: updated }))
    localStorage.setItem("tournament_registrations", JSON.stringify(updated))
  }

  const updateHotelBooking = (id: string, updates: Partial<HotelBooking>) => {
    const updated = state.hotelBookings.map((b) => (b.id === id ? { ...b, ...updates } : b))
    setState((prev) => ({ ...prev, hotelBookings: updated }))
    localStorage.setItem("tournament_hotel_bookings", JSON.stringify(updated))
  }

  const updateMealBooking = (id: string, updates: Partial<MealBooking>) => {
    const updated = state.mealBookings.map((b) => (b.id === id ? { ...b, ...updates } : b))
    setState((prev) => ({ ...prev, mealBookings: updated }))
    localStorage.setItem("tournament_meal_bookings", JSON.stringify(updated))
  }

  const getAllRegistrations = () => state.registrations
  const getAllHotelBookings = () => state.hotelBookings
  const getAllMealBookings = () => state.mealBookings
  const getAllPayments = () => state.payments

  return (
    <AppContext.Provider
      value={{
        ...state,
        setCurrentPlayer,
        addRegistration,
        addHotelBooking,
        addMealBooking,
        addPayment,
        updateRegistration,
        updateHotelBooking,
        updateMealBooking,
        getAllRegistrations,
        getAllHotelBookings,
        getAllMealBookings,
        getAllPayments,
        refreshAuth,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
