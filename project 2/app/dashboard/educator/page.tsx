"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Video, Users, TrendingUp, Plus, Calendar, BarChart3, Settings, Bell, Edit, Eye } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function EducatorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const upcomingClasses = [
    {
      id: 1,
      title: "Advanced Mathematics - Calculus",
      students: 24,
      time: "2:00 PM - 3:30 PM",
      date: "Today",
      isLive: true,
    },
    {
      id: 2,
      title: "Mathematics Basics",
      students: 18,
      time: "4:00 PM - 5:00 PM",
      date: "Today",
      isLive: false,
    },
    {
      id: 3,
      title: "Advanced Calculus",
      students: 15,
      time: "10:00 AM - 11:30 AM",
      date: "Tomorrow",
      isLive: false,
    },
  ]

  const courses = [
    {
      id: 1,
      title: "Complete Mathematics Course",
      students: 156,
      lessons: 24,
      rating: 4.8,
      revenue: "$2,340",
      status: "Published",
    },
    {
      id: 2,
      title: "Advanced Calculus",
      students: 89,
      lessons: 18,
      rating: 4.9,
      revenue: "$1,780",
      status: "Published",
    },
    {
      id: 3,
      title: "Mathematics for Beginners",
      students: 203,
      lessons: 16,
      rating: 4.7,
      revenue: "$3,045",
      status: "Published",
    },
  ]

  return (
    <DashboardLayout userType="educator">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Dr. Johnson!</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage your courses and connect with students</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Course
            </Button>
            <Button variant="outline">
              <Video className="h-4 w-4 mr-2" />
              Start Live Class
            </Button>
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
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">448</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">1 in draft</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$7,165</div>
              <p className="text-xs text-muted-foreground">+18% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">⭐ Excellent rating</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Upcoming Classes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Upcoming Live Classes
                </CardTitle>
                <CardDescription>Your scheduled live sessions</CardDescription>
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
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {class_.students} students enrolled
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
                          {class_.isLive ? "Join Now" : "Start Class"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">John Doe</span> completed "Integration Techniques" lesson
                      </p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">Sarah Miller</span> asked a question in "Advanced Calculus"
                      </p>
                      <p className="text-xs text-gray-500">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>RJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">Robert Johnson</span> left a 5-star review
                      </p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Courses</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create New Course
              </Button>
            </div>

            <div className="grid gap-6">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <span>{course.students} students</span>
                          <span>{course.lessons} lessons</span>
                          <span>⭐ {course.rating}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{course.status}</Badge>
                        <p className="text-lg font-semibold text-green-600 mt-1">{course.revenue}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                      <Button size="sm">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Analytics
                      </Button>
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
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {class_.students} students enrolled
                          </p>
                        </div>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button size="sm">
                          <Video className="h-4 w-4 mr-2" />
                          Start Class
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Student Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">87%</div>
                    <p className="text-gray-600 dark:text-gray-400">Average completion rate</p>
                    <p className="text-sm text-gray-500 mt-2">+5% from last month</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">+18%</div>
                    <p className="text-gray-600 dark:text-gray-400">Monthly growth</p>
                    <p className="text-sm text-gray-500 mt-2">$7,165 this month</p>
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
