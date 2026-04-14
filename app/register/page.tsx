"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import { useApp } from "@/contexts/app-context"
import { register as registerUser } from "@/lib/auth"
import type { Registration } from "@/lib/types"

const REGISTRATION_FEE = 150

export default function RegisterPage() {
  const router = useRouter()
  const { addRegistration, refreshAuth } = useApp()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Player Info
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    teamName: "",
    clubName: "",
    coachName: "",
    // Emergency Contact
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelationship: "",
    // Tournament Details
    tournamentCategory: "",
    skillLevel: "",
    tshirtSize: "",
    medicalConditions: "",
    dietaryRestrictions: "",
  })

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // Create player account
    const player = registerUser({
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender as "male" | "female" | "other",
      teamName: formData.teamName || undefined,
      clubName: formData.clubName || undefined,
      coachName: formData.coachName || undefined,
      emergencyContact: {
        name: formData.emergencyName,
        phone: formData.emergencyPhone,
        relationship: formData.emergencyRelationship,
      },
    })

    // Create registration
    const registration: Registration = {
      id: `reg_${Date.now()}`,
      playerId: player.id,
      tournamentCategory: formData.tournamentCategory,
      skillLevel: formData.skillLevel as "beginner" | "intermediate" | "advanced" | "professional",
      tshirtSize: formData.tshirtSize as "XS" | "S" | "M" | "L" | "XL" | "XXL",
      medicalConditions: formData.medicalConditions || undefined,
      dietaryRestrictions: formData.dietaryRestrictions || undefined,
      amount: REGISTRATION_FEE,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    }

    addRegistration(registration)
    refreshAuth()

    // Redirect to hotel booking
    router.push("/book-hotel")
  }

  const isStep1Valid = formData.name && formData.email && formData.phone && formData.dateOfBirth && formData.gender
  const isStep2Valid = formData.emergencyName && formData.emergencyPhone && formData.emergencyRelationship
  const isStep3Valid = formData.tournamentCategory && formData.skillLevel && formData.tshirtSize

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Tournament Registration</h1>
            <p className="text-muted-foreground">Complete your registration in 3 easy steps</p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {step > 1 ? <Check className="h-4 w-4" /> : "1"}
              </div>
              <span className={`text-sm ${step >= 1 ? "text-foreground" : "text-muted-foreground"}`}>Player Info</span>
            </div>

            <div className="flex-1 h-px bg-border mx-4" />

            <div className="flex items-center gap-2">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {step > 2 ? <Check className="h-4 w-4" /> : "2"}
              </div>
              <span className={`text-sm ${step >= 2 ? "text-foreground" : "text-muted-foreground"}`}>Emergency</span>
            </div>

            <div className="flex-1 h-px bg-border mx-4" />

            <div className="flex items-center gap-2">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                3
              </div>
              <span className={`text-sm ${step >= 3 ? "text-foreground" : "text-muted-foreground"}`}>Tournament</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {step === 1 && "Player Information"}
                    {step === 2 && "Emergency Contact"}
                    {step === 3 && "Tournament Details"}
                  </CardTitle>
                  <CardDescription>
                    {step === 1 && "Tell us about yourself"}
                    {step === 2 && "Who should we contact in case of emergency?"}
                    {step === 3 && "Select your tournament category and preferences"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <Label htmlFor="dob">Date of Birth *</Label>
                        <Input
                          id="dob"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => updateField("dateOfBirth", e.target.value)}
                        />
                      </div>

                      <div>
                        <Label htmlFor="gender">Gender *</Label>
                        <Select value={formData.gender} onValueChange={(value) => updateField("gender", value)}>
                          <SelectTrigger id="gender">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="teamName">Team Name</Label>
                        <Input
                          id="teamName"
                          value={formData.teamName}
                          onChange={(e) => updateField("teamName", e.target.value)}
                          placeholder="Enter your team name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="clubName">Club Name</Label>
                        <Input
                          id="clubName"
                          value={formData.clubName}
                          onChange={(e) => updateField("clubName", e.target.value)}
                          placeholder="Enter your club name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="coachName">Coach Name</Label>
                        <Input
                          id="coachName"
                          value={formData.coachName}
                          onChange={(e) => updateField("coachName", e.target.value)}
                          placeholder="Enter your coach name"
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="emergencyName">Contact Name *</Label>
                        <Input
                          id="emergencyName"
                          value={formData.emergencyName}
                          onChange={(e) => updateField("emergencyName", e.target.value)}
                          placeholder="Jane Doe"
                        />
                      </div>

                      <div>
                        <Label htmlFor="emergencyPhone">Contact Phone *</Label>
                        <Input
                          id="emergencyPhone"
                          type="tel"
                          value={formData.emergencyPhone}
                          onChange={(e) => updateField("emergencyPhone", e.target.value)}
                          placeholder="+1 (555) 987-6543"
                        />
                      </div>

                      <div>
                        <Label htmlFor="emergencyRelationship">Relationship *</Label>
                        <Input
                          id="emergencyRelationship"
                          value={formData.emergencyRelationship}
                          onChange={(e) => updateField("emergencyRelationship", e.target.value)}
                          placeholder="Parent, Spouse, Friend, etc."
                        />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="category">Tournament Category *</Label>
                        <Select
                          value={formData.tournamentCategory}
                          onValueChange={(value) => updateField("tournamentCategory", value)}
                        >
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="singles-men">Men's Singles</SelectItem>
                            <SelectItem value="singles-women">Women's Singles</SelectItem>
                            <SelectItem value="doubles-men">Men's Doubles</SelectItem>
                            <SelectItem value="doubles-women">Women's Doubles</SelectItem>
                            <SelectItem value="doubles-mixed">Mixed Doubles</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="skillLevel">Skill Level *</Label>
                        <Select value={formData.skillLevel} onValueChange={(value) => updateField("skillLevel", value)}>
                          <SelectTrigger id="skillLevel">
                            <SelectValue placeholder="Select skill level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="professional">Professional</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="tshirt">T-Shirt Size *</Label>
                        <Select value={formData.tshirtSize} onValueChange={(value) => updateField("tshirtSize", value)}>
                          <SelectTrigger id="tshirt">
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="XS">XS</SelectItem>
                            <SelectItem value="S">S</SelectItem>
                            <SelectItem value="M">M</SelectItem>
                            <SelectItem value="L">L</SelectItem>
                            <SelectItem value="XL">XL</SelectItem>
                            <SelectItem value="XXL">XXL</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="medical">Medical Conditions</Label>
                        <Textarea
                          id="medical"
                          value={formData.medicalConditions}
                          onChange={(e) => updateField("medicalConditions", e.target.value)}
                          placeholder="Any medical conditions we should be aware of..."
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="dietary">Dietary Restrictions</Label>
                        <Textarea
                          id="dietary"
                          value={formData.dietaryRestrictions}
                          onChange={(e) => updateField("dietaryRestrictions", e.target.value)}
                          placeholder="Vegetarian, vegan, allergies, etc..."
                          rows={3}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between mt-6 pt-6 border-t">
                    {step > 1 ? (
                      <Button variant="outline" onClick={handleBack}>
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        Back
                      </Button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <Button
                        onClick={handleNext}
                        disabled={
                          (step === 1 && !isStep1Valid) ||
                          (step === 2 && !isStep2Valid) ||
                          (step === 3 && !isStep3Valid)
                        }
                      >
                        Next
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <div className="flex gap-4">
                        <Button onClick={() => router.push("/login")} variant="outline">
                          Log In
                        </Button>
                        <Button onClick={handleSubmit} disabled={!isStep3Valid}>
                          Complete Registration
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Registration Fee</span>
                      <span className="font-medium">${REGISTRATION_FEE}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Processing Fee</span>
                      <span className="font-medium">$0</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-lg">${REGISTRATION_FEE}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t text-xs text-muted-foreground space-y-2">
                    <p>After registration, you can:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Book hotel accommodation</li>
                      <li>Order meal plans</li>
                      <li>Access your player dashboard</li>
                    </ul>
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
