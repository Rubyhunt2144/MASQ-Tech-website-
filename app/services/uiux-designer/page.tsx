import { CheckCircle, Palette, Users, Eye, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollAnimatedSection } from "@/components/scroll-animations"
import Link from "next/link"

export default function UIUXDesignerPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimatedSection>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                UI/UX <span className="gradient-text">Designer</span> Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Create beautiful and intuitive user experiences that delight your customers. Our design team focuses on
                user-centered design principles to maximize engagement and conversions.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 text-lg px-8 py-4 rounded-full"
              >
                <Link href="/contact">Design Your Experience</Link>
              </Button>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-cyan-100 to-green-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10"></div>
                  <Palette className="h-32 w-32 text-cyan-600" />
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">UI/UX Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional design services that create engaging user experiences and drive conversions
            </p>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="h-8 w-8" />,
                title: "User Interface Design",
                description: "Create visually stunning and intuitive interfaces that users love to interact with.",
                features: ["Modern Design", "Brand Consistency", "Responsive Layouts", "Accessibility"],
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "User Experience Design",
                description: "Design user journeys that are smooth, logical, and conversion-focused.",
                features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Design Systems",
                description: "Build comprehensive design systems for consistent user experiences across platforms.",
                features: ["Component Libraries", "Style Guides", "Design Tokens", "Documentation"],
              },
            ].map((service, index) => (
              <ScrollAnimatedSection key={index}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center text-white mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Create Amazing User Experiences?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's design interfaces that your users will love and that drive your business goals.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
            >
              <Link href="/contact">
                Start Design Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollAnimatedSection>
        </div>
      </section>
    </div>
  )
}
