"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import {
  Heart,
  MapPin,
  Users,
  Calendar,
  Star,
  GraduationCap,
  HandHeart,
  Globe,
  Award,
  Target,
  Eye,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"
import Footer from "@/components/layout/footer"

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
              <span className="font-playfair font-bold text-2xl text-foreground">IV</span>
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
              {type === "volunteer" ? "Volunteer Program" : type === "both" ? "Volunteer & Internship" : "Join IV"}
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
                    Apply Now
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
                  <Link href="/volunteer" className="block w-full">
                    Apply Now
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
                <CardTitle className="text-xl font-playfair">Explore All</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Browse all available opportunities including internships, volunteer work, and combined programs.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Flexible duration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>120+ opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>All categories</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/explore-all" className="block w-full">
                    Apply Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">About IV</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Inspiring Volunteer Youth (IV) is a platform dedicated to connecting passionate individuals with
              meaningful opportunities to create positive change across South India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-primary" />
                  <h3 className="font-playfair font-semibold text-xl text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To bridge the gap between passionate volunteers and communities in need, creating sustainable impact
                  through meaningful engagement and cultural exchange.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Eye className="h-6 w-6 text-primary" />
                  <h3 className="font-playfair font-semibold text-xl text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every individual has the opportunity to contribute to positive social change while
                  gaining valuable experience and cultural understanding.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center border-border">
                <CardContent className="p-6 space-y-2">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Volunteers Placed</div>
                </CardContent>
              </Card>
              <Card className="text-center border-border">
                <CardContent className="p-6 space-y-2">
                  <div className="text-3xl font-bold text-primary">120+</div>
                  <div className="text-sm text-muted-foreground">Partner Organizations</div>
                </CardContent>
              </Card>
              <Card className="text-center border-border">
                <CardContent className="p-6 space-y-2">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Cities Covered</div>
                </CardContent>
              </Card>
              <Card className="text-center border-border">
                <CardContent className="p-6 space-y-2">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We continuously evolve our platform to better serve volunteers and communities",
              },
              {
                icon: Heart,
                title: "Compassion",
                description: "Every opportunity is designed with genuine care for both volunteers and beneficiaries",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We maintain the highest standards in program quality and volunteer support",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Impact Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from volunteers who have made a difference through IV programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                program: "Healthcare Internship",
                location: "Chennai, Tamil Nadu",
                quote:
                  "Working with local healthcare providers opened my eyes to innovative solutions in resource-limited settings. The experience shaped my career path completely.",
                impact: "Helped train 50+ healthcare workers",
              },
              {
                name: "Michael Chen",
                program: "Education Volunteer",
                location: "Coimbatore, Tamil Nadu",
                quote:
                  "Teaching English to underprivileged children was incredibly rewarding. Seeing their progress and enthusiasm motivated me every day.",
                impact: "Improved literacy for 30+ students",
              },
              {
                name: "Priya Sharma",
                program: "Environmental Conservation",
                location: "Kochi, Kerala",
                quote:
                  "The community-based approach to environmental conservation here is inspiring. I learned as much as I contributed to the cause.",
                impact: "Planted 200+ trees, cleaned 5km coastline",
              },
            ].map((story, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">{story.name}</h3>
                    <div className="text-sm text-muted-foreground">
                      <div>{story.program}</div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{story.location}</span>
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground italic">"{story.quote}"</blockquote>
                  <div className="pt-2 border-t border-border">
                    <div className="text-xs font-medium text-primary">{story.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-primary text-primary-foreground border-primary">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-playfair font-semibold text-2xl">Join Our Impact Community</h3>
                <p className="text-primary-foreground/90">
                  Be part of the next success story. Start your journey with IV today.
                </p>
                <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="https://forms.gle/FHirPbejNSDV87Lx5" target="_blank" rel="noopener noreferrer">
                    Share Your Story
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose IV */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Why Choose IV?</h2>
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
      <Footer />
    </div>
  )
}
