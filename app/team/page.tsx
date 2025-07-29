import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimatedSection } from "@/components/scroll-animations"
import { Linkedin, Github, Mail } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Saif Ali",
      role: "Chief Executive Officer & Lead Developer",
      image: "/images/team/saif-ali.png",
      bio: "Saif leads our development team with over 5 years of experience in full-stack development and project management. He specializes in modern web technologies and cloud architecture.",
      skills: ["React", "Node.js", "AWS", "Project Management"],
      linkedin: "https://linkedin.com/in/saif-ali",
      github: "https://github.com/saif-ali",
      email: "saif@masqtech04.com",
    },
    {
      name: "Ghulam Qadir",
      role: "Senior Full-Stack Developer",
      image: "/images/team/ghulam-qadir.png",
      bio: "Ghulam is our full-stack expert with extensive experience in both frontend and backend development. He's passionate about creating scalable and efficient solutions.",
      skills: ["JavaScript", "Python", "MongoDB", "Docker"],
      linkedin: "https://linkedin.com/in/ghulam-qadir",
      github: "https://github.com/ghulam-qadir",
      email: "qadir@masqtech04.com",
    },
    {
      name: "Mohsin Shahzad",
      role: "AI/ML Engineer & Data Scientist",
      image: "/images/team/mohsin-shahzad.png",
      bio: "Mohsin brings cutting-edge AI and machine learning expertise to our team. He specializes in developing intelligent solutions and data-driven applications.",
      skills: ["Python", "TensorFlow", "Data Science", "Machine Learning"],
      linkedin: "https://linkedin.com/in/mohsin-shahzad",
      github: "https://github.com/mohsin-shahzad",
      email: "mohsin@masqtech04.com",
    },
    {
      name: "Ahzaz Ahmed",
      role: "Cybersecurity Specialist & DevOps Engineer",
      image: "/images/team/ahzaz-ahmed.png",
      bio: "Ahzaz ensures our solutions are secure and well-deployed. He specializes in cybersecurity, DevOps practices, and cloud infrastructure management.",
      skills: ["Cybersecurity", "DevOps", "Kubernetes", "Security Auditing"],
      linkedin: "https://linkedin.com/in/ahzaz-ahmed",
      github: "https://github.com/ahzaz-ahmed",
      email: "ahzaz@masqtech04.com",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our talented team of developers, designers, and technology experts are passionate about creating
              innovative solutions that drive your business forward.
            </p>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <ScrollAnimatedSection key={index}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                            <Link
                              href={member.linkedin}
                              target="_blank"
                              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                            >
                              <Linkedin className="h-5 w-5 text-white" />
                            </Link>
                            <Link
                              href={member.github}
                              target="_blank"
                              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
                            >
                              <Github className="h-5 w-5 text-white" />
                            </Link>
                            <Link
                              href={`mailto:${member.email}`}
                              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300"
                            >
                              <Mail className="h-5 w-5 text-white" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-cyan-600 font-semibold mb-4">{member.role}</p>
                      <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-green-100 text-cyan-700 text-sm font-medium rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Want to Join Our Team?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for technology and innovation.
            </p>
            <Link
              href="/careers"
              className="inline-block bg-white text-cyan-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              View Open Positions
            </Link>
          </ScrollAnimatedSection>
        </div>
      </section>
    </div>
  )
}
