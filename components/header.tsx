"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { ChevronDown } from "lucide-react"

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/images/masq-logo.png" alt="MASQ Tech" className="h-10 mr-3" />
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent"
            >
              MASQ Tech
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <Link
                    href="/services/custom-development"
                    className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                  >
                    <div className="font-medium">Custom Development</div>
                    <div className="text-sm text-gray-500">Tailored software solutions</div>
                  </Link>
                  <Link
                    href="/services/cloud-solutions"
                    className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                  >
                    <div className="font-medium">Cloud Solutions</div>
                    <div className="text-sm text-gray-500">Scalable cloud infrastructure</div>
                  </Link>
                  <Link
                    href="/services/ai-ml"
                    className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                  >
                    <div className="font-medium">AI & Machine Learning</div>
                    <div className="text-sm text-gray-500">Intelligent automation</div>
                  </Link>
                  <Link
                    href="/services/cybersecurity"
                    className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                  >
                    <div className="font-medium">Cybersecurity</div>
                    <div className="text-sm text-gray-500">Comprehensive security</div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Our Team
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Careers
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Contact
            </Link>

            <Button
              asChild
              className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 font-semibold px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
