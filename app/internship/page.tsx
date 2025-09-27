"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, MapPin, Users, Star, GraduationCap, Award, BookOpen, Clock, CheckCircle, Globe } from "lucide-react"
import Image from "next/image"

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="font-playfair font-bold text-2xl text-foreground">IVY</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#search" className="text-foreground hover:text-primary transition-colors">
                Find Opportunities
              </Link>
              <Link href="/#about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/#impact" className="text-foreground hover:text-primary transition-colors">
                Impact Stories
              </Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://forms.gle/FHirPbejNSDV87Lx5" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Professional Development Program
                </Badge>
                <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground text-balance">
                  Healthcare
                  <span className="text-primary"> Internship</span> Program
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Gain hands-on experience in healthcare while making a meaningful impact in rural communities across
                  South India. Perfect for medical students and healthcare professionals.
                </p>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>3-12 weeks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>5 States</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Certificate Provided</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="https://forms.gle/FHirPbejNSDV87Lx5" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href="/internship/learn-more">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/medical-interns-working-in-rural-healthcare-clinic.jpg"
                  alt="Healthcare internship program"
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
                <p className="text-sm opacity-90">From 150+ interns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Program Highlights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What makes our healthcare internship program unique and valuable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Structured Learning",
                description:
                  "Comprehensive curriculum designed by healthcare professionals with clear learning objectives",
              },
              {
                icon: Users,
                title: "Expert Mentorship",
                description: "One-on-one guidance from experienced doctors and healthcare practitioners",
              },
              {
                icon: Globe,
                title: "Rural Healthcare Focus",
                description: "Unique exposure to rural healthcare challenges and community-based solutions",
              },
              {
                icon: Award,
                title: "Professional Certificate",
                description: "Recognized certificate upon completion to enhance your professional portfolio",
              },
              {
                icon: BookOpen,
                title: "Hands-on Experience",
                description: "Direct patient interaction and practical healthcare delivery experience",
              },
              {
                icon: Heart,
                title: "Community Impact",
                description: "Make a real difference in underserved communities while learning",
              },
            ].map((highlight, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Available Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from various healthcare specializations and locations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "General Medicine Intern",
                location: "Madurai, Tamil Nadu",
                duration: "8-12 weeks",
                requirements: "Medical student (3rd year+)",
                image: "medical intern examining patient in rural clinic",
                spots: "3 positions available",
              },
              {
                title: "Public Health Intern",
                location: "Kochi, Kerala",
                duration: "6-10 weeks",
                requirements: "Public health or medical background",
                image: "public health intern conducting community health survey",
                spots: "2 positions available",
              },
              {
                title: "Nursing Intern",
                location: "Bangalore, Karnataka",
                duration: "4-8 weeks",
                requirements: "Nursing student (2nd year+)",
                image: "nursing intern providing patient care",
                spots: "4 positions available",
              },
              {
                title: "Pharmacy Intern",
                location: "Chennai, Tamil Nadu",
                duration: "6-12 weeks",
                requirements: "Pharmacy student or graduate",
                image: "pharmacy intern managing medication distribution",
                spots: "2 positions available",
              },
              {
                title: "Mental Health Intern",
                location: "Hyderabad, Telangana",
                duration: "8-16 weeks",
                requirements: "Psychology or psychiatry background",
                image: "mental health intern conducting counseling session",
                spots: "1 position available",
              },
              {
                title: "Community Health Intern",
                location: "Mysore, Karnataka",
                duration: "4-12 weeks",
                requirements: "Healthcare or social work background",
                image: "community health intern educating villagers",
                spots: "3 positions available",
              },
            ].map((position, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=240&width=400&query=${position.image}`}
                    alt={position.title}
                    width={400}
                    height={240}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200 text-xs">
                      {position.spots}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{position.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-playfair">{position.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span>{position.requirements}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a
                      href="https://forms.gle/FHirPbejNSDV87Lx5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      Apply for This Position
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">What You'll Gain</h2>
              <div className="space-y-4">
                {[
                  "Hands-on clinical experience in diverse healthcare settings",
                  "Understanding of rural healthcare challenges and solutions",
                  "Professional networking with healthcare practitioners",
                  "Cultural immersion and language learning opportunities",
                  "Enhanced resume with international healthcare experience",
                  "Personal growth through meaningful community service",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/diverse-group-of-medical-interns-celebrating-compl.jpg"
                alt="Internship benefits"
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
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Join hundreds of healthcare professionals who have transformed their careers through our internship program
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
              <Link href="/internship/learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="font-playfair font-bold text-xl text-foreground">IVY</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                Connecting healthcare professionals with meaningful opportunities across South India.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Programs</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/internship" className="block hover:text-primary transition-colors">
                  Healthcare Internships
                </Link>
                <Link href="/search?type=volunteer" className="block hover:text-primary transition-colors">
                  Volunteer Opportunities
                </Link>
                <Link href="/join-ivy" className="block hover:text-primary transition-colors">
                  All Programs
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Resources</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/internship/learn-more" className="block hover:text-primary transition-colors">
                  Program Details
                </Link>
                <div>Application Guide</div>
                <div>FAQs</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Contact Us</div>
                <div>Help Center</div>
                <div>Safety Guidelines</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 IVY Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
