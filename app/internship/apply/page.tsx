"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"
import { Heart, ArrowLeft, CheckCircle } from "lucide-react"
import ApplicationForm from "@/components/application-form"

export default function ApplyPage() {
  const [showApplication, setShowApplication] = useState(false)

  if (showApplication) {
    return <ApplicationForm />
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
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/internship" className="text-foreground hover:text-primary transition-colors">
                <ArrowLeft className="inline h-4 w-4 mr-2" />
                Back to Program
              </Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <Button
              onClick={() => setShowApplication(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Start Application
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              Application Process
            </Badge>
            <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground text-balance">
              Apply for Healthcare
              <span className="text-primary"> Internship</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Ready to start your journey? Complete our application process to join our next cohort of healthcare
              interns
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-playfair font-bold text-3xl text-foreground">Application Process</h2>
            <p className="text-xl text-muted-foreground">Follow these simple steps to complete your application</p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Personal Information",
                description: "Provide your basic details, contact information, and educational background",
                duration: "5 minutes",
              },
              {
                step: "2",
                title: "Program Selection",
                description: "Choose your preferred internship type, location, and duration",
                duration: "3 minutes",
              },
              {
                step: "3",
                title: "Payment Information",
                description:
                  "Complete payment using your preferred method (Credit Card, Debit Card, PayPal, or QR Code)",
                duration: "2 minutes",
              },
              {
                step: "4",
                title: "Confirmation",
                description: "Review your application and receive confirmation with next steps",
                duration: "1 minute",
              },
            ].map((step, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      {step.step}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-foreground">{step.title}</h3>
                        <Badge variant="secondary" className="bg-muted text-muted-foreground">
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Payment Options</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from multiple secure payment methods for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Credit Card",
                description: "Visa, Mastercard, American Express accepted",
                icon: "💳",
                features: ["Instant processing", "Secure encryption", "International cards accepted"],
              },
              {
                title: "Debit Card",
                description: "Direct bank account payment",
                icon: "🏦",
                features: ["Bank-level security", "Immediate confirmation", "No additional fees"],
              },
              {
                title: "PayPal",
                description: "Pay with your PayPal account",
                icon: "💰",
                features: ["Buyer protection", "Easy refunds", "Global acceptance"],
              },
              {
                title: "QR Code",
                description: "Scan and pay with mobile apps",
                icon: "📱",
                features: ["Mobile-friendly", "Quick payment", "Popular in Asia"],
              },
            ].map((payment, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl">{payment.icon}</div>
                  <h3 className="font-semibold text-foreground">{payment.title}</h3>
                  <p className="text-sm text-muted-foreground">{payment.description}</p>
                  <div className="space-y-2">
                    {payment.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Fees */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-playfair font-bold text-3xl text-foreground">Program Fees</h2>
            <p className="text-xl text-muted-foreground">Transparent pricing with everything included</p>
          </div>

          <Card className="border-border">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="font-playfair font-bold text-2xl text-foreground">What's Included</h3>
                  <div className="space-y-3">
                    {[
                      "Accommodation in safe, comfortable housing",
                      "Three meals per day with local cuisine",
                      "24/7 local support and emergency assistance",
                      "Professional mentorship and supervision",
                      "Certificate of completion",
                      "Pre-departure orientation",
                      "Cultural integration workshops",
                      "Medical and travel insurance",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="font-playfair font-bold text-2xl text-foreground">Pricing</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">4-week program</span>
                        <span className="font-bold text-lg">₹45,000</span>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">8-week program</span>
                        <span className="font-bold text-lg">₹80,000</span>
                      </div>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">12-week program</span>
                        <div className="text-right">
                          <span className="font-bold text-lg text-primary">₹110,000</span>
                          <div className="text-sm text-muted-foreground">Most Popular</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    * Payment plans available. Contact us for scholarship opportunities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance">Ready to Begin?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Start your application now and take the first step towards an impactful healthcare internship experience
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => setShowApplication(true)}
          >
            Start Application Now
          </Button>
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
