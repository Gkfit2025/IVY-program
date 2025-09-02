import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Users, Calendar, Star, ArrowRight, Phone, Mail, Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link" // Added import for client-side navigation

export default function IVYHomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo12.png"
                
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-playfair font-bold text-2xl text-foreground">Grace Kennett Foundation</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/opportunities" className="text-foreground hover:text-primary transition-colors"> {/* Changed from <a href="/pages/opportunities"> to <Link href="/opportunities"> */}
                Find Opportunities
              </Link>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#impact" className="text-foreground hover:text-primary transition-colors">
                Impact Stories
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Join IVY</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground text-balance">
                  Spread Kindness Through
                  <span className="text-primary"> Volunteering</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Connect with meaningful volunteering opportunities across South India. Make a difference in
                  communities while experiencing rich cultural exchange.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/opportunities"> {/* Wrapped Button with Link */}
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Find Opportunities
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Become a Host
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-accent" />
                  <span>500+ Volunteers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>50+ Locations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-accent" />
                  <span>100+ Projects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/volunteers-working-together-in-south-india-communi.png"
                  alt="Volunteers working together in community project"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <p className="text-sm opacity-90">From 200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section id="opportunities" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Featured Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover meaningful ways to contribute to communities across South India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Child Education Support",
                location: "Madurai, Tamil Nadu",
                duration: "2-4 weeks",
                category: "Education",
                image: "children learning in classroom with volunteer teacher",
                rating: 4.8,
                reviews: 24,
              },
              {
                title: "Wildlife Conservation",
                location: "Coimbatore, Tamil Nadu",
                duration: "1-3 months",
                category: "Environment",
                image: "volunteers working on wildlife conservation project",
                rating: 4.9,
                reviews: 18,
              },
              {
                title: "Healthcare Assistance",
                location: "Kochi, Kerala",
                duration: "3-6 weeks",
                category: "Healthcare",
                image: "medical volunteers helping in rural healthcare clinic",
                rating: 4.7,
                reviews: 31,
              },
            ].map((opportunity, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=240&width=400&query=${opportunity.image}`}
                    alt={opportunity.title}
                    width={400}
                    height={240}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                      {opportunity.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span>{opportunity.rating}</span>
                      <span>({opportunity.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-playfair">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{opportunity.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{opportunity.duration}</span>
                    </div>
                  </div>
                  <Link href="/opportunities"> {/* Added Link to navigate to full list on "Learn More" */}
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/opportunities"> {/* Wrapped Button with Link */}
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View All Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Impact Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from volunteers who made a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Education Volunteer",
                location: "Madurai",
                quote:
                  "Working with local children was incredibly rewarding. I learned as much as I taught, and the cultural exchange was beautiful.",
                image: "young woman volunteer with children in classroom",
              },
              {
                name: "Michael Chen",
                role: "Healthcare Volunteer",
                location: "Kochi",
                quote:
                  "The experience opened my eyes to different healthcare challenges and solutions. The community welcomed me with open arms.",
                image: "male volunteer in healthcare setting",
              },
              {
                name: "Emma Rodriguez",
                role: "Environmental Volunteer",
                location: "Coimbatore",
                quote:
                  "Contributing to wildlife conservation while learning about local ecosystems was a life-changing experience.",
                image: "female volunteer in nature conservation project",
              },
            ].map((story, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                      <Image
                        src={`/abstract-geometric-shapes.png?height=48&width=48&query=${story.image}`}
                        alt={story.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {story.role} • {story.location}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic">"{story.quote}"</blockquote>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">About IVY Platform</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  IVY is an innovative platform that connects passionate volunteers with meaningful opportunities across
                  South India. Just like Airbnb revolutionized travel, we're transforming how people discover and engage
                  in volunteer work.
                </p>
                <p>
                  Our mission is to create lasting positive impact in communities while providing volunteers with
                  authentic cultural experiences and personal growth opportunities.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Active Volunteers</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Partner Organizations</div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/diverse-group-of-volunteers-working-together-in-so.png"
                alt="IVY volunteers working together"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance">Ready to Make a Difference?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Join our community of changemakers and start your volunteering journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/opportunities"> {/* Wrapped Button with Link */}
              <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Find Opportunities
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Become a Host
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="font-playfair font-bold text-xl text-foreground">Grace Kennett Foundation</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Connecting volunteers with meaningful opportunities across South India.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">For Volunteers</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Find Opportunities</div>
                <div>How It Works</div>
                <div>Safety Guidelines</div>
                <div>FAQs</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">For Hosts</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>List Your Project</div>
                <div>Host Resources</div>
                <div>Best Practices</div>
                <div>Support</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@ivyplatform.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Madurai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Grace Kennett Foundation. All rights reserved. Spreading kindness across South India.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
```

```tsx
"use client"
import React, { useState } from "react"
import Link from "next/link" // Added import for potential future navigation (e.g., to detail pages)

// Define types for our data
interface Opportunity {
  id: number
  title: string
  description: string
  location: string
  theme: string
  duration: string
  imageUrl: string
}

// Sample data - in a real app this would come from an API
const opportunitiesData: Opportunity[] = [
  {
    id: 1,
    title: "Child Education Volunteer",
    description: "Help teach basic English and math to underprivileged children in rural Madurai.",
    location: "Madurai",
    theme: "childcare",
    duration: "2 weeks",
    imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Health Camp Assistant",
    description: "Assist doctors in organizing health checkup camps in urban slums of Chennai.",
    location: "Chennai",
    theme: "medical",
    duration: "3 weeks",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Wildlife Conservation Volunteer",
    description: "Participate in wildlife monitoring and conservation efforts in the Western Ghats.",
    location: "Coimbatore",
    theme: "wildlife",
    duration: "1 month",
    imageUrl: "https://images.unsplash.com/photo-1583512603806-077998240c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Temple Preservation Volunteer",
    description: "Help preserve and promote the cultural heritage of Madurai's ancient temples.",
    location: "Madurai",
    theme: "heritage",
    duration: "2 weeks",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "After-school Tutor",
    description: "Provide academic support to students in government schools after regular school hours.",
    location: "Trichy",
    theme: "education",
    duration: "3 weeks",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Green City Initiative",
    description: "Join our urban afforestation project to increase green cover in Salem city.",
    location: "Salem",
    theme: "environment",
    duration: "1 week",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
]

// Define filter types
interface Filters {
  locations: string[]
  themes: string[]
  durations: string[]
}

export default function OpportunitiesPage() {
  // State for filters
  const [filters, setFilters] = useState<Filters>({
    locations: ["Madurai", "Chennai", "Coimbatore", "Trichy", "Salem"],
    themes: ["childcare", "medical", "wildlife", "heritage", "education", "environment"],
    durations: []
  })

  // Handle filter changes
  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setFilters(prev => {
      const currentFilters = [...prev[filterType]]
      const index = currentFilters.indexOf(value)

      if (index > -1) {
        currentFilters.splice(index, 1)
      } else {
        currentFilters.push(value)
      }

      return {
        ...prev,
        [filterType]: currentFilters
      }
    })
  }

  // Handle view details
  const handleViewDetails = (id: number) => {
    alert(`Opportunity ${id} details would be shown here. This would navigate to a detail page in the real application.`)
  }

  // Helper: duration filter logic (for demonstration, matches sample durations to filter categories)
  const durationMatches = (opportunityDuration: string, activeFilters: string[]): boolean => {
    if (activeFilters.length === 0) return true
    for (const filter of activeFilters) {
      if (filter === "less-than-week" && (opportunityDuration.includes("1 week") || opportunityDuration.includes("week") && !opportunityDuration.includes("2"))) return true
      if (filter === "1-2-weeks" && (opportunityDuration === "2 weeks" || opportunityDuration.includes("week") && opportunityDuration !== "1 week" && opportunityDuration !== "3 weeks")) return true
      if (filter === "2-4-weeks" && (opportunityDuration === "3 weeks")) return true
      if (filter === "1-plus-months" && (opportunityDuration === "1 month")) return true
    }
    return false
  }

  // Filter opportunities based on filters
  const filteredOpportunities = opportunitiesData.filter(opportunity =>
    filters.locations.includes(opportunity.location) &&
    filters.themes.includes(opportunity.theme) &&
    durationMatches(opportunity.duration, filters.durations)
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-green-700">IVY Program</h1>
            <nav className="ml-8 hidden md:block">
              <ul className="flex space-x-8">
                <li><Link href="/opportunities" className="text-green-700 font-semibold">Find Opportunities</Link></li> {/* Changed <a> to <Link> */}
                <li><a href="#" className="text-gray-600 hover:text-green-700">Host an Opportunity</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700">Resources</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700">About Us</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Sign In</button>
            <button className="md:hidden text-gray-600">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4 pr-0 md:pr-6 mb-6 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4 overflow-y-auto max-h-screen">
              <h2 className="text-xl font-bold mb-6 text-gray-800">Filters</h2>

              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">Location</h3>
                <div className="space-y-2">
                  {["Madurai", "Chennai", "Coimbatore", "Trichy", "Salem"].map(location => (
                    <div key={location} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`location-${location}`}
                        checked={filters.locations.includes(location)}
                        onChange={() => handleFilterChange("locations", location)}
                        className="mr-2 rounded text-green-600 focus:ring-green-500"
                      />
                      <label htmlFor={`location-${location}`} className="text-gray-600">{location}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Theme Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">Theme</h3>
                <div className="space-y-2">
                  {[
                    { id: "childcare", label: "Childcare" },
                    { id: "medical", label: "Medical" },
                    { id: "wildlife", label: "Wildlife" },
                    { id: "heritage", label: "Heritage" },
                    { id: "education", label: "Education" },
                    { id: "environment", label: "Environment" }
                  ].map(theme => (
                    <div key={theme.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`theme-${theme.id}`}
                        checked={filters.themes.includes(theme.id)}
                        onChange={() => handleFilterChange("themes", theme.id)}
                        className="mr-2 rounded text-green-600 focus:ring-green-500"
                      />
                      <label htmlFor={`theme-${theme.id}`} className="text-gray-600">{theme.label}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Duration Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">Duration</h3>
                <div className="space-y-2">
                  {[
                    { id: "less-than-week", label: "Less than 1 week" },
                    { id: "1-2-weeks", label: "1-2 weeks" },
                    { id: "2-4-weeks", label: "2-4 weeks" },
                    { id: "1-plus-months", label: "1+ months" }
                  ].map(duration => (
                    <div key={duration.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`duration-${duration.id}`}
                        checked={filters.durations.includes(duration.id)}
                        onChange={() => handleFilterChange("durations", duration.id)}
                        className="mr-2 rounded text-green-600 focus:ring-green-500"
                      />
                      <label htmlFor={`duration-${duration.id}`} className="text-gray-600">{duration.label}</label>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
                onClick={() => {/* Filters are already applied live! */}}
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Opportunities List */}
          <div className="w-full md:w-3/4">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">{filteredOpportunities.length} Opportunities Available</h2>
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Most Relevant</option>
                  <option>Newest First</option>
                  <option>Nearest Location</option>
                  <option>Shortest Duration</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOpportunities.map(opportunity => {
                // Determine theme badge color based on theme type
                let badgeClass = ""
                switch (opportunity.theme) {
                  case "childcare":
                    badgeClass = "bg-green-100 text-green-800"
                    break
                  case "medical":
                    badgeClass = "bg-blue-100 text-blue-800"
                    break
                  case "wildlife":
                    badgeClass = "bg-yellow-100 text-yellow-800"
                    break
                  case "heritage":
                    badgeClass = "bg-purple-100 text-purple-800"
                    break
                  case "education":
                    badgeClass = "bg-red-100 text-red-800"
                    break
                  case "environment":
                    badgeClass = "bg-teal-100 text-teal-800"
                    break
                  default:
                    badgeClass = "bg-gray-100 text-gray-800"
                }

                return (
                  <div key={opportunity.id} className="opportunity-card bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${opportunity.imageUrl})` }}
                    ></div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <span className={`theme-badge inline-block px-2 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>
                          {opportunity.theme.charAt(0).toUpperCase() + opportunity.theme.slice(1)}
                        </span>
                        <span className="text-sm text-gray-500">
                          <i className="fas fa-map-marker-alt mr-1"></i> {opportunity.location}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{opportunity.title}</h3>
                      <p className="text-gray-600 mb-4">{opportunity.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          <i className="far fa-clock mr-1"></i> {opportunity.duration}
                        </span>
                        <button
                          className="text-green-600 font-semibold hover:text-green-800"
                          onClick={() => handleViewDetails(opportunity.id)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <a href="#" className="px-3 py-1 rounded-md bg-green-100 text-green-800 font-semibold">1</a>
                <a href="#" className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">2</a>
                <a href="#" className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">3</a>
                <a href="#" className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">4</a>
                <a href="#" className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">Next →</a>
              </nav>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">IVY Program</h3>
              <p className="text-gray-400">Connecting youth with meaningful internship and volunteer opportunities across Tamil Nadu.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">For Volunteers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">For Organizations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Themes</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Childcare</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Medical</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Wildlife</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Heritage</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-gray-400">
                <p>123 Gandhi Road</p>
                <p>Madurai, Tamil Nadu 625001</p>
                <p>info@ivyprogram.org</p>
                <p>+91 98765 43210</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© 2023 IVY Program. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
```

### Guidelines for Changes and Deployment
1. **File Structure in Next.js (Assuming App Router)**:
   - Place the first code (home page) in `app/page.tsx` (or whatever your root page file is named; rename "page (4).tsx.txt" to "page.tsx").
   - Place the second code (opportunities page) in `app/opportunities/page.tsx` (create the `opportunities` folder if needed; rename "opportunities.tsx.txt" to "page.tsx" inside that folder).
   - This sets up routes: Home at `/` and Opportunities at `/opportunities`.

2. **Key Changes Made**:
   - **Navigation Fixes**: Changed incorrect paths like `/pages/opportunities` to `/opportunities`. Replaced plain `<a>` tags with `<Link>` from `next/link` for client-side routing (faster navigation without full page reloads).
   - **Button Links**: Wrapped "Find Opportunities", "View All Opportunities", and "Learn More" buttons with `<Link href="/opportunities">` so clicking them navigates to the opportunities list.
   - **Consistency**: No major branding changes, but note the home page uses "Grace Kennett Foundation" while opportunities uses "IVY Program". If you want to unify (e.g., change opportunities header to "Grace Kennett Foundation - IVY Program"), edit the `<h1>` in the header.
   - **No New Features**: The opportunities page already displays the list with filters. "View Details" alerts for now; to add a real detail page, create `app/opportunities/[id]/page.tsx` and update `handleViewDetails` to use `router.push(`/opportunities/${id}`)` (import `useRouter` from `next/navigation`).
   - **Internships**: The code mentions "internship and volunteer" in the footer, but data is volunteer-focused. To add internships, expand `opportunitiesData` array with new entries (e.g., { theme: "internship", ... }) and update filters/themes accordingly.

3. **Deployment on Vercel via GitHub**:
   - **Edit Files**: Go to your GitHub repo, edit the files (or upload the corrected ones), and commit changes (e.g., message: "Fix navigation and add links to opportunities list").
   - **Vercel Auto-Deploy**: Vercel will detect the push and redeploy automatically. Check the deployment status in your Vercel dashboard.
   - **Test**: After deploy, visit your site URL, click "Find Opportunities" or "Learn More" – it should navigate to the list page without errors.
   - **Add More Data**: For real data, replace `opportunitiesData` with a fetch from an API (e.g., in `useEffect`). Use environment variables for API keys.
   - **Errors?**: If images/imports break, ensure paths (e.g., `/logo12.png`) exist in `/public`. Run locally with `npm run dev` to test before pushing.
   - **Adding Pages/Features**: For a "Become a Host" page, create `app/host/page.tsx` and link buttons to `/host`. Push to GitHub for Vercel to update.

If you need more pages (e.g., detail view) or backend integration, provide details!
