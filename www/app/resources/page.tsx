import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, Video, Download } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      title: "Complete Guide to Precision Agriculture",
      type: "E-book",
      description: "Comprehensive guide covering all aspects of modern precision farming techniques.",
      downloadUrl: "#",
    },
    {
      icon: <FileText className="h-8 w-8 text-green-500" />,
      title: "Crop Monitoring Best Practices",
      type: "Whitepaper",
      description: "Research-backed strategies for effective crop health monitoring and management.",
      downloadUrl: "#",
    },
    {
      icon: <Video className="h-8 w-8 text-red-500" />,
      title: "Getting Started with Smart Farming",
      type: "Video Tutorial",
      description: "Step-by-step video guide to implementing smart farming technologies.",
      downloadUrl: "#",
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      title: "ROI Calculator for Agricultural Technology",
      type: "Tool",
      description: "Calculate the return on investment for various agricultural technology solutions.",
      downloadUrl: "#",
    },
  ]

  const blogPosts = [
    {
      title: "The Future of Sustainable Agriculture",
      excerpt: "Exploring how technology is shaping the future of environmentally responsible farming.",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Maximizing Crop Yields with Data Analytics",
      excerpt: "Learn how data-driven insights can significantly improve your crop productivity.",
      date: "March 10, 2024",
      readTime: "7 min read",
    },
    {
      title: "Smart Irrigation: Saving Water and Money",
      excerpt: "Discover how intelligent irrigation systems can reduce costs while conserving water.",
      date: "March 5, 2024",
      readTime: "4 min read",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources & Knowledge</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Access our comprehensive library of agricultural insights and tools
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Download Resources</h2>
            <p className="text-lg text-gray-600">Free guides, whitepapers, and tools to help you succeed</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      {resource.icon}
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <div className="text-sm text-teal-600 font-medium">{resource.type}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{resource.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Latest Insights</h2>
            <p className="text-lg text-gray-600">Stay updated with the latest trends and insights in agriculture</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <img src="https://placehold.co/600x400/3b82f6/white?text=Insight+Image" alt={post.title} className="rounded-lg w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{post.excerpt}</CardDescription>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter for the latest agricultural insights and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg text-gray-800" />
            <Button className="bg-teal-500 hover:bg-teal-600">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
