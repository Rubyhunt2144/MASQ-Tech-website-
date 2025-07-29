import nodemailer from "nodemailer"

// Create transporter for Gmail (Fixed function name)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "masqtech04@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
  },
})

export async function sendContactEmail(data: {
  firstName: string
  lastName: string
  email: string
  company?: string
  message: string
}) {
  const { firstName, lastName, email, company, message } = data

  const mailOptions = {
    from: process.env.GMAIL_USER || "masqtech04@gmail.com",
    to: "masqtech04@gmail.com",
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #06b6d4, #22c55e); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9;">
          <h2 style="color: #333; margin-bottom: 20px;">Contact Details</h2>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <strong style="color: #06b6d4;">Name:</strong> ${firstName} ${lastName}
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <strong style="color: #06b6d4;">Email:</strong> 
            <a href="mailto:${email}" style="color: #22c55e; text-decoration: none;">${email}</a>
          </div>
          
          ${
            company
              ? `
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <strong style="color: #06b6d4;">Company:</strong> ${company}
          </div>
          `
              : ""
          }
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <strong style="color: #06b6d4;">Message:</strong>
            <div style="margin-top: 10px; padding: 10px; background: #f8f9fa; border-left: 4px solid #22c55e; border-radius: 4px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <strong style="color: #06b6d4;">Submitted:</strong> ${new Date().toLocaleString()}
          </div>
        </div>
        
        <div style="padding: 20px; text-align: center; background: #f0f0f0; border-radius: 0 0 10px 10px;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            This email was sent from the MASQ Tech website contact form.
          </p>
          <div style="margin-top: 15px;">
            <a href="mailto:${email}" style="background: linear-gradient(135deg, #06b6d4, #22c55e); color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Reply to ${firstName}
            </a>
          </div>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Email sending failed:", error)
    return { success: false, error }
  }
}

export async function sendNewsletterWelcomeEmail(email: string) {
  const mailOptions = {
    from: process.env.GMAIL_USER || "masqtech04@gmail.com",
    to: email,
    subject: "Welcome to MASQ Tech Newsletter!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #06b6d4, #22c55e); padding: 30px; border-radius: 10px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to MASQ Tech!</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
            Thank you for subscribing to our newsletter
          </p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
          <h2 style="color: #333; margin-bottom: 20px;">What to Expect</h2>
          
          <ul style="color: #666; line-height: 1.6;">
            <li>Latest technology trends and insights</li>
            <li>Exclusive updates on our services</li>
            <li>Industry best practices and tips</li>
            <li>Special offers and announcements</li>
          </ul>
          
          <div style="margin-top: 30px; text-align: center;">
            <a href="https://masqtech04.com" style="background: linear-gradient(135deg, #06b6d4, #22c55e); color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Visit Our Website
            </a>
          </div>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Welcome email sending failed:", error)
    return { success: false, error }
  }
}

// Alternative email service using Resend (more reliable for production)
export async function sendContactEmailWithResend(data: {
  firstName: string
  lastName: string
  email: string
  company?: string
  message: string
}) {
  const { firstName, lastName, email, company, message } = data

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MASQ Tech <noreply@masqtech04.com>",
        to: ["masqtech04@gmail.com"],
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
            <div style="background: linear-gradient(135deg, #06b6d4 0%, #22c55e 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">New Contact Form Submission</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">MASQ Tech Website</p>
            </div>
            
            <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <h2 style="color: #1f2937; margin-bottom: 20px; font-size: 22px;">Contact Details</h2>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #374151; display: inline-block; width: 100px;">Name:</strong>
                <span style="color: #6b7280;">${firstName} ${lastName}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #374151; display: inline-block; width: 100px;">Email:</strong>
                <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a>
              </div>
              
              ${
                company
                  ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #374151; display: inline-block; width: 100px;">Company:</strong>
                <span style="color: #6b7280;">${company}</span>
              </div>
              `
                  : ""
              }
              
              <div style="margin-top: 25px;">
                <strong style="color: #374151; display: block; margin-bottom: 10px;">Message:</strong>
                <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #06b6d4;">
                  <p style="color: #4b5563; line-height: 1.6; margin: 0;">${message}</p>
                </div>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding: 20px;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                This email was sent from the MASQ Tech contact form.<br>
                Please respond to the customer at: <a href="mailto:${email}" style="color: #06b6d4;">${email}</a>
              </p>
            </div>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      throw new Error(`Resend API error: ${response.status}`)
    }

    return { success: true }
  } catch (error) {
    console.error("Resend email sending failed:", error)
    return { success: false, error }
  }
}
