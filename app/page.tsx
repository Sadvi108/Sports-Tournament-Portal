import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Hotel,
  UtensilsCrossed,
  CreditCard,
  Calendar,
  Users,
  Shield,
  Zap,
  Newspaper,
  TrendingUp,
  CalendarDays,
  Medal,
  Clock,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">2025 Championship Tournament</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Register for the Ultimate Sports Experience
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Complete tournament registration, accommodation booking, and meal planning all in one place. Join athletes
              from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="text-base px-8">
                  Register Now
                </Button>
              </Link>
              <Link href="/#about">
                <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/40 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Registered Athletes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-muted-foreground">Tournament Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-sm text-muted-foreground">Partner Hotels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$50K</div>
              <div className="text-sm text-muted-foreground">Prize Pool</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sports News Section */}
      <section id="news" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-balance">Latest News</h2>
              <p className="text-muted-foreground">Stay updated with tournament announcements and sports highlights</p>
            </div>
            <Newspaper className="h-8 w-8 text-primary hidden md:block" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src="/basketball-championship-trophy-celebration.jpg"
                  alt="Championship Update"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Breaking News</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Clock className="h-3 w-3" />
                  <span>2 hours ago</span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  Registration Extended: New Deadline Announced
                </CardTitle>
                <CardDescription>
                  Due to popular demand, we've extended the registration deadline to May 15, 2025. Don't miss your
                  chance to compete!
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src="/modern-sports-facility-stadium.jpg"
                  alt="Venue Update"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-accent">Venue</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Clock className="h-3 w-3" />
                  <span>1 day ago</span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  New State-of-the-Art Facility Unveiled
                </CardTitle>
                <CardDescription>
                  The National Sports Complex has completed renovations, featuring upgraded courts and world-class
                  amenities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src="/athlete-training-preparation.jpg"
                  alt="Training Tips"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-muted">Tips</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Clock className="h-3 w-3" />
                  <span>3 days ago</span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  Expert Training Tips for Tournament Success
                </CardTitle>
                <CardDescription>
                  Professional coaches share their top strategies for peak performance during the championship
                  tournament.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Rankings Section */}
      <section id="rankings" className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-balance">Top Rankings</h2>
              <p className="text-muted-foreground">Current standings and player rankings across all categories</p>
            </div>
            <TrendingUp className="h-8 w-8 text-primary hidden md:block" />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Medal className="h-5 w-5 text-primary" />
                  Professional Category
                </CardTitle>
                <CardDescription>Top 5 ranked players</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { rank: 1, name: "Marcus Johnson", points: 2450, change: "up" },
                    { rank: 2, name: "Sarah Chen", points: 2380, change: "up" },
                    { rank: 3, name: "David Martinez", points: 2310, change: "down" },
                    { rank: 4, name: "Emma Williams", points: 2290, change: "same" },
                    { rank: 5, name: "James Anderson", points: 2250, change: "up" },
                  ].map((player) => (
                    <div
                      key={player.rank}
                      className="flex items-center gap-4 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
                    >
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                          player.rank === 1
                            ? "bg-accent text-accent-foreground"
                            : player.rank === 2
                              ? "bg-muted text-muted-foreground"
                              : player.rank === 3
                                ? "bg-primary/20 text-primary"
                                : "bg-muted/50 text-muted-foreground"
                        }`}
                      >
                        {player.rank}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{player.name}</div>
                        <div className="text-xs text-muted-foreground">{player.points} points</div>
                      </div>
                      <div
                        className={`text-xs font-medium ${
                          player.change === "up"
                            ? "text-green-500"
                            : player.change === "down"
                              ? "text-red-500"
                              : "text-muted-foreground"
                        }`}
                      >
                        {player.change === "up" ? "↑" : player.change === "down" ? "↓" : "—"}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Medal className="h-5 w-5 text-primary" />
                  Advanced Category
                </CardTitle>
                <CardDescription>Top 5 ranked players</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { rank: 1, name: "Alex Thompson", points: 1890, change: "same" },
                    { rank: 2, name: "Lisa Park", points: 1850, change: "up" },
                    { rank: 3, name: "Ryan O'Connor", points: 1820, change: "up" },
                    { rank: 4, name: "Maya Patel", points: 1780, change: "down" },
                    { rank: 5, name: "Chris Lee", points: 1750, change: "up" },
                  ].map((player) => (
                    <div
                      key={player.rank}
                      className="flex items-center gap-4 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
                    >
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                          player.rank === 1
                            ? "bg-accent text-accent-foreground"
                            : player.rank === 2
                              ? "bg-muted text-muted-foreground"
                              : player.rank === 3
                                ? "bg-primary/20 text-primary"
                                : "bg-muted/50 text-muted-foreground"
                        }`}
                      >
                        {player.rank}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{player.name}</div>
                        <div className="text-xs text-muted-foreground">{player.points} points</div>
                      </div>
                      <div
                        className={`text-xs font-medium ${
                          player.change === "up"
                            ? "text-green-500"
                            : player.change === "down"
                              ? "text-red-500"
                              : "text-muted-foreground"
                        }`}
                      >
                        {player.change === "up" ? "↑" : player.change === "down" ? "↓" : "—"}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fixtures & Schedule Section */}
      <section id="fixtures" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-balance">Upcoming Fixtures</h2>
              <p className="text-muted-foreground">Tournament schedule and match timings</p>
            </div>
            <CalendarDays className="h-8 w-8 text-primary hidden md:block" />
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-primary text-primary">
                    Day 1 - Opening Round
                  </Badge>
                  <span className="text-sm text-muted-foreground">June 15, 2025</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/40">
                  <div className="text-center min-w-[80px]">
                    <div className="text-sm font-medium">09:00 AM</div>
                    <div className="text-xs text-muted-foreground">Court 1</div>
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-4">
                    <div className="text-sm font-medium">Professional - Group A</div>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/40">
                  <div className="text-center min-w-[80px]">
                    <div className="text-sm font-medium">11:30 AM</div>
                    <div className="text-xs text-muted-foreground">Court 2</div>
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-4">
                    <div className="text-sm font-medium">Advanced - Group B</div>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/40">
                  <div className="text-center min-w-[80px]">
                    <div className="text-sm font-medium">02:00 PM</div>
                    <div className="text-xs text-muted-foreground">Court 1</div>
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-4">
                    <div className="text-sm font-medium">Intermediate - Group C</div>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-accent text-accent">
                    Day 2 - Quarter Finals
                  </Badge>
                  <span className="text-sm text-muted-foreground">June 16, 2025</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/40">
                  <div className="text-center min-w-[80px]">
                    <div className="text-sm font-medium">10:00 AM</div>
                    <div className="text-xs text-muted-foreground">Main Court</div>
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-4">
                    <div className="text-sm font-medium">Professional QF1</div>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/40">
                  <div className="text-center min-w-[80px]">
                    <div className="text-sm font-medium">01:00 PM</div>
                    <div className="text-xs text-muted-foreground">Main Court</div>
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-4">
                    <div className="text-sm font-medium">Professional QF2</div>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-primary text-primary">
                    Day 6 - Finals
                  </Badge>
                  <span className="text-sm text-muted-foreground">June 20, 2025</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 border border-primary/40">
                  <div className="text-center min-w-[80px]">
                    <div className="text-sm font-medium text-primary">03:00 PM</div>
                    <div className="text-xs text-primary/70">Main Court</div>
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-4">
                    <div className="text-sm font-medium">Championship Final</div>
                    <Trophy className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">About the Tournament</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Join us for an unforgettable sporting event featuring world-class competition, professional facilities,
              and comprehensive support services for all participants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Event Details</CardTitle>
                <CardDescription>Mark your calendar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dates:</span>
                  <span className="font-medium">June 15-20, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">National Sports Complex</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Registration Deadline:</span>
                  <span className="font-medium">May 15, 2025</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Categories</CardTitle>
                <CardDescription>Multiple skill levels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Beginner (Ages 12-15)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Intermediate (Ages 16-18)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Advanced (Ages 19-25)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Professional (Ages 26+)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Everything You Need</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Our comprehensive platform handles every aspect of your tournament experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Trophy className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Tournament Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Quick and easy registration process with secure payment processing
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Hotel className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Hotel Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Book accommodation at partner hotels with special tournament rates
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <UtensilsCrossed className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Meal Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Pre-order meals with dietary preferences and special requirements
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CreditCard className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Safe and secure payment processing with multiple payment options
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-6">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Player Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Access your bookings, QR codes, and invoices anytime</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Real-time Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get instant notifications about your registration status
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Our team is here to help you every step of the way</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">When is the registration deadline?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Registration closes on May 15, 2025. We recommend registering early as spots are limited and fill up
                    quickly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is included in the registration fee?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The registration fee includes tournament entry, official tournament t-shirt, access to all
                    facilities, and participation certificate. Accommodation and meals are booked separately.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I cancel my registration?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Yes, cancellations are accepted up to 30 days before the event with a full refund. After that, a 50%
                    cancellation fee applies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Are there group discounts available?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Yes! Groups of 5 or more receive a 10% discount on registration fees. Contact us for more details.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Compete?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Join hundreds of athletes and secure your spot in the 2025 Championship Tournament
            </p>
            <Link href="/register">
              <Button size="lg" className="text-base px-8">
                Start Registration
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
