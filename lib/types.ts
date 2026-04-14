export interface Player {
  id: string
  email: string
  name: string
  phone: string
  dateOfBirth: string
  gender: "male" | "female" | "other"
  teamName?: string
  clubName?: string
  coachName?: string
  emergencyContact: {
    name: string
    phone: string
    relationship: string
  }
  createdAt: string
}

export interface Registration {
  id: string
  playerId: string
  tournamentCategory: string
  skillLevel: "beginner" | "intermediate" | "advanced" | "professional"
  tshirtSize: "XS" | "S" | "M" | "L" | "XL" | "XXL"
  medicalConditions?: string
  dietaryRestrictions?: string
  amount: number
  status: "pending" | "confirmed" | "cancelled"
  createdAt: string
}

export interface HotelBooking {
  id: string
  playerId: string
  hotelName: string
  roomType: "single" | "double" | "suite"
  checkIn: string
  checkOut: string
  numberOfGuests: number
  specialRequests?: string
  pricePerNight: number
  totalAmount: number
  status: "pending" | "confirmed" | "cancelled"
  createdAt: string
}

export interface MealBooking {
  id: string
  playerId: string
  mealPlan: "breakfast" | "lunch" | "dinner" | "full-board"
  startDate: string
  endDate: string
  dietaryPreferences?: string
  numberOfMeals: number
  pricePerMeal: number
  totalAmount: number
  status: "pending" | "confirmed" | "cancelled"
  createdAt: string
}

export interface Payment {
  id: string
  playerId: string
  amount: number
  currency: string
  method: "card" | "bank_transfer" | "cash"
  status: "pending" | "completed" | "failed" | "refunded"
  transactionId?: string
  items: {
    type: "registration" | "hotel" | "meals"
    id: string
    description: string
    amount: number
  }[]
  createdAt: string
}

export interface AppState {
  currentPlayer: Player | null
  registrations: Registration[]
  hotelBookings: HotelBooking[]
  mealBookings: MealBooking[]
  payments: Payment[]
  isAdmin: boolean
}
