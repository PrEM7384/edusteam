import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, Users, BookOpen, Award, Play, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            🚀 Next Generation Learning Platform
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            EduStream
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Experience live interactive education with real-time video, screen sharing, and collaborative learning tools
            designed for the modern classroom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Teaching <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/auth/signup?role=student">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Join as Student
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose EduStream?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Powerful features designed for modern education</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Video className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <CardTitle>Live Video Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>HD video streaming with WebRTC technology for seamless live classes</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <CardTitle>Interactive Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Real-time chat, polls, quizzes, and collaborative whiteboards</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="h-12 w-12 mx-auto text-purple-600 mb-4" />
              <CardTitle>Course Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Complete course creation tools with videos, notes, and assessments</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Award className="h-12 w-12 mx-auto text-orange-600 mb-4" />
              <CardTitle>Progress Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Advanced analytics and progress tracking for students and educators</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">See EduStream in Action</h2>
          <p className="text-xl mb-8 opacity-90">Experience the future of online education with our interactive demo</p>
          <Link href="/demo">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-gray-600 dark:text-gray-300">Active Students</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-300">Expert Educators</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">1,000+</div>
            <div className="text-gray-600 dark:text-gray-300">Courses Available</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
