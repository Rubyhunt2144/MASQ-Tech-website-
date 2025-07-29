import { Calendar, User, ArrowRight, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollAnimatedSection } from "@/components/scroll-animations"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      excerpt:
        "Explore how artificial intelligence is revolutionizing the way we build and deploy software applications.",
      author: "Mohsin Shahzad",
      date: "2024-01-15",
      category: "AI & Machine Learning",
      image: "/placeholder.svg?height=200&width=400&text=AI+Development",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices for 2024",
      excerpt: "A comprehensive guide to successfully migrating your applications to the cloud with minimal downtime.",
      author: "Saif Ali",
      date: "2024-01-10",
      category: "Cloud Solutions",
      image: "/placeholder.svg?height=200&width=400&text=Cloud+Migration",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Cybersecurity Trends Every Business Should Know",
      excerpt:
        "Stay ahead of cyber threats with these essential security practices and emerging trends in cybersecurity.",
      author: "Ahzaz Ahmed",
      date: "2024-01-05",
      category: "Cybersecurity",
      image: "/placeholder.svg?height=200&width=400&text=Cybersecurity",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Next.js",
      excerpt:
        "Learn how to create high-performance, scalable web applications using Next.js and modern development practices.",
      author: "Ghulam Qadir",
      date: "2023-12-28",
      category: "Web Development",
      image: "/placeholder.svg?height=200&width=400&text=Next.js+Development",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "The Rise of Low-Code Development Platforms",
      excerpt: "Discover how low-code platforms are changing the software development landscape and when to use them.",
      author: "Saif Ali",
      date: "2023-12-20",
      category: "Development",
      image: "/placeholder.svg?height=200&width=400&text=Low+Code",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "DevOps Best Practices for Modern Teams",
      excerpt:
        "Implement DevOps practices that will streamline your development workflow and improve deployment reliability.",
      author: "Ahzaz Ahmed",
      date: "2023-12-15",
      category: "DevOps",
      image: "/placeholder.svg?height=200&width=400&text=DevOps",
      readTime: "9 min read",
    },
  ]

  const categories = ["All", "AI & Machine Learning", "Cloud Solutions", "Cybersecurity", "Web Development", "DevOps"]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Tech <span className="gradient-text">Insights</span> & Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay updated with the latest trends, best practices, and insights from our team of technology experts.
              Discover actionable tips to drive your digital transformation.
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

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-green-100 text-cyan-700 rounded-full font-medium">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {blogPosts[0].author}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
                    <Button className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <ScrollAnimatedSection key={post.id}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Tag className="h-3 w-3" />
                      <span className="text-cyan-600 font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-600 bg-transparent"
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="bg-gradient-to-r from-cyan-600 to-green-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Never Miss an Update</h3>
              <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest tech insights, tutorials, and industry news delivered to
                your inbox.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
              >
                <Link href="#newsletter">Subscribe Now</Link>
              </Button>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </div>
  )
}
