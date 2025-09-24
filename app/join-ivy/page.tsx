"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Send, Loader2, CheckCircle2 } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface ApplicationFormProps {
  programType?: string
}

export default function ApplicationForm({ programType = "IVY Program" }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: programType,
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    message: "",
    country: "",
    education: "",
    experience: "",
  })

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.startDate) newErrors.startDate = "Start date is required"
    if (!formData.endDate) newErrors.endDate = "End date is required"
    if (formData.startDate && formData.endDate && formData.startDate >= formData.endDate) {
      newErrors.endDate = "End date must be after start date"
    }
    if (!formData.country) newErrors.country = "Country is required"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Send email via API
      const emailResponse = await fetch('/api/send-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!emailResponse.ok) {
        throw new Error('Failed to send email')
      }

      // Prepare WhatsApp message
      const whatsappMessage = `New IVY Application:%0A%0A
Name: ${formData.fullName}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Program: ${formData.program}%0A
Dates: ${formData.startDate ? format(formData.startDate, 'MMM dd, yyyy') : ''} to ${formData.endDate ? format(formData.endDate, 'MMM dd, yyyy') : ''}%0A
Country: ${formData.country}%0A
Education: ${formData.education}%0A
Experience: ${formData.experience}%0A
Message: ${formData.message}`

      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/919262840401?text=${whatsappMessage}`, '_blank')
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'Failed to submit application. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | Date) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <CardTitle className="text-2xl mb-4">Application Submitted!</CardTitle>
          <p className="text-gray-600 mb-6">
            Thank you for your application. We've received your details and will contact you shortly.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Apply for {programType}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Enter your full name"
                className={errors.fullName ? 'border-red-500' : ''}
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your@email.com"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+91 98765 43210"
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                <SelectTrigger className={errors.country ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="germany">Germany</SelectItem>
                  <SelectItem value="france">France</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Preferred Start Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.startDate && "text-muted-foreground",
                      errors.startDate && "border-red-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.startDate ? format(formData.startDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.startDate}
                    onSelect={(date) => handleInputChange('startDate', date!)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
            </div>

            <div className="space-y-2">
              <Label>Preferred End Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.endDate && "text-muted-foreground",
                      errors.endDate && "border-red-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.endDate ? format(formData.endDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.endDate}
                    onSelect={(date) => handleInputChange('endDate', date!)}
                    initialFocus
                    disabled={formData.startDate ? { before: formData.startDate } : undefined}
                  />
                </PopoverContent>
              </Popover>
              {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="education">Educational Background</Label>
            <Input
              id="education"
              value={formData.education}
              onChange={(e) => handleInputChange('education', e.target.value)}
              placeholder="Current degree or highest qualification"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Relevant Experience</Label>
            <Textarea
              id="experience"
              value={formData.experience}
              onChange={(e) => handleInputChange('experience', e.target.value)}
              placeholder="Any previous volunteer, internship, or work experience"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Why do you want to join this program?</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell us about your motivation and what you hope to achieve..."
              rows={4}
            />
          </div>

          {errors.submit && <p className="text-red-500 text-sm text-center">{errors.submit}</p>}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Application
              </>
            )}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            * Required fields. Your application will be sent via email and WhatsApp.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
