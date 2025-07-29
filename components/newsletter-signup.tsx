"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeNewsletter } from "@/app/actions/contact"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export function NewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setResult(null)

    const response = await subscribeNewsletter(formData)
    setResult(response)
    setIsSubmitting(false)

    if (response.success) {
      const form = document.getElementById("newsletter-form") as HTMLFormElement
      form?.reset()
    }
  }

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-green-600 rounded-2xl p-8 text-white">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-cyan-100 mb-6">Get the latest tech insights and updates delivered to your inbox.</p>

        <form id="newsletter-form" action={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-cyan-100 focus:border-white focus:ring-white"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-6"
            >
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
            </Button>
          </div>

          {result && (
            <div
              className={`flex items-center gap-2 p-3 rounded-lg ${
                result.success ? "bg-green-500/20 text-green-100" : "bg-red-500/20 text-red-100"
              }`}
            >
              {result.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
              <span className="text-sm">{result.message}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
