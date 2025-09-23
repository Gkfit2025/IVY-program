import { Heart, Facebook, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-white" />
              <span className="font-playfair font-bold text-xl text-white">IVY</span>
            </Link>
            <p className="text-white/90 text-sm">
              Connecting volunteers and meaningful opportunities across South India.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com/ivyplatform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a
                href="https://instagram.com/ivyplatform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Programs</h4>
            <div className="space-y-2 text-sm text-white/80">
              <Link href="/volunteer" className="block hover:text-white transition-colors">
                Volunteering
              </Link>
              <Link href="/internship" className="block hover:text-white transition-colors">
                Internship
              </Link>
              <Link href="/explore-all" className="block hover:text-white transition-colors">
                All Programs
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Resources</h4>
            <div className="space-y-2 text-sm text-white/80">
              <div className="hover:text-white transition-colors cursor-pointer">Available Grants</div>
              <div className="hover:text-white transition-colors cursor-pointer">Partnerships</div>
              <div className="hover:text-white transition-colors cursor-pointer">FAQs</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact Us</h4>
            <div className="space-y-2 text-sm text-white/80">
              <div>
                <strong className="text-white">Email:</strong>
                <br />
                info@ivyplatform.org
                <br />
                support@ivyplatform.org
              </div>
              <div>
                <strong className="text-white">Phone:</strong>
                <br />
                +91 98765 43210
              </div>
              <div>
                <strong className="text-white">Address:</strong>
                <br />
                Chennai, Tamil Nadu
                <br />
                South India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-white/80">
          <p>&copy; 2025 IVY Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
