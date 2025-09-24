"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Calendar, MapPin, Users, Star, Heart, ArrowLeft } from "lucide-react"

export default function ApplyPage() {
  const searchParams = useSearchParams()
  const program = searchParams.get("program") || "explore-all"
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: program,
    startDate: "",
    endDate: "",
    message: "",
    country: "",
    age: "",
    education: "",
    experience: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email via API route
      const emailResponse = await fetch('/api/send-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (emailResponse.ok) {
        // Prepare WhatsApp message
        const whatsappMessage = `New IVY Application:%0A%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Program: ${formData.program}%0A
Dates: ${formData.startDate} to ${formData.endDate}%0A
Country: ${formData.country}%0A
Age: ${formData.age}%0A
Education: ${formData.education}%0A
Experience: ${formData.experience}%0A
Message: ${formData.message}`

        // Open WhatsApp
        window.open(`https://wa.me/919262840401?text=${whatsappMessage}`, '_blank')
        
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4">
        <Card className="w-full max-w-md border-gray-800 bg-gray-900">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Application Sent!</h2>
            <p className="text-white/90">
              Thank you for your application. We've received your details and will contact you shortly.
            </p>
            <Button asChild className="w-full bg-[#F0661F] hover:bg-[#F0661F]/90">
              <Link href="/join-ivy">Back to IVY</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Navigation */}
      <nav className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/join-ivy" className="flex items-center space-x-2 text-[#F0661F] hover:text-[#F0661F]/90">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to IVY</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-[#F0661F]" />
              <span className="font-playfair font-bold text-xl text-white">IVY Application</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border-gray-800 bg-gray-900">
          <CardHeader className="text-center space-y-4">
            <Badge variant="secondary" className="bg-[#F0661F]/10 text-[#F0661F] w-fit mx-auto">
              {program === "internship" ? "Internship Program" : 
               program === "volunteer" ? "Volunteer Program" : "Explore All Programs"}
            </Badge>
            <CardTitle className="text-2xl text-white">Application Form</CardTitle>
            <p className="text-white/90">Fill in your details to start your impact journey</p>
          </CardHeader>

          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-gray-800 pb-2">Personal Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F0661F] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F0661F] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F0661F] focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-white/90 mb-1">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F0661F] focus:border-transparent"
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-white/90 mb-1">
                      Age *
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      required
                      min="18"
                      max="65"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F0661F] focus:border-transparent"
                      placeholder="Your age"
                    />
                  </div>

                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-white/90 mb-1">
                      Education Level *
                    </label>
                    <select
                      id="education"
                      name="education"
                      required
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#F0661F] focus:border-transparent"
                    >
                      <option value="">Select education level</option>
                      <option value="high-school">High School</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">PhD</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Program Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-gray-800 pb-2">Program Details</h3>
                
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-white/90 mb-1">
                    Preferred Program *
                  </label>
                  <select
                    id="program"
                    name="program"
                    required
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#F0661F] focus:border-transparent"
                  >
                    <option value="volunteer">Volunteer Program</option>
                    <option value="internship">Internship Program</option>
                    <option value="both">Both Volunteer & Internship</option>
                    <option value="explore-all">Explore All Opportunities</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-white/90 mb-1">
                      Preferred Start Date *
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      required
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#F0661F] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="endDate" className="block text-sm font-medium text-white/90 mb-1">
                      Preferred End Date *
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      required
                      value={formData.endDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#F0661F] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-white/90 mb-1">
                    Relevant Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={3}
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F0661F] focus:border-transparent"
                    placeholder="Describe any relevant experience or skills..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F0661F] focus:border-transparent"
                    placeholder="Tell us about your motivation and expectations..."
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#F0661F] hover:bg-[#F0661F]/90 text-white py-3"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>

              <p className="text-xs text-white/60 text-center">
                By submitting this form, you agree to our terms and conditions. 
                We'll contact you within 24-48 hours to discuss next steps.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
