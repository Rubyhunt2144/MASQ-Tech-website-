import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimatedSection } from "@/components/scroll-animations"
import { Linkedin, Github, Mail } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Saif Ali",
      role: "Lead Developer & Digital Marketer",
      image: "/images/team/saif-ali1.jpg ",
      bio: "Expert in full-stack development and digital marketing strategies. Leads our development team with 3+ years of experience in creating scalable web applications and driving online growth through innovative marketing campaigns. Specializes in React, Node.js, and performance marketing across multiple digital platforms.",
      skills: ["React", "Node.js", "Digital Marketing", "SEO", "Google Ads", "Social Media Marketing"],
      linkedin: "https://www.linkedin.com/in/mrsaifali/",
      github: "https://github.com/Mrsaifie",
      email: "mrsaifie.512@gmail.com",
    },
    {
      name: "Ghulam Qadir",
      role: "Android & Web Developer",
      image: "/images/team/ghulam-qadir.png",
      bio: "Specialized in Android app development and responsive web design. Creates user-friendly mobile applications and modern websites with focus on performance, user experience, and cross-platform compatibility. Expert in native Android development and modern web technologies.",
      skills: ["Android Development", "Java", "Kotlin", "JavaScript", "React", "Responsive Design"],
      linkedin: "https://www.linkedin.com/in/ghulam-qadirr",
      github: "https://github.com/Qadirrrr",
      email: "gq5735741@gmail.com",
    },
    {
      name: "Mohsin Shahzad",
      role: "Data Analyst",
      image: "/images/team/mohsin-shahzad.png",
      bio: "Transforms complex data into actionable business insights. Expert in data visualization, statistical analysis, and business intelligence to help clients make informed decisions and optimize their operations. Specializes in Python, SQL, and advanced analytics tools.",
      skills: ["Python", "SQL", "Data Visualization", "Power BI", "Excel", "Statistical Analysis"],
      linkedin: "https://www.linkedin.com/in/mohsin-shahzad-2a8946306/",
      github: "https://github.com/mohsin353-shah",
      email: "mk9686333@gmail.com",
    },
    {
      name: "Ahzaz Ahmed",
      role: "Software Developer & IoT Expert",
      image: "/images/team/ahzaz-ahmed.png",

      bio: "Develops innovative software solutions and IoT applications. Specializes in creating smart systems that connect devices and automate business processes for enhanced efficiency and productivity. Expert in embedded systems, cloud integration, and smart device development.",
      skills: ["IoT Development", "C++", "Python", "Arduino", "Raspberry Pi", "Cloud Integration"],
      linkedin: "www.linkedin.com/in/ahzaz-ahmed-4806b0253",
      github: "https://github.com/Rubyhunt2144",
      email: "zeework2144@gmail.com",
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
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
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
