"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <nav className="fixed top-0 w-full bg-black backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="font-playfair font-bold text-2xl text-foreground">IVY</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/opportunities" className="text-[#F56A00] hover:text-white transition-colors">
              Find Opportunities
            </Link>
            <Link href="/about" className="text-[#F56A00] hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/impact" className="text-[#F56A00] hover:text-white transition-colors">
              Impact Stories
            </Link>
            <Link href="/#contact" className="text-[#F56A00] hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="https://forms.gle/FHirPbejNSDV87Lx5" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
