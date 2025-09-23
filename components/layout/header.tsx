"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Link from "next/link"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToFooter = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-black backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-[#F0661F]" />
            <span className="font-playfair font-bold text-2xl text-white">IV</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#F0661F] hover:text-[#F0661F]/90 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-[#F0661F] hover:text-[#F0661F]/90 transition-colors"
            >
              Impact Stories
            </button>
            <button
              onClick={scrollToFooter}
              className="text-[#F0661F] hover:text-[#F0661F]/90 transition-colors"
            >
              Contact
            </button>
          </div>

          <Button asChild className="bg-[#F0661F] hover:bg-[#F0661F]/90 text-white">
            <a href="https://forms.gle/FHirPbejNSDV87Lx5" target="_blank" rel="noopener noreferrer">
              Apply
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
