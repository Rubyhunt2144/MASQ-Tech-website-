import {
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Star,
  Globe,
  Shield,
  Zap,
  Users,
  Code,
  Cloud,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { MobileMenu } from "@/components/mobile-menu"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/images/masq-logo.png" alt="MASQ Tech" className="h-8 mr-3" />
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent"
              >
                MASQ Tech
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                About
              </Link>
              <Link href="#portfolio" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                Portfolio
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 font-semibold px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105">
                Get Started
              </Button>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
              backgroundSize: "60px 60px",
            }}
          ></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium mb-6 border border-white/20">
              <Zap className="h-4 w-4 mr-2" />
              Cutting Edge Solutions Provider
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent block">
                Digital Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with innovative technology solutions that drive growth, efficiency, and digital
              transformation in the modern tech landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-transparent rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-100 rounded-full text-cyan-700 text-sm font-medium mb-4">
              <Code className="h-4 w-4 mr-2" />
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Comprehensive Tech Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom software development to AI-powered solutions, we deliver cutting-edge technology services that
              transform your business operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Custom Software Development",
                description:
                  "Tailored software solutions built with cutting-edge technologies to meet your specific business needs.",
                features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Cloud className="h-8 w-8" />,
                title: "Cloud Solutions",
                description:
                  "Scalable cloud infrastructure and migration services to optimize your business operations.",
                features: ["Cloud Migration", "AWS/Azure Setup", "DevOps", "Infrastructure Management"],
                color: "from-cyan-500 to-green-500",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "AI & Machine Learning",
                description:
                  "Intelligent solutions powered by artificial intelligence and machine learning algorithms.",
                features: ["Data Analytics", "Predictive Models", "Automation", "Computer Vision"],
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Cybersecurity",
                description: "Comprehensive security solutions to protect your digital assets and sensitive data.",
                features: ["Security Audits", "Penetration Testing", "Compliance", "Threat Monitoring"],
                color: "from-red-500 to-pink-500",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Digital Transformation",
                description: "End-to-end digital transformation services to modernize your business processes.",
                features: ["Process Automation", "Legacy System Upgrade", "Digital Strategy", "Change Management"],
                color: "from-purple-500 to-indigo-500",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "IT Consulting",
                description:
                  "Expert technology consulting to help you make informed decisions about your IT infrastructure.",
                features: ["Technology Assessment", "Strategic Planning", "Vendor Selection", "Project Management"],
                color: "from-orange-500 to-red-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6">
                <Users className="h-4 w-4 mr-2" />
                About MASQ Tech
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pioneering Digital Excellence</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a cutting-edge technology solutions provider that specializes in delivering innovative software
                and IT services for businesses ready to embrace digital transformation. Our team of expert developers
                and consultants combines technical excellence with strategic thinking to deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With extensive experience across various technologies and industries, we understand that every business
                has unique challenges. That's why we craft personalized technology solutions that align with your
                specific requirements and business objectives.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "150+", label: "Projects Completed" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "5+", label: "Years Experience" },
                  { number: "24/7", label: "Support Available" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-100 to-green-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10"></div>
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-600 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl">
                    <Star className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Excellence Driven</h3>
                  <p className="text-gray-600 max-w-xs">
                    Committed to delivering outstanding results that exceed expectations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
              <Globe className="h-4 w-4 mr-2" />
              Our Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Built a scalable e-commerce solution handling 10K+ daily transactions",
                tech: ["React", "Node.js", "MongoDB", "AWS"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "AI Analytics Dashboard",
                description: "Developed an AI-powered analytics platform for real-time business insights",
                tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Mobile Banking App",
                description: "Created a secure mobile banking application with biometric authentication",
                tech: ["React Native", "Node.js", "MongoDB", "Blockchain"],
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-green-100 text-cyan-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-100 rounded-full text-cyan-700 text-sm font-medium mb-4">
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how our cutting-edge solutions can drive your digital transformation journey.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <Phone className="h-6 w-6" />,
                    title: "Call Anytime",
                    content: "+92 349 560 6710\n+92 332 096 0621",
                    color: "text-cyan-600",
                  },
                  {
                    icon: <Mail className="h-6 w-6" />,
                    title: "Email Us",
                    content: "masqtech04@gmail.com",
                    color: "text-green-600",
                  },
                  {
                    icon: <MapPin className="h-6 w-6" />,
                    title: "Address",
                    content: "123 Digital Avenue, Suite 100\nTech City, TC 12345",
                    color: "text-purple-600",
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start group">
                    <div
                      className={`${contact.color} mr-4 mt-1 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{contact.title}</div>
                      <div className="text-gray-600 whitespace-pre-line">{contact.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-green-50 rounded-2xl border border-cyan-100">
                <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                <div className="text-gray-600 space-y-1">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 10:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent"
              >
                MASQ Tech
              </Link>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Cutting edge technology solutions provider for modern businesses. Transforming ideas into digital
                reality.
              </p>
              <div className="flex space-x-4 mt-6">
                {["LinkedIn", "Twitter", "GitHub", "Instagram"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current"></div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                {["Custom Development", "Cloud Solutions", "AI & ML", "Cybersecurity"].map((service) => (
                  <li key={service}>
                    <Link href="#" className="hover:text-cyan-400 transition-colors">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                {["About Us", "Our Team", "Careers", "Blog"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-green-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                {["Help Center", "Documentation", "Contact Support", "Status Page"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-purple-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MASQ Tech. All rights reserved. Built with ❤️ for the future.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
