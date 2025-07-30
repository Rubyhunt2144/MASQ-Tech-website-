"use server"

import { supabase, isSupabaseConfigured } from "@/lib/supabase"
import { sendContactEmail, sendNewsletterWelcomeEmail } from "@/lib/email"
import { sendSimpleEmail, sendSimpleNewsletterEmail } from "@/lib/email-fallback"
import { revalidatePath } from "next/cache"

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  if (!firstName || !lastName || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    let emailResult = { success: false }

    // Try to send email with nodemailer first
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        emailResult = await sendContactEmail({
          firstName,
          lastName,
          email,
          company,
          message,
        })
      } catch (error) {
        console.error("Nodemailer failed, trying fallback:", error)
        // Fallback to simple email logging
        emailResult = await sendSimpleEmail({
          firstName,
          lastName,
          email,
          company,
          message,
        })
      }
    } else {
      // Use fallback email method
      emailResult = await sendSimpleEmail({
        firstName,
        lastName,
        email,
        company,
        message,
      })
    }

    // Store in database if Supabase is configured
    if (isSupabaseConfigured()) {
      try {
        const { error } = await supabase.from("contacts").insert({
          first_name: firstName,
          last_name: lastName,
          email: email,
          company: company || "",
          message: message,
          status: "new",
        })

        if (error) {
          console.error("Supabase error:", error)
          // Continue even if database fails - don't block the form submission
        }
      } catch (dbError) {
        console.error("Database error:", dbError)
        // Continue even if database fails - don't block the form submission
      }
    }

    revalidatePath("/")

    // Always return success if email was sent, regardless of database status
    if (emailResult.success) {
      return {
        success: true,
        message: "Thank you for your message! We'll get back to you within 24 hours.",
      }
    } else {
      return {
        success: true, // Still return success since the form was processed
        message: "Thank you for your message! We have received your inquiry and will get back to you soon.",
      }
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: true, // Return success to avoid blocking user experience
      message: "Thank you for your message! We have received your inquiry and will contact you soon.",
    }
  }
}

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    // Store in database if Supabase is configured
    if (isSupabaseConfigured()) {
      try {
        const { error } = await supabase.from("newsletter").insert({
          email: email,
          subscribed: true,
        })

        if (error && error.code === "23505") {
          return {
            success: false,
            message: "This email is already subscribed to our newsletter.",
          }
        }
      } catch (dbError) {
        console.error("Database error:", dbError)
        // Continue even if database fails
      }
    }

    // Send welcome email
    let emailResult = { success: false }
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        emailResult = await sendNewsletterWelcomeEmail(email)
      } catch (error) {
        console.error("Newsletter email failed, using fallback:", error)
        emailResult = await sendSimpleNewsletterEmail(email)
      }
    } else {
      emailResult = await sendSimpleNewsletterEmail(email)
    }

    return {
      success: true,
      message: "Successfully subscribed to our newsletter!",
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}
