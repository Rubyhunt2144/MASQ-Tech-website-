import { CheckCircle, Code, Smartphone, Globe, Database, Zap, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollAnimatedSection } from "@/components/scroll-animations"
import Link from "next/link"

export default function CustomDevelopmentPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimatedSection>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Custom <span className="gradient-text">Development</span> Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your unique business requirements into powerful, scalable software solutions. Our expert
                developers create tailored applications that perfectly align with your goals.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 text-lg px-8 py-4 rounded-full"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-cyan-100 to-green-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10"></div>
                  <Code className="h-32 w-32 text-cyan-600" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end custom development services
            </p>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Web Applications",
                description:
                  "Modern, responsive web applications built with cutting-edge technologies like React, Next.js, and Node.js.",
                features: ["Responsive Design", "Progressive Web Apps", "Real-time Features", "API Integration"],
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Mobile Applications",
                description:
                  "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.",
                features: ["Native Development", "Cross-platform", "App Store Optimization", "Push Notifications"],
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "Backend Systems",
                description:
                  "Robust, scalable backend systems and APIs that power your applications with reliability and performance.",
                features: ["RESTful APIs", "Database Design", "Microservices", "Cloud Integration"],
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Desktop Applications",
                description:
                  "Cross-platform desktop applications built with modern frameworks for Windows, macOS, and Linux.",
                features: ["Cross-platform", "Native Performance", "Auto Updates", "Offline Capability"],
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "API Development",
                description: "Custom APIs and integrations that connect your systems and enable seamless data flow.",
                features: ["REST APIs", "GraphQL", "Third-party Integration", "Documentation"],
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "E-commerce Solutions",
                description:
                  "Complete e-commerce platforms with payment processing, inventory management, and analytics.",
                features: ["Payment Gateway", "Inventory Management", "Analytics", "Mobile Optimized"],
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

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest and most reliable technologies to build your solutions
            </p>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
              },
              {
                category: "Backend",
                technologies: ["Node.js", "Python", "Java", "PHP", "Express.js"],
              },
              {
                category: "Database",
                technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
              },
              {
                category: "Mobile",
                technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
              },
            ].map((stack, index) => (
              <ScrollAnimatedSection key={index}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{stack.category}</h3>
                    <div className="space-y-2">
                      {stack.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements and create a detailed project roadmap.",
              },
              {
                step: "02",
                title: "Design & Architecture",
                description: "Our team designs the user experience and technical architecture.",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "We build your solution using agile methodology with continuous testing.",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "We deploy your application and provide ongoing maintenance and support.",
              },
            ].map((process, index) => (
              <ScrollAnimatedSection key={index}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Build Your Custom Solution?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a solution that drives your business forward.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
            >
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollAnimatedSection>
        </div>
      </section>
    </div>
  )
}
