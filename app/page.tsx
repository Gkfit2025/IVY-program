"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
  X,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"

interface SearchFilters {
  location: string
  theme: string
  fromDate: string
  toDate: string
  type: string
}

// DateInput unchanged

const DateInput = ({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (value: string) => void
  placeholder: string
}) => {
  // ...DateInput code unchanged
  // omitted for brevity
}

export default function IVYHomePage() {
  const router = useRouter()
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: "",
    theme: "",
    fromDate: "",
    toDate: "",
    type: "",
  })
  const [showQrModal, setShowQrModal] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [showJoinDropdown, setShowJoinDropdown] = useState(false)

  useEffect(() => {
    for (let i = 0; i < 25; i++) {
      let particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = Math.random() * 100 + "vw"
      particle.style.animationDuration = 5 + Math.random() * 10 + "s"
      particle.style.animationDelay = Math.random() * 10 + "s"
      document.body.appendChild(particle)
    }
    return () => {
      const particles = document.querySelectorAll(".particle")
      particles.forEach((particle) => particle.remove())
    }
  }, [])

  const opportunities = [
    {
      title: "Child Education Support",
      location: "Madurai, Tamil Nadu",
      duration: "2-4 weeks",
      category: "Childcare & Education",
      type: "Volunteer & Intern",
      hostName: "Sunshine Children's Foundation",
      hostImage: "/logo12.png",
      image: "/child.png",
      rating: 4.8,
      reviews: 24,
      price: "₹2,500/week",
      accommodation: "Shared dormitory",
      meals: "3 meals included",
      verified: true,
      state: "tamil-nadu",
      theme: "childcare",
      typeFilter: ["volunteer", "intern"],
    },
    {
      title: "Wildlife Conservation Project",
      location: "Coimbatore, Tamil Nadu",
      duration: "1-3 months",
      category: "Wildlife & Environment",
      type: "Volunteer",
      hostName: "Western Ghats Conservation Trust",
      hostImage: "/host2.png",
      image: "/wildlife.png",
      rating: 4.9,
      reviews: 18,
      price: "₹3,200/week",
      accommodation: "Private room",
      meals: "Vegetarian meals",
      verified: true,
      state: "tamil-nadu",
      theme: "wildlife",
      typeFilter: ["volunteer"],
    },
    {
      title: "Rural Healthcare Support",
      location: "Kochi, Kerala",
      duration: "3-6 weeks",
      category: "Healthcare & Medical",
      type: "Intern",
      hostName: "Kerala Rural Health Initiative",
      hostImage: "/logo12.png",
      image: "/rural.png",
      rating: 4.7,
      reviews: 31,
      price: "₹2,800/week",
      accommodation: "Host family",
      meals: "Local cuisine",
      verified: true,
      state: "kerala",
      theme: "healthcare",
      typeFilter: ["intern"],
    },
    {
      title: "Heritage Site Restoration",
      location: "Hampi, Karnataka",
      duration: "2-8 weeks",
      category: "Heritage & Culture",
      type: "Volunteer",
      hostName: "Hampi Heritage Foundation",
      hostImage: "/host4.png",
      image: "/heritage.png",
      rating: 4.6,
      reviews: 15,
      price: "₹2,200/week",
      accommodation: "Guesthouse",
      meals: "Traditional meals",
      verified: true,
      state: "karnataka",
      theme: "heritage",
      typeFilter: ["volunteer"],
    },
    {
      title: "Elderly Care Program",
      location: "Chennai, Tamil Nadu",
      duration: "1-4 weeks",
      category: "Elderly Care",
      type: "Volunteer & Intern",
      hostName: "Golden Years Care Center",
      hostImage: "/logo12.png",
      image: "/elder.png",
      rating: 4.8,
      reviews: 28,
      price: "₹2,000/week",
      accommodation: "Nearby hostel",
      meals: "South Indian meals",
      verified: true,
      state: "tamil-nadu",
      theme: "elderly",
      typeFilter: ["volunteer", "intern"],
    },
    {
      title: "Special Needs Education",
      location: "Bangalore, Karnataka",
      duration: "2-12 weeks",
      category: "Disability Support",
      type: "Intern",
      hostName: "Inclusive Learning Center",
      hostImage: "/host6.png",
      image: "/edu.png",
      rating: 4.9,
      reviews: 22,
      price: "₹3,000/week",
      accommodation: "Shared apartment",
      meals: "Flexible dining",
      verified: true,
      state: "karnataka",
      theme: "disability",
      typeFilter: ["intern"],
    },
  ]

  // Filter logic unchanged

  const filteredOpportunities = opportunities.filter((opportunity) => {
    // ...filtering code unchanged
    // omitted for brevity
    const matchesLocation =
      !searchFilters.location || opportunity.state === searchFilters.location
    const matchesTheme =
      !searchFilters.theme || opportunity.theme === searchFilters.theme
    const matchesType =
      !searchFilters.type ||
      (searchFilters.type === "both"
        ? opportunity.typeFilter.includes("volunteer") ||
          opportunity.typeFilter.includes("intern")
        : opportunity.typeFilter.includes(searchFilters.type))

    // Date filtering is not very accurate with current opportunity.duration format, but keeping logic as in the original
    // The below can be improved if you refactor opportunity objects to include startDate/endDate
    const opportunityStartDate = new Date(
      opportunity.duration.split("-")[0].replace(/\D/g, "") + " days"
    )
    const opportunityEndDate = new Date(
      opportunity.duration.split("-")[1]?.replace(/\D/g, "") + " days" ||
        opportunityStartDate
    )
    const fromDate = searchFilters.fromDate ? new Date(searchFilters.fromDate) : null
    const toDate = searchFilters.toDate ? new Date(searchFilters.toDate) : null

    const matchesDate =
      !fromDate ||
      !toDate ||
      (fromDate <= opportunityEndDate && toDate >= opportunityStartDate)

    return matchesLocation && matchesTheme && matchesType && matchesDate
  })

  const handleSearch = () => {
    const hasFilters = Object.values(searchFilters).some((value) => value !== "")
    if (!hasFilters) {
      alert("Please select at least one search filter.")
      return
    }

    const params = new URLSearchParams()
    Object.entries(searchFilters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
    const queryString = params.toString()
    router.push(`/search${queryString ? `?${queryString}` : ""}`)
  }

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588776814546-ec72a9a62d36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'), url('/hospital-background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "white",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none z-0"></div>
      {/* Particle styles */}
      <style jsx>{`
        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #00e0ff;
          border-radius: 50%;
          opacity: 0.7;
          animation: floatUp 10s linear infinite;
          z-index: 1;
        }
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) scale(0.5);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-10vh) scale(1);
            opacity: 0;
          }
        }
      `}</style>

      <div className="relative z-10">
        {/* Navigation */}
        {/* ...navigation code unchanged */}
        {/* ...Hero Section unchanged, except overlay color */}
        <section
          className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/hospital-background.png')",
          }}
        >
          <div className="absolute inset-0 bg-white/40 z-10"></div>
          {/* ...rest unchanged */}
        </section>

        {/* Search Section */}
        <section id="search" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          {/* ...rest unchanged except bg-white */}
        </section>

        {/* Available Opportunities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              {/* ...header unchanged */}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOpportunities.map((opportunity, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-gray-200 overflow-hidden bg-white"
                >
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={opportunity.image}
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
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Heart className="h-4 w-4 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                    </div>
                  </div>

                  <CardContent className="p-4 space-y-3">
                    {/* ...rest unchanged */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                      <div>
                        <span className="text-lg font-bold text-black">{opportunity.price}</span>
                        <p className="text-xs text-gray-500">{opportunity.meals}</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-[#F26602] hover:bg-[#F26602]/90 text-white"
                        asChild
                      >
                        {/* NEW: Link to apply page */}
                        <Link href={`/apply?opportunity=${encodeURIComponent(opportunity.title)}`}>
                          Apply Now
                        </Link>
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
                className="border-[#F26602] text-[#F26602] hover:bg-[#F26602] hover:text-white bg-transparent"
              >
                Load More Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Opportunities */}
        <section id="opportunities" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          {/* ...rest unchanged except bg-white */}
        </section>

        {/* Impact Stories */}
        <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          {/* ...rest unchanged except bg-white */}
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          {/* ...rest unchanged except bg-white */}
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F26602" }}>
          {/* ...unchanged */}
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200"
        >
          {/* ...rest unchanged except bg-white and border-gray-200 */}
        </footer>
      </div>
    </div>
  )
}
