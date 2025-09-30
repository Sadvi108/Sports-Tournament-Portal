"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Coffee, UtensilsCrossed, Moon, Check } from "lucide-react"
import { useApp } from "@/contexts/app-context"
import type { MealBooking } from "@/lib/types"

const MEAL_PLANS = [
  {
    id: "breakfast",
    name: "Breakfast Only",
    icon: Coffee,
    description: "Start your day right with a hearty breakfast",
    price: 15,
    includes: ["Continental breakfast", "Fresh juice", "Coffee/Tea", "Seasonal fruits"],
  },
  {
    id: "lunch",
    name: "Lunch Only",
    icon: UtensilsCrossed,
    description: "Nutritious lunch to fuel your performance",
    price: 20,
    includes: ["Main course", "Side dish", "Salad", "Beverage"],
  },
  {
    id: "dinner",
    name: "Dinner Only",
    icon: Moon,
    description: "Delicious dinner after a day of competition",
    price: 25,
    includes: ["Appetizer", "Main course", "Dessert", "Beverage"],
  },
  {
    id: "full-board",
    name: "Full Board",
    icon: UtensilsCrossed,
    description: "All meals included - best value!",
    price: 50,
    includes: ["Breakfast", "Lunch", "Dinner", "Snacks", "All beverages"],
    popular: true,
  },
]

export default function BookMealsPage() {
  const router = useRouter()
  const { currentPlayer, addMealBooking } = useApp()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [dietaryPreferences, setDietaryPreferences] = useState("")

  useEffect(() => {
    if (!currentPlayer) {
      router.push("/login")
    }
  }, [currentPlayer, router])

  if (!currentPlayer) return null

  const plan = MEAL_PLANS.find((p) => p.id === selectedPlan)

  const calculateDays = () => {
    if (!startDate || !endDate) return 0
    const start = new Date(startDate)
    const end = new Date(endDate)
    const diff = end.getTime() - start.getTime()
    return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1 // Include both start and end days
  }

  const days = calculateDays()
  const mealsPerDay = selectedPlan === "full-board" ? 3 : 1
  const totalMeals = days * mealsPerDay
  const totalAmount = plan ? plan.price * days : 0

  const handleBooking = () => {
    if (!plan || !startDate || !endDate) return

    const booking: MealBooking = {
      id: `meal_${Date.now()}`,
      playerId: currentPlayer.id,
      mealPlan: plan.id as "breakfast" | "lunch" | "dinner" | "full-board",
      startDate,
      endDate,
      dietaryPreferences: dietaryPreferences || undefined,
      numberOfMeals: totalMeals,
      pricePerMeal: plan.price,
      totalAmount,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    }

    addMealBooking(booking)
    router.push("/checkout")
  }

  const isFormValid = selectedPlan && startDate && endDate

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Book Meal Plans</h1>
            <p className="text-muted-foreground">Choose a meal plan that fits your needs during the tournament</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Meal Plan Selection */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {MEAL_PLANS.map((planItem) => {
                  const Icon = planItem.icon
                  return (
                    <Card
                      key={planItem.id}
                      className={`cursor-pointer transition-all relative ${
                        selectedPlan === planItem.id ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setSelectedPlan(planItem.id)}
                    >
                      {planItem.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <Icon className="h-8 w-8 text-primary mb-2" />
                          {selectedPlan === planItem.id && <Check className="h-5 w-5 text-primary" />}
                        </div>
                        <CardTitle className="text-lg">{planItem.name}</CardTitle>
                        <CardDescription>{planItem.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <div className="text-2xl font-bold">${planItem.price}</div>
                          <div className="text-xs text-muted-foreground">per day</div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm font-semibold">Includes:</p>
                          {planItem.includes.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Check className="h-3 w-3 text-primary" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {selectedPlan && (
                <Card>
                  <CardHeader>
                    <CardTitle>Booking Details</CardTitle>
                    <CardDescription>Select your meal plan dates</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input
                          id="startDate"
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>

                      <div>
                        <Label htmlFor="endDate">End Date</Label>
                        <Input
                          id="endDate"
                          type="date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          min={startDate || new Date().toISOString().split("T")[0]}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="dietary">Dietary Preferences (Optional)</Label>
                      <Textarea
                        id="dietary"
                        value={dietaryPreferences}
                        onChange={(e) => setDietaryPreferences(e.target.value)}
                        placeholder="Vegetarian, vegan, gluten-free, allergies, etc..."
                        rows={3}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Let us know about any dietary restrictions or preferences
                      </p>
                    </div>

                    {days > 0 && (
                      <div className="p-4 rounded-lg bg-muted/50 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">
                            {days} {days === 1 ? "day" : "days"}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Total meals:</span>
                          <span className="font-medium">{totalMeals}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Booking Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan ? (
                    <>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <p className="font-semibold">{plan.name}</p>
                          <p className="text-muted-foreground">{plan.description}</p>
                        </div>

                        {days > 0 && (
                          <>
                            <div className="flex justify-between text-sm pt-2 border-t">
                              <span className="text-muted-foreground">
                                ${plan.price} × {days} {days === 1 ? "day" : "days"}
                              </span>
                              <span className="font-medium">${totalAmount}</span>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex justify-between mb-4">
                          <span className="font-semibold">Total</span>
                          <span className="font-bold text-lg">${totalAmount}</span>
                        </div>

                        <Button className="w-full" onClick={handleBooking} disabled={!isFormValid || days <= 0}>
                          Confirm Booking
                        </Button>

                        <Button variant="ghost" className="w-full mt-2" onClick={() => router.push("/checkout")}>
                          Skip for Now
                        </Button>
                      </div>

                      <div className="pt-4 border-t text-xs text-muted-foreground">
                        <p className="font-semibold mb-2">What's Next?</p>
                        <p>
                          After confirming, you'll proceed to checkout to review all your bookings and complete payment.
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">Select a meal plan to see pricing</p>
                  )}
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
