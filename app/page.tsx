import {
  ArrowRight,
  Globe,
  Shield,
  Zap,
  Code,
  ShoppingCart,
  Palette,
  TrendingUp,
  Award,
  BarChart3,
  Smartphone,
  Database,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { AnimatedCounter } from "@/components/animated-counter"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
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
              Future-Ready Cloud & IT Services for Modern Challenges
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Digital Transformation
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent block">
                with Cutting-Edge IT & Cloud Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              <span className="text-cyan-400 font-semibold">Crafting Business From 2025</span>
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="text-green-400 font-semibold">Smarter Solutions for a Seamless Digital Future</span>
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We deliver innovative IT and cloud strategies that streamline operations, boost agility, and help
              businesses thrive in a rapidly evolving digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Link href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-transparent rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="group">
              <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter end={2} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="group">
              <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At MASQ Tech, our people are our strength. We collaborate with clients as true partners to drive growth
              and impact.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Our Company</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-600 mb-6">
              Driving Business Success Through Innovation & Digital Expertise
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Innovative Marketing & Tech Solutions</h4>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We provide cutting-edge digital marketing, website development, and eCommerce solutions tailored to your
                business goals. From concept to execution, our strategies are designed to deliver real growth and
                visibility.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Skilled Team with Proven Industry Experience</h4>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team combines years of experience with a passion for digital excellence. Whether you're a startup or
                an established brand, we bring strategic insights and hands-on expertise to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each
              client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingCart className="h-8 w-8" />,
                title: "E-Commerce Solutions",
                description:
                  "We handle store setup, product optimization, UX design, and conversion strategy to boost your online sales, enhance customer experience, and scale your brand across digital marketplaces.",
                color: "from-blue-500 to-cyan-500",
                link: "/services/ecommerce",
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Website Development",
                description:
                  "Our creative web design services focus on modern aesthetics, responsive layouts, and seamless user experience. We build websites that not only look great but also drive results.",
                color: "from-cyan-500 to-green-500",
                link: "/services/web-development",
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Data Analyst",
                description:
                  "Transform your business data into actionable insights. We provide comprehensive data analysis, visualization, and reporting to help you make informed decisions.",
                color: "from-green-500 to-emerald-500",
                link: "/services/data-analyst",
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Android Developer",
                description:
                  "Create powerful Android applications that engage users and drive business growth. From concept to deployment, we build native Android apps with modern features.",
                color: "from-purple-500 to-indigo-500",
                link: "/services/android-developer",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Digital Marketing",
                description:
                  "Grow your business with targeted digital marketing solutions. We craft and execute data-driven campaigns across social media, email, and paid ads to generate leads and boost sales.",
                color: "from-orange-500 to-red-500",
                link: "/services/digital-marketing",
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "UI/UX Designer",
                description:
                  "Create beautiful and intuitive user experiences that delight your customers. Our design team focuses on user-centered design principles to maximize engagement and conversions.",
                color: "from-pink-500 to-purple-500",
                link: "/services/uiux-designer",
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "Database Administrator",
                description:
                  "Ensure your data is secure, optimized, and always available. We provide comprehensive database management, optimization, and security services for your business applications.",
                color: "from-indigo-500 to-blue-500",
                link: "/services/database-administrator",
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
                  <Button
                    asChild
                    variant="outline"
                    className="w-full hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-600 bg-transparent"
                  >
                    <Link href={service.link}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <Globe className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">IoT-Enabled Solutions</h3>
              <p className="text-gray-600">
                We design smart IoT applications that streamline business processes, reduce downtime, and enhance
                overall operational efficiency.
              </p>
            </Card>
            <Card className="text-center p-8 border-0 shadow-lg">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable IT Practices</h3>
              <p className="text-gray-600">
                Our IT strategies focus on long-term sustainability, reducing environmental impact while maintaining
                high-performance digital systems.
              </p>
            </Card>
            <Card className="text-center p-8 border-0 shadow-lg">
              <Award className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Client Success</h3>
              <p className="text-gray-600">
                With a client-first approach, we ensure every solution is tailored for impact, offering continuous
                support and measurable business outcomes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              IT Solution
              <span className="block text-3xl mt-2">Why Choose Us</span>
            </h2>
            <h3 className="text-2xl font-bold text-cyan-600 mb-6">Building a Smarter Future with Digital Solutions</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              In today's fast-paced, digital-first world, a strong online presence and an effective marketing strategy
              are no longer optional—they're critical for sustainable business growth. At MASQ Tech, we blend
              creativity, advanced technology, and data-driven strategy to create impactful digital experiences that
              resonate with your audience. From building your brand identity to generating qualified leads and driving
              measurable results, we empower businesses to scale confidently in an ever-evolving digital landscape.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 text-lg px-8 py-4 rounded-full"
              >
                <Link href="/contact">Get a Service Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team Members</h2>
            <h3 className="text-2xl font-bold text-cyan-600 mb-6">Meet Our Expert Team</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Saif Ali",
                role: "Lead Developer & Digital Marketer",
                image: "/images/team/saif-ali.png",
                description:
                  "Expert in full-stack development and digital marketing strategies. Leads our development team with 3+ years of experience in creating scalable web applications and driving online growth through innovative marketing campaigns.",
              },
              {
                name: "Ghulam Qadir",
                role: "Android & Web Developer",
                image: "/images/team/ghulam-qadir.png",
                description:
                  "Specialized in Android app development and responsive web design. Creates user-friendly mobile applications and modern websites with focus on performance, user experience, and cross-platform compatibility.",
              },
              {
                name: "Mohsin Shahzad",
                role: "Data Analyst",
                image: "/images/team/mohsin-shahzad.png",
                description:
                  "Transforms complex data into actionable business insights. Expert in data visualization, statistical analysis, and business intelligence to help clients make informed decisions and optimize their operations.",
              },
              {
                name: "Ahzaz Ahmed",
                role: "Software Developer & IoT Expert",
                image: "/images/team/ahzaz-ahmed.png",
                description:
                  "Develops innovative software solutions and IoT applications. Specializes in creating smart systems that connect devices and automate business processes for enhanced efficiency and productivity.",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-cyan-600 font-semibold mb-2 text-sm">{member.role}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Appointment
              <span className="block text-3xl mt-2">Book Appointment</span>
            </h2>
            <h3 className="text-2xl font-bold mb-6">Get a Free Marketing Consultation Today</h3>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Our digital marketing experts are here to help you grow your business. Whether you need a high-performing
              website, a lead-generating ad strategy, or help building a powerful brand online, we'll provide actionable
              insights to set you on the path to success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center text-white mb-12">
            <div>
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Strategic Marketing Planning</h4>
            </div>
            <div>
              <Globe className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Digital Brand Development</h4>
            </div>
            <div>
              <Award className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Business Growth Consulting</h4>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold text-white mb-4">Let's Work Together!</h4>
            <p className="text-cyan-100 mb-8">Just Drop Us a line - masqtech04@gmail.com</p>
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdb2a_wrX48T9gLGhhBmEgCYMm_3CgeS44wubncBNTnvgl8KA/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Work Process
              <span className="block text-3xl mt-2">How We Works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planning & Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                We begin by understanding your business, goals, and challenges. Our team collaborates closely with you
                to create a customized digital strategy tailored for impactful results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development & Execution</h3>
              <p className="text-gray-600 leading-relaxed">
                Once the strategy is finalized, we bring your vision to life. From website development to ad campaign
                launches, every step is executed with precision and purpose.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support & Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Our work doesn't end after launch. We continuously monitor performance, provide support, and optimize
                strategies to ensure sustainable growth and measurable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Recent Posts</h2>
            <h3 className="text-2xl font-bold text-cyan-600 mb-6">Check Our Company Blog</h3>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-600 mb-8">No post Found</p>
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700"
            >
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
