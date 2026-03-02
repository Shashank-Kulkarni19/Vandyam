import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, BookOpen } from "lucide-react"

export default function ArticlesPage() {
  const articles = [
    {
      title: "The Future of Smart Surveillance Technology",
      author: "Tech Team",
      date: "December 15, 2024",
      category: "Technology",
      description: "Explore how AI-powered surveillance is revolutionizing security across industries and environments.",
      readTime: "5 min read"
    },
    {
      title: "Forest Monitoring: Protecting Our Natural Resources",
      author: "Environmental Team",
      date: "December 10, 2024",
      category: "Environmental",
      description: "Learn how advanced monitoring systems help protect forests from illegal activities and environmental threats.",
      readTime: "7 min read"
    },
    {
      title: "Smart City Infrastructure: Building Tomorrow's Cities",
      author: "Urban Planning Team",
      date: "December 5, 2024",
      category: "Smart Cities",
      description: "Discover how intelligent infrastructure is transforming urban environments for better living.",
      readTime: "6 min read"
    },
    {
      title: "Highway Safety: Advanced Monitoring Solutions",
      author: "Safety Team",
      date: "November 28, 2024",
      category: "Transportation",
      description: "Understanding how smart monitoring systems enhance highway safety and traffic management.",
      readTime: "4 min read"
    },
  ]

  const categories = [
    "Technology Innovation",
    "Environmental Protection",
    "Smart Cities",
    "Transportation Safety",
    "Industry Insights",
    "Case Studies",
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Latest Articles</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Stay updated with the latest insights and innovations in smart monitoring technology
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Browse All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Knowledge Hub</h2>
            <p className="text-lg text-gray-600">
              Dive deep into the world of smart monitoring and surveillance technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Expertise</h3>
              <p className="text-gray-600 mb-6">
                Our team of experts shares insights on cutting-edge technology, industry trends, and innovative solutions 
                that are shaping the future of monitoring and surveillance across various sectors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Technology insights and innovations</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Industry best practices and case studies</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Future trends and predictions</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <img src="/placeholder.svg?height=300&width=400" alt="Article content" className="rounded-lg" />
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Article Categories</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Recent Articles</h2>
            <p className="text-lg text-gray-600">Discover our latest insights and industry updates</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                      <CardDescription className="text-base mb-4">{article.description}</CardDescription>
                    </div>
                    <Button>Read More</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {article.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
