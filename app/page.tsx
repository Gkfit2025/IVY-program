"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import Link from "next/link"
import { Heart, MapPin, Users, Calendar, Star, ArrowRight, Search, Filter } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function IVYHomePage() {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    theme: "",
    fromDate: "",
    toDate: "",
    type: "",
  })

  const handleSearch = () => {
    const params = new URLSearchParams()
    Object.entries(searchFilters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })

    const queryString = params.toString()
    window.location.href = `/search${queryString ? `?${queryString}` : ""}`
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Header 
        className="bg-black" 
        navItems={[
          { name: "About Us", href: "/about" },
          { name: "Impact Stories", href: "/impact-stories" },
          { name: "Join IVY", href: "/join-ivy" },
          { name: "Contact", href: "/contact" }
        ]} 
      />

      {/* Hero Section with Search */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-playfair font-bold text-4xl md:text-6xl text-black text-balance">
                  Find Your Perfect
                  <span className="text-orange-500"> Volunteering</span> Match
                </h1>
                <p className="text-xl text-gray-600 text-pretty leading-relaxed">
                  Discover meaningful opportunities across South India. Search by location, theme, and find the perfect
                  match for your skills and passion.
                </p>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-orange-500" />
                  <span>500+ Volunteers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span>50+ Locations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-orange-500" />
                  <span>100+ Projects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src="/volunteers-working-together-in-south-india-communi.png"
                  alt="Volunteers working together in community project"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-black p-4 rounded-xl shadow-lg">
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

      {/* Rest of your existing code remains exactly the same */}
      <section id="search" className="py-12 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-300">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="font-playfair font-bold text-2xl text-black">Find Your Perfect Opportunity</h2>
                <p className="text-gray-600">
                  Search and filter volunteering opportunities that match your interests
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
                <Input
                  placeholder="Search opportunities, organizations, or keywords..."
                  className="pl-10 h-12 text-lg bg-white text-black border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              {/* Filters */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Select
                  value={searchFilters.location}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, location: value }))}
                >
                  <SelectTrigger className="h-12 bg-white text-black border-gray-300 focus:ring-orange-500 focus:border-orange-500">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-black border-gray-300">
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={searchFilters.theme}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, theme: value }))}
                >
                  <SelectTrigger className="h-12 bg-white text-black border-gray-300 focus:ring-orange-500 focus:border-orange-500">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-black border-gray-300">
                    <SelectItem value="childcare">Childcare & Education</SelectItem>
                    <SelectItem value="wildlife">Wildlife & Environment</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={searchFilters.type}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, type: value }))}
                >
                  <SelectTrigger className="h-12 bg-white text-black border-gray-300 focus:ring-orange-500 focus:border-orange-500">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-black border-gray-300">
                    <SelectItem value="volunteer">Volunteer</SelectItem>
                    <SelectItem value="intern">Internship</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>

                <div className="md:col-span-2 lg:col-span-1">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black">Duration</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                        <Input
                          type="date"
                          placeholder="From Date"
                          value={searchFilters.fromDate}
                          onChange={(e) => setSearchFilters((prev) => ({ ...prev, fromDate: e.target.value }))}
                          className="pl-10 h-12 text-sm bg-white text-black border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                          onClick={(e) => e.target.showPicker && e.target.showPicker()}
                        />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                        <Input
                          type="date"
                          placeholder="To Date"
                          value={searchFilters.toDate}
                          onChange={(e) => setSearchFilters((prev) => ({ ...prev, toDate: e.target.value }))}
                          className="pl-10 h-12 text-sm bg-white text-black border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                          onClick={(e) => e.target.showPicker && e.target.showPicker()}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleSearch}
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-black text-lg"
              >
                <Search className="mr-2 h-5 w-5" />
                Search Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="font-playfair font-bold text-3xl text-black">Available Opportunities</h2>
              <p className="text-gray-600">147 opportunities found</p>
            </div>
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black bg-transparent"
            >
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Child Education Support",
                location: "Madurai, Tamil Nadu",
                category: "Childcare & Education",
                type: "Volunteer & Intern",
                hostName: "Sunshine Children's Foundation",
                hostImage: "smiling indian woman host profile photo",
                image: "children learning in classroom with volunteer teacher",
                rating: 4.8,
                reviews: 24,
                price: "₹2,500/week",
                accommodation: "Shared dormitory",
                meals: "3 meals included",
                verified: true,
              },
              {
                title: "Wildlife Conservation Project",
                location: "Coimbatore, Tamil Nadu",
                category: "Wildlife & Environment",
                type: "Volunteer",
                hostName: "Western Ghats Conservation Trust",
                hostImage: "indian male conservationist profile photo",
                image: "volunteers working on wildlife conservation project",
                rating: 4.9,
                reviews: 18,
                price: "₹3,200/week",
                accommodation: "Private room",
                meals: "Vegetarian meals",
                verified: true,
              },
              {
                title: "Rural Healthcare Support",
                location: "Kochi, Kerala",
                category: "Healthcare & Medical",
                type: "Intern",
                hostName: "Kerala Rural Health Initiative",
                hostImage: "indian female doctor profile photo",
                image: "medical volunteers helping in rural healthcare clinic",
                rating: 4.7,
                reviews: 31,
                price: "₹2,800/week",
                accommodation: "Host family",
                meals: "Local cuisine",
                verified: true,
              },
            ].map((opportunity, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-gray-300 overflow-hidden bg-white"
              >
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={`/abstract-geometric-shapes.png?height=240&width=400&query=${opportunity.image}`}
                      alt={opportunity.title}
                      width={400}
                      height={240}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {opportunity.verified && (
                    <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600 text-white">Verified</Badge>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Heart className="h-4 w-4 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />
                  </div>
                </div>

                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 text-xs">
                      {opportunity.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span className="font-medium text-black">{opportunity.rating}</span>
                      <span className="text-gray-600">({opportunity.reviews})</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-black line-clamp-1">{opportunity.title}</h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{opportunity.location}</span>
                    </div>
                  </div>

                  {/* Host Information */}
                  <div className="flex items-center space-x-2 py-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={`/abstract-geometric-shapes.png?height=32&width=32&query=${opportunity.hostImage}`}
                        alt={opportunity.hostName}
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black">{opportunity.hostName}</p>
                      <p className="text-xs text-gray-600">Host organization</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Type:</span>
                      <span className="text-black">{opportunity.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Accommodation:</span>
                      <span className="text-black">{opportunity.accommodation}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-300">
                    <div>
                      <span className="text-lg font-bold text-black">{opportunity.price}</span>
                      <p className="text-xs text-gray-600">{opportunity.meals}</p>
                    </div>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black">
                      <a href="https://forms.gle/FHirPbejNSDV87Lx5" target="_blank" rel="noopener noreferrer">
                        Apply Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black bg-transparent"
            >
              Load More Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-black">Impact Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              <Card key={index} className="border-gray-300 bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={`/abstract-geometric-shapes.png?height=48&width=48&query=${story.image}`}
                        alt={story.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">{story.name}</h4>
                      <p className="text-sm text-gray-600">
                        {story.role} • {story.location}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic">"{story.quote}"</blockquote>
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
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-black">About IVY Platform</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
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
                <div className="text-center p-4 bg-white rounded-lg border border-gray-300">
                  <div className="text-2xl font-bold text-orange-500">500+</div>
                  <div className="text-sm text-gray-600">Active Volunteers</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-300">
                  <div className="text-2xl font-bold text-orange-500">50+</div>
                  <div className="text-sm text-gray-600">Partner Organizations</div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-500 text-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance">Ready to Make a Difference?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Join our community of changemakers and start your volunteering journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-black hover:bg-gray-900 text-orange-500">
              Find Opportunities
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-orange-500 bg-transparent"
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
