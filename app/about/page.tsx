import { CheckCircle, Users, Target, Award, Globe, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimatedSection } from "@/components/scroll-animations"
import { AnimatedCounter } from "@/components/animated-counter"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">MASQ Tech</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a cutting-edge technology solutions provider that specializes in delivering innovative software and
              IT services for businesses ready to embrace digital transformation.
            </p>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollAnimatedSection>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses with innovative technology solutions that drive growth, efficiency, and
                    digital transformation. We believe in creating technology that not only solves problems but also
                    opens new possibilities for our clients.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading technology partner for businesses worldwide, recognized for our innovation,
                    reliability, and commitment to excellence. We envision a future where technology seamlessly
                    integrates with business operations to create unprecedented value.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-300">Delivering excellence across all our engagements</p>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: 50, suffix: "+", label: "Projects Completed", icon: <Award className="h-8 w-8" /> },
              { number: 98, suffix: "%", label: "Client Satisfaction", icon: <Users className="h-8 w-8" /> },
              { number: 2, suffix: "+", label: "Years Experience", icon: <Zap className="h-8 w-8" /> },
              { number: 15, suffix: "+", label: "Happy Clients", icon: <Globe className="h-8 w-8" /> },
            ].map((stat, index) => (
              <ScrollAnimatedSection key={index}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-8 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-cyan-400 mb-4 flex justify-center">{stat.icon}</div>
                    <div className="mb-2">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our relationships with clients, partners, and team
              members.
            </p>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Excellence",
                description:
                  "We maintain the highest standards in everything we do, from code quality to client service.",
                color: "from-cyan-500 to-green-500",
              },
              {
                title: "Integrity",
                description: "We build trust through transparency, honesty, and ethical business practices.",
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients as partners to achieve shared success.",
                color: "from-purple-500 to-indigo-500",
              },
              {
                title: "Agility",
                description: "We adapt quickly to changing requirements and market conditions.",
                color: "from-orange-500 to-red-500",
              },
              {
                title: "Growth",
                description: "We are committed to continuous learning and improvement for ourselves and our clients.",
                color: "from-pink-500 to-purple-500",
              },
            ].map((value, index) => (
              <ScrollAnimatedSection key={index}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimatedSection>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose MASQ Tech?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With extensive experience across various technologies and industries, we understand that every business
                has unique challenges. That's why we craft personalized technology solutions that align with your
                specific requirements and business objectives.
              </p>

              <div className="space-y-4">
                {[
                  "Expert team with 5+ years of combined experience",
                  "Proven track record with 200+ successful projects",
                  "24/7 support and maintenance services",
                  "Agile development methodology",
                  "Competitive pricing with transparent billing",
                  "Long-term partnership approach",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-cyan-100 to-green-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10"></div>
                  <div className="text-center relative z-10">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-600 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl">
                      <Award className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Excellence Driven</h3>
                    <p className="text-gray-600 max-w-xs">
                      Committed to delivering outstanding results that exceed expectations
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
