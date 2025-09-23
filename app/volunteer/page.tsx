"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Users, Calendar, Star, HandHeart, Clock, Globe } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
              Volunteer Program
            </Badge>
            <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground text-balance">
              Make a Difference Through
              <span className="text-primary"> Volunteering</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              Join our community of changemakers and create lasting impact in communities across South India through
              meaningful volunteer work.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-playfair font-bold text-3xl text-foreground">Volunteer Opportunities</h2>
            <p className="text-xl text-muted-foreground">
              Choose from diverse volunteer programs that match your passion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Child Education Support",
                location: "Madurai, Tamil Nadu",
                duration: "2-4 weeks",
                category: "Education",
                image: "volunteers teaching children in rural school",
                description: "Help teach English and basic skills to underprivileged children",
                impact: "50+ children supported",
                commitment: "4-6 hours/day",
              },
              {
                title: "Community Health Outreach",
                location: "Kochi, Kerala",
                duration: "3-6 weeks",
                category: "Healthcare",
                image: "volunteers conducting health awareness programs",
                description: "Assist in health awareness campaigns and basic medical support",
                impact: "200+ families reached",
                commitment: "5-7 hours/day",
              },
              {
                title: "Environmental Conservation",
                location: "Coimbatore, Tamil Nadu",
                duration: "1-8 weeks",
                category: "Environment",
                image: "volunteers planting trees and cleaning environment",
                description: "Participate in reforestation and environmental cleanup projects",
                impact: "500+ trees planted",
                commitment: "6-8 hours/day",
              },
              {
                title: "Elderly Care Support",
                location: "Chennai, Tamil Nadu",
                duration: "2-6 weeks",
                category: "Elderly Care",
                image: "volunteers spending time with elderly people",
                description: "Provide companionship and basic care to elderly residents",
                impact: "30+ seniors supported",
                commitment: "4-5 hours/day",
              },
              {
                title: "Women Empowerment",
                location: "Bangalore, Karnataka",
                duration: "3-8 weeks",
                category: "Community Development",
                image: "volunteers teaching skills to women",
                description: "Teach vocational skills and support women's self-help groups",
                impact: "100+ women trained",
                commitment: "5-6 hours/day",
              },
              {
                title: "Special Needs Support",
                location: "Hyderabad, Telangana",
                duration: "2-12 weeks",
                category: "Disability Support",
                image: "volunteers working with special needs individuals",
                description: "Support therapy sessions and daily activities for special needs individuals",
                impact: "25+ individuals supported",
                commitment: "4-6 hours/day",
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
                    <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                      {opportunity.category}
                    </Badge>
                    <HandHeart className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-playfair">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{opportunity.description}</p>

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
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{opportunity.commitment}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span className="text-green-600 font-medium">{opportunity.impact}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <a
                      href="https://forms.gle/FHirPbejNSDV87Lx5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      Apply Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Why Volunteer with IVY?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience meaningful impact while gaining valuable life experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Make Real Impact",
                description: "Create lasting positive change in communities that need it most",
              },
              {
                icon: Users,
                title: "Cultural Exchange",
                description: "Immerse yourself in local culture and build meaningful connections",
              },
              {
                icon: Globe,
                title: "Personal Growth",
                description: "Develop new skills, gain perspective, and build confidence",
              },
              {
                icon: Star,
                title: "Flexible Programs",
                description: "Choose from various durations and commitment levels that fit your schedule",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance">Ready to Start Volunteering?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Join thousands of volunteers who have made a difference in South India
          </p>
          <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-100 text-green-600">
            <a href="https://forms.gle/FHirPbejNSDV87Lx5" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
