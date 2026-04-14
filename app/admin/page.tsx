"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Hotel, UtensilsCrossed, DollarSign, LogOut } from "lucide-react"
import { useApp } from "@/contexts/app-context"
import { logout } from "@/lib/auth"

export default function AdminDashboardPage() {
  const router = useRouter()
  const { currentPlayer, isAdmin, registrations, hotelBookings, mealBookings, payments, refreshAuth } = useApp()

  useEffect(() => {
    if (!currentPlayer || !isAdmin) {
      router.push("/login")
    }
  }, [currentPlayer, isAdmin, router])

  if (!currentPlayer || !isAdmin) return null

  const totalRevenue = payments.reduce((sum, p) => sum + p.amount, 0)
  const completedPayments = payments.filter((p) => p.status === "completed").length

  const handleLogout = () => {
    logout()
    refreshAuth()
    router.push("/")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage tournament registrations and bookings</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Registrations</p>
                    <p className="text-3xl font-bold">{registrations.length}</p>
                  </div>
                  <Trophy className="h-10 w-10 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Hotel Bookings</p>
                    <p className="text-3xl font-bold">{hotelBookings.length}</p>
                  </div>
                  <Hotel className="h-10 w-10 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Meal Bookings</p>
                    <p className="text-3xl font-bold">{mealBookings.length}</p>
                  </div>
                  <UtensilsCrossed className="h-10 w-10 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-3xl font-bold">${totalRevenue.toFixed(0)}</p>
                  </div>
                  <DollarSign className="h-10 w-10 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Tables */}
          <Tabs defaultValue="registrations" className="space-y-6">
            <TabsList>
              <TabsTrigger value="registrations">Registrations</TabsTrigger>
              <TabsTrigger value="hotels">Hotels</TabsTrigger>
              <TabsTrigger value="meals">Meals</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
            </TabsList>

            <TabsContent value="registrations">
              <Card>
                <CardHeader>
                  <CardTitle>Tournament Registrations</CardTitle>
                  <CardDescription>All player registrations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {registrations.map((reg) => (
                      <div key={reg.id} className="p-4 rounded-lg border">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <p className="font-semibold">{reg.tournamentCategory}</p>
                            <p className="text-sm text-muted-foreground">Player ID: {reg.playerId}</p>
                            <p className="text-sm text-muted-foreground capitalize">
                              {reg.skillLevel} • {reg.tshirtSize}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge variant={reg.status === "confirmed" ? "default" : "secondary"}>{reg.status}</Badge>
                            <p className="text-sm font-semibold mt-2">${reg.amount}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {registrations.length === 0 && (
                      <p className="text-center py-8 text-muted-foreground">No registrations yet</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hotels">
              <Card>
                <CardHeader>
                  <CardTitle>Hotel Bookings</CardTitle>
                  <CardDescription>All accommodation reservations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {hotelBookings.map((hotel) => (
                      <div key={hotel.id} className="p-4 rounded-lg border">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <p className="font-semibold">{hotel.hotelName}</p>
                            <p className="text-sm text-muted-foreground">Player ID: {hotel.playerId}</p>
                            <p className="text-sm text-muted-foreground capitalize">
                              {hotel.roomType} • {hotel.numberOfGuests} guests
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(hotel.checkIn).toLocaleDateString()} -{" "}
                              {new Date(hotel.checkOut).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge variant={hotel.status === "confirmed" ? "default" : "secondary"}>
                              {hotel.status}
                            </Badge>
                            <p className="text-sm font-semibold mt-2">${hotel.totalAmount}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {hotelBookings.length === 0 && (
                      <p className="text-center py-8 text-muted-foreground">No hotel bookings yet</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="meals">
              <Card>
                <CardHeader>
                  <CardTitle>Meal Bookings</CardTitle>
                  <CardDescription>All meal plan reservations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mealBookings.map((meal) => (
                      <div key={meal.id} className="p-4 rounded-lg border">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <p className="font-semibold capitalize">{meal.mealPlan.replace("-", " ")}</p>
                            <p className="text-sm text-muted-foreground">Player ID: {meal.playerId}</p>
                            <p className="text-sm text-muted-foreground">{meal.numberOfMeals} meals</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(meal.startDate).toLocaleDateString()} -{" "}
                              {new Date(meal.endDate).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge variant={meal.status === "confirmed" ? "default" : "secondary"}>{meal.status}</Badge>
                            <p className="text-sm font-semibold mt-2">${meal.totalAmount}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {mealBookings.length === 0 && (
                      <p className="text-center py-8 text-muted-foreground">No meal bookings yet</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Transactions</CardTitle>
                  <CardDescription>All payment records</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {payments.map((payment) => (
                      <div key={payment.id} className="p-4 rounded-lg border">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <p className="font-semibold">${payment.amount.toFixed(2)}</p>
                            <p className="text-sm text-muted-foreground">Player ID: {payment.playerId}</p>
                            <p className="text-sm text-muted-foreground capitalize">
                              {payment.method.replace("_", " ")} • {payment.items.length} items
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(payment.createdAt).toLocaleDateString()}
                            </p>
                            {payment.transactionId && (
                              <p className="text-xs text-muted-foreground font-mono">{payment.transactionId}</p>
                            )}
                          </div>
                          <Badge
                            variant={
                              payment.status === "completed"
                                ? "default"
                                : payment.status === "failed"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {payment.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                    {payments.length === 0 && <p className="text-center py-8 text-muted-foreground">No payments yet</p>}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
