"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/app/actions/contact"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setResult(null)

    const response = await submitContactForm(formData)
    setResult(response)
    setIsSubmitting(false)

    if (response.success) {
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    }
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-0 bg-white">
        <CardHeader className="bg-gradient-to-r from-cyan-50 to-green-50 rounded-t-lg">
          <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
          <CardDescription className="text-gray-600">We'll get back to you within 24 hours</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form id="contact-form" action={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  name="firstName"
                  placeholder="First Name *"
                  required
                  className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
              <div>
                <Input
                  name="lastName"
                  placeholder="Last Name *"
                  required
                  className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
            </div>
            <Input
              name="email"
              placeholder="Email Address *"
              type="email"
              required
              className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
            />
            <Input
              name="company"
              placeholder="Company Name"
              className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
            />
            <Textarea
              name="message"
              placeholder="Tell us about your project... *"
              rows={4}
              required
              className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
            />

            {result && (
              <div
                className={`flex items-center gap-2 p-3 rounded-lg ${
                  result.success
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {result.success ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
                <span className="text-sm">{result.message}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
