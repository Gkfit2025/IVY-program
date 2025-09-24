// app/join/page.js

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Heart,
  MapPin,
  Users,
  Calendar,
  Star,
  GraduationCap,
  HandHeart,
  Globe,
  Award,
  Target,
  Eye,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/particles.css"; // Import the new CSS file

export default function JoinIVYPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  // Generate floating particles on mount
  useEffect(() => {
    for (let i = 0; i < 25; i++) {
      let particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.animationDuration = 5 + Math.random() * 10 + "s";
      particle.style.animationDelay = Math.random() * 10 + "s";
      document.body.appendChild(particle);
    }
    // Cleanup particles on unmount
    return () => {
      const particles = document.querySelectorAll(".particle");
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588776814546-ec72a9a62d36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'), url('/hospital-background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0"></div>

      {/* The floating particles are now styled by the imported CSS */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-[#F0661F]/10 text-[#F0661F] hover:bg-[#F0661F]/20">
                {type === "volunteer" ? "Volunteer Program" : type === "both" ? "Volunteer & Internship" : "Join IVY"}
              </Badge>
              <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white text-balance">
                Start Your
                <span className="text-[#F0661F]"> Impact Journey</span>
              </h1>
              <p className="text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
                {type === "volunteer"
                  ? "Make a meaningful difference through volunteer work across South India"
                  : type === "both"
                  ? "Explore both volunteer and internship opportunities to maximize your impact"
                  : "Choose your path to create positive change in communities across South India"}
              </p>
            </div>
          </div>
        </section>

        {/* Program Options */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Internship Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src="/medical-students-in-hospital-internship-program.jpg"
                    alt="Internship Program"
                    width={400}
                    height={240}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                      Professional Development
                    </Badge>
                    <GraduationCap className="h-6 w-6 text-[#F0661F]" />
                  </div>
                  <CardTitle className="text-xl font-playfair text-white">Internship Program</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/90">
                    Gain professional experience while making a difference. Perfect for students and recent graduates.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-[#F0661F]" />
                      <span className="text-white">3-12 weeks duration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-[#F0661F]" />
                      <span className="text-white">Structured mentorship</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-[#F0661F]" />
                      <span className="text-white">Certificate provided</span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#F0661F] hover:bg-[#F0661F]/90 text-white">
                    <Link href="/internship" className="block w-full">
                      Apply Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Volunteer Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-gray-800 bg-gray-900">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src="/volunteers-helping-children-in-community-center.jpg"
                    alt="Volunteer Program"
                    width={400}
                    height={240}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                      Community Impact
                    </Badge>
                    <HandHeart className="h-6 w-6 text-[#F0661F]" />
                  </div>
                  <CardTitle className="text-xl font-playfair text-white">Volunteer Program</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/90">
                    Make an immediate impact in local communities. Flexible schedules and diverse opportunities.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-[#F0661F]" />
                      <span className="text-white">1-8 weeks duration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-[#F0661F]" />
                      <span className="text-white">Community integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-[#F0661F]" />
                      <span className="text-white">Cultural exchange</span>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Link href="/volunteer" className="block w-full">
                      Apply Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Both Programs Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-gray-800 bg-gray-900 md:col-span-2 lg:col-span-1">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src="/diverse-group-working-on-community-development-pro.jpg"
                    alt="Combined Program"
                    width={400}
                    height={240}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                      Maximum Impact
                    </Badge>
                    <Globe className="h-6 w-6 text-[#F0661F]" />
                  </div>
                  <CardTitle className="text-xl font-playfair text-white">Explore All</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/90">
                    Browse all available opportunities including internships, volunteer work, and combined programs.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-[#F0661F]" />
                      <span className="text-white">Flexible duration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-[#F0661F]" />
                      <span className="text-white">120+ opportunities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-[#F0661F]" />
                      <span className="text-white">All categories</span>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href="/explore-all" className="block w-full">
                      Apply Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About IVY */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#F0661F]">About IVY</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty">
                Inspiring Volunteer Youth (IVY) is a platform dedicated to connecting passionate individuals with
                meaningful opportunities to create positive change across South India.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-[#F0661F]" />
                    <h3 className="font-playfair font-semibold text-xl text-white">Our Mission</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    To bridge the gap between passionate volunteers and communities in need, creating sustainable impact
                    through meaningful engagement and cultural exchange.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Eye className="h-6 w-6 text-[#F0661F]" />
                    <h3 className="font-playfair font-semibold text-xl text-white">Our Vision</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    A world where every individual has the opportunity to contribute to positive social change while
                    gaining valuable experience and cultural understanding.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center border-gray-800 bg-gray-900">
                  <CardContent className="p-6 space-y-2">
                    <div className="text-3xl font-bold text-[#F0661F]">500+</div>
                    <div className="text-sm text-white/90">Volunteers Placed</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-gray-800 bg-gray-900">
                  <CardContent className="p-6 space-y-2">
                    <div className="text-3xl font-bold text-[#F0661F]">120+</div>
                    <div className="text-sm text-white/90">Partner Organizations</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-gray-800 bg-gray-900">
                  <CardContent className="p-6 space-y-2">
                    <div className="text-3xl font-bold text-[#F0661F]">25+</div>
                    <div className="text-sm text-white/90">Cities Covered</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-gray-800 bg-gray-900">
                  <CardContent className="p-6 space-y-2">
                    <div className="text-3xl font-bold text-[#F0661F]">98%</div>
                    <div className="text-sm text-white/90">Satisfaction Rate</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "We continuously evolve our platform to better serve volunteers and communities",
                },
                {
                  icon: Heart,
                  title: "Compassion",
                  description: "Every opportunity is designed with genuine care for both volunteers and beneficiaries",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We maintain the highest standards in program quality and volunteer support",
                },
              ].map((value, index) => (
                <Card key={index} className="text-center border-gray-800 bg-gray-900">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-[#F0661F]/10 rounded-full flex items-center justify-center mx-auto">
                      <value.icon className="h-6 w-6 text-[#F0661F]" />
                    </div>
                    <h3 className="font-semibold text-white">{value.title}</h3>
                    <p className="text-sm text-white/90">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#F0661F]">Impact Stories</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Real stories from volunteers who have made a difference through IVY programs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  program: "Healthcare Internship",
                  location: "Chennai, Tamil Nadu",
                  quote:
                    "Working with local healthcare providers opened my eyes to innovative solutions in resource-limited settings. The experience shaped my career path completely.",
                  impact: "Helped train 50+ healthcare workers",
                },
                {
                  name: "Michael Chen",
                  program: "Education Volunteer",
                  location: "Coimbatore, Tamil Nadu",
                  quote:
                    "Teaching English to underprivileged children was incredibly rewarding. Seeing their progress and enthusiasm motivated me every day.",
                  impact: "Improved literacy for 30+ students",
                },
                {
                  name: "Priya Sharma",
                  program: "Environmental Conservation",
                  location: "Kochi, Kerala",
                  quote:
                    "The community-based approach to environmental conservation here is inspiring. I learned as much as I contributed to the cause.",
                  impact: "Planted 200+ trees, cleaned 5km coastline",
                },
              ].map((story, index) => (
                <Card key={index} className="border-gray-800 bg-gray-900">
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-white">{story.name}</h3>
                      <div className="text-sm text-white/90">
                        <div>{story.program}</div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3 text-[#F0661F]" />
                          <span>{story.location}</span>
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-sm text-white/90 italic">"{story.quote}"</blockquote>
                    <div className="pt-2 border-t border-gray-800">
                      <div className="text-xs font-medium text-[#F0661F]">{story.impact}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Card className="bg-[#F0661F] text-white border-[#F0661F]">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-playfair font-semibold text-2xl">Join Our Impact Community</h3>
                  <p className="text-white/90">
                    Be part of the next success story. Start your journey with IVY today.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white hover:bg-white/90 text-[#F0661F]">
                    <a href="https://forms.gle/FHirPbejNSDV87Lx5" target="_blank" rel="noopener noreferrer">
                      Share Your Story
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose IVY */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#F0661F]">Why Choose IVY?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                We provide comprehensive support to ensure your experience is meaningful and impactful
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Verified Organizations",
                  description: "All our partner organizations are thoroughly vetted for quality and safety",
                },
                {
                  icon: MapPin,
                  title: "Local Support",
                  description: "24/7 local support team to assist you throughout your journey",
                },
                {
                  icon: Star,
                  title: "Quality Assurance",
                  description: "Regular monitoring and feedback to ensure high-quality experiences",
                },
                {
                  icon: Heart,
                  title: "Community Impact",
                  description: "Measurable impact tracking to show the difference you're making",
                },
              ].map((feature, index) => (
                <Card key={index} className="text-center border-gray-800 bg-gray-900">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-[#F0661F]/10 rounded-full flex items-center justify-center mx-auto">
                      <feature.icon className="h-6 w-6 text-[#F0661F]" />
                    </div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-white/90">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0661F] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-balance">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 text-pretty">
              Take the first step towards making a meaningful impact in South India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white hover:bg-white/90 text-[#F0661F]">
                <Link href="/internship">Start with Internship</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#F0661F] bg-transparent"
              >
                <Link href="/search?type=volunteer">Find Volunteer Work</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
