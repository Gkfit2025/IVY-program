"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import {
  Heart,
  MapPin,
  Users,
  Calendar,
  Star,
  ArrowLeft,
  Phone,
  Mail,
  Shield,
  Home,
  Utensils,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link" // Fixed Link import to use default import instead of named import

export default function HealthcareAssistancePage() {
  const [showApplication, setShowApplication] = useState(false)

  if (showApplication) {
    return (
      <div className="min-h-screen bg-background pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Button variant="ghost" onClick={() => setShowApplication(false)} className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Details
            </Button>
            <h1 className="font-playfair font-bold text-3xl text-foreground">
              Apply for Healthcare Assistance Program
            </h1>
          </div>
          <Button
            onClick={() => window.open("https://forms.gle/FHirPbejNSDV87Lx5", "_blank")}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            Apply Now
          </Button>
        </div>
      </div>
    )
  }

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
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Join IVY</Button>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white">Verified Program</Badge>
                  <h1 className="font-playfair font-bold text-4xl text-foreground">Healthcare Assistance Program</h1>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>Kochi, Kerala</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>3-6 weeks</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span>4.7 (31 reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Host Information */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                        <Image
                          src="/indian-female-doctor-profile-photo.jpg"
                          alt="Kerala Rural Health Initiative"
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground">Kerala Rural Health Initiative</h3>
                        <p className="text-muted-foreground">Host Organization</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm">
                          <div className="flex items-center space-x-1">
                            <Shield className="h-4 w-4 text-green-500" />
                            <span>Verified Host</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4 text-primary" />
                            <span>50+ volunteers hosted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-border">
                    <CardContent className="p-4 text-center">
                      <Home className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="font-semibold">Host Family</div>
                      <div className="text-sm text-muted-foreground">Accommodation</div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardContent className="p-4 text-center">
                      <Utensils className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="font-semibold">Local Cuisine</div>
                      <div className="text-sm text-muted-foreground">Meals Included</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src="/medical-volunteers-helping-in-rural-healthcare-cli.jpg"
                    alt="Healthcare volunteers in rural clinic"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Pricing Card */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-3xl font-bold text-foreground">₹2,800</div>
                        <div className="text-muted-foreground">per week</div>
                      </div>
                      <Badge variant="secondary">Internship Available</Badge>
                    </div>
                    <Button
                      onClick={() => window.open("https://forms.gle/FHirPbejNSDV87Lx5", "_blank")}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="lg"
                    >
                      Apply Now
                    </Button>
                    <p className="text-center text-sm text-muted-foreground mt-2">
                      Free cancellation up to 7 days before start date
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* About the Program */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>About This Program</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Join our healthcare assistance program in rural Kerala and make a meaningful impact on community
                      health. Work alongside local healthcare professionals to provide essential medical support, health
                      education, and preventive care to underserved communities.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      This program offers hands-on experience in rural healthcare delivery, community health
                      initiatives, and cross-cultural medical practices. Perfect for medical students, healthcare
                      professionals, or anyone passionate about global health.
                    </p>
                  </CardContent>
                </Card>

                {/* What You'll Do */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>What You'll Do</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Assist in primary healthcare clinics",
                        "Support health education programs",
                        "Help with vaccination drives",
                        "Participate in community health screenings",
                        "Assist with patient documentation",
                        "Support maternal and child health programs",
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">For Volunteers:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Basic English communication skills</li>
                        <li>Interest in healthcare and community service</li>
                        <li>Physical fitness for field work</li>
                        <li>Cultural sensitivity and adaptability</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">For Interns:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Medical/nursing/public health background</li>
                        <li>Minimum 6 months of relevant experience</li>
                        <li>Valid medical certifications (if applicable)</li>
                        <li>Commitment to full program duration</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Quick Facts */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">3-6 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Start Dates:</span>
                      <span className="font-medium">Flexible</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Group Size:</span>
                      <span className="font-medium">4-8 people</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Age Range:</span>
                      <span className="font-medium">18-65 years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Language:</span>
                      <span className="font-medium">English, Malayalam</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Host */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Contact Host</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>kerala.health@ivyplatform.org</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>+91 98765 43210</span>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
