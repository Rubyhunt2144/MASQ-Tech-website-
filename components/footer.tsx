import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-4 block"
            >
              MASQ Tech
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              MASQ Tech is a results-driven digital agency specializing in performance marketing and creative solutions.
              We help brands scale through data-backed strategies and compelling content.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/share/19LQ6ByzKR/"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/masqtech.official/"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/masqtech.official"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/masqtech.official"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/services/ecommerce" className="hover:text-cyan-400 transition-colors">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-cyan-400 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/data-analyst" className="hover:text-cyan-400 transition-colors">
                  Data Analyst
                </Link>
              </li>
              <li>
                <Link href="/services/android-developer" className="hover:text-cyan-400 transition-colors">
                  Android Developer
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-cyan-400 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/uiux-designer" className="hover:text-cyan-400 transition-colors">
                  UI/UX Designer
                </Link>
              </li>
              <li>
                <Link href="/services/database-administrator" className="hover:text-cyan-400 transition-colors">
                  Database Administrator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-green-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-green-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-green-400 transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Subscribe newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to our Newsletter & Event Right Now to be Updated</p>
            <div className="mb-6">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 w-full"
              >
                <Link href="/contact">Sign Up</Link>
              </Button>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <h5 className="font-semibold text-white mb-2">Office Address</h5>
                <p className="text-gray-400">I10/2 Islamabad, Pakistan</p>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">Email Us</h5>
                <a href="mailto:masqtech04@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  masqtech04@gmail.com
                </a>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">Call Anytime</h5>
                <div className="space-y-1">
                  <div>
                    <a href="tel:+923495606710" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      +92 349 560 6710
                    </a>
                  </div>
                  <div>
                    <a href="tel:+923320960621" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      +92 332 096 0621
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">Office Hour</h5>
                <div className="text-gray-400">
                  <div>Operating Hours: Monday to Saturday, 9:00 AM – 6:00 PM</div>
                  <div>Second Shift: Monday to Saturday, 9:00 PM – 6:00 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2025 MASQ Tech. All rights reserved. Built with the future.</p>
        </div>
      </div>
    </footer>
  )
}
