"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Heart, MapPin, Users, Calendar, Star, ArrowRight, Search, Filter } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function IVYHomePage() {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    theme: "",
    duration: "",
    type: "",
  })

  const [showHealthcareContent, setShowHealthcareContent] = useState(false)
  const [showWildlifeContent, setShowWildlifeContent] = useState(false)
  const [showChildEducationContent, setShowChildEducationContent] = useState(false)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [selectedOpportunity, setSelectedOpportunity] = useState<any | null>(null)
  const router = useRouter()
  const [showPaymentDialog, setShowPaymentDialog] = useState(false)
  const [paymentForm, setPaymentForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "success" | "failed">("idle")

  const handleSearch = () => {
    const params = new URLSearchParams()
    Object.entries(searchFilters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
    const queryString = params.toString()
    window.location.href = `/search${queryString ? `?${queryString}` : ""}`
  }

  const handleLearnMore = (opportunityTitle: string) => {
    if (opportunityTitle === "Healthcare Assistance") {
      setShowHealthcareContent(true)
    } else if (opportunityTitle === "Wildlife Conservation") {
      setShowWildlifeContent(true)
    } else if (opportunityTitle === "Child Education Support") {
      setShowChildEducationContent(true)
    }
  }

  const handleApply = (opportunity: any) => {
    setSelectedOpportunity(opportunity)
    setShowPaymentDialog(true)
  }

  const handlePayment = async (formData: any) => {
    try {
      setIsProcessingPayment(true)

      // Simulate payment processing
      // const response = await fetch('/api/process-payment', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     ...formData,
      //     amount: selectedOpportunity?.price,
      //     opportunityId: selectedOpportunity?.id,
      //   }),
      // });

      // const result = await response.json();
      const result = { success: true, transactionId: "123" }

      if (result.success) {
        setPaymentStatus("success")
        // Update transaction status in system
        // await fetch('/api/update-transaction', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     transactionId: result.transactionId,
        //     status: 'completed',
        //     userDetails: formData,
        //   }),
        // });
      } else {
        setPaymentStatus("failed")
      }
    } catch (error) {
      console.error("Payment processing error:", error)
      setPaymentStatus("failed")
    } finally {
      setIsProcessingPayment(false)
    }
  }

  const openWhatsAppChat = (type: "support" | "query" | "confirmation", message?: string) => {
    const phoneNumber = "+919876543210" // Replace with actual WhatsApp business number
    let defaultMessage = ""

    switch (type) {
      case "support":
        defaultMessage = "Hi! I need support with my volunteering application."
        break
      case "query":
        defaultMessage = "Hi! I have a question about the volunteering opportunities."
        break
      case "confirmation":
        defaultMessage = message || "Hi! I would like to confirm my booking."
        break
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-border z-50" style={{ background: "#000000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16 py-4 sm:py-0">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo12.png"
                alt="Grace Kennett Foundation Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
              <span className="font-playfair font-bold text-xl sm:text-2xl" style={{ color: "#F06105" }}>
                Grace Kennett Foundation
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-4 sm:mt-0">
              <a
                href="#search"
                className="text-base sm:text-lg font-semibold transition-colors"
                style={{ color: "#F76005" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#F76005")}
              >
                Find Opportunities
              </a>
              <a
                href="#about"
                className="text-base sm:text-lg font-semibold transition-colors"
                style={{ color: "#F76005" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#F76005")}
              >
                About Us
              </a>
              <a
                href="#impact"
                className="text-base sm:text-lg font-semibold transition-colors"
                style={{ color: "#F76005" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#F76005")}
              >
                Impact Stories
              </a>
              <a
                href="#contact"
                className="text-base sm:text-lg font-semibold transition-colors"
                style={{ color: "#F76005" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#F76005")}
              >
                Contact
              </a>
              <Button
                className="transition-colors w-full sm:w-auto"
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

      {/* Hero Section with Full Picture View and Cut-Off */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url('/bg6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-7xl text-balance mb-6">
            <span style={{ color: "#D17038" }}>Find Your Perfect </span>
            <span style={{ color: "#F55900" }}>Volunteering </span>
            <span style={{ color: "#D17038" }}>Match</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
            Connect with meaningful causes and choose the volunteering role that best suits your interests and
            strengths.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base text-white/80 mb-10">
            <div className="flex items-center gap-2">
              <Users className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
              <span>500+ Volunteers</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
              <span>50+ Locations</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
              <span>100+ Projects</span>
            </div>
          </div>
          <Button
            size="lg"
            className="text-base sm:text-lg"
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
            onClick={() => router.push("#search")}
          >
            Explore Opportunities
          </Button>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="font-playfair font-bold text-xl sm:text-2xl" style={{ color: "#F55900" }}>
                  Find Your Perfect Opportunity
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Search and filter volunteering opportunities that match your interests
                </p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-muted-foreground" />
                <Input
                  placeholder="Search opportunities, organizations, or keywords..."
                  className="pl-10 h-10 sm:h-12 text-base sm:text-lg"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Select
                  value={searchFilters.location}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, location: value }))}
                >
                  <SelectTrigger className="h-10 sm:h-12">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="madurai">Madurai, Tamil Nadu</SelectItem>
                    <SelectItem value="coimbatore">Coimbatore, Tamil Nadu</SelectItem>
                    <SelectItem value="kochi">Kochi, Kerala</SelectItem>
                    <SelectItem value="hampi">Hampi, Karnataka</SelectItem>
                    <SelectItem value="chennai">Chennai, Tamil Nadu</SelectItem>
                    <SelectItem value="bangalore">Bangalore, Karnataka</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={searchFilters.theme}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, theme: value }))}
                >
                  <SelectTrigger className="h-10 sm:h-12">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="childcare">Childcare & Education</SelectItem>
                    <SelectItem value="wildlife">Wildlife & Environment</SelectItem>
                    <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                    <SelectItem value="heritage">Heritage & Culture</SelectItem>
                    <SelectItem value="elderly">Elderly Care</SelectItem>
                    <SelectItem value="disability">Disability Support</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={searchFilters.duration}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, duration: value }))}
                >
                  <SelectTrigger className="h-10 sm:h-12">
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-4weeks">1-4 weeks</SelectItem>
                    <SelectItem value="2-4weeks">2-4 weeks</SelectItem>
                    <SelectItem value="2-8weeks">2-8 weeks</SelectItem>
                    <SelectItem value="3-6weeks">3-6 weeks</SelectItem>
                    <SelectItem value="2-12weeks">2-12 weeks</SelectItem>
                    <SelectItem value="1-3months">1-3 months</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={searchFilters.type}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, type: value }))}
                >
                  <SelectTrigger className="h-10 sm:h-12">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="volunteer">Volunteer</SelectItem>
                    <SelectItem value="intern">Intern</SelectItem>
                    <SelectItem value="both">Volunteer & Intern</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleSearch}
                className="w-full h-10 sm:h-12 text-base sm:text-lg"
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
                <Search className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Search Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Available Opportunities */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="font-playfair font-bold text-2xl sm:text-3xl" style={{ color: "#F55900" }}>
                Available Opportunities
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">147 opportunities found</p>
            </div>
            <Button
              variant="outline"
              className="border-primary bg-transparent mt-4 sm:mt-0"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Child Education Support",
                location: "Madurai, Tamil Nadu",
                duration: "2-4 weeks",
                category: "Childcare & Education",
                type: "Volunteer & Intern",
                hostName: "Grace Kennett Foundation",
                hostImage: "smiling indian woman host profile photo",
                image: "Child.png",
                rating: 4.8,
                reviews: 24,
                price: "₹2,500/week",
                accommodation: "Shared dormitory",
                meals: "3 meals included",
                verified: true,
                id: "1",
              },
              {
                title: "Wildlife Conservation Project",
                location: "Coimbatore, Tamil Nadu",
                duration: "1-3 months",
                category: "Wildlife & Environment",
                type: "Volunteer",
                hostName: "Grace Kennett Foundation",
                hostImage: "indian male conservationist profile photo",
                image: "wildlife.png",
                rating: 4.9,
                reviews: 18,
                price: "₹3,200/week",
                accommodation: "Private room",
                meals: "Vegetarian meals",
                verified: true,
                id: "2",
              },
              {
                title: "Healthcare Assistance",
                location: "Kochi, Kerala",
                duration: "3-6 weeks",
                category: "Healthcare & Medical",
                type: "Intern",
                hostName: "Grace Kennett Foundation",
                hostImage: "indian female doctor profile photo",
                image: "Medical.png",
                rating: 4.7,
                reviews: 31,
                price: "₹2,800/week",
                accommodation: "Host family",
                meals: "Local cuisine",
                verified: true,
                id: "3",
              },
              {
                title: "Heritage Site Restoration",
                location: "Hampi, Karnataka",
                duration: "2-8 weeks",
                category: "Heritage & Culture",
                type: "Volunteer",
                hostName: "Grace Kennett Foundation",
                hostImage: "indian male archaeologist profile photo",
                image: "volunteers restoring ancient temple structures",
                rating: 4.6,
                reviews: 15,
                price: "₹2,200/week",
                accommodation: "Guesthouse",
                meals: "Traditional meals",
                verified: true,
                id: "4",
              },
              {
                title: "Elderly Care Program",
                location: "Chennai, Tamil Nadu",
                duration: "1-4 weeks",
                category: "Elderly Care",
                type: "Volunteer & Intern",
                hostName: "Grace Kennett Foundation",
                hostImage: "indian female social worker profile photo",
                image: "volunteers spending time with elderly residents",
                rating: 4.8,
                reviews: 28,
                price: "₹2,000/week",
                accommodation: "Nearby hostel",
                meals: "South Indian meals",
                verified: true,
                id: "5",
              },
              {
                title: "Special Needs Education",
                location: "Bangalore, Karnataka",
                duration: "2-12 weeks",
                category: "Disability Support",
                type: "Intern",
                hostName: "Grace Kennett Foundation",
                hostImage: "indian male special educator profile photo",
                image: "volunteers working with children with special needs",
                rating: 4.9,
                reviews: 22,
                price: "₹3,000/week",
                accommodation: "Shared apartment",
                meals: "Flexible dining",
                verified: true,
                id: "6",
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
                    <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600 text-white">Verified</Badge>
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
                    <h3 className="font-semibold text-base sm:text-lg text-foreground line-clamp-1">
                      {opportunity.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground mt-1">
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
                  <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
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
                      <span className="text-base sm:text-lg font-bold text-foreground">{opportunity.price}</span>
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
                      onClick={() => handleApply(opportunity)}
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
      <section id="opportunities" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="font-playfair font-bold text-2xl sm:text-3xl md:text-4xl" style={{ color: "#F55900" }}>
              Featured Opportunities
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover meaningful ways to contribute to communities across South India
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  <CardTitle className="text-lg sm:text-xl font-playfair">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
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

      {/* Application Form Modal */}
      {showPaymentDialog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl w-full max-w-md">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
              <p className="text-sm text-gray-500 mb-6">
                Enter your payment information to complete your application for {selectedOpportunity?.title}.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
