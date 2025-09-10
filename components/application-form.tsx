"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Shield, User, FileText, DollarSign } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

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
  programDuration: string
  startDate: string
  motivation: string
  experience: string
  skills: string[]

  // Payment Information
  paymentMethod: "credit" | "debit" | "paypal" | ""
  cardNumber: string
  expiryDate: string
  cvv: string
  cardholderName: string
  billingAddress: string

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
  programType: "",
  programDuration: "",
  startDate: "",
  motivation: "",
  experience: "",
  skills: [],
  paymentMethod: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  cardholderName: "",
  billingAddress: "",
  agreeToTerms: false,
  agreeToPrivacy: false,
}

const skillOptions = [
  "Leadership",
  "Communication",
  "Project Management",
  "Research",
  "Data Analysis",
  "Marketing",
  "Design",
  "Programming",
  "Teaching",
  "Writing",
]

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>("personal")
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

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
      if (!formData.programType) newErrors.programType = "Program type is required"
      if (!formData.programDuration) newErrors.programDuration = "Duration is required"
      if (!formData.startDate) newErrors.startDate = "Start date is required"
      if (!formData.motivation) newErrors.motivation = "Motivation is required"
    }

    if (step === "payment") {
      if (!formData.paymentMethod) newErrors.paymentMethod = "Payment method is required"
      if (formData.paymentMethod !== "paypal") {
        if (!formData.cardNumber) newErrors.cardNumber = "Card number is required"
        if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required"
        if (!formData.cvv) newErrors.cvv = "CVV is required"
        if (!formData.cardholderName) newErrors.cardholderName = "Cardholder name is required"
      }
      if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms"
      if (!formData.agreeToPrivacy) newErrors.agreeToPrivacy = "You must agree to the privacy policy"
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

  const handleSubmit = async () => {
    if (!validateStep("payment")) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setCurrentStep("confirmation")
    setIsSubmitting(false)
  }

  const toggleSkill = (skill: string) => {
    const currentSkills = formData.skills
    const updatedSkills = currentSkills.includes(skill)
      ? currentSkills.filter((s) => s !== skill)
      : [...currentSkills, skill]
    updateFormData("skills", updatedSkills)
  }

  const getProgramFee = () => {
    return formData.programType === "internship" ? 299 : 99
  }

  const getCurrentStepIcon = () => {
    const step = steps.find((s) => s.id === currentStep)
    if (!step) return null
    const Icon = step.icon
    return <Icon className="w-5 h-5" />
  }

  return (
    <div className="space-y-6">
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
                          ? "border-secondary bg-secondary text-secondary-foreground"
                          : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
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
          <CardTitle className="flex items-center gap-2">
            {getCurrentStepIcon()}
            {currentStep === "personal" && "Personal Information"}
            {currentStep === "program" && "Program Selection"}
            {currentStep === "payment" && "Payment Details"}
            {currentStep === "confirmation" && "Application Submitted"}
          </CardTitle>
          <CardDescription>
            {currentStep === "personal" && "Please provide your personal details"}
            {currentStep === "program" && "Choose your program and tell us about yourself"}
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
                <Input id="state" value={formData.state} onChange={(e) => updateFormData("state", e.target.value)} />
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
                <Label>Program Type *</Label>
                <RadioGroup
                  value={formData.programType}
                  onValueChange={(value) => updateFormData("programType", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="internship" id="internship" />
                    <Label htmlFor="internship" className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Internship Program</div>
                          <div className="text-sm text-muted-foreground">3-6 months professional experience</div>
                        </div>
                        <Badge variant="secondary">$299</Badge>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="volunteer" id="volunteer" />
                    <Label htmlFor="volunteer" className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Volunteer Program</div>
                          <div className="text-sm text-muted-foreground">Flexible community service opportunities</div>
                        </div>
                        <Badge variant="secondary">$99</Badge>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
                {errors.programType && <p className="text-sm text-destructive">{errors.programType}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="programDuration">Duration *</Label>
                  <Select
                    value={formData.programDuration}
                    onValueChange={(value) => updateFormData("programDuration", value)}
                  >
                    <SelectTrigger className={errors.programDuration ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-month">1 Month</SelectItem>
                      <SelectItem value="3-months">3 Months</SelectItem>
                      <SelectItem value="6-months">6 Months</SelectItem>
                      <SelectItem value="12-months">12 Months</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.programDuration && <p className="text-sm text-destructive">{errors.programDuration}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate">Preferred Start Date *</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => updateFormData("startDate", e.target.value)}
                    className={errors.startDate ? "border-destructive" : ""}
                  />
                  {errors.startDate && <p className="text-sm text-destructive">{errors.startDate}</p>}
                </div>
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

              <div className="space-y-2">
                <Label>Skills & Interests</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {skillOptions.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={skill}
                        checked={formData.skills.includes(skill)}
                        onCheckedChange={() => toggleSkill(skill)}
                      />
                      <Label htmlFor={skill} className="text-sm">
                        {skill}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === "payment" && (
            <div className="space-y-6">
              {/* Order Summary */}
              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span>{formData.programType === "internship" ? "Internship Program" : "Volunteer Program"}</span>
                    <span>${getProgramFee()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Processing Fee</span>
                    <span>$5</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between items-center font-bold">
                    <span>Total</span>
                    <span>${getProgramFee() + 5}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <div className="space-y-4">
                <Label>Payment Method *</Label>
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) => updateFormData("paymentMethod", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="debit" id="debit" />
                    <Label htmlFor="debit">Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                </RadioGroup>
                {errors.paymentMethod && <p className="text-sm text-destructive">{errors.paymentMethod}</p>}
              </div>

              {/* Card Details */}
              {formData.paymentMethod && formData.paymentMethod !== "paypal" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardholderName">Cardholder Name *</Label>
                    <Input
                      id="cardholderName"
                      value={formData.cardholderName}
                      onChange={(e) => updateFormData("cardholderName", e.target.value)}
                      className={errors.cardholderName ? "border-destructive" : ""}
                    />
                    {errors.cardholderName && <p className="text-sm text-destructive">{errors.cardholderName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) => updateFormData("cardNumber", e.target.value)}
                      className={errors.cardNumber ? "border-destructive" : ""}
                    />
                    {errors.cardNumber && <p className="text-sm text-destructive">{errors.cardNumber}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date *</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={(e) => updateFormData("expiryDate", e.target.value)}
                        className={errors.expiryDate ? "border-destructive" : ""}
                      />
                      {errors.expiryDate && <p className="text-sm text-destructive">{errors.expiryDate}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={(e) => updateFormData("cvv", e.target.value)}
                        className={errors.cvv ? "border-destructive" : ""}
                      />
                      {errors.cvv && <p className="text-sm text-destructive">{errors.cvv}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="billingAddress">Billing Address</Label>
                    <Input
                      id="billingAddress"
                      value={formData.billingAddress}
                      onChange={(e) => updateFormData("billingAddress", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Terms and Conditions */}
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
                {errors.agreeToTerms && <p className="text-sm text-destructive">{errors.agreeToTerms}</p>}

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
                {errors.agreeToPrivacy && <p className="text-sm text-destructive">{errors.agreeToPrivacy}</p>}
              </div>

              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  Your payment information is secure and encrypted. We use industry-standard security measures to
                  protect your data.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {currentStep === "confirmation" && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-secondary-foreground" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Application Submitted Successfully!</h3>
                <p className="text-muted-foreground">
                  Thank you for applying to our {formData.programType} program. We'll review your application and get
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
                    <span>Duration:</span>
                    <span>{formData.programDuration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Start Date:</span>
                    <span>{formData.startDate}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Total Paid:</span>
                    <span>${getProgramFee() + 5}</span>
                  </div>
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

          {currentStep === "payment" ? (
            <Button onClick={handleSubmit} disabled={isSubmitting} className="min-w-32">
              {isSubmitting ? "Processing..." : `Pay $${getProgramFee() + 5}`}
            </Button>
          ) : (
            <Button onClick={nextStep}>Next</Button>
          )}
        </div>
      )}
    </div>
  )
}
