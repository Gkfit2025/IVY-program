import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Star, ArrowRight, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OpportunitiesPage() {
  const opportunities = [
    {
      title: "Child Education Support",
      location: "Madurai, Tamil Nadu",
      duration: "2-4 weeks",
      category: "Education",
      description: "Support local schools by teaching basic literacy and numeracy skills to children in rural communities. Work alongside local educators to create engaging learning experiences.",
      image: "children learning in classroom with volunteer teacher",
      rating: 4.8,
      reviews: 24,
    },
    {
      title: "Wildlife Conservation",
      location: "Coimbatore, Tamil Nadu",
      duration: "1-3 months",
      category: "Environment",
      description: "Participate in wildlife conservation efforts, including habitat restoration and monitoring endangered species in the Western Ghats.",
      image: "volunteers working on wildlife conservation project",
      rating: 4.9,
      reviews: 18,
    },
    {
      title: "Healthcare Assistance",
      location: "Kochi, Kerala",
      duration: "3-6 weeks",
      category: "Healthcare",
      description: "Assist medical professionals in rural clinics, providing basic healthcare services and health education to underserved communities.",
      image: "medical volunteers helping in rural healthcare clinic",
      rating: 4.7,
      reviews: 31,
    },
    {
      title: "Community Development",
      location: "Chennai, Tamil Nadu",
      duration: "1-2 months",
      category: "Community",
      description: "Work on infrastructure projects such as building community centers or improving water access in rural villages.",
      image: "volunteers building community infrastructure",
      rating: 4.6,
      reviews: 15,
    },
    {
      title: "Women Empowerment Programs",
      location: "Bengaluru, Karnataka",
      duration: "2-8 weeks",
      category: "Social Impact",
      description: "Support programs that promote financial literacy and vocational training for women in underserved communities.",
      image: "volunteers teaching women vocational skills",
      rating: 4.8,
      reviews: 22,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo12.png"
                width={40}
                height={40}
                className="object-contain"
                alt="Grace Kennett Foundation Logo"
              />
              <span className="font-playfair font-bold text-2xl text-foreground">Grace Kennett Foundation</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/opportunities" className="text-foreground font-semibold transition-colors">
                Find Opportunities
              </Link>
              <a href="/#about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="/#impact" className="text-foreground hover:text-primary transition-colors">
                Impact Stories
              </a>
              <a href="/#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Join IVY</Button>
          </div>
        </div>
      </nav>

      {/* Opportunities Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h1 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">
              Volunteering Opportunities
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore a wide range of opportunities to make a meaningful impact across South India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=240&width=400&query=${opportunity.image}`}
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
                    <p className="text-sm leading-relaxed">{opportunity.description}</p>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance">
            Start Your Volunteering Journey
          </h2>
          <p className="text-xl opacity-90 text-pretty">
            Join our community of changemakers and make a difference today.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="font-playfair font-bold text-xl text-foreground">Grace Kennett Foundation</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Connecting volunteers with meaningful opportunities across South India.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">For Volunteers</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/opportunities" className="block hover:text-primary">Find Opportunities</Link>
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
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@ivyplatform.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Madurai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Grace Kennett Foundation. All rights reserved. Spreading kindness across South India.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
