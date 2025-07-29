"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-cyan-600"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-cyan-600 transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-cyan-600 transition-colors py-2 font-medium"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/services/custom-development"
                    className="block text-gray-600 hover:text-cyan-600 transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Custom Development
                  </Link>
                  <Link
                    href="/services/cloud-solutions"
                    className="block text-gray-600 hover:text-cyan-600 transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Cloud Solutions
                  </Link>
                  <Link
                    href="/services/ai-ml"
                    className="block text-gray-600 hover:text-cyan-600 transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI & Machine Learning
                  </Link>
                  <Link
                    href="/services/cybersecurity"
                    className="block text-gray-600 hover:text-cyan-600 transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Cybersecurity
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="block text-gray-700 hover:text-cyan-600 transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/team"
              className="block text-gray-700 hover:text-cyan-600 transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="/careers"
              className="block text-gray-700 hover:text-cyan-600 transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-cyan-600 transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-cyan-600 transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
