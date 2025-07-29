import { MapPin, Clock, DollarSign, Users, Briefcase, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollAnimatedSection } from "@/components/scroll-animations"
import Link from "next/link"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      salary: "$60,000 - $80,000",
      description: "Join our development team to build cutting-edge web applications using modern technologies.",
      requirements: ["5+ years experience", "React/Node.js", "TypeScript", "Cloud platforms"],
    },
    {
      title: "AI/ML Engineer",
      department: "Data Science",
      location: "Remote / On-site",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      description: "Develop intelligent solutions and machine learning models for our clients.",
      requirements: ["Python/TensorFlow", "Machine Learning", "Data Science", "3+ years experience"],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / On-site",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      description: "Manage our cloud infrastructure and implement DevOps best practices.",
      requirements: ["AWS/Azure", "Docker/Kubernetes", "CI/CD", "Linux administration"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / On-site",
      type: "Full-time",
      salary: "$50,000 - $70,000",
      description: "Create beautiful and intuitive user experiences for our applications.",
      requirements: ["Figma/Adobe Creative Suite", "User Research", "Prototyping", "3+ years experience"],
    },
  ]

  const benefits = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Hours",
      description: "Work-life balance with flexible working hours and remote options",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Culture",
      description: "Collaborative environment with talented and passionate colleagues",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Career Growth",
      description: "Professional development opportunities and career advancement",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="gradient-text">Amazing Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Be part of a dynamic team that's shaping the future of technology. We're looking for passionate
              individuals who want to make a real impact.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 text-lg px-8 py-4 rounded-full"
            >
              <Link href="#positions">View Open Positions</Link>
            </Button>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive and grow
            </p>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimatedSection key={index}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job openings and find your perfect role
            </p>
          </ScrollAnimatedSection>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <ScrollAnimatedSection key={index}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{position.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {position.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {position.type}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {position.salary}
                          </div>
                        </div>
                      </div>
                      <Button
                        asChild
                        className="mt-4 md:mt-0 bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700"
                      >
                        <Link href="/contact">Apply Now</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">{position.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, reqIndex) => (
                          <span
                            key={reqIndex}
                            className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-green-100 text-cyan-700 text-sm font-medium rounded-full"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined hiring process is designed to find the best fit for both you and our team
            </p>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply Online",
                description: "Submit your application through our contact form with your resume and cover letter.",
              },
              {
                step: "02",
                title: "Initial Review",
                description: "Our HR team reviews your application and contacts qualified candidates within 48 hours.",
              },
              {
                step: "03",
                title: "Technical Interview",
                description: "Meet with our technical team to discuss your skills and experience in detail.",
              },
              {
                step: "04",
                title: "Final Decision",
                description: "We make our decision quickly and extend offers to successful candidates.",
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
            <h2 className="text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Don't see a position that fits? We're always interested in hearing from talented individuals.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
            >
              <Link href="/contact">Send Us Your Resume</Link>
            </Button>
          </ScrollAnimatedSection>
        </div>
      </section>
    </div>
  )
}
