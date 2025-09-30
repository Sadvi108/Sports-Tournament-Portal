"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Hotel, Star } from "lucide-react"
import { useApp } from "@/contexts/app-context"
import type { HotelBooking } from "@/lib/types"

const HOTELS = [
  {
    id: "grand-plaza",
    name: "Grand Plaza Hotel",
    rating: 5,
    distance: "0.5 km from venue",
    amenities: ["Free WiFi", "Gym", "Restaurant", "Parking"],
    image: "/luxury-hotel-exterior.png",
    rooms: [
      { type: "single", name: "Single Room", price: 120, capacity: 1 },
      { type: "double", name: "Double Room", price: 180, capacity: 2 },
      { type: "suite", name: "Executive Suite", price: 300, capacity: 3 },
    ],
  },
  {
    id: "sports-inn",
    name: "Sports Inn & Suites",
    rating: 4,
    distance: "1.2 km from venue",
    amenities: ["Free WiFi", "Gym", "Breakfast", "Parking"],
    image: "/modern-hotel.png",
    rooms: [
      { type: "single", name: "Standard Single", price: 90, capacity: 1 },
      { type: "double", name: "Standard Double", price: 140, capacity: 2 },
      { type: "suite", name: "Family Suite", price: 220, capacity: 4 },
    ],
  },
  {
    id: "comfort-stay",
    name: "Comfort Stay Hotel",
    rating: 3,
    distance: "2.0 km from venue",
    amenities: ["Free WiFi", "Breakfast", "Parking"],
    image: "/budget-hotel.jpg",
    rooms: [
      { type: "single", name: "Economy Single", price: 70, capacity: 1 },
      { type: "double", name: "Economy Double", price: 110, capacity: 2 },
      { type: "suite", name: "Deluxe Room", price: 160, capacity: 3 },
    ],
  },
]

export default function BookHotelPage() {
  const router = useRouter()
  const { currentPlayer, addHotelBooking } = useApp()
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null)
  const [selectedRoom, setSelectedRoom] = useState<string>("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("1")
  const [specialRequests, setSpecialRequests] = useState("")

  useEffect(() => {
    if (!currentPlayer) {
      router.push("/login")
    }
  }, [currentPlayer, router])

  if (!currentPlayer) return null

  const hotel = HOTELS.find((h) => h.id === selectedHotel)
  const room = hotel?.rooms.find((r) => r.type === selectedRoom)

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    const diff = end.getTime() - start.getTime()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }

  const nights = calculateNights()
  const totalAmount = room ? room.price * nights : 0

  const handleBooking = () => {
    if (!hotel || !room || !checkIn || !checkOut) return

    const booking: HotelBooking = {
      id: `hotel_${Date.now()}`,
      playerId: currentPlayer.id,
      hotelName: hotel.name,
      roomType: room.type as "single" | "double" | "suite",
      checkIn,
      checkOut,
      numberOfGuests: Number.parseInt(guests),
      specialRequests: specialRequests || undefined,
      pricePerNight: room.price,
      totalAmount,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    }

    addHotelBooking(booking)
    router.push("/book-meals")
  }

  const isFormValid = selectedHotel && selectedRoom && checkIn && checkOut && guests

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Book Accommodation</h1>
            <p className="text-muted-foreground">Choose from our partner hotels near the tournament venue</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Hotel Selection */}
            <div className="lg:col-span-2 space-y-6">
              {HOTELS.map((hotelItem) => (
                <Card
                  key={hotelItem.id}
                  className={`cursor-pointer transition-all ${
                    selectedHotel === hotelItem.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedHotel(hotelItem.id)}
                >
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-5 gap-4">
                      <div className="md:col-span-2">
                        <img
                          src={hotelItem.image || "/placeholder.svg"}
                          alt={hotelItem.name}
                          className="w-full h-48 md:h-full object-cover rounded-l-lg"
                        />
                      </div>
                      <div className="md:col-span-3 p-6">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{hotelItem.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                {Array.from({ length: hotelItem.rating }).map((_, i) => (
                                  <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                                ))}
                              </div>
                              <span>•</span>
                              <span>{hotelItem.distance}</span>
                            </div>
                          </div>
                          {selectedHotel === hotelItem.id && <Badge>Selected</Badge>}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {hotelItem.amenities.map((amenity) => (
                            <Badge key={amenity} variant="secondary" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>

                        {selectedHotel === hotelItem.id && (
                          <div className="space-y-2 pt-4 border-t">
                            <p className="text-sm font-semibold mb-2">Available Rooms:</p>
                            {hotelItem.rooms.map((roomItem) => (
                              <div
                                key={roomItem.type}
                                className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                                  selectedRoom === roomItem.type
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/50"
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setSelectedRoom(roomItem.type)
                                }}
                              >
                                <div className="flex items-center gap-2">
                                  <Hotel className="h-4 w-4 text-muted-foreground" />
                                  <div>
                                    <p className="text-sm font-medium">{roomItem.name}</p>
                                    <p className="text-xs text-muted-foreground">Up to {roomItem.capacity} guests</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-bold">${roomItem.price}</p>
                                  <p className="text-xs text-muted-foreground">per night</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {selectedHotel && selectedRoom && (
                <Card>
                  <CardHeader>
                    <CardTitle>Booking Details</CardTitle>
                    <CardDescription>Complete your hotel reservation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="checkIn">Check-in Date</Label>
                        <Input
                          id="checkIn"
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>

                      <div>
                        <Label htmlFor="checkOut">Check-out Date</Label>
                        <Input
                          id="checkOut"
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          min={checkIn || new Date().toISOString().split("T")[0]}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger id="guests">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: room?.capacity || 1 }, (_, i) => i + 1).map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="requests">Special Requests (Optional)</Label>
                      <Textarea
                        id="requests"
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        placeholder="Early check-in, extra pillows, etc..."
                        rows={3}
                      />
                    </div>
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
                  {hotel && room ? (
                    <>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <p className="font-semibold">{hotel.name}</p>
                          <p className="text-muted-foreground">{room.name}</p>
                        </div>

                        {nights > 0 && (
                          <>
                            <div className="flex justify-between text-sm pt-2 border-t">
                              <span className="text-muted-foreground">
                                ${room.price} × {nights} {nights === 1 ? "night" : "nights"}
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

                        <Button className="w-full" onClick={handleBooking} disabled={!isFormValid || nights <= 0}>
                          Confirm Booking
                        </Button>

                        <Button variant="ghost" className="w-full mt-2" onClick={() => router.push("/book-meals")}>
                          Skip for Now
                        </Button>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">Select a hotel and room to see pricing</p>
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
