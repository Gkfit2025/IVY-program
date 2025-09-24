"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo12.png"
                alt="Grace Kennett Foundation Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="font-playfair font-bold text-xl text-[#F0661F]">
                Grace Kennett Foundation
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Connecting volunteers with meaningful opportunities across South India.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Uxc1kVsLi/" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-[#F0661F] cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/gkfmadurai?igsh=cWJqaTd2eWRlc2Iz" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-[#F0661F] cursor-pointer transition-colors" />
              </a>
              <a href="https://wa.me/+9199626840401" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5 text-gray-400 hover:text-[#F0661F] cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">For Volunteers</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>
                <Link href="/#search">Find Opportunities</Link>
              </div>
              <div>
                <Link href="/how-it-works">How It Works</Link>
              </div>
              <div>
                <Link href="/safety">Safety Guidelines</Link>
              </div>
              <div>
                <Link href="/faq">FAQs</Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">For Hosts</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>
                <Link href="/list-project">List Your Project</Link>
              </div>
              <div>
                <Link href="/host-resources">Host Resources</Link>
              </div>
              <div>
                <Link href="/best-practices">Best Practices</Link>
              </div>
              <div>
                <Link href="/support">Support</Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>gkfit2025@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 99626840401</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>8, Kennett Road, Madurai - 16, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 IV Platform. All rights reserved. Spreading kindness across South India.
          </p>
        </div>
      </div>
    </footer>
  )
}
