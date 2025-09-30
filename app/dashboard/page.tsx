"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Trophy, Hotel, UtensilsCrossed, CreditCard, QrCode, Download, LogOut } from "lucide-react"
import { useApp } from "@/contexts/app-context"
import { logout } from "@/lib/auth"
import Link from "next/link"

export default function DashboardPage() {
  const router = useRouter()
  const { currentPlayer, registrations, hotelBookings, mealBookings, payments, refreshAuth } = useApp()

  useEffect(() => {
    if (!currentPlayer) {
      router.push("/login")
    }
  }, [currentPlayer, router])

  if (!currentPlayer) return null

  const playerRegistrations = registrations.filter((r) => r.playerId === currentPlayer.id)
  const playerHotels = hotelBookings.filter((h) => h.playerId === currentPlayer.id)
  const playerMeals = mealBookings.filter((m) => m.playerId === currentPlayer.id)
  const playerPayments = payments.filter((p) => p.playerId === currentPlayer.id)

  const totalSpent = playerPayments.reduce((sum, p) => sum + p.amount, 0)

  const handleLogout = () => {
    logout()
    refreshAuth()
    router.push("/")
  }

  const generateQRCode = (id: string) => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${id}`
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Welcome Section */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome, {currentPlayer.name}</h1>
              <p className="text-muted-foreground">Manage your tournament bookings and access your information</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Registrations</p>
                    <p className="text-2xl font-bold">{playerRegistrations.length}</p>
                  </div>
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Hotel Bookings</p>
                    <p className="text-2xl font-bold">{playerHotels.length}</p>
                  </div>
                  <Hotel className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Meal Plans</p>
                    <p className="text-2xl font-bold">{playerMeals.length}</p>
                  </div>
                  <UtensilsCrossed className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Spent</p>
                    <p className="text-2xl font-bold">${totalSpent.toFixed(2)}</p>
                  </div>
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tournament Registrations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Tournament Registrations
                  </CardTitle>
                  <CardDescription>Your active tournament registrations</CardDescription>
                </CardHeader>
                <CardContent>
                  {playerRegistrations.length > 0 ? (
                    <div className="space-y-4">
                      {playerRegistrations.map((reg) => (
                        <div key={reg.id} className="p-4 rounded-lg border">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="font-semibold">{reg.tournamentCategory}</p>
                              <p className="text-sm text-muted-foreground capitalize">{reg.skillLevel} Level</p>
                            </div>
                            <Badge variant={reg.status === "confirmed" ? "default" : "secondary"}>{reg.status}</Badge>
                          </div>
                          <Separator className="my-2" />
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="text-muted-foreground">T-Shirt:</span> {reg.tshirtSize}
                            </div>
                            <div>
                              <span className="text-muted-foreground">Amount:</span> ${reg.amount}
                            </div>
                          </div>
                          <div className="mt-3 flex gap-2">
                            <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                              <QrCode className="h-4 w-4 mr-2" />
                              View QR Code
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <p className="mb-4">No tournament registrations yet</p>
                      <Link href="/register">
                        <Button>Register Now</Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Hotel Bookings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hotel className="h-5 w-5" />
                    Hotel Bookings
                  </CardTitle>
                  <CardDescription>Your accommodation reservations</CardDescription>
                </CardHeader>
                <CardContent>
                  {playerHotels.length > 0 ? (
                    <div className="space-y-4">
                      {playerHotels.map((hotel) => (
                        <div key={hotel.id} className="p-4 rounded-lg border">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="font-semibold">{hotel.hotelName}</p>
                              <p className="text-sm text-muted-foreground capitalize">{hotel.roomType} Room</p>
                            </div>
                            <Badge variant={hotel.status === "confirmed" ? "default" : "secondary"}>
                              {hotel.status}
                            </Badge>
                          </div>
                          <Separator className="my-2" />
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Check-in:</span>
                              <span>{new Date(hotel.checkIn).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Check-out:</span>
                              <span>{new Date(hotel.checkOut).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Guests:</span>
                              <span>{hotel.numberOfGuests}</span>
                            </div>
                            <div className="flex justify-between font-semibold pt-2 border-t">
                              <span>Total:</span>
                              <span>${hotel.totalAmount}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <p className="mb-4">No hotel bookings yet</p>
                      <Link href="/book-hotel">
                        <Button>Book Hotel</Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Meal Bookings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UtensilsCrossed className="h-5 w-5" />
                    Meal Plans
                  </CardTitle>
                  <CardDescription>Your meal plan bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  {playerMeals.length > 0 ? (
                    <div className="space-y-4">
                      {playerMeals.map((meal) => (
                        <div key={meal.id} className="p-4 rounded-lg border">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="font-semibold capitalize">{meal.mealPlan.replace("-", " ")}</p>
                              <p className="text-sm text-muted-foreground">{meal.numberOfMeals} meals</p>
                            </div>
                            <Badge variant={meal.status === "confirmed" ? "default" : "secondary"}>{meal.status}</Badge>
                          </div>
                          <Separator className="my-2" />
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Start:</span>
                              <span>{new Date(meal.startDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">End:</span>
                              <span>{new Date(meal.endDate).toLocaleDateString()}</span>
                            </div>
                            {meal.dietaryPreferences && (
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Dietary:</span>
                                <span className="text-right">{meal.dietaryPreferences}</span>
                              </div>
                            )}
                            <div className="flex justify-between font-semibold pt-2 border-t">
                              <span>Total:</span>
                              <span>${meal.totalAmount}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <p className="mb-4">No meal plans yet</p>
                      <Link href="/book-meals">
                        <Button>Book Meals</Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Player Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Player Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Name</p>
                    <p className="font-medium">{currentPlayer.name}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <p className="font-medium">{currentPlayer.email}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-muted-foreground">Phone</p>
                    <p className="font-medium">{currentPlayer.phone}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-muted-foreground">Player ID</p>
                    <p className="font-mono text-xs">{currentPlayer.id}</p>
                  </div>
                </CardContent>
              </Card>

              {/* QR Code */}
              {playerRegistrations.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Your QR Code</CardTitle>
                    <CardDescription>Show this at check-in</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <img
                      src={generateQRCode(currentPlayer.id) || "/placeholder.svg"}
                      alt="Player QR Code"
                      className="w-48 h-48 border rounded-lg"
                    />
                    <Button variant="outline" size="sm" className="mt-4 w-full bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Download QR Code
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Payment History */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                  {playerPayments.length > 0 ? (
                    <div className="space-y-3">
                      {playerPayments.map((payment) => (
                        <div key={payment.id} className="p-3 rounded-lg border">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="text-sm font-medium">${payment.amount.toFixed(2)}</p>
                              <p className="text-xs text-muted-foreground">
                                {new Date(payment.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                            <Badge
                              variant={payment.status === "completed" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {payment.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {payment.items.length} {payment.items.length === 1 ? "item" : "items"}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">No payments yet</p>
                  )}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/book-hotel">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Hotel className="h-4 w-4 mr-2" />
                      Book Hotel
                    </Button>
                  </Link>
                  <Link href="/book-meals">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <UtensilsCrossed className="h-4 w-4 mr-2" />
                      Book Meals
                    </Button>
                  </Link>
                  <Link href="/help">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Help & Support
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
