```tsx
// pages/index.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import {
  Heart,
  MapPin,
  Users,
  Calendar,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Search,
  Filter,
} from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function IVYHomePage() {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    theme: "",
    duration: "",
    type: "",
  })

  const router = useRouter()

  const handleSearch = () => {
    const params = new URLSearchParams()
    Object.entries(searchFilters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
    const queryString = params.toString()
    router.push(`/search${queryString ? `?${queryString}` : ""}`)
  }

  const handleLearnMore = (opportunityTitle: string) => {
    if (opportunityTitle === "Healthcare Assistance") {
      router.push("/healthcare")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-border z-50" style={{ background: "#000000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo12.png"
                alt="Grace Kennett Foundation Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
              <span className="font-playfair font-bold text-2xl" style={{ color: "#F06105" }}>
                Grace Kennett Foundation
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <a
                href="#search"
                className="text-lg font-semibold transition-colors"
                style={{ color: "#F76005" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#F76005")}
              >
                Find Opportunities
              </a>
              <a
                href="#about"
                className="text-lg font-semibold transition-colors"
                style={{ color: "#F76005" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#F76005")}
              >
                About Us
              </a>
              <a
                href="#impact"
                className="text-lg font-semibold transition-colors"
                style={{ color: "#F76005" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#F76005")}
              >
                Impact Stories
              </a>
              <a
                href="#contact"
                className="text-lg font-semibold transition-colors"
                style={{ color: "#F76005" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#F76005")}
              >
                Contact
              </a>
              <Button
                className="transition-colors"
                style={{
                  background: "#F76005",
                  color: "#080707",
                  fontWeight: 700,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#F76005"
                  e.currentTarget.style.color = "#FFFFFF"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#F76005"
                  e.currentTarget.style.color = "#080707"
                }}
              >
                Join IVY
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Search */}
      <section
        className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: "url('/bg6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(0, 0, 0, 0.5)" }}></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-balance">
            <span style={{ color: "#D17038" }}>Find Your Perfect </span>
            <span style={{ color: "#F55900" }}>Volunteering </span>
            <span style={{ color: "#D17038" }}>Match</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-4">
            Connect with meaningful causes and choose the volunteering role that best suits your interests and strengths.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-white/80 mt-8">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-white" />
              <span>500+ Volunteers</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-white" />
              <span>50+ Locations</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-white" />
              <span>100+ Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="font-playfair font-bold text-2xl" style={{ color: "#F55900" }}>
                  Find Your Perfect Opportunity
                </h2>
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
              <div className="grid md:grid-cols-4 gap-4">
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
                  value={searchFilters.duration}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, duration: value }))}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                    <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                    <SelectItem value="3-6weeks">3-6 weeks</SelectItem>
                    <SelectItem value="1-2months">1-2 months</SelectItem>
                    <SelectItem value="3-6months">3-6 months</SelectItem>
                    <SelectItem value="6months+">6+ months</SelectItem>
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
              </div>
              <Button
                onClick={handleSearch}
                className="w-full h-12 text-lg"
                style={{
                  background: "#E65A15",
                  color: "#FFFFFF",
                  fontWeight: 700,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#F5E4DF"
                  e.currentTarget.style.color = "#E65A15"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#E65A15"
                  e.currentTarget.style.color = "#FFFFFF"
                }}
              >
                <Search className="mr-2 h-5 w-5" />
                Search Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Available Opportunities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="font-playfair font-bold text-3xl" style={{ color: "#F55900" }}>
                Available Opportunities
              </h2>
              <p className="text-muted-foreground">147 opportunities found</p>
            </div>
            <Button
              variant="outline"
              className="border-primary bg-transparent"
              style={{
                borderColor: "#E65A15",
                color: "#E65A15",
                background: "transparent",
                fontWeight: 700,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#E65A15"
                e.currentTarget.style.color = "#FFFFFF"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#E65A15"
              }}
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
                duration: "2-4 weeks",
                category: "Childcare & Education",
                type: "Volunteer & Intern",
                hostName: "Sunshine Children's Foundation",
                hostImage: "smiling indian woman host profile photo",
                image: "Child.png",
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
                duration: "1-3 months",
                category: "Wildlife & Environment",
                type: "Volunteer",
                hostName: "Western Ghats Conservation Trust",
                hostImage: "indian male conservationist profile photo",
                image: "wildlife.png",
                rating: 4.9,
                reviews: 18,
                price: "₹3,200/week",
                accommodation: "Private room",
                meals: "Vegetarian meals",
                verified: true,
              },
              {
                title: "Healthcare Assistance",
                location: "Kochi, Kerala",
                duration: "3-6 weeks",
                category: "Healthcare & Medical",
                type: "Intern",
                hostName: "Kerala Rural Health Initiative",
                hostImage: "indian female doctor profile photo",
                image: "Medical.png",
                rating: 4.7,
                reviews: 31,
                price: "₹2,800/week",
                accommodation: "Host family",
                meals: "Local cuisine",
                verified: true,
              },
              {
                title: "Heritage Site Restoration",
                location: "Hampi, Karnataka",
                duration: "2-8 weeks",
                category: "Heritage & Culture",
                type: "Volunteer",
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
                title: "Elderly Care Program",
                location: "Chennai, Tamil Nadu",
                duration: "1-4 weeks",
                category: "Elderly Care",
                type: "Volunteer & Intern",
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
                title: "Special Needs Education",
                location: "Bangalore, Karnataka",
                duration: "2-12 weeks",
                category: "Disability Support",
                type: "Intern",
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
            ].map((opportunity, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={`/${opportunity.image}`}
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
                      <span className="text-foreground">{opportunity.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Type:</span>
                      <span className="text-foreground">{opportunity.type}</span>
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
                    <Button
                      size="sm"
                      style={{
                        background: "#E65A15",
                        color: "#FFFFFF",
                        fontWeight: 700,
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = "#F5E4DF"
                        e.currentTarget.style.color = "#E65A15"
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = "#E65A15"
                        e.currentTarget.style.color = "#FFFFFF"
                      }}
                      onClick={() => {
                        if (opportunity.title === "Healthcare Assistance") {
                          router.push("/healthcare-application")
                        }
                      }}
                    >
                      Apply Now
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
              className="border-primary bg-transparent"
              style={{
                borderColor: "#E65A15",
                color: "#E65A15",
                background: "transparent",
                fontWeight: 700,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#E65A15"
                e.currentTarget.style.color = "#FFFFFF"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#E65A15"
              }}
            >
              Load More Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section id="opportunities" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl" style={{ color: "#F55900" }}>
              Featured Opportunities
            </h2>
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
                image: "Child.png",
                rating: 4.8,
                reviews: 24,
              },
              {
                title: "Wildlife Conservation",
                location: "Coimbatore, Tamil Nadu",
                duration: "1-3 months",
                category: "Environment",
                image: "wildlife.png",
                rating: 4.9,
                reviews: 18,
              },
              {
                title: "Healthcare Assistance",
                location: "Kochi, Kerala",
                duration: "3-6 weeks",
                category: "Healthcare",
                image: "Medical.png",
                rating: 4.7,
                reviews: 31,
              },
            ].map((opportunity, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={`/${opportunity.image}`}
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
                  <Button
                    className="w-full"
                    style={{
                      background: "#E65A15",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#F5E4DF"
                      e.currentTarget.style.color = "#E65A15"
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "#E65A15"
                      e.currentTarget.style.color = "#FFFFFF"
                    }}
                    onClick={() => handleLearnMore(opportunity.title)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary bg-transparent"
              style={{
                borderColor: "#E65A15",
                color: "#E65A15",
                background: "transparent",
                fontWeight: 700,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#E65A15"
                e.currentTarget.style.color = "#FFFFFF"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#E65A15"
              }}
            >
              View All Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl" style={{ color: "#F55900" }}>
              Impact Stories
            </h2>
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
              <h2 className="font-playfair font-bold text-3xl md:text-4xl" style={{ color: "#F55900" }}>
                About Us
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Grace Kennett Foundation is a non-governmental organization with a glorious 80-year history. Our work
                  has saved the lives of a thousand victims of female infanticide and abandoned children. A thousand
                  happy families have been built through adoption. If you need to have a garden, dig a well first. Our
                  well is our hospital and our allied services. We address the physical, mental, and social well being
                  of the community and raise resources to pursue our lofty objectives. IVY is an innovative platform
                  that connects passionate volunteers with meaningful opportunities across South India. Just like Airbnb
                  revolutionized travel, we're transforming how people discover and engage in volunteer work.
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
            <Button
              size="lg"
              variant="secondary"
              style={{
                background: "#E65A15",
                color: "#FFFFFF",
                fontWeight: 700,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#F5E4DF"
                e.currentTarget.style.color = "#E65A15"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#E65A15"
                e.currentTarget.style.color = "#FFFFFF"
              }}
            >
              Find Opportunities
            </Button>
            <Button
              size="lg"
              variant="outline"
              style={{
                borderColor: "#E65A15",
                color: "#E65A15",
                background: "transparent",
                fontWeight: 700,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#F5E4DF"
                e.currentTarget.style.color = "#E65A15"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#E65A15"
              }}
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
                <span className="font-playfair font-bold text-xl text-foreground">IVY</span>
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
                  <span>gkfit2025@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 96268 40401</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>8,Kennet Road, Madurai - 16, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 IVY Platform. All rights reserved. Spreading kindness across South India.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// pages/healthcare.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Armchair as Wheelchair, UserCheck, HeartHandshake } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function HealthcareDetailsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="rounded-2xl shadow-lg border border-border">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="font-playfair font-bold text-3xl" style={{ color: "#F55900" }}>
                Healthcare Assistance Program
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push("/")}
                className="text-muted-foreground hover:text-foreground"
              >
                Back to Home
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Join our comprehensive healthcare assistance program and make a meaningful difference in the lives
                  of patients and their families.
                </p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/Medical.png"
                    alt="Healthcare volunteers assisting patients"
                    width={400}
                    height={240}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Stethoscope className="h-6 w-6" style={{ color: "#E65A15" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Medication Reminders & Vital Monitoring</h3>
                    <p className="text-muted-foreground">
                      Assist patients with medication schedules and help monitor vital signs under professional
                      supervision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Wheelchair className="h-6 w-6" style={{ color: "#E65A15" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Mobility Support</h3>
                    <p className="text-muted-foreground">
                      Provide walking assistance, wheelchair handling, and support during physiotherapy exercises.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <UserCheck className="h-6 w-6" style={{ color: "#E65A15" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hospital Visit Escort</h3>
                    <p className="text-muted-foreground">
                      Accompany patients to hospital visits, providing support and ensuring they receive proper care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <HeartHandshake className="h-6 w-6" style={{ color: "#E65A15" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Companionship & Mental Support</h3>
                    <p className="text-muted-foreground">
                      Offer companionship to reduce loneliness and provide emotional support to help alleviate mental
                      stress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#F55900" }}>
                Program Details
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium">Duration:</span>
                  <p className="text-muted-foreground">3-6 weeks</p>
                </div>
                <div>
                  <span className="font-medium">Location:</span>
                  <p className="text-muted-foreground">Kochi, Kerala</p>
                </div>
                <div>
                  <span className="font-medium">Training:</span>
                  <p className="text-muted-foreground">Provided on-site</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="flex-1"
                style={{
                  background: "#E65A15",
                  color: "#FFFFFF",
                  fontWeight: 700,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#F5E4DF"
                  e.currentTarget.style.color = "#E65A15"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#E65A15"
                  e.currentTarget.style.color = "#FFFFFF"
                }}
                onClick={() => router.push("/healthcare-application")}
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                style={{
                  borderColor: "#E65A15",
                  color: "#E65A15",
                  background: "transparent",
                  fontWeight: 700,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#E65A15"
                  e.currentTarget.style.color = "#FFFFFF"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent"
                  e.currentTarget.style.color = "#E65A15"
                }}
              >
                Contact for More Info
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// pages/healthcare-application.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Shield, User, FileText, DollarSign } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

type FormStep = "personal" | "program" | "payment" | "confirmation"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  city: string
  state: string
  zipCode: string
  programType: "internship" | "volunteer" | ""
  programDuration: string
  startDate: string
  motivation: string
  experience: string
  skills: string[]
  paymentMethod: "credit" | "debit" | "paypal" | ""
  cardNumber: string
  expiryDate: string
  cvv: string
  cardholderName: string
  billingAddress: string
  agreeToTerms: boolean
  agreeToPrivacy: boolean
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  programType: "",
  programDuration: "",
  startDate: "",
  motivation: "",
  experience: "",
  skills: [],
  paymentMethod: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  cardholderName: "",
  billingAddress: "",
  agreeToTerms: false,
  agreeToPrivacy: false,
}

const skillOptions = [
  "Leadership",
  "Communication",
  "Project Management",
  "Research",
  "Data Analysis",
  "Marketing",
  "Design",
  "Programming",
  "Teaching",
  "Writing",
]

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>("personal")
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const steps = [
    { id: "personal", title: "Personal Info", icon: User },
    { id: "program", title: "Program Details", icon: FileText },
    { id: "payment", title: "Payment", icon: CreditCard },
    { id: "confirmation", title: "Confirmation", icon: Shield },
  ]

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep)
  const progress = ((currentStepIndex + 1) / steps.length) * 100

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = (step: FormStep): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === "personal") {
      if (!formData.firstName) newErrors.firstName = "First name is required"
      if (!formData.lastName) newErrors.lastName = "Last name is required"
      if (!formData.email) newErrors.email = "Email is required"
      if (!formData.phone) newErrors.phone = "Phone number is required"
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    }

    if (step === "program") {
      if (!formData.programType) newErrors.programType = "Program type is required"
      if (!formData.programDuration) newErrors.programDuration = "Duration is required"
      if (!formData.startDate) newErrors.startDate = "Start date is required"
      if (!formData.motivation) newErrors.motivation = "Motivation is required"
    }

    if (step === "payment") {
      if (!formData.paymentMethod) newErrors.paymentMethod = "Payment method is required"
      if (formData.paymentMethod !== "paypal") {
        if (!formData.cardNumber) newErrors.cardNumber = "Card number is required"
        if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required"
        if (!formData.cvv) newErrors.cvv = "CVV is required"
        if (!formData.cardholderName) newErrors.cardholderName = "Cardholder name is required"
      }
      if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms"
      if (!formData.agreeToPrivacy) newErrors.agreeToPrivacy = "You must agree to the privacy policy"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      const stepOrder: FormStep[] = ["personal", "program", "payment", "confirmation"]
      const currentIndex = stepOrder.indexOf(currentStep)
      if (currentIndex < stepOrder.length - 1) {
        setCurrentStep(stepOrder[currentIndex + 1])
      }
    }
  }

  const prevStep = () => {
    const stepOrder: FormStep[] = ["personal", "program", "payment", "confirmation"]
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1])
    }
  }

  const handleSubmit = async () => {
    if (!validateStep("payment")) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setCurrentStep("confirmation")
    setIsSubmitting(false)
  }

  const toggleSkill = (skill: string) => {
    const currentSkills = formData.skills
    const updatedSkills = currentSkills.includes(skill)
      ? currentSkills.filter((s) => s !== skill)
      : [...currentSkills, skill]
    updateFormData("skills", updatedSkills)
  }

  const getProgramFee = () => {
    return formData.programType === "internship" ? 299 : 99
  }

  const getCurrentStepIcon = () => {
    const step = steps.find((s) => s.id === currentStep)
    if (!step) return null
    const Icon = step.icon
    return <Icon className="w-5 h-5" />
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Progress Bar */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = step.id === currentStep
                const isCompleted = index < currentStepIndex

                return (
                  <div key={step.id} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                        isActive
                          ? "border-primary bg-primary text-primary-foreground"
                          : isCompleted
                          ? "border-secondary bg-secondary text-secondary-foreground"
                          : "border-border bg-background text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`ml-2 text-sm font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      {step.title}
                    </span>
                    {index < steps.length - 1 && <div className="w-16 h-0.5 bg-border mx-4" />}
                  </div>
                )
              })}
            </div>
            <Progress value={progress} className="w-full" />
          </CardContent>
        </Card>

        {/* Form Content */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {getCurrentStepIcon()}
              {currentStep === "personal" && "Personal Information"}
              {currentStep === "program" && "Program Selection"}
              {currentStep === "payment" && "Payment Details"}
              {currentStep === "confirmation" && "Application Submitted"}
            </CardTitle>
            <CardDescription>
              {currentStep === "personal" && "Please provide your personal details"}
              {currentStep === "program" && "Choose your program and tell us about yourself"}
              {currentStep === "payment" && "Complete your application with payment"}
              {currentStep === "confirmation" && "Your application has been successfully submitted"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentStep === "personal" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    className={errors.firstName ? "border-destructive" : ""}
                  />
                  {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    className={errors.lastName ? "border-destructive" : ""}
                  />
                  {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                    className={errors.dateOfBirth ? "border-destructive" : ""}
                  />
                  {errors.dateOfBirth && <p className="text-sm text-destructive">{errors.dateOfBirth}</p>}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => updateFormData("address", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" value={formData.city} onChange={(e) => updateFormData("city", e.target.value)} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" value={formData.state} onChange={(e) => updateFormData("state", e.target.value)} />
                </div>
              </div>
            )}

            {currentStep === "program" && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label>Program Type *</Label>
                  <RadioGroup
                    value={formData.programType}
                    onValueChange={(value) => updateFormData("programType", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="internship" id="internship" />
                      <Label htmlFor="internship" className="flex-1">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">Internship Program</div>
                            <div className="text-sm text-muted-foreground">3-6 months professional experience</div>
                          </div>
                          <Badge variant="secondary">$299</Badge>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="volunteer" id="volunteer" />
                      <Label htmlFor="volunteer" className="flex-1">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">Volunteer Program</div>
                            <div className="text-sm text-muted-foreground">Flexible community service opportunities</div>
                          </div>
                          <Badge variant="secondary">$99</Badge>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                  {errors.programType && <p className="text-sm text-destructive">{errors.programType}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="programDuration">Duration *</Label>
                    <Select
                      value={formData.programDuration}
                      onValueChange={(value) => updateFormData("programDuration", value)}
                    >
                      <SelectTrigger className={errors.programDuration ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-month">1 Month</SelectItem>
                        <SelectItem value="3-months">3 Months</SelectItem>
                        <SelectItem value="6-months">6 Months</SelectItem>
                        <SelectItem value="12-months">12 Months</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.programDuration && <p className="text-sm text-destructive">{errors.programDuration}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate">Preferred Start Date *</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => updateFormData("startDate", e.target.value)}
                      className={errors.startDate ? "border-destructive" : ""}
                    />
                    {errors.startDate && <p className="text-sm text-destructive">{errors.startDate}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to join this program? *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => updateFormData("motivation", e.target.value)}
                    placeholder="Tell us about your motivation and goals..."
                    className={errors.motivation ? "border-destructive" : ""}
                  />
                  {errors.motivation && <p className="text-sm text-destructive">{errors.motivation}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => updateFormData("experience", e.target.value)}
                    placeholder="Describe any relevant experience or background..."
                  />
                </div>

                <div className="space-y-2">
                  <Label>Skills & Interests</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {skillOptions.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={formData.skills.includes(skill)}
                          onCheckedChange={() => toggleSkill(skill)}
                        />
                        <Label htmlFor={skill} className="text-sm">
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === "payment" && (
              <div className="space-y-6">
                <Card className="bg-muted">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      <span>{formData.programType === "internship" ? "Internship Program" : "Volunteer Program"}</span>
                      <span>${getProgramFee()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Processing Fee</span>
                      <span>$5</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between items-center font-bold">
                      <span>Total</span>
                      <span>${getProgramFee() + 5}</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <Label>Payment Method *</Label>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => updateFormData("paymentMethod", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="credit" id="credit" />
                      <Label htmlFor="credit">Credit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="debit" id="debit" />
                      <Label htmlFor="debit">Debit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal">PayPal</Label>
                    </div>
                  </RadioGroup>
                  {errors.paymentMethod && <p className="text-sm text-destructive">{errors.paymentMethod}</p>}
                </div>

                {formData.paymentMethod && formData.paymentMethod !== "paypal" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardholderName">Cardholder Name *</Label>
                      <Input
                        id="cardholderName"
                        value={formData.cardholderName}
                        onChange={(e) => updateFormData("cardholderName", e.target.value)}
                        className={errors.cardholderName ? "border-destructive" : ""}
                      />
                      {errors.cardholderName && <p className="text-sm text-destructive">{errors.cardholderName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => updateFormData("cardNumber", e.target.value)}
                        className={errors.cardNumber ? "border-destructive" : ""}
                      />
                      {errors.cardNumber && <p className="text-sm text-destructive">{errors.cardNumber}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={(e) => updateFormData("expiryDate", e.target.value)}
                          className={errors.expiryDate ? "border-destructive" : ""}
                        />
                        {errors.expiryDate && <p className="text-sm text-destructive">{errors.expiryDate}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => updateFormData("cvv", e.target.value)}
                          className={errors.cvv ? "border-destructive" : ""}
                        />
                        {errors.cvv && <p className="text-sm text-destructive">{errors.cvv}</p>}
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => updateFormData("agreeToTerms", checked)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <a href="#" className="text-primary underline">
                        Terms and Conditions
                      </a>{" "}
                      *
                    </Label>
                  </div>
                  {errors.agreeToTerms && <p className="text-sm text-destructive">{errors.agreeToTerms}</p>}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="privacy"
                      checked={formData.agreeToPrivacy}
                      onCheckedChange={(checked) => updateFormData("agreeToPrivacy", checked)}
                    />
                    <Label htmlFor="privacy" className="text-sm">
                      I agree to the{" "}
                      <a href="#" className="text-primary underline">
                        Privacy Policy
                      </a>{" "}
                      *
                    </Label>
                  </div>
                  {errors.agreeToPrivacy && <p className="text-sm text-destructive">{errors.agreeToPrivacy}</p>}
                </div>

                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Your payment information is secure and encrypted. We use industry-standard security measures to
                    protect your data.
                  </AlertDescription>
                </Alert>
              </div>
            )}

            {currentStep === "confirmation" && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-secondary-foreground" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Application Submitted Successfully!</h3>
                  <p className="text-muted-foreground">
                    Thank you for applying to our {formData.programType} program. We'll review your application and get
                    back to you within 3-5 business days.
                  </p>
                </div>

                <Card className="bg-muted text-left">
                  <CardHeader>
                    <CardTitle>Application Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span>
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span>{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Program:</span>
                      <span className="capitalize">{formData.programType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{formData.programDuration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Start Date:</span>
                      <span>{formData.startDate}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold">
                      <span>Total Paid:</span>
                      <span>${getProgramFee() + 5}</span>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-sm text-muted-foreground">A confirmation email has been sent to {formData.email}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {currentStep !== "confirmation" && (
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === "personal"}>
              Previous
            </Button>

            {currentStep === "payment" ? (
              <Button onClick={handleSubmit} disabled={isSubmitting} className="min-w-32">
                {isSubmitting ? "Processing..." : `Pay $${getProgramFee() + 5}`}
              </Button>
            ) : (
              <Button onClick={nextStep}>Next</Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
