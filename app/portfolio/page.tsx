import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollAnimatedSection } from "@/components/scroll-animations"
import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Fashion Store",
      category: "E-Commerce",
      description:
        "Modern online fashion store with advanced filtering, wishlist functionality, and seamless checkout process.",
      image: "/placeholder.svg?height=300&width=500&text=Fashion+Store",
      technologies: ["Shopify", "React", "Node.js", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Restaurant Management System",
      category: "Web Application",
      description:
        "Complete restaurant management solution with online ordering, table reservations, and inventory tracking.",
      image: "/placeholder.svg?height=300&width=500&text=Restaurant+System",
      technologies: ["Next.js", "MongoDB", "Express", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Digital Marketing Agency",
      category: "Website Design",
      description:
        "Professional marketing agency website with portfolio showcase, client testimonials, and lead generation forms.",
      image: "/placeholder.svg?height=300&width=500&text=Marketing+Agency",
      technologies: ["React", "Gatsby", "GraphQL", "Netlify"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description:
        "Patient management mobile application with appointment scheduling, medical records, and telemedicine features.",
      image: "/placeholder.svg?height=300&width=500&text=Healthcare+App",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Platform",
      category: "Web Application",
      description: "Property listing platform with advanced search, virtual tours, and agent management system.",
      image: "/placeholder.svg?height=300&width=500&text=Real+Estate",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Educational Learning Platform",
      category: "E-Learning",
      description: "Online learning platform with course management, progress tracking, and interactive assessments.",
      image: "/placeholder.svg?height=300&width=500&text=Learning+Platform",
      technologies: ["React", "Django", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const categories = ["All", "E-Commerce", "Web Application", "Website Design", "Mobile Development", "E-Learning"]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our collection of successful projects that showcase our expertise in creating innovative digital
              solutions for businesses across various industries.
            </p>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={
                    index === 0
                      ? "bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700"
                      : "hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-600"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimatedSection key={index}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
                        <Link
                          href={project.liveUrl}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cyan-600 transition-all duration-300"
                        >
                          <ExternalLink className="h-5 w-5 text-white" />
                        </Link>
                        <Link
                          href={project.githubUrl}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
                        >
                          <Github className="h-5 w-5 text-white" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-green-100 text-cyan-700 text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-600 bg-transparent"
                    >
                      <Link href={project.liveUrl}>
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing that drives your business forward.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollAnimatedSection>
        </div>
      </section>
    </div>
  )
}
