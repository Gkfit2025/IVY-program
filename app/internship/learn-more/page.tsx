"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, MapPin, Users, BookOpen, CheckCircle, Globe, Target, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"

export default function LearnMorePage() {
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
                Back to Program
              </Link>
              <Link href="/#about" className="text-foreground hover:text-primary transition-colors">
                About Us
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
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              Detailed Program Information
            </Badge>
            <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground text-balance">
              Healthcare Internship
              <span className="text-primary"> Program Details</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Everything you need to know about our comprehensive healthcare internship program in South India
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair font-bold text-3xl text-foreground">Program Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our Healthcare Internship Program is designed to provide medical students and healthcare professionals
                  with hands-on experience in rural and underserved communities across South India. This immersive
                  program combines clinical practice with cultural exchange and community service.
                </p>
                <p>
                  Participants work alongside experienced healthcare professionals in various settings including rural
                  hospitals, community health centers, and mobile medical units. The program emphasizes practical
                  learning, cultural sensitivity, and sustainable healthcare solutions.
                </p>
                <p>
                  Since 2018, we have successfully placed over 500 interns across 50+ healthcare facilities, with a 98%
                  satisfaction rate and measurable impact on local communities.
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/medical-interns-working-with-local-doctors-in-rura.jpg"
                alt="Program overview"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Learning Outcomes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Key Learning Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What you'll achieve through our structured internship program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Clinical Skills Development",
                description:
                  "Master essential clinical procedures, patient assessment techniques, and diagnostic skills under expert supervision",
              },
              {
                icon: Globe,
                title: "Global Health Perspective",
                description:
                  "Understand healthcare disparities, resource-limited settings, and innovative solutions for rural healthcare delivery",
              },
              {
                icon: Users,
                title: "Cultural Competency",
                description:
                  "Develop cross-cultural communication skills and sensitivity to diverse patient populations and healthcare practices",
              },
              {
                icon: TrendingUp,
                title: "Professional Growth",
                description:
                  "Build confidence, leadership skills, and professional networks that will benefit your entire healthcare career",
              },
              {
                icon: BookOpen,
                title: "Research Opportunities",
                description:
                  "Participate in ongoing research projects and contribute to publications on rural healthcare and community health",
              },
              {
                icon: Heart,
                title: "Community Impact",
                description:
                  "Make measurable contributions to community health outcomes while learning sustainable healthcare approaches",
              },
            ].map((outcome, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <outcome.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{outcome.title}</h3>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Program Structure</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive 12-week journey designed for maximum learning and impact
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                week: "Weeks 1-2",
                title: "Orientation & Cultural Integration",
                description:
                  "Introduction to local healthcare systems, cultural orientation, language basics, and safety protocols. Meet your mentor and fellow interns.",
                activities: [
                  "Cultural orientation workshop",
                  "Healthcare system overview",
                  "Language training",
                  "Safety briefing",
                ],
              },
              {
                week: "Weeks 3-6",
                title: "Clinical Immersion",
                description:
                  "Begin hands-on clinical work under supervision. Rotate through different departments and specialties to gain broad exposure.",
                activities: [
                  "Patient consultations",
                  "Clinical procedures",
                  "Department rotations",
                  "Case study reviews",
                ],
              },
              {
                week: "Weeks 7-10",
                title: "Specialized Focus",
                description:
                  "Deep dive into your area of interest. Take on more responsibility and begin independent projects under guidance.",
                activities: [
                  "Specialized training",
                  "Independent projects",
                  "Research participation",
                  "Community outreach",
                ],
              },
              {
                week: "Weeks 11-12",
                title: "Integration & Evaluation",
                description:
                  "Complete projects, present findings, receive feedback, and plan for continued impact. Celebration and certification ceremony.",
                activities: [
                  "Project presentations",
                  "Performance evaluation",
                  "Impact assessment",
                  "Certification ceremony",
                ],
              },
            ].map((phase, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {phase.week}
                      </Badge>
                      <h3 className="font-playfair font-bold text-xl text-foreground">{phase.title}</h3>
                    </div>
                    <div className="lg:col-span-2 space-y-4">
                      <p className="text-muted-foreground">{phase.description}</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {phase.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Eligibility */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="font-playfair font-bold text-3xl text-foreground">Requirements & Eligibility</h2>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Academic Requirements</h3>
                <div className="space-y-2">
                  {[
                    "Currently enrolled in medical school (3rd year or higher)",
                    "Recent medical graduate (within 2 years)",
                    "Healthcare professional seeking international experience",
                    "Minimum GPA of 3.0 or equivalent",
                  ].map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Personal Requirements</h3>
                <div className="space-y-2">
                  {[
                    "Strong commitment to community service",
                    "Cultural sensitivity and adaptability",
                    "Basic English proficiency (local language training provided)",
                    "Physical and mental fitness for rural healthcare work",
                  ].map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-playfair font-bold text-3xl text-foreground">What's Included</h2>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Program Benefits</h3>
                <div className="space-y-2">
                  {[
                    "Accommodation in safe, comfortable housing",
                    "Three meals per day with local cuisine",
                    "24/7 local support and emergency assistance",
                    "Professional mentorship and supervision",
                    "Certificate of completion",
                    "Letter of recommendation upon successful completion",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Additional Support</h3>
                <div className="space-y-2">
                  {[
                    "Pre-departure orientation and preparation",
                    "Cultural integration workshops",
                    "Language learning resources",
                    "Alumni network access",
                  ].map((support, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{support}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Safety & Support</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your safety and well-being are our top priorities throughout the program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "24/7 Support",
                description: "Round-the-clock local support team available for any emergencies or concerns",
              },
              {
                icon: Users,
                title: "Experienced Staff",
                description: "All programs led by qualified healthcare professionals with years of experience",
              },
              {
                icon: MapPin,
                title: "Safe Locations",
                description: "All placements are in safe, well-established healthcare facilities with good reputations",
              },
              {
                icon: Heart,
                title: "Comprehensive Insurance",
                description: "Full medical and travel insurance coverage included in program fees",
              },
            ].map((safety, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <safety.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-foreground">{safety.title}</h3>
                  <p className="text-sm text-muted-foreground">{safety.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance">Ready to Apply?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Join our next cohort of healthcare interns and make a lasting impact while advancing your career
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
              <Link href="/internship">Back to Program</Link>
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
                <div>Program Details</div>
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
