"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import Link from "next/link"
import { Heart, MapPin, Users, Calendar, Star, Search } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function IVYHomePage() {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    theme: "",
    fromDate: "",
    toDate: "",
    type: "",
  })
  const [selectedOpportunity, setSelectedOpportunity] = useState("")
  const [calendarOpen, setCalendarOpen] = useState(false)

  const handleSearch = () => {
    const params = new URLSearchParams()
    Object.entries(searchFilters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })

    const queryString = params.toString()
    window.location.href = `/search${queryString ? `?${queryString}` : ""}`
  }

  const volunteerOptions = [
    {
      title: "Child Education Support",
      location: "Madurai, Tamil Nadu",
      duration: "1-2 months",
      category: "Education",
      image: "children learning in classroom with volunteer teacher",
      rating: 4.8,
      reviews: 24,
      price: "1 month ₹1,000 / 2 months ₹2,000",
    },
    {
      title: "Wildlife Conservation",
      location: "Coimbatore, Tamil Nadu",
      duration: "1-2 months",
      category: "Environment",
      image: "volunteers working on wildlife conservation project",
      rating: 4.9,
      reviews: 18,
      price: "1 month ₹1,000 / 2 months ₹2,000",
    },
    {
      title: "Healthcare Assistance",
      location: "Kochi, Kerala",
      duration: "1-2 months",
      category: "Healthcare",
      image: "medical volunteers helping in rural healthcare clinic",
      rating: 4.7,
      reviews: 31,
      price: "1 month ₹1,000 / 2 months ₹2,000",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Search */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground text-balance">
                  Find Your Perfect
                  <span className="text-primary"> Volunteering</span> Match
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Discover meaningful opportunities across South India. Search by location, theme, and find the perfect
                  match for your skills and passion.
                </p>
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Join IV
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => (window.location.href = "/internship-program")}>
                    Internship
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedOpportunity("volunteer")}>
                    Volunteer
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedOpportunity("both")}>
                    Internship & Volunteer
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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

      <section id="search" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="font-playfair font-bold text-2xl text-foreground">Find Your Perfect Opportunity</h2>
                <p className="text-muted-foreground">
                  Search and filter volunteering opportunities that match your interests
                </p>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search opportunities, organizations, or keywords..."
                  className="pl-10 h-12 text-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Select
                  value={searchFilters.location}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, location: value }))}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="kerala">Kerala</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                    <SelectItem value="telangana">Telangana</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={searchFilters.theme}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, theme: value }))}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="childcare">Childcare & Education</SelectItem>
                    <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                    <SelectItem value="wildlife">Wildlife & Environment</SelectItem>
                    <SelectItem value="heritage">Heritage & Culture</SelectItem>
                    <SelectItem value="community">Community Development</SelectItem>
                    <SelectItem value="elderly">Elderly Care</SelectItem>
                    <SelectItem value="disability">Disability Support</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={searchFilters.type}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, type: value }))}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="volunteer">Volunteer</SelectItem>
                    <SelectItem value="intern">Internship</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>

                <div className="md:col-span-2 lg:col-span-1">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Duration</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="date"
                          placeholder="From Date"
                          value={searchFilters.fromDate}
                          onChange={(e) => setSearchFilters((prev) => ({ ...prev, fromDate: e.target.value }))}
                          className="pl-10 h-12 text-sm"
                        />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="date"
                          placeholder="To Date"
                          value={searchFilters.toDate}
                          onChange={(e) => setSearchFilters((prev) => ({ ...prev, toDate: e.target.value }))}
                          className="pl-10 h-12 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleSearch}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
              >
                <Search className="mr-2 h-5 w-5" />
                Search Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {selectedOpportunity && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">
                {selectedOpportunity === "volunteer" ? "Volunteer Opportunities" : "Internship & Volunteer Opportunities"}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover meaningful ways to contribute to communities across South India
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedOpportunity === "volunteer" || selectedOpportunity === "both") &&
                volunteerOptions.map((opportunity, index) => (
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
                        <div className="flex items-center space-x-2">
                          <span>{opportunity.price}</span>
                        </div>
                      </div>
                      <Button
                        onClick={() => setCalendarOpen(true)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Select Dates
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {calendarOpen && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <Card className="bg-background p-6 max-w-md w-full">
                  <CardHeader>
                    <CardTitle>Select Your Dates</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">From Date</label>
                        <Input
                          type="date"
                          value={searchFilters.fromDate}
                          onChange={(e) => setSearchFilters((prev) => ({ ...prev, fromDate: e.target.value }))}
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">To Date</label>
                        <Input
                          type="date"
                          value={searchFilters.toDate}
                          onChange={(e) => setSearchFilters((prev) => ({ ...prev, toDate: e.target.value }))}
                          className="h-12"
                        />
                      </div>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a href="https://forms.gle/FHirPbejNSDV87Lx5" target="_blank" rel="noopener noreferrer">
                        Apply Now
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setCalendarOpen(false)}
                      className="w-full"
                    >
                      Cancel
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>
      )}

      <section id="internship-program" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Internship Program Details</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our internship program designed to provide hands-on experience and professional growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Clinical Exposure",
                description: "Interns observe patient care, assist healthcare professionals, and learn hospital operations.",
                image: "intern observing patient care in hospital",
              },
              {
                title: "Department Rotations",
                description: "Opportunities in General Medicine, Pediatrics, Nursing, Pharmacy, Laboratory, and Administration.",
                image: "intern rotating through hospital departments",
              },
              {
                title: "Skill Development",
                description: "Training in patient interaction, documentation, and teamwork.",
                image: "intern practicing patient interaction skills",
              },
              {
                title: "Mentorship",
                description: "Guidance from doctors, nurses, and staff for career planning.",
                image: "mentor guiding intern in hospital",
              },
            ].map((section, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=240&width=400&query=${section.image}`}
                    alt={section.title}
                    width={400}
                    height={240}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-playfair">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => setCalendarOpen(true)}
              className="w-full max-w-md bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Select Dates
            </Button>
          </div>
        </div>
      </section>

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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance">Ready to Make a Difference?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Join our community of changemakers and start your volunteering journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Find Opportunities
            </Button>
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

      <Footer />
    </div>
  )
}
