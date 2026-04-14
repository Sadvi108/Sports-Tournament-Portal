"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/lib/auth"
import { useApp } from "@/contexts/app-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const { refreshAuth } = useApp()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const player = login(email, password)
    if (player) {
      refreshAuth()
      if (email === "admin@tournament.com") {
        router.push("/admin")
      } else {
        router.push("/dashboard")
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-md">
          <Card className="animate-in fade-in-0 zoom-in-95 duration-500">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Access your tournament dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                    className="focus:ring-2 focus:ring-primary focus:ring-offset-1 transition-shadow duration-300"
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="focus:ring-2 focus:ring-primary focus:ring-offset-1 transition-shadow duration-300"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Login
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link href="/register" className="text-primary hover:underline">
                    Register here
                  </Link>
                </div>

                <div className="pt-4 border-t text-xs text-muted-foreground">
                  <p className="font-semibold mb-2">Demo Mode:</p>
                  <p>Enter any email and password to login</p>
                  <p>Admin: admin@tournament.com / admin123</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
