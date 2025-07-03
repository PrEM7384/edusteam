"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Video, Calendar, Award, Clock, Play, Users, TrendingUp, Bell, Settings } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const upcomingClasses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      instructor: "Dr. Sarah Johnson",
      time: "2:00 PM - 3:30 PM",
      date: "Today",
      subject: "Calculus",
      isLive: true,
    },
    {
      id: 2,
      title: "Physics Fundamentals",
      instructor: "Prof. Michael Chen",
      time: "4:00 PM - 5:00 PM",
      date: "Today",
      subject: "Mechanics",
      isLive: false,
    },
    {
      id: 3,
      title: "Chemistry Lab",
      instructor: "Dr. Emily Davis",
      time: "10:00 AM - 11:30 AM",
      date: "Tomorrow",
      subject: "Organic Chemistry",
      isLive: false,
    },
  ]

  const enrolledCourses = [
    {
      id: 1,
      title: "Complete Mathematics Course",
      instructor: "Dr. Sarah Johnson",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      nextLesson: "Integration Techniques",
    },
    {
      id: 2,
      title: "Physics for Beginners",
      instructor: "Prof. Michael Chen",
      progress: 45,
      totalLessons: 20,
      completedLessons: 9,
      nextLesson: "Newton's Laws",
    },
    {
      id: 3,
      title: "Organic Chemistry Basics",
      instructor: "Dr. Emily Davis",
      progress: 60,
      totalLessons: 16,
      completedLessons: 10,
      nextLesson: "Reaction Mechanisms",
    },
  ]

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, John!</h1>
            <p className="text-gray-600 dark:text-gray-400">Ready to continue your learning journey?</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hours Learned</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47.5</div>
              <p className="text-xs text-muted-foreground">+12.5 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">1 in progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">60%</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Live Classes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Upcoming Live Classes
                </CardTitle>
                <CardDescription>Join your scheduled live sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingClasses.map((class_) => (
                    <div key={class_.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                          <AvatarFallback>
                            {class_.instructor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{class_.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{class_.instructor}</p>
                          <p className="text-sm text-gray-500">
                            {class_.date} • {class_.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {class_.isLive && (
                          <Badge variant="destructive" className="animate-pulse">
                            LIVE
                          </Badge>
                        )}
                        <Button size="sm" variant={class_.isLive ? "default" : "outline"}>
                          {class_.isLive ? "Join Now" : "Set Reminder"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Continue Learning */}
            <Card>
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {enrolledCourses.slice(0, 2).map((course) => (
                    <div key={course.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{course.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{course.instructor}</p>
                        </div>
                        <Badge variant="secondary">{course.progress}%</Badge>
                      </div>
                      <Progress value={course.progress} className="mb-3" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Next: {course.nextLesson}</p>
                      <Button size="sm" className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        Continue
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{course.instructor}</p>
                      </div>
                      <Badge variant="secondary">{course.progress}% Complete</Badge>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>
                          {course.completedLessons}/{course.totalLessons} lessons
                        </span>
                      </div>
                      <Progress value={course.progress} />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next: {course.nextLesson}</p>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">
                          View Course
                        </Button>
                        <Button size="sm">
                          <Play className="h-4 w-4 mr-2" />
                          Continue
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  This Week's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingClasses.map((class_) => (
                    <div key={class_.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-sm font-medium">{class_.date}</div>
                          <div className="text-xs text-gray-500">{class_.time}</div>
                        </div>
                        <div>
                          <h3 className="font-semibold">{class_.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{class_.instructor}</p>
                          <Badge variant="outline" className="mt-1">
                            {class_.subject}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Users className="h-4 w-4 mr-2" />
                        Join Class
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Streak</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">7</div>
                    <p className="text-gray-600 dark:text-gray-400">Days in a row</p>
                    <p className="text-sm text-gray-500 mt-2">Keep it up! 🔥</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Award className="h-8 w-8 text-yellow-500" />
                      <div>
                        <p className="font-medium">First Course Completed</p>
                        <p className="text-sm text-gray-500">Earned 2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-8 w-8 text-blue-500" />
                      <div>
                        <p className="font-medium">7-Day Streak</p>
                        <p className="text-sm text-gray-500">Earned today</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
