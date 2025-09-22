"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { CreditCard, DollarSign, QrCode, CheckCircle, Shield } from "lucide-react"

interface PaymentFormProps {
  onPaymentComplete: () => void
  selectedProgram: {
    duration: string
    amount: number
  }
}

export default function PaymentForm({ onPaymentComplete, selectedProgram }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>("")
  const [processing, setProcessing] = useState(false)

  const handlePayment = async () => {
    setProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setProcessing(false)
    onPaymentComplete()
  }

  const paymentMethods = [
    {
      id: "credit-card",
      name: "Credit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, American Express",
    },
    {
      id: "debit-card",
      name: "Debit Card",
      icon: CreditCard,
      description: "Direct bank account payment",
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: DollarSign,
      description: "Pay with your PayPal account",
    },
    {
      id: "qr-code",
      name: "QR Code Payment",
      icon: QrCode,
      description: "Scan and pay with mobile apps",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-playfair font-bold text-3xl text-foreground">Payment Information</h2>
        <p className="text-muted-foreground">Complete your payment to secure your internship placement</p>
      </div>

      {/* Order Summary */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Order Summary</span>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              {selectedProgram.duration} Program
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Healthcare Internship Program</span>
            <span className="font-semibold">₹{selectedProgram.amount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Duration</span>
            <span>{selectedProgram.duration}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Includes</span>
            <span>Accommodation, Meals, Support</span>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-primary">₹{selectedProgram.amount.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method Selection */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Select Payment Method</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  paymentMethod === method.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
                onClick={() => setPaymentMethod(method.id)}
              >
                <div className="flex items-center space-x-3">
                  <method.icon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{method.name}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  {paymentMethod === method.id && <CheckCircle className="h-5 w-5 text-primary ml-auto" />}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Details Form */}
      {paymentMethod && (
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {(paymentMethod === "credit-card" || paymentMethod === "debit-card") && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" className="font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="card-name">Cardholder Name</Label>
                  <Input id="card-name" placeholder="John Doe" />
                </div>
              </div>
            )}

            {paymentMethod === "paypal" && (
              <div className="text-center space-y-4">
                <div className="p-8 bg-muted/50 rounded-lg">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    You will be redirected to PayPal to complete your payment securely.
                  </p>
                </div>
              </div>
            )}

            {paymentMethod === "qr-code" && (
              <div className="text-center space-y-4">
                <div className="p-8 bg-muted/50 rounded-lg">
                  <QrCode className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">Scan this QR code with your mobile payment app</p>
                  <div className="w-32 h-32 bg-white border-2 border-border rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">QR Code</span>
                  </div>
                </div>
              </div>
            )}

            {/* Security Notice */}
            <div className="flex items-center space-x-2 p-4 bg-green-50 rounded-lg border border-green-200">
              <Shield className="h-5 w-5 text-green-600" />
              <p className="text-sm text-green-700">
                Your payment information is encrypted and secure. We never store your payment details.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Payment Button */}
      {paymentMethod && (
        <Button
          onClick={handlePayment}
          disabled={processing}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
        >
          {processing ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              <span>Processing Payment...</span>
            </div>
          ) : (
            `Pay ₹${selectedProgram.amount.toLocaleString()}`
          )}
        </Button>
      )}
    </div>
  )
}
