"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Heart, MapPin, Users, Calendar, Star, GraduationCap, HandHeart, Globe } from "lucide-react"
import Image from "next/image"

export default function JoinIVYPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type")

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="font-playfair font-bold text-2xl text-foreground">IVY</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#search" className="text-foreground hover:text-primary transition-colors">
                Find Opportunities
              </Link>
              <Link href="/#about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/#impact" className="text-foreground hover:text-primary transition-colors">
                Impact Stories
              </Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/internship">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
              {type === "volunteer" ? "Volunteer Program" : type === "both" ? "Volunteer & Internship" : "Join IVY"}
            </Badge>
            <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground text-balance">
              Start Your
              <span className="text-primary"> Impact Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              {type === "volunteer"
                ? "Make a meaningful difference through volunteer work across South India"
                : type === "both"
                  ? "Explore both volunteer and internship opportunities to maximize your impact"
                  : "Choose your path to create positive change in communities across South India"}
            </p>
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Internship Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/medical-students-in-hospital-internship-program.jpg"
                  alt="Internship Program"
                  width={400}
                  height={240}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    Professional Development
                  </Badge>
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-playfair">Internship Program</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Gain professional experience while making a difference. Perfect for students and recent graduates.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>3-12 weeks duration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Structured mentorship</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Certificate provided</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/internship" className="block w-full">
                    Explore Internships
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Volunteer Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/volunteers-helping-children-in-community-center.jpg"
                  alt="Volunteer Program"
                  width={400}
                  height={240}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                    Community Impact
                  </Badge>
                  <HandHeart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-playfair">Volunteer Program</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Make an immediate impact in local communities. Flexible schedules and diverse opportunities.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>1-8 weeks duration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Community integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Cultural exchange</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/search?type=volunteer" className="block w-full">
                    Find Volunteer Work
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Both Programs Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border md:col-span-2 lg:col-span-1">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/diverse-group-working-on-community-development-pro.jpg"
                  alt="Combined Program"
                  width={400}
                  height={240}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                    Maximum Impact
                  </Badge>
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-playfair">Both Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Combine professional development with community service for a comprehensive experience.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Flexible duration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Dual experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Enhanced portfolio</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/search?type=both" className="block w-full">
                    Explore All Options
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose IVY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Why Choose IVY?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive support to ensure your experience is meaningful and impactful
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Verified Organizations",
                description: "All our partner organizations are thoroughly vetted for quality and safety",
              },
              {
                icon: MapPin,
                title: "Local Support",
                description: "24/7 local support team to assist you throughout your journey",
              },
              {
                icon: Star,
                title: "Quality Assurance",
                description: "Regular monitoring and feedback to ensure high-quality experiences",
              },
              {
                icon: Heart,
                title: "Community Impact",
                description: "Measurable impact tracking to show the difference you're making",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Take the first step towards making a meaningful impact in South India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/internship">Start with Internship</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/search?type=volunteer">Find Volunteer Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="font-playfair font-bold text-xl text-foreground">IVY</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                Connecting volunteers with meaningful opportunities across South India.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Programs</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/internship" className="block hover:text-primary transition-colors">
                  Internships
                </Link>
                <Link href="/search?type=volunteer" className="block hover:text-primary transition-colors">
                  Volunteer Work
                </Link>
                <Link href="/search?type=both" className="block hover:text-primary transition-colors">
                  Combined Programs
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Help Center</div>
                <div>Safety Guidelines</div>
                <div>Contact Support</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/#about" className="block hover:text-primary transition-colors">
                  About Us
                </Link>
                <div>Careers</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 IVY Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
