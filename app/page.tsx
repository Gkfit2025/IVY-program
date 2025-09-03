import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

export default function IVYHomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#573280] backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <Image
                src="/logo12.png"
                alt="Grace Kennett Foundation Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
              <span
                className="font-playfair font-bold text-xl"
                style={{ color: "#fa2d05" }}
              >
                Grace Kennett Foundation
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                <a href="#search" className="text-[#FFC107] hover:text-[#f1edf5] transition-colors font-bold">
                  Find Opportunities
                </a>
                <a href="#about" className="text-[#FFC107] hover:text-[#f1edf5] transition-colors font-bold">
                  About Us
                </a>
                <a href="#impact" className="text-[#FFC107] hover:text-[#f1edf5] transition-colors font-bold">
                  Impact Stories
                </a>
                <a href="#contact" className="text-[#FFC107] hover:text-[#f1edf5] transition-colors font-bold">
                  Contact
                </a>
              </div>
              <Button className="bg-[#131214] hover:bg-[#131214]/90 text-[#f1edf5]">Join IVY</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Search */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* FIX 1: Add IVY Program heading above main hero heading */}
          <div className="text-center mb-4">
            <span 
              className="font-playfair font-bold text-2xl md:text-3xl"
              style={{ color: "#573280" }}
            >
              IVY Program
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground text-balance">
                  <span style={{ color: '#ac7ce6' }}>Find Your Perfect</span>
                  <span style={{ color: '#a60be6' }}> Volunteering</span>
                  <span style={{ color: '#ac7ce6' }}> Match</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty/relaxed">
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

      {/* Search Section */}
      <section id="search" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                {/* 7. Find Your Perfect Opportunity must be in #573280 */}
                <h2
                  className="font-playfair font-bold text-2xl"
                  style={{ color: "#573280" }}
                >
                  Find Your Perfect Opportunity
                </h2>
                {/* 8. Search and filter volunteering opportunities... #915ccc */}
                <p style={{ color: "#915ccc" }}>
                  Search and filter volunteering opportunities that match your interests
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search opportunities, organizations, or keywords..."
                  className="pl-10 h-12 text-lg"
                />
              </div>

              {/* Filters */}
              <div className="grid md:grid-cols-4 gap-4">
                <Select>
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

                <Select>
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

                <Select>
                  <SelectTrigger className="h-12">
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

                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="volunteer">Volunteer</SelectItem>
                    <SelectItem value="intern">Internship</SelectItem>
                    <SelectItem value="both">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full h-12 bg-[#573280] hover:bg-[#573280]/90 text-primary-foreground text-lg">
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
              <h2 className="font-playfair font-bold text-3xl text-foreground">Available Opportunities</h2>
              <p className="text-muted-foreground">147 opportunities found</p>
            </div>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-[#573280] hover:text-primary-foreground bg-transparent"
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
                image: "Child Education.png",
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
                title: "Rural Healthcare Support",
                location: "Kochi, Kerala",
                duration: "3-6 weeks",
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
                      src={
                        index === 0
                          ? "/Child Education Support.png"
                          : index === 1
                          ? "/wildlife.png"
                          : `/abstract-geometric-shapes.png?height=240&width=400&query=${opportunity.image}`
                      }
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
                    <Button size="sm" className="bg-[#573280] hover:bg-[#573280]/90 text-primary-foreground">
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
              className="border-primary text-primary hover:bg-[#573280] hover:text-primary-foreground bg-transparent"
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
                image: "Child Education Support.png",
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
                    src={
                      index === 0
                        ? "/Child Education Support.png"
                        : index === 1
                        ? "/wildlife.png"
                        : index === 2
                        ? "/Medical.png"
                        : `/abstract-geometric-shapes.png?height=240&width=400&query=${opportunity.image}`
                    }
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
                  <Button className="w-full bg-[#573280] hover:bg-[#573280]/90 text-primary-foreground">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-[#573280] hover:text-primary-foreground bg-transparent"
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
            {/* 2. Fix Impact Stories color - #573280 */}
            <h2
              className="font-playfair font-bold text-3xl md:text-4xl"
              style={{ color: "#573280" }}
            >
              Impact Stories
            </h2>
            {/* 3. Real stories from volunteers... #915ccc */}
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: "#915ccc" }}
            >
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
              {/* 4. About IVY Platform must changed in to About Us */}
              {/* 5. About Us colour must be in #573280 */}
              <h2
                className="font-playfair font-bold text-3xl md:text-4xl"
                style={{ color: "#573280" }}
              >
                About Us
              </h2>
              {/* 6. About Us content must be in justify */}
              <div
                className="space-y-4 text-muted-foreground leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                <p>
                  Grace Kennett Foundation is a non-governmental organization with a glorious 80-year history. 
                  Our work has saved the lives of a thousand victims of female infanticide and abandoned children.

                  A thousand happy families have been built through adoption. If you need to have a garden, dig a well first. 
                  Our well is our hospital and our allied services. We address the physical, mental, and social well being of the community and raise resources to pursue our lofty objectives.
                  
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#573280] text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance">Ready to Make a Difference?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Join our community of changemakers and start your volunteering journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-[#573280] hover:bg-[#573280]/90 text-accent-foreground">
              Find Opportunities
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-[#573280] hover:text-primary-foreground bg-transparent"
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
                  <span>8, Kennett Road, Madurai - 625016,Tamil Nadu</span>
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
