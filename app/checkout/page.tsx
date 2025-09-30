"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Building2, Banknote, Check } from "lucide-react"
import { useApp } from "@/contexts/app-context"
import type { Payment } from "@/lib/types"

export default function CheckoutPage() {
  const router = useRouter()
  const { currentPlayer, registrations, hotelBookings, mealBookings, addPayment } = useApp()
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank_transfer" | "cash">("card")
  const [cardNumber, setCardNumber] = useState("")
  const [cardExpiry, setCardExpiry] = useState("")
  const [cardCvv, setCardCvv] = useState("")
  const [cardName, setCardName] = useState("")
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    if (!currentPlayer) {
      router.push("/login")
    }
  }, [currentPlayer, router])

  if (!currentPlayer) return null

  // Get player's bookings
  const playerRegistrations = registrations.filter((r) => r.playerId === currentPlayer.id)
  const playerHotels = hotelBookings.filter((h) => h.playerId === currentPlayer.id)
  const playerMeals = mealBookings.filter((m) => m.playerId === currentPlayer.id)

  // Calculate totals
  const registrationTotal = playerRegistrations.reduce((sum, r) => sum + r.amount, 0)
  const hotelTotal = playerHotels.reduce((sum, h) => sum + h.totalAmount, 0)
  const mealTotal = playerMeals.reduce((sum, m) => sum + m.totalAmount, 0)
  const subtotal = registrationTotal + hotelTotal + mealTotal
  const processingFee = subtotal * 0.03 // 3% processing fee
  const total = subtotal + processingFee

  const handlePayment = async () => {
    setProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const items: Payment["items"] = []

    playerRegistrations.forEach((reg) => {
      items.push({
        type: "registration",
        id: reg.id,
        description: `Tournament Registration - ${reg.tournamentCategory}`,
        amount: reg.amount,
      })
    })

    playerHotels.forEach((hotel) => {
      items.push({
        type: "hotel",
        id: hotel.id,
        description: `${hotel.hotelName} - ${hotel.roomType}`,
        amount: hotel.totalAmount,
      })
    })

    playerMeals.forEach((meal) => {
      items.push({
        type: "meals",
        id: meal.id,
        description: `Meal Plan - ${meal.mealPlan}`,
        amount: meal.totalAmount,
      })
    })

    const payment: Payment = {
      id: `pay_${Date.now()}`,
      playerId: currentPlayer.id,
      amount: total,
      currency: "USD",
      method: paymentMethod,
      status: "completed",
      transactionId: `TXN${Date.now()}`,
      items,
      createdAt: new Date().toISOString(),
    }

    addPayment(payment)
    setProcessing(false)
    router.push("/dashboard")
  }

  const isFormValid =
    paymentMethod === "card"
      ? cardNumber && cardExpiry && cardCvv && cardName
      : paymentMethod === "bank_transfer" || paymentMethod === "cash"

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Checkout</h1>
            <p className="text-muted-foreground">Review your bookings and complete payment</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Payment Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Review your bookings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {playerRegistrations.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        Tournament Registration
                        <Badge variant="secondary">{playerRegistrations.length}</Badge>
                      </h3>
                      {playerRegistrations.map((reg) => (
                        <div key={reg.id} className="flex justify-between text-sm py-2">
                          <span className="text-muted-foreground">{reg.tournamentCategory}</span>
                          <span className="font-medium">${reg.amount}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {playerHotels.length > 0 && (
                    <div className="pt-4 border-t">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        Hotel Accommodation
                        <Badge variant="secondary">{playerHotels.length}</Badge>
                      </h3>
                      {playerHotels.map((hotel) => (
                        <div key={hotel.id} className="space-y-1 py-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{hotel.hotelName}</span>
                            <span className="font-medium">${hotel.totalAmount}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {hotel.roomType} • {new Date(hotel.checkIn).toLocaleDateString()} -{" "}
                            {new Date(hotel.checkOut).toLocaleDateString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {playerMeals.length > 0 && (
                    <div className="pt-4 border-t">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        Meal Plans
                        <Badge variant="secondary">{playerMeals.length}</Badge>
                      </h3>
                      {playerMeals.map((meal) => (
                        <div key={meal.id} className="space-y-1 py-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground capitalize">{meal.mealPlan.replace("-", " ")}</span>
                            <span className="font-medium">${meal.totalAmount}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {meal.numberOfMeals} meals • {new Date(meal.startDate).toLocaleDateString()} -{" "}
                            {new Date(meal.endDate).toLocaleDateString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {subtotal === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>No bookings found. Please complete registration first.</p>
                      <Button className="mt-4" onClick={() => router.push("/register")}>
                        Start Registration
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Payment Method */}
              {subtotal > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>Choose how you'd like to pay</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <Card
                        className={`cursor-pointer transition-all ${
                          paymentMethod === "card" ? "ring-2 ring-primary" : ""
                        }`}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <CardContent className="p-4 text-center">
                          <CreditCard className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <p className="text-sm font-medium">Card</p>
                          {paymentMethod === "card" && <Check className="h-4 w-4 mx-auto mt-2 text-primary" />}
                        </CardContent>
                      </Card>

                      <Card
                        className={`cursor-pointer transition-all ${
                          paymentMethod === "bank_transfer" ? "ring-2 ring-primary" : ""
                        }`}
                        onClick={() => setPaymentMethod("bank_transfer")}
                      >
                        <CardContent className="p-4 text-center">
                          <Building2 className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <p className="text-sm font-medium">Bank</p>
                          {paymentMethod === "bank_transfer" && <Check className="h-4 w-4 mx-auto mt-2 text-primary" />}
                        </CardContent>
                      </Card>

                      <Card
                        className={`cursor-pointer transition-all ${
                          paymentMethod === "cash" ? "ring-2 ring-primary" : ""
                        }`}
                        onClick={() => setPaymentMethod("cash")}
                      >
                        <CardContent className="p-4 text-center">
                          <Banknote className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <p className="text-sm font-medium">Cash</p>
                          {paymentMethod === "cash" && <Check className="h-4 w-4 mx-auto mt-2 text-primary" />}
                        </CardContent>
                      </Card>
                    </div>

                    {paymentMethod === "card" && (
                      <div className="space-y-4 pt-4">
                        <div>
                          <Label htmlFor="cardName">Cardholder Name</Label>
                          <Input
                            id="cardName"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="cardExpiry">Expiry Date</Label>
                            <Input
                              id="cardExpiry"
                              value={cardExpiry}
                              onChange={(e) => setCardExpiry(e.target.value)}
                              placeholder="MM/YY"
                              maxLength={5}
                            />
                          </div>

                          <div>
                            <Label htmlFor="cardCvv">CVV</Label>
                            <Input
                              id="cardCvv"
                              type="password"
                              value={cardCvv}
                              onChange={(e) => setCardCvv(e.target.value)}
                              placeholder="123"
                              maxLength={4}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "bank_transfer" && (
                      <div className="p-4 rounded-lg bg-muted/50 text-sm space-y-2">
                        <p className="font-semibold">Bank Transfer Details:</p>
                        <p>Bank: Tournament Bank</p>
                        <p>Account: 1234567890</p>
                        <p>Reference: {currentPlayer.id}</p>
                        <p className="text-xs text-muted-foreground mt-2">Please include your player ID as reference</p>
                      </div>
                    )}

                    {paymentMethod === "cash" && (
                      <div className="p-4 rounded-lg bg-muted/50 text-sm">
                        <p className="font-semibold mb-2">Cash Payment:</p>
                        <p className="text-muted-foreground">
                          You can pay in cash at the tournament registration desk. Please bring exact amount if
                          possible.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Payment Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Processing Fee (3%)</span>
                      <span className="font-medium">${processingFee.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-2xl">${total.toFixed(2)}</span>
                  </div>

                  {subtotal > 0 && (
                    <Button className="w-full" size="lg" onClick={handlePayment} disabled={!isFormValid || processing}>
                      {processing ? "Processing..." : `Pay $${total.toFixed(2)}`}
                    </Button>
                  )}

                  <div className="text-xs text-muted-foreground space-y-2 pt-4 border-t">
                    <p className="font-semibold">Secure Payment</p>
                    <p>Your payment information is encrypted and secure. We never store your card details.</p>
                  </div>
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
