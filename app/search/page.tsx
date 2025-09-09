"use client"

import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, MapPin, Star, Search, Filter, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample data structure for opportunities
const allOpportunities = [
  {
    id: 1,
    title: "Child Education Support",
    location: "Madurai",
    state: "tamil-nadu",
    duration: "2-4weeks",
    theme: "Childcare & Education",
    type: "both",
    category: "Childcare & Education",
    hostName: "Grace Kennett Foundation",
    hostImage: "child.png",
    image: "children learning in classroom with volunteer teacher",
    rating: 4.8,
    reviews: 24,
    price: "₹2,500/week",
    accommodation: "Shared dormitory",
    meals: "3 meals included",
    verified: true,
  },
  {
    id: 2,
    title: "Wildlife Conservation Project",
    location: "Coimbatore",
    state: "tamil-nadu",
    duration: "1-2months",
    theme: "wildlife",
    type: "volunteer",
    category: "Wildlife & Environment",
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
    id: 3,
    title: "Rural Healthcare Support",
    location: "Kochi",
    state: "kerala",
    duration: "3-4weeks",
    theme: "healthcare",
    type: "intern",
    category: "Healthcare & Medical",
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
  {
    id: 4,
    title: "Heritage Site Restoration",
    location: "Hampi",
    state: "karnataka",
    duration: "3-4weeks",
    theme: "heritage",
    type: "volunteer",
    category: "Heritage & Culture",
    hostName: "Hampi Heritage Foundation",
    hostImage: "indian male archaeologist profile photo",
    image: "volunteers restoring ancient temple structures",
    rating: 4.6,
    reviews: 15,
    price: "₹2,200/week",
    accommodation: "Guesthouse",
    meals: "Traditional meals",
    verified: true,
  },
  {
    id: 5,
    title: "Elderly Care Program",
    location: "Chennai",
    state: "tamil-nadu",
    duration: "1-2weeks",
    theme: "elderly",
    type: "both",
    category: "Elderly Care",
    hostName: "Golden Years Care Center",
    hostImage: "indian female social worker profile photo",
    image: "volunteers spending time with elderly residents",
    rating: 4.8,
    reviews: 28,
    price: "₹2,000/week",
    accommodation: "Nearby hostel",
    meals: "South Indian meals",
    verified: true,
  },
  {
    id: 6,
    title: "Special Needs Education",
    location: "Bangalore",
    state: "karnataka",
    duration: "3-6months",
    theme: "disability",
    type: "intern",
    category: "Disability Support",
    hostName: "Inclusive Learning Center",
    hostImage: "indian male special educator profile photo",
    image: "volunteers working with children with special needs",
    rating: 4.9,
    reviews: 22,
    price: "₹3,000/week",
    accommodation: "Shared apartment",
    meals: "Flexible dining",
    verified: true,
  },
  {
    id: 7,
    title: "Community Development Project",
    location: "Hyderabad",
    state: "telangana",
    duration: "1-2months",
    theme: "community",
    type: "volunteer",
    category: "Community Development",
    hostName: "Telangana Community Foundation",
    hostImage: "indian female community leader profile photo",
    image: "volunteers working on community development project",
    rating: 4.5,
    reviews: 19,
    price: "₹2,400/week",
    accommodation: "Shared room",
    meals: "Local meals",
    verified: true,
  },
  {
    id: 8,
    title: "Marine Conservation Initiative",
    location: "Visakhapatnam",
    state: "andhra-pradesh",
    duration: "3-4weeks",
    theme: "wildlife",
    type: "both",
    category: "Wildlife & Environment",
    hostName: "Coastal Conservation Society",
    hostImage: "indian male marine biologist profile photo",
    image: "volunteers working on marine conservation project",
    rating: 4.7,
    reviews: 16,
    price: "₹2,900/week",
    accommodation: "Beach resort",
    meals: "Seafood included",
    verified: true,
  },
    {
    id: 9,
     title: "Elderly Care Program",
    location: "Madurai",
    state: "tamil-nadu",
    duration: "3-4weeks",
    theme: "elderly",
    type: "both",
    category: "Elderly Care",
    hostName: "Grace Kennett Foundation",
    hostImage: "indian female social worker profile photo",
    image: "volunteers spending time with elderly residents",
    rating: 4.9,
    reviews: 51,
    price: "₹2,000/week",
    accommodation: "Nearby hostel",
    meals: "South Indian meals",
    verified: true,
  },
      {
    id: 10,
    title: "Child Education Support",
    location: "Madurai",
    state: "tamil-nadu",
    duration: "2-4weeks",
    theme: "childcare",
    type: "both",
    category: "Childcare & Education",
    hostName: "Grace Kennett Foundation",
    hostImage: "smiling indian woman host profile photo",
    image: "children learning in classroom with volunteer teacher",
    rating: 4.9,
    reviews: 54,
    price: "₹2,500/week",
    accommodation: "Shared dormitory",
    meals: "3 meals included",
    verified: true,
  },
]

function SearchResults() {
  const searchParams = useSearchParams()
  const [filteredOpportunities, setFilteredOpportunities] = useState(allOpportunities)
  const [filters, setFilters] = useState({
    location: "",
    theme: "",
    duration: "",
    type: "",
  })

  useEffect(() => {
    // Get search parameters from URL
    const locationParam = searchParams.get("location") || ""
    const themeParam = searchParams.get("theme") || ""
    const durationParam = searchParams.get("duration") || ""
    const typeParam = searchParams.get("type") || ""

    setFilters({
      location: locationParam,
      theme: themeParam,
      duration: durationParam,
      type: typeParam,
    })

    // Filter opportunities based on search parameters
    const filtered = allOpportunities.filter((opportunity) => {
      const matchesLocation = !locationParam || opportunity.state === locationParam
      const matchesTheme = !themeParam || opportunity.theme === themeParam
      const matchesDuration = !durationParam || opportunity.duration === durationParam
      const matchesType =
        !typeParam || typeParam === "both" || opportunity.type === typeParam || opportunity.type === "both"

      return matchesLocation && matchesTheme && matchesDuration && matchesType
    })

    setFilteredOpportunities(filtered)
  }, [searchParams])

  const getFilterDisplayName = (key: string, value: string) => {
    const displayNames: Record<string, Record<string, string>> = {
      location: {
        "tamil-nadu": "Tamil Nadu",
        kerala: "Kerala",
        karnataka: "Karnataka",
        "andhra-pradesh": "Andhra Pradesh",
        telangana: "Telangana",
      },
      theme: {
        childcare: "Childcare & Education",
        healthcare: "Healthcare & Medical",
        wildlife: "Wildlife & Environment",
        heritage: "Heritage & Culture",
        community: "Community Development",
        elderly: "Elderly Care",
        disability: "Disability Support",
      },
      duration: {
        "1-2weeks": "1-2 weeks",
        "3-4weeks": "3-4 weeks",
        "1-2months": "1-2 months",
        "3-6months": "3-6 months",
        "6months+": "6+ months",
      },
      type: {
        volunteer: "Volunteer",
        intern: "Internship",
        both: "Both",
      },
    }
    return displayNames[key]?.[value] || value
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5 text-muted-foreground" />
                <Heart className="h-8 w-8 text-primary" />
                <span className="font-playfair font-bold text-2xl text-foreground">IVY</span>
              </Link>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Join IVY</Button>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Search Header */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-6">
              <div>
                <h1 className="font-playfair font-bold text-3xl text-foreground">Search Results</h1>
                <p className="text-muted-foreground">
                  {filteredOpportunities.length} opportunities found
                  {Object.values(filters).some((f) => f) && <span> for your search criteria</span>}
                </p>
              </div>

              {/* Active Filters */}
              {Object.entries(filters).some(([_, value]) => value) && (
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-muted-foreground">Filters:</span>
                  {Object.entries(filters).map(
                    ([key, value]) =>
                      value && (
                        <Badge key={key} variant="secondary" className="bg-primary/10 text-primary">
                          {getFilterDisplayName(key, value)}
                        </Badge>
                      ),
                  )}
                </div>
              )}

              {/* Search Bar */}
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-10" />
                  </div>

                  <Select value={filters.location}>
                    <SelectTrigger>
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

                  <Select value={filters.theme}>
                    <SelectTrigger>
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

                  <Select value={filters.duration}>
                    <SelectTrigger>
                      <SelectValue placeholder="Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                      <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                      <SelectItem value="1-2months">1-2 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="6months+">6+ months</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={filters.type}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="volunteer">Volunteer</SelectItem>
                      <SelectItem value="intern">Internship</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  More Filters
                </Button>
              </div>
            </div>

            {filteredOpportunities.length === 0 ? (
              <div className="text-center py-12">
                <div className="space-y-4">
                  <h3 className="font-semibold text-xl text-foreground">No opportunities found</h3>
                  <p className="text-muted-foreground">Try adjusting your search criteria to find more results.</p>
                  <Link href="/">
                    <Button variant="outline">Back to Home</Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOpportunities.map((opportunity) => (
                  <Card
                    key={opportunity.id}
                    className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden"
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
                        <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600 text-white">
                          Verified
                        </Badge>
                      )}
                      <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-2">
                        <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500 cursor-pointer transition-colors" />
                      </div>
                    </div>

                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20 text-xs">
                          {opportunity.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="h-4 w-4 fill-current text-yellow-500" />
                          <span className="font-medium">{opportunity.rating}</span>
                          <span className="text-muted-foreground">({opportunity.reviews})</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg text-foreground line-clamp-1">{opportunity.title}</h3>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3" />
                          <span>{opportunity.location}</span>
                        </div>
                      </div>

                      {/* Host Information */}
                      <div className="flex items-center space-x-2 py-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
                          <Image
                            src={`/abstract-geometric-shapes.png?height=32&width=32&query=${opportunity.hostImage}`}
                            alt={opportunity.hostName}
                            width={32}
                            height={32}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{opportunity.hostName}</p>
                          <p className="text-xs text-muted-foreground">Host organization</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center justify-between">
                          <span>Duration:</span>
                          <span className="text-foreground">
                            {getFilterDisplayName("duration", opportunity.duration)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Type:</span>
                          <span className="text-foreground">{getFilterDisplayName("type", opportunity.type)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Accommodation:</span>
                          <span className="text-foreground">{opportunity.accommodation}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div>
                          <span className="text-lg font-bold text-foreground">{opportunity.price}</span>
                          <p className="text-xs text-muted-foreground">{opportunity.meals}</p>
                        </div>
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
      <SearchResults />
    </Suspense>
  )
}
