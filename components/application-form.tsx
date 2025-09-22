"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { User, FileText, CreditCard, Shield, CheckCircle } from "lucide-react"
import { DatePicker } from "@/components/forms/date-picker"
import { PaymentOptions } from "@/components/forms/payment-options"

type FormStep = "personal" | "program" | "payment" | "confirmation"

interface FormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  city: string
  state: string
  zipCode: string

  // Program Information
  programType: "internship" | "volunteer" | ""
  fromDate: string
  toDate: string
  motivation: string
  experience: string

  // Terms
  agreeToTerms: boolean
  agreeToPrivacy: boolean
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  programType: "internship",
  fromDate: "",
  toDate: "",
  motivation: "",
  experience: "",
  agreeToTerms: false,
  agreeToPrivacy: false,
}

const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>("personal")
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [paymentData, setPaymentData] = useState<any>(null)

  const steps = [
    { id: "personal", title: "Personal Info", icon: User },
    { id: "program", title: "Program Details", icon: FileText },
    { id: "payment", title: "Payment", icon: CreditCard },
    { id: "confirmation", title: "Confirmation", icon: Shield },
  ]

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep)
  const progress = ((currentStepIndex + 1) / steps.length) * 100

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const calculateAmount = () => {
    if (!formData.fromDate || !formData.toDate) return 1000
    const start = new Date(formData.fromDate)
    const end = new Date(formData.toDate)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays <= 30) return 1000
    return Math.ceil((diffDays / 30) * 1000)
  }

  const validateStep = (step: FormStep): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === "personal") {
      if (!formData.firstName) newErrors.firstName = "First name is required"
      if (!formData.lastName) newErrors.lastName = "Last name is required"
      if (!formData.email) newErrors.email = "Email is required"
      if (!formData.phone) newErrors.phone = "Phone number is required"
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    }

    if (step === "program") {
      if (!formData.fromDate) newErrors.fromDate = "Start date is required"
      if (!formData.toDate) newErrors.toDate = "End date is required"
      if (!formData.motivation) newErrors.motivation = "Motivation is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      const stepOrder: FormStep[] = ["personal", "program", "payment", "confirmation"]
      const currentIndex = stepOrder.indexOf(currentStep)
      if (currentIndex < stepOrder.length - 1) {
        setCurrentStep(stepOrder[currentIndex + 1])
      }
    }
  }

  const prevStep = () => {
    const stepOrder: FormStep[] = ["personal", "program", "payment", "confirmation"]
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1])
    }
  }

  const handlePaymentComplete = (payment: any) => {
    setPaymentData(payment)
    setCurrentStep("confirmation")
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Progress Bar */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = step.id === currentStep
                const isCompleted = index < currentStepIndex

                return (
                  <div key={step.id} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                        isActive
                          ? "border-primary bg-primary text-primary-foreground"
                          : isCompleted
                            ? "border-green-500 bg-green-500 text-white"
                            : "border-border bg-background text-muted-foreground"
                      }`}
                    >
                      {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <span className={`ml-2 text-sm font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      {step.title}
                    </span>
                    {index < steps.length - 1 && <div className="w-16 h-0.5 bg-border mx-4" />}
                  </div>
                )
              })}
            </div>
            <Progress value={progress} className="w-full" />
          </CardContent>
        </Card>

        {/* Form Content */}
        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === "personal" && "Personal Information"}
              {currentStep === "program" && "Program Selection"}
              {currentStep === "payment" && "Payment Details"}
              {currentStep === "confirmation" && "Application Submitted"}
            </CardTitle>
            <CardDescription>
              {currentStep === "personal" && "Please provide your personal details"}
              {currentStep === "program" && "Choose your program dates and tell us about yourself"}
              {currentStep === "payment" && "Complete your application with payment"}
              {currentStep === "confirmation" && "Your application has been successfully submitted"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentStep === "personal" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    className={errors.firstName ? "border-destructive" : ""}
                  />
                  {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    className={errors.lastName ? "border-destructive" : ""}
                  />
                  {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                    className={errors.dateOfBirth ? "border-destructive" : ""}
                  />
                  {errors.dateOfBirth && <p className="text-sm text-destructive">{errors.dateOfBirth}</p>}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => updateFormData("address", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" value={formData.city} onChange={(e) => updateFormData("city", e.target.value)} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select value={formData.state} onValueChange={(value) => updateFormData("state", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="kerala">Kerala</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                      <SelectItem value="telangana">Telangana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => updateFormData("zipCode", e.target.value)}
                  />
                </div>
              </div>
            )}

            {currentStep === "program" && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-base font-medium">Program Dates *</Label>
                  <DatePicker
                    fromDate={formData.fromDate}
                    toDate={formData.toDate}
                    onFromDateChange={(date) => updateFormData("fromDate", date)}
                    onToDateChange={(date) => updateFormData("toDate", date)}
                    minAmount={1000}
                  />
                  {errors.fromDate && <p className="text-sm text-destructive">{errors.fromDate}</p>}
                  {errors.toDate && <p className="text-sm text-destructive">{errors.toDate}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to join this program? *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => updateFormData("motivation", e.target.value)}
                    placeholder="Tell us about your motivation and goals..."
                    className={errors.motivation ? "border-destructive" : ""}
                  />
                  {errors.motivation && <p className="text-sm text-destructive">{errors.motivation}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => updateFormData("experience", e.target.value)}
                    placeholder="Describe any relevant experience or background..."
                  />
                </div>
              </div>
            )}

            {currentStep === "payment" && (
              <div className="space-y-6">
                <PaymentOptions amount={calculateAmount()} onPaymentComplete={handlePaymentComplete} />

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => updateFormData("agreeToTerms", checked)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <a href="#" className="text-primary underline">
                        Terms and Conditions
                      </a>{" "}
                      *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="privacy"
                      checked={formData.agreeToPrivacy}
                      onCheckedChange={(checked) => updateFormData("agreeToPrivacy", checked)}
                    />
                    <Label htmlFor="privacy" className="text-sm">
                      I agree to the{" "}
                      <a href="#" className="text-primary underline">
                        Privacy Policy
                      </a>{" "}
                      *
                    </Label>
                  </div>
                </div>
              </div>
            )}

            {currentStep === "confirmation" && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Application Submitted Successfully!</h3>
                  <p className="text-muted-foreground">
                    Thank you for applying to our healthcare internship program. We'll review your application and get
                    back to you within 3-5 business days.
                  </p>
                </div>

                <Card className="bg-muted text-left">
                  <CardHeader>
                    <CardTitle>Application Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span>
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span>{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Program:</span>
                      <span className="capitalize">{formData.programType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Start Date:</span>
                      <span>{formData.fromDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>End Date:</span>
                      <span>{formData.toDate}</span>
                    </div>
                    {paymentData && (
                      <>
                        <div className="flex justify-between">
                          <span>Transaction ID:</span>
                          <span>{paymentData.transactionId}</span>
                        </div>
                        <div className="flex justify-between font-bold">
                          <span>Amount Paid:</span>
                          <span>₹{(paymentData.amount + 100).toLocaleString()}</span>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>

                <p className="text-sm text-muted-foreground">A confirmation email has been sent to {formData.email}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        {currentStep !== "confirmation" && (
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === "personal"}>
              Previous
            </Button>
            <Button onClick={nextStep} disabled={currentStep === "payment"}>
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export { ApplicationForm }
export default ApplicationForm
