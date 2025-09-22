"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, DollarSign, QrCode } from "lucide-react"

interface PaymentOptionsProps {
  amount: number
  onPaymentComplete: (paymentData: any) => void
}

export function PaymentOptions({ amount, onPaymentComplete }: PaymentOptionsProps) {
  const [paymentMethod, setPaymentMethod] = useState("")
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    onPaymentComplete({
      method: paymentMethod,
      amount: amount,
      transactionId: `TXN${Date.now()}`,
      status: "success",
    })
    setIsProcessing(false)
  }

  return (
    <div className="space-y-6">
      {/* Amount Summary */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-foreground">Total Amount</h3>
              <p className="text-sm text-muted-foreground">Program fee + processing</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">₹{amount.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">+ ₹100 processing fee</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Choose Payment Method
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
              <RadioGroupItem value="credit" id="credit" />
              <Label htmlFor="credit" className="flex items-center gap-2 flex-1 cursor-pointer">
                <CreditCard className="h-4 w-4" />
                Credit Card
              </Label>
            </div>

            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
              <RadioGroupItem value="debit" id="debit" />
              <Label htmlFor="debit" className="flex items-center gap-2 flex-1 cursor-pointer">
                <CreditCard className="h-4 w-4" />
                Debit Card
              </Label>
            </div>

            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal" className="flex items-center gap-2 flex-1 cursor-pointer">
                <DollarSign className="h-4 w-4" />
                PayPal
              </Label>
            </div>

            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
              <RadioGroupItem value="qr" id="qr" />
              <Label htmlFor="qr" className="flex items-center gap-2 flex-1 cursor-pointer">
                <QrCode className="h-4 w-4" />
                QR Code Payment
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Card Details */}
      {(paymentMethod === "credit" || paymentMethod === "debit") && (
        <Card>
          <CardHeader>
            <CardTitle>Card Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardholderName">Cardholder Name</Label>
              <Input
                id="cardholderName"
                value={cardDetails.cardholderName}
                onChange={(e) => setCardDetails((prev) => ({ ...prev, cardholderName: e.target.value }))}
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                value={cardDetails.cardNumber}
                onChange={(e) => setCardDetails((prev) => ({ ...prev, cardNumber: e.target.value }))}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={(e) => setCardDetails((prev) => ({ ...prev, expiryDate: e.target.value }))}
                  placeholder="MM/YY"
                  maxLength={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails((prev) => ({ ...prev, cvv: e.target.value }))}
                  placeholder="123"
                  maxLength={4}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* QR Code Payment */}
      {paymentMethod === "qr" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <QrCode className="h-5 w-5" />
              QR Code Payment
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="w-48 h-48 bg-muted border-2 border-dashed border-border rounded-lg flex items-center justify-center mx-auto">
              <div className="text-center space-y-2">
                <QrCode className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">QR Code will appear here</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Scan this QR code with your mobile payment app to complete the transaction
            </p>
          </CardContent>
        </Card>
      )}

      {/* PayPal */}
      {paymentMethod === "paypal" && (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground mb-4">You will be redirected to PayPal to complete your payment</p>
            <Button variant="outline" className="w-full bg-transparent">
              Continue with PayPal
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Payment Button */}
      {paymentMethod && (
        <Button
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          size="lg"
        >
          {isProcessing ? "Processing Payment..." : `Pay ₹${(amount + 100).toLocaleString()}`}
        </Button>
      )}
    </div>
  )
}
