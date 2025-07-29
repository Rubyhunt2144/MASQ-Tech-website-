import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ScrollAnimatedSection } from "@/components/scroll-animations"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
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
                              {contact.content.map((item, itemIndex) => (
                                <div key={itemIndex} className="text-gray-600">
                                  {contact.title === "Call Us" ? (
                                    <a
                                      href={`tel:${item.replace(/\s/g, "")}`}
                                      className="hover:text-cyan-600 transition-colors"
                                    >
                                      {item}
                                    </a>
                                  ) : contact.title === "Email Us" ? (
                                    <a href={`mailto:${item}`} className="hover:text-green-600 transition-colors">
                                      {item}
                                    </a>
                                  ) : (
                                    item
                                  )}
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

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">Find Us Here</h3>
                <p className="text-gray-500">Interactive map coming soon</p>
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </div>
  )
}
