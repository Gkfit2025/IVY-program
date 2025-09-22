"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, CalendarDays } from "lucide-react"

interface DatePickerProps {
  fromDate: string
  toDate: string
  onFromDateChange: (date: string) => void
  onToDateChange: (date: string) => void
  minAmount: number
}

export function DatePicker({ fromDate, toDate, onFromDateChange, onToDateChange, minAmount }: DatePickerProps) {
  const [showCalendar, setShowCalendar] = useState(false)

  const calculateDuration = () => {
    if (!fromDate || !toDate) return 0
    const start = new Date(fromDate)
    const end = new Date(toDate)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const calculateAmount = () => {
    const days = calculateDuration()
    if (days <= 30) return minAmount // ₹1,000 for one month or less
    return Math.ceil((days / 30) * minAmount) // ₹1,000 per month
  }

  const duration = calculateDuration()
  const amount = calculateAmount()

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fromDate" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            From Date
          </Label>
          <Input
            id="fromDate"
            type="date"
            value={fromDate}
            onChange={(e) => onFromDateChange(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="toDate" className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            To Date
          </Label>
          <Input
            id="toDate"
            type="date"
            value={toDate}
            onChange={(e) => onToDateChange(e.target.value)}
            min={fromDate || new Date().toISOString().split("T")[0]}
            className="w-full"
          />
        </div>
      </div>

      {fromDate && toDate && duration > 0 && (
        <Card className="bg-muted/50">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Program Duration</p>
                <p className="text-sm text-muted-foreground">
                  {duration} days ({Math.ceil(duration / 30)} month{Math.ceil(duration / 30) > 1 ? "s" : ""})
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-primary">₹{amount.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Program Fee</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
