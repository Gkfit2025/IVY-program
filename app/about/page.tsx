import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, MapPin, Award, Target, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground text-balance">
              About <span className="text-primary">IVY</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Connecting passionate volunteers with meaningful opportunities across South India. We're transforming how
              people discover and engage in volunteer work.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-playfair font-bold text-3xl text-foreground">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To create lasting positive impact in communities while providing volunteers with authentic cultural
                  experiences and personal growth opportunities. We believe that meaningful volunteer work should be
                  accessible, well-organized, and transformative for both volunteers and communities.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair font-bold text-3xl text-foreground">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading platform for volunteer opportunities in South India, fostering a community where
                  cultural exchange, social impact, and personal development converge to create positive change.
                </p>
              </div>
            </div>

            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/diverse-group-of-volunteers-working-together-in-so.png"
                alt="IVY mission and vision"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to meaningful change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: "500+",
                label: "Active Volunteers",
                description: "From around the world",
              },
              {
                icon: MapPin,
                number: "50+",
                label: "Partner Organizations",
                description: "Across South India",
              },
              {
                icon: Heart,
                number: "100+",
                label: "Active Projects",
                description: "Making real impact",
              },
              {
                icon: Award,
                number: "4.9/5",
                label: "Average Rating",
                description: "From volunteer reviews",
              },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                    <div className="font-semibold text-foreground">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Authentic Impact",
                description:
                  "We ensure every opportunity creates meaningful, lasting change for communities and volunteers alike.",
              },
              {
                icon: Users,
                title: "Cultural Exchange",
                description:
                  "We foster genuine connections between volunteers and local communities, promoting mutual understanding.",
              },
              {
                icon: Target,
                title: "Quality Assurance",
                description:
                  "We carefully vet all partner organizations to ensure safe, well-organized, and impactful experiences.",
              },
              {
                icon: Globe,
                title: "Accessibility",
                description:
                  "We make volunteer opportunities accessible to people from all backgrounds and experience levels.",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our platform and volunteer experiences.",
              },
              {
                icon: MapPin,
                title: "Local Focus",
                description:
                  "We specialize in South India, providing deep local knowledge and authentic cultural experiences.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-border">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-playfair">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate individuals dedicated to creating positive change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Founder & CEO",
                image: "indian woman ceo professional headshot",
                description:
                  "Former social worker with 10+ years experience in community development across South India.",
              },
              {
                name: "Rajesh Kumar",
                role: "Head of Operations",
                image: "indian man operations manager professional headshot",
                description: "Expert in volunteer program management with extensive network of partner organizations.",
              },
              {
                name: "Anita Menon",
                role: "Community Relations",
                image: "indian woman community relations professional headshot",
                description:
                  "Specialist in cultural exchange programs and volunteer support with background in hospitality.",
              },
            ].map((member, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-muted">
                    <Image
                      src={`/abstract-geometric-shapes.png?height=96&width=96&query=${member.image}`}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance">Ready to Join Our Mission?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Whether you're looking to volunteer or partner with us, we'd love to hear from you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/#search">Find Opportunities</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <a href="https://forms.gle/FHirPbejNSDV87Lx5" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
