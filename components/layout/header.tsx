"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="font-playfair font-bold text-2xl text-foreground">IVY</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  Join IVY
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/internship">Internship</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/volunteer">Volunteer</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/join-ivy">Both</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/internship/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
