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
} from "lucide-react";
import Image from "next/image";

interface SearchFilters {
  location: string;
  theme: string;
  fromDate: string;
  toDate: string;
  type: string;
}

// DateInput component
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
      const isSelected = value === dateStr;
      
      days.push(
        <div
          key={day}
          className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
            isSelected 
              ? 'bg-primary text-primary-foreground' 
              : 'hover:bg-accent hover:text-accent-foreground'
          }`}
          onClick={() => {
            onChange(dateStr);
            setShowDatePicker(false);
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

  // Sample data for opportunities
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
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#000000] backdrop-blur-sm border-b border-border z-50">
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
                className="text-[#F26602] hover:text-[#FFFCFC] transition-colors"
                aria-label="Find Opportunities"
              >
                Find Opportunities
              </Link>
              <Link
                href="#about"
                className="text-[#F26602] hover:text-[#FFFCFC] transition-colors"
                aria-label="About Us"
              >
                About Us
              </Link>
              <Link
                href="#impact"
                className="text-[#F26602] hover:text-[#FFFCFC] transition-colors"
                aria-label="Impact Stories"
              >
                Impact Stories
              </Link>
              <Link
                href="#contact"
                className="text-[#F26602] hover:text-[#FFFCFC] transition-colors"
                aria-label="Contact"
              >
                Contact
              </Link>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Join IVY
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Search */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-playfair font-bold text-4xl md:text-6xl text-balance">
                  <span className="text-[#F79C7C]">
                    "Where Careers Begin and
                  </span>{" "}
                  <span className="text-[#F55105]">
                    Communities Thrive
                  </span>{" "}
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Discover meaningful opportunities across South India. Search by
                  location, theme, and find the perfect match for your skills and
                  passion.
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
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/bg6.png"
                  alt="Volunteers in action"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
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

      {/* Search Section */}
      <section id="search" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="font-playfair font-bold text-2xl text-foreground">
                  Find Your Perfect Opportunity
                </h2>
                <p className="text-muted-foreground">
                  Search and filter volunteering opportunities that match your
                  interests
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search opportunities, organizations, or keywords..."
                  className="pl-10 h-12 text-lg"
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
                  onValueChange={(value) =>
                    setSearchFilters((prev) => ({ ...prev, theme: value }))
                  }
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
                  onValueChange={(value) =>
                    setSearchFilters((prev) => ({ ...prev, type: value }))
                  }
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
                    <label className="text-sm font-medium text-foreground">
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
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="font-playfair font-bold text-3xl text-foreground">
                Available Opportunities
              </h2>
              <p className="text-muted-foreground">{opportunities.length} opportunities found</p>
            </div>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden"
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
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-2">
                    <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                </div>

                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-accent/10 text-accent hover:bg-accent/20 text-xs"
                    >
                      {opportunity.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span className="font-medium">{opportunity.rating}</span>
                      <span className="text-muted-foreground">
                        ({opportunity.reviews})
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-foreground line-clamp-1">
                      {opportunity.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{opportunity.location}</span>
                    </div>
                  </div>

                  {/* Host Information */}
                  <div className="flex items-center space-x-2 py-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
                      <Image
                        src={opportunity.hostImage}
                        alt={opportunity.hostName}
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {opportunity.hostName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Host organization
                      </p>
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
                      <span className="text-foreground">
                        {opportunity.accommodation}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div>
                      <span className="text-lg font-bold text-foreground">
                        {opportunity.price}
                      </span>
                      <p className="text-xs text-muted-foreground">
                        {opportunity.meals}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
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
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
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
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">
              Featured Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                image: "/medical.png",
                rating: 4.7,
                reviews: 31,
                slug: "healthcare-assistance",
              },
            ].map((opportunity, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border"
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
                      className="bg-accent/10 text-accent hover:bg-accent/20"
                    >
                      {opportunity.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span>{opportunity.rating}</span>
                      <span>({opportunity.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-playfair">
                    {opportunity.title}
                  </CardTitle>
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
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
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
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
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
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">
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
              <Card key={index} className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                      <Image
                        src={story.image}
                        alt={story.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {story.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {story.role} • {story.location}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic">
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
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">
                About Us
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
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
                <div className="text-center p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Active Volunteers
                  </div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Partner Organizations
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
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
        className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="font-playfair font-bold text-xl text-foreground">
                  IV
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Connecting volunteers with meaningful opportunities across South
                India.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">For Volunteers</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
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
              <h4 className="font-semibold text-foreground">For Hosts</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
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
              <h4 className="font-semibold text-foreground">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
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

          {/* QR Code Section */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>&copy; 2024 IV Platform. All rights reserved. Spreading kindness across South India.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium mb-2">Support us with a donation</p>
              <div className="border border-border rounded-md p-2 bg-white">
                <Image
                  src="/qr.png"
                  alt="Donation QR Code"
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Scan to donate</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { useRouter } from 'next/router';

export default function HealthcareAssistance() {
  const router = useRouter();

  const handleNextClick = () => {
    router.push('/qr.png');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f8fa',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#0066cc', marginBottom: '16px' }}>Healthcare Assistance</h1>
      <p style={{ maxWidth: 400, textAlign: 'center', marginBottom: '24px' }}>
        Welcome to our Healthcare Assistance portal. Here you can access resources, schedule appointments,
        and get support for your medical needs.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
        <li style={{ margin: '8px 0' }}>
          <a href="/appointments" style={{ color: '#0077aa', textDecoration: 'underline' }}>Book Appointment</a>
        </li>
        <li style={{ margin: '8px 0' }}>
          <a href="/resources" style={{ color: '#0077aa', textDecoration: 'underline' }}>Healthcare Resources</a>
        </li>
        <li style={{ margin: '8px 0' }}>
          <a href="/support" style={{ color: '#0077aa', textDecoration: 'underline' }}>Get Support</a>
        </li>
      </ul>
      <button
        onClick={handleNextClick}
        style={{
          background: '#009966',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '12px 32px',
          fontSize: '16px',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.07)'
        }}
      >
        Next
      </button>
      <div style={{ marginTop: '36px', fontSize: '14px', color: '#555' }}>
        Need urgent help? <a href="/emergency" style={{ color: '#d00', fontWeight: 'bold' }}>Click here</a>
      </div>
    </div>
  );
}
