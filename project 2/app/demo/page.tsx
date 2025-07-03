"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Volume2, Maximize, Users, MessageSquare, Video } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  const features = [
    {
      title: "HD Video Streaming",
      description: "Crystal clear video quality with adaptive bitrate streaming",
      icon: Video,
    },
    {
      title: "Real-time Chat",
      description: "Interactive messaging with emoji support and file sharing",
      icon: MessageSquare,
    },
    {
      title: "Multi-participant",
      description: "Support for up to 100 participants in a single session",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            🎥 Interactive Demo
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Experience EduStream Live</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how our platform transforms online education with real-time video, interactive features, and seamless
            collaboration tools.
          </p>
        </div>

        {/* Demo Video Player */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <div className="relative aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {isPlaying ? <Pause className="h-12 w-12" /> : <Play className="h-12 w-12 ml-1" />}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{isPlaying ? "Demo Playing" : "Click to Play Demo"}</h3>
                  <p className="text-gray-300">
                    {isPlaying ? "Showing live class simulation" : "5 minute interactive demo"}
                  </p>
                </div>
              </div>

              <Button
                className="absolute inset-0 w-full h-full bg-transparent hover:bg-black/20 border-0"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <span className="sr-only">{isPlaying ? "Pause" : "Play"} demo</span>
              </Button>

              {/* Demo Controls */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between bg-black/50 rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                    <span className="text-white text-sm">2:34 / 5:00</span>
                  </div>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Demo Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <feature.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Try Live Demo */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Try It Live?</h2>
          <p className="text-xl mb-8 opacity-90">Join a sample live class and experience the full EduStream platform</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/live-class">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Join Sample Class
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
