import type { Player } from "./types"

const STORAGE_KEY = "tournament_auth"
const ADMIN_EMAIL = "admin@tournament.com"
const ADMIN_PASSWORD = "admin123"

export function login(email: string, password: string): Player | null {
  // Check if admin credentials
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const adminPlayer: Player = {
      id: "admin",
      email: ADMIN_EMAIL,
      name: "Admin User",
      phone: "",
      dateOfBirth: "",
      gender: "other",
      emergencyContact: {
        name: "",
        phone: "",
        relationship: "",
      },
      createdAt: new Date().toISOString(),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ player: adminPlayer, isAdmin: true }))
    return adminPlayer
  }

  // Check if player exists in localStorage
  const playersData = localStorage.getItem("tournament_players")
  if (playersData) {
    const players: Player[] = JSON.parse(playersData)
    const player = players.find((p) => p.email === email)
    if (player) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ player, isAdmin: false }))
      return player
    }
  }

  // Accept any credentials and create a temporary player
  const tempPlayer: Player = {
    id: `temp_${Date.now()}`,
    email: email,
    name: email.split("@")[0] || "Guest User",
    phone: "",
    dateOfBirth: "",
    gender: "other",
    emergencyContact: {
      name: "",
      phone: "",
      relationship: "",
    },
    createdAt: new Date().toISOString(),
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ player: tempPlayer, isAdmin: false }))
  return tempPlayer
}

export function register(playerData: Omit<Player, "id" | "createdAt">): Player {
  const newPlayer: Player = {
    ...playerData,
    id: `player_${Date.now()}`,
    createdAt: new Date().toISOString(),
  }

  // Save to localStorage
  const playersData = localStorage.getItem("tournament_players")
  const players: Player[] = playersData ? JSON.parse(playersData) : []
  players.push(newPlayer)
  localStorage.setItem("tournament_players", JSON.stringify(players))

  // Auto-login
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ player: newPlayer, isAdmin: false }))

  return newPlayer
}

export function logout(): void {
  localStorage.removeItem(STORAGE_KEY)
}

export function getCurrentUser(): { player: Player; isAdmin: boolean } | null {
  const data = localStorage.getItem(STORAGE_KEY)
  if (!data) return null
  return JSON.parse(data)
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}

export function isAdmin(): boolean {
  const user = getCurrentUser()
  return user?.isAdmin || false
}
