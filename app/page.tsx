"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
} from "lucide-react";
import Image from "next/image";

interface SearchFilters {
  location: string;
  theme: string;
  fromDate: string;
  toDate: string;
  type: string;
}

// DateInput component (unchanged)
const DateInput = ({ 
  value, 
  onChange, 
  placeholder 
}: { 
  value: string; 
  onChange: (value: string) => void; 
  placeholder: string;
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node) &&
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    if (!showDatePicker) return null;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentDate = value ? new Date(value) : today;
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

    const days = [];
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const currentDateObj = new Date(dateStr);
      const isSelected = value === dateStr;
      const isDisabled = currentDateObj < today;

      days.push(
        <div
          key={day}
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            isDisabled 
              ? 'text-muted-foreground/50 cursor-not-allowed'
              : isSelected 
                ? 'bg-primary text-primary-foreground cursor-pointer'
                : 'hover:bg-accent hover:text-accent-foreground cursor-pointer'
          }`}
          onClick={() => {
            if (!isDisabled) {
              onChange(dateStr);
              setShowDatePicker(false);
            }
          }}
        >
          {day}
        </div>
      );
    }

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
      <div 
        ref={datePickerRef}
        className="absolute top-full left-0 mt-1 bg-background border border-border rounded-md shadow-lg z-50 p-4 w-64"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">
            {monthNames[currentMonth]} {currentYear}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowDatePicker(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
        
        <div className="mt-4 flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              onChange('');
              setShowDatePicker(false);
            }}
          >
            Clear
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={formatDisplayDate(value)}
          readOnly
          onClick={() => setShowDatePicker(!showDatePicker)}
          className="pl-10 h-12 text-sm cursor-pointer"
        />
      </div>
      {renderCalendar()}
    </div>
  );
};

export default function IVYHomePage() {
  const router = useRouter();
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: "",
    theme: "",
    fromDate: "",
    toDate: "",
    type: "",
  });
  const [showQrModal, setShowQrModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showJoinDropdown, setShowJoinDropdown] = useState(false);

  const opportunities = [
    {
      title: "Child Education Support",
      location: "Madurai, Tamil Nadu",
      duration: "2-4 weeks",
      category: "Childcare & Education",
      type: "Volunteer & Intern",
      hostName: "Sunshine Children's Foundation",
      hostImage: "/logo12.png",
      image: "/Child.png",
      rating: 4.8,
      reviews: 24,
      price: "₹2,500/week",
      accommodation: "Shared dormitory",
      meals: "3 meals included",
      verified: true,
      state: "tamil-nadu",
      theme: "childcare",
      typeFilter: ["volunteer", "intern"]
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
      typeFilter: ["volunteer"]
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
      typeFilter: ["intern"]
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
      typeFilter: ["volunteer"]
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
      typeFilter: ["volunteer", "intern"]
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
      typeFilter: ["intern"]
    },
  ];

  const filteredOpportunities = opportunities.filter(opportunity => {
    const matchesLocation = !searchFilters.location || opportunity.state === searchFilters.location;
    const matchesTheme = !searchFilters.theme || opportunity.theme === searchFilters.theme;
    const matchesType = !searchFilters.type || 
      (searchFilters.type === "both" 
        ? opportunity.typeFilter.includes("volunteer") || opportunity.typeFilter.includes("intern")
        : opportunity.typeFilter.includes(searchFilters.type));
    
    const opportunityStartDate = new Date(opportunity.duration.split('-')[0].replace(/\D/g, '') + ' days');
    const opportunityEndDate = new Date(opportunity.duration.split('-')[1]?.replace(/\D/g, '') + ' days' || opportunityStartDate);
    const fromDate = searchFilters.fromDate ? new Date(searchFilters.fromDate) : null;
    const toDate = searchFilters.toDate ? new Date(searchFilters.toDate) : null;

    const matchesDate = !fromDate || !toDate || (
      fromDate <= opportunityEndDate && toDate >= opportunityStartDate
    );

    return matchesLocation && matchesTheme && matchesType && matchesDate;
  });

  const handleSearch = () => {
    const hasFilters = Object.values(searchFilters).some((value) => value !== "");
    if (!hasFilters) {
      alert("Please select at least one search filter.");
      return;
    }

    const params = new URLSearchParams();
    Object.entries(searchFilters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    const queryString = params.toString();
    router.push(`/search${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo12.png"
                alt="Grace Kennett Foundation Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="font-playfair font-bold text-2xl text-[#F26602]">
                Grace Kennett Foundation
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#search"
                className="text-[#F26602] hover:text-white transition-colors"
                aria-label="Find Opportunities"
              >
                Find Opportunities
              </Link>
              <Link
                href="#about"
                className="text-[#F26602] hover:text-white transition-colors"
                aria-label="About Us"
              >
                About Us
              </Link>
              <Link
                href="#impact"
                className="text-[#F26602] hover:text-white transition-colors"
                aria-label="Impact Stories"
              >
                Impact Stories
              </Link>
              <Link
                href="#contact"
                className="text-[#F26602] hover:text-white transition-colors"
                aria-label="Contact"
              >
                Contact
              </Link>
            </div>
            <div className="relative">
              <Button 
                className="bg-[#F26602] hover:bg-[#F26602]/90 text-white"
                onClick={() => setShowJoinDropdown(!showJoinDropdown)}
              >
                Join IVY <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              {showJoinDropdown && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-black border border-gray-800 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800"
                      onClick={() => {
                        // Handle internship selection
                        setShowJoinDropdown(false);
                      }}
                    >
                      Internship
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800"
                      onClick={() => {
                        // Handle volunteer selection
                        setShowJoinDropdown(false);
                      }}
                    >
                      Volunteer
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800"
                      onClick={() => {
                        // Handle both selection
                        setShowJoinDropdown(false);
                      }}
                    >
                      Both
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(/bg6.png)` }}>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-balance text-white mb-6">
            <span className="text-[#F79C7C]">Where Careers Begin and</span>{" "}
            <span className="text-[#F55105]">Communities Thrive</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Discover meaningful opportunities across South India. Search by
            location, theme, and find the perfect match for your skills and
            passion.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-white/80">
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
          <div className="absolute bottom-6 left-6 bg-gray-900 text-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-current" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <p className="text-sm opacity-90">From 200+ reviews</p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-2xl p-8 shadow-lg border border-gray-800">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="font-playfair font-bold text-2xl text-[#F26602]">
                  Find Your Perfect Opportunity
                </h2>
                <p className="text-gray-400">
                  Search and filter volunteering opportunities that match your
                  interests
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search opportunities, organizations, or keywords..."
                  className="pl-10 h-12 text-lg bg-gray-900 border-gray-800 text-white"
                  aria-label="Search opportunities"
                />
              </div>

              {/* Filters */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Select
                  value={searchFilters.location}
                  onValueChange={(value) =>
                    setSearchFilters((prev) => ({ ...prev, location: value }))
                  }
                >
                  <SelectTrigger className="h-12 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-gray-800 text-white">
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="kerala">Kerala</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                    <SelectItem value="telangana">Telangana</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={searchFilters.theme}
                  onValueChange={(value) =>
                    setSearchFilters((prev) => ({ ...prev, theme: value }))
                  }
                >
                  <SelectTrigger className="h-12 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-gray-800 text-white">
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
                  onValueChange={(value) =>
                    setSearchFilters((prev) => ({ ...prev, type: value }))
                  }
                >
                  <SelectTrigger className="h-12 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-gray-800 text-white">
                    <SelectItem value="volunteer">Volunteer</SelectItem>
                    <SelectItem value="intern">Internship</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>

                <div className="md:col-span-2 lg:col-span-1">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">
                      Duration
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <DateInput
                        value={searchFilters.fromDate}
                        onChange={(value) =>
                          setSearchFilters((prev) => ({ ...prev, fromDate: value }))
                        }
                        placeholder="From Date"
                      />
                      <DateInput
                        value={searchFilters.toDate}
                        onChange={(value) =>
                          setSearchFilters((prev) => ({ ...prev, toDate: value }))
                        }
                        placeholder="To Date"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleSearch}
                className="w-full h-12 bg-[#F26602] hover:bg-[#F26602]/90 text-white text-lg"
                aria-label="Search Opportunities"
              >
                <Search className="mr-2 h-5 w-5" />
                Search Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Available Opportunities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="font-playfair font-bold text-3xl text-[#F26602]">
                Available Opportunities
              </h2>
              <p className="text-gray-400">{filteredOpportunities.length} opportunities found</p>
            </div>
            <Button
              variant="outline"
              className="border-[#F26602] text-[#F26602] hover:bg-[#F26602] hover:text-white bg-transparent"
            >
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-gray-800 overflow-hidden bg-gray-900"
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
                  <div className="absolute top-3 right-3 bg-gray-900/90 backdrop-blur-sm rounded-full p-2">
                    <Heart className="h-4 w-4 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                </div>

                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-[#F26602]/10 text-[#F26602] hover:bg-[#F26602]/20 text-xs"
                    >
                      {opportunity.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span className="font-medium text-white">{opportunity.rating}</span>
                      <span className="text-gray-400">
                        ({opportunity.reviews})
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-[#F26602] line-clamp-1">
                      {opportunity.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-400 mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{opportunity.location}</span>
                    </div>
                  </div>

                  {/* Host Information */}
                  <div className="flex items-center space-x-2 py-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-800">
                      <Image
                        src={opportunity.hostImage}
                        alt={opportunity.hostName}
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {opportunity.hostName}
                      </p>
                      <p className="text-xs text-gray-400">
                        Host organization
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center justify-between">
                      <span>Duration:</span>
                      <span className="text-white">{opportunity.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Type:</span>
                      <span className="text-white">{opportunity.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Accommodation:</span>
                      <span className="text-white">
                        {opportunity.accommodation}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-800">
                    <div>
                      <span className="text-lg font-bold text-white">
                        {opportunity.price}
                      </span>
                      <p className="text-xs text-gray-400">
                        {opportunity.meals}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-[#F26602] hover:bg-[#F26602]/90 text-white"
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
              className="border-[#F26602] text-[#F26602] hover:bg-[#F26602] hover:text-white bg-transparent"
            >
              Load More Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section id="opportunities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#F26602]">
              Featured Opportunities
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover meaningful ways to contribute to communities across South
              India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Child Education Support",
                location: "Madurai, Tamil Nadu",
                duration: "2-4 weeks",
                category: "Education",
                image: "/child.png",
                rating: 4.8,
                reviews: 24,
                slug: "child-education-support",
              },
              {
                title: "Wildlife Conservation",
                location: "Coimbatore, Tamil Nadu",
                duration: "1-3 months",
                category: "Environment",
                image: "/wildlife.png",
                rating: 4.9,
                reviews: 18,
                slug: "wildlife-conservation",
              },
              {
                title: "Healthcare Assistance",
                location: "Kochi, Kerala",
                duration: "3-6 weeks",
                category: "Healthcare",
                image: "/Medical.png",
                rating: 4.7,
                reviews: 31,
                slug: "healthcare-assistance",
              },
            ].map((opportunity, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-gray-800 bg-gray-900"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={opportunity.image}
                    alt={opportunity.title}
                    width={400}
                    height={240}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-[#F26602]/10 text-[#F26602] hover:bg-[#F26602]/20"
                    >
                      {opportunity.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span>{opportunity.rating}</span>
                      <span>({opportunity.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-playfair text-[#F26602]">
                    {opportunity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-[#F26602]" />
                      <span>{opportunity.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-[#F26602]" />
                      <span>{opportunity.duration}</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-[#F26602] hover:bg-[#F26602]/90 text-white"
                  >
                    <Link href={`/${opportunity.slug}`}>Learn More</Link>
                  </Button>
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
              View All Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#F26602]">
              Impact Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                image: "/story1.png",
              },
              {
                name: "Michael Chen",
                role: "Healthcare Volunteer",
                location: "Kochi",
                quote:
                  "The experience opened my eyes to different healthcare challenges and solutions. The community welcomed me with open arms.",
                image: "/story2.png",
              },
              {
                name: "Emma Rodriguez",
                role: "Environmental Volunteer",
                location: "Coimbatore",
                quote:
                  "Contributing to wildlife conservation while learning about local ecosystems was a life-changing experience.",
                image: "/story3.png",
              },
            ].map((story, index) => (
              <Card key={index} className="border-gray-800 bg-gray-900">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800">
                      <Image
                        src={story.image}
                        alt={story.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {story.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {story.role} • {story.location}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-gray-400 italic">
                    "{story.quote}"
                  </blockquote>
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
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#F26602]">
                About Us
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-justify">
                <p>
                  Grace Kennett Foundation is a non-governmental organization with a glorious 80-year history. 
                  Our work has saved the lives of a thousand victims of female infanticide and abandoned children.
                  A thousand happy families have been built through adoption. If you need to have a garden, dig a well first. 
                  Our well is our hospital and our allied services. We address the physical, mental, and social well being of the community and raise resources to pursue our lofty objectives.
                </p>
                <p>
                  IV is an innovative platform that connects passionate volunteers
                  with meaningful opportunities across South India. Just like Airbnb
                  revolutionized travel, we're transforming how people discover and
                  engage in volunteer work.
                </p>
                <p>
                  Our mission is to create lasting positive impact in communities
                  while providing volunteers with authentic cultural experiences and
                  personal growth opportunities.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-[#F26602]">500+</div>
                  <div className="text-sm text-gray-400">
                    Active Volunteers
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-[#F26602]">50+</div>
                  <div className="text-sm text-gray-400">
                    Partner Organizations
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800">
              <Image
                src="/pro.png"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F26602' }}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance text-white">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 text-pretty">
            Join our community of changemakers and start your volunteering journey
            today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white hover:bg-white/90 text-[#F26602]"
            >
              Find Opportunities
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#F26602] bg-transparent"
            >
              Become a Host
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-[#F26602]" />
                <span className="font-playfair font-bold text-xl text-white">
                  IV
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting volunteers with meaningful opportunities across South
                India.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/1Uxc1kVsLi/" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-[#F26602] cursor-pointer transition-colors" />
                </a>
                <a href="https://www.instagram.com/gkfmadurai?igsh=cWJqaTd2eWRlc2Iz" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-[#F26602] cursor-pointer transition-colors" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">For Volunteers</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>
                  <Link href="/opportunities">Find Opportunities</Link>
                </div>
                <div>
                  <Link href="/how-it-works">How It Works</Link>
                </div>
                <div>
                  <Link href="/safety">Safety Guidelines</Link>
                </div>
                <div>
                  <Link href="/faq">FAQs</Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">For Hosts</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>
                  <Link href="/list-project">List Your Project</Link>
                </div>
                <div>
                  <Link href="/host-resources">Host Resources</Link>
                </div>
                <div>
                  <Link href="/best-practices">Best Practices</Link>
                </div>
                <div>
                  <Link href="/support">Support</Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>gkfit2025@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 99626840401</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>8, Kennett Road, Madurai - 16, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              &copy; 2024 IV Platform. All rights reserved. Spreading kindness across South India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
