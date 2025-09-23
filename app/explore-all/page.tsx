"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, MapPin, Users, Calendar, Star, Globe, GraduationCap, HandHeart, Briefcase } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function ExploreAllPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
              All Programs
            </Badge>
            <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground text-balance">
              Explore All
              <span className="text-primary"> Opportunities</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              Discover the full range of volunteer and internship opportunities across South India. Find the perfect
              match for your skills, interests, and schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-playfair font-bold text-3xl text-foreground">Program Categories</h2>
            <p className="text-xl text-muted-foreground">Choose from diverse programs across multiple sectors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare & Medical",
                count: "25+ opportunities",
                type: "Volunteer & Internship",
                icon: Heart,
                color: "bg-red-100 text-red-700",
                image: "medical volunteers in hospital setting",
                description: "Support healthcare initiatives and gain medical experience",
              },
              {
                title: "Education & Teaching",
                count: "30+ opportunities",
                type: "Volunteer & Internship",
                icon: GraduationCap,
                color: "bg-blue-100 text-blue-700",
                image: "volunteers teaching in classroom",
                description: "Empower communities through education and skill development",
              },
              {
                title: "Community Development",
                count: "20+ opportunities",
                type: "Volunteer & Internship",
                icon: Users,
                color: "bg-green-100 text-green-700",
                image: "community development projects",
                description: "Build stronger communities through grassroots initiatives",
              },
              {
                title: "Environmental Conservation",
                count: "15+ opportunities",
                type: "Volunteer & Internship",
                icon: Globe,
                color: "bg-emerald-100 text-emerald-700",
                image: "environmental conservation work",
                description: "Protect and preserve South India's natural heritage",
              },
              {
                title: "Elderly Care",
                count: "12+ opportunities",
                type: "Volunteer & Internship",
                icon: HandHeart,
                color: "bg-orange-100 text-orange-700",
                image: "volunteers with elderly people",
                description: "Provide care and companionship to senior community members",
              },
              {
                title: "Business & Development",
                count: "18+ opportunities",
                type: "Internship",
                icon: Briefcase,
                color: "bg-purple-100 text-purple-700",
                image: "business development internship",
                description: "Gain professional experience while supporting social enterprises",
              },
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={`/.jpg?height=240&width=400&query=${category.image}`}
                    alt={category.title}
                    width={400}
                    height={240}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className={category.color}>
                      {category.type}
                    </Badge>
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-playfair">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{category.description}</p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-medium">{category.count}</span>
                    <span className="text-muted-foreground">Available now</span>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link
                      href={`/search?theme=${category.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                      className="block w-full"
                    >
                      Explore Opportunities
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Featured Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked opportunities with high impact and excellent host organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Rural Healthcare Initiative",
                location: "Madurai, Tamil Nadu",
                duration: "4-8 weeks",
                type: "Internship",
                category: "Healthcare",
                rating: 4.9,
                reviews: 32,
                image: "rural healthcare clinic",
                organization: "Tamil Nadu Health Foundation",
              },
              {
                title: "Child Education Program",
                location: "Kochi, Kerala",
                duration: "2-6 weeks",
                type: "Volunteer",
                category: "Education",
                rating: 4.8,
                reviews: 28,
                image: "children in classroom learning",
                organization: "Kerala Education Trust",
              },
              {
                title: "Wildlife Conservation Project",
                location: "Coimbatore, Tamil Nadu",
                duration: "3-12 weeks",
                type: "Both",
                category: "Environment",
                rating: 4.9,
                reviews: 19,
                image: "wildlife conservation work",
                organization: "Western Ghats Conservation",
              },
              {
                title: "Women Empowerment Initiative",
                location: "Bangalore, Karnataka",
                duration: "4-10 weeks",
                type: "Internship",
                category: "Community Development",
                rating: 4.7,
                reviews: 24,
                image: "women learning new skills",
                organization: "Karnataka Women's Collective",
              },
              {
                title: "Elderly Care Support",
                location: "Chennai, Tamil Nadu",
                duration: "2-8 weeks",
                type: "Volunteer",
                category: "Elderly Care",
                rating: 4.8,
                reviews: 31,
                image: "volunteers with elderly residents",
                organization: "Chennai Senior Care",
              },
              {
                title: "Social Enterprise Development",
                location: "Hyderabad, Telangana",
                duration: "6-12 weeks",
                type: "Internship",
                category: "Business",
                rating: 4.6,
                reviews: 15,
                image: "business development meeting",
                organization: "Telangana Social Ventures",
              },
            ].map((opportunity, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={`/.jpg?height=240&width=400&query=${opportunity.image}`}
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
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span className="font-medium">{opportunity.rating}</span>
                      <span className="text-muted-foreground">({opportunity.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-playfair">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{opportunity.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{opportunity.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{opportunity.organization}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {opportunity.type}
                    </Badge>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
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
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/search">View All 120+ Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 text-pretty">
            With over 120 opportunities across South India, find the perfect match for your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="https://forms.gle/FHirPbejNSDV87Lx5" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/search">Browse All Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
