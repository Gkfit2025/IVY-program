import { Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-playfair font-bold text-xl text-foreground">IVY</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Connecting healthcare professionals with meaningful opportunities across South India.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Programs</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/internship" className="block hover:text-primary transition-colors">
                Healthcare Internships
              </Link>
              <Link href="/search?type=volunteer" className="block hover:text-primary transition-colors">
                Volunteer Opportunities
              </Link>
              <Link href="/join-ivy" className="block hover:text-primary transition-colors">
                All Programs
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Location</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/internship/learn-more" className="block hover:text-primary transition-colors">
                Program Details
              </Link>
              <div>Application Guide</div>
              <div>FAQs</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Email Us</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Contact Us</div>
              <div>Help Center</div>
              <div>Safety Guidelines</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
          <p>&copy; 2024 IVY Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
