import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ScrollAnimatedSection } from "@/components/scroll-animations"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link" // Import Link for the map link

export default function ContactPage() {
  const mapCoordinates = "33.64704,73.03645"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapCoordinates}`

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your business with cutting-edge technology? Let's discuss how our innovative solutions
              can drive your digital transformation journey.
            </p>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ScrollAnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    We're here to help you succeed. Reach out to us through any of the following channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Phone className="h-6 w-6" />,
                      title: "Call Us",
                      content: ["+92 349 560 6710", "+92 332 096 0621"],
                      color: "text-cyan-600",
                      bgColor: "bg-cyan-50",
                    },
                    {
                      icon: <Mail className="h-6 w-6" />,
                      title: "Email Us",
                      content: ["masqtech04@gmail.com"],
                      color: "text-green-600",
                      bgColor: "bg-green-50",
                    },
                    {
                      icon: <MapPin className="h-6 w-6" />,
                      title: "Visit Us",
                      content: ["123 Digital Avenue, Suite 100", "Tech City, TC 12345"],
                      color: "text-purple-600",
                      bgColor: "bg-purple-50",
                    },
                    {
                      icon: <Clock className="h-6 w-6" />,
                      title: "Business Hours",
                      content: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"],
                      color: "text-orange-600",
                      bgColor: "bg-orange-50",
                    },
                  ].map((contact, index) => (
                    <Card
                      key={index}
                      className={`border-0 ${contact.bgColor} hover:shadow-lg transition-all duration-300`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className={`${contact.color} mr-4 mt-1`}>{contact.icon}</div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                            <div className="space-y-1">
                              {contact.title === "Call Us"
                                ? contact.content.map((item, itemIndex) => (
                                    <div key={itemIndex} className="text-gray-600">
                                      <a
                                        href={`tel:${item.replace(/\s/g, "")}`}
                                        className="hover:text-cyan-600 transition-colors"
                                      >
                                        {item}
                                      </a>
                                    </div>
                                  ))
                                : contact.title === "Email Us"
                                  ? contact.content.map((item, itemIndex) => (
                                      <div key={itemIndex} className="text-gray-600">
                                        <a href={`mailto:${item}`} className="hover:text-green-600 transition-colors">
                                          {item}
                                        </a>
                                      </div>
                                    ))
                                  : contact.content.map((item, itemIndex) => (
                                      <div key={itemIndex} className="text-gray-600">
                                        {item}
                                      </div>
                                    ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollAnimatedSection>

            {/* Contact Form */}
            <ScrollAnimatedSection>
              <ContactForm />
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <NewsletterSignup />
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center overflow-hidden relative group">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.9170000000003!2d73.03426937500001!3d33.64704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM4JzQ5LjMiTiA3M8KwMDInMTAuOSJF!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MASQ Tech Location"
                  className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-300"
                ></iframe>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MapPin className="h-16 w-16 text-white animate-bounce-slow" />
                  <span className="sr-only">Click to open map</span>
                </div>
              </div>
            </Link>
          </ScrollAnimatedSection>
        </div>
      </section>
    </div>
  )
}
