import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MASQ Tech - Cutting Edge Technology Solutions",
  description:
    "Transform your digital future with innovative technology solutions. Custom development, cloud solutions, AI/ML, and cybersecurity services.",
  keywords: "technology, software development, cloud solutions, AI, machine learning, cybersecurity, MASQ Tech",
  authors: [{ name: "MASQ Tech" }],
  openGraph: {
    title: "MASQ Tech - Cutting Edge Technology Solutions",
    description: "Transform your digital future with innovative technology solutions.",
    url: "https://masqtech.com",
    siteName: "MASQ Tech",
    images: [
      {
        url: "/images/masq-logo.png",
        width: 1200,
        height: 630,
        alt: "MASQ Tech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MASQ Tech - Cutting Edge Technology Solutions",
    description: "Transform your digital future with innovative technology solutions.",
    images: ["/images/masq-logo.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
