import Link from "next/link"
import { Facebook, Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"

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
              Cutting-edge technology solutions provider for modern businesses. Transforming ideas into digital reality
              with innovation and excellence.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/masqtech"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/masqtech"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/masqtech"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/masqtech"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/services/custom-development" className="hover:text-cyan-400 transition-colors">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="hover:text-cyan-400 transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/ai-ml" className="hover:text-cyan-400 transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="hover:text-cyan-400 transition-colors">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
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
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-cyan-400" />
                <div>
                  <a href="mailto:masqtech04@gmail.com" className="hover:text-cyan-400 transition-colors">
                    masqtech04@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-green-400" />
                <div className="space-y-1">
                  <div>
                    <a href="tel:+923495606710" className="hover:text-green-400 transition-colors">
                      +92 349 560 6710
                    </a>
                  </div>
                  <div>
                    <a href="tel:+923320960621" className="hover:text-green-400 transition-colors">
                      +92 332 096 0621
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-purple-400" />
                <div>
                  <p className="text-sm">
                    123 Digital Avenue, Suite 100
                    <br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2024 MASQ Tech. All rights reserved. Built with ❤️ for the future.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
