"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Video, VideoOff, Mic, MicOff, Monitor, Users, MessageSquare, Hand, Phone, Send } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function LiveClassPage() {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [isHandRaised, setIsHandRaised] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Dr. Sarah Johnson",
      message: "Welcome everyone! Today we'll be covering advanced calculus concepts.",
      time: "2:00 PM",
      isInstructor: true,
    },
    {
      id: 2,
      user: "John Doe",
      message: "Thank you, Dr. Johnson. I'm excited for today's lesson!",
      time: "2:01 PM",
      isInstructor: false,
    },
    {
      id: 3,
      user: "Sarah Miller",
      message: "Could you please share the presentation?",
      time: "2:02 PM",
      isInstructor: false,
    },
  ])

  const videoRef = useRef<HTMLVideoElement>(null)
  const [participants] = useState([
    { id: 1, name: "Dr. Sarah Johnson", isInstructor: true, isVideoOn: true, isAudioOn: true },
    { id: 2, name: "John Doe", isInstructor: false, isVideoOn: true, isAudioOn: true },
    { id: 3, name: "Sarah Miller", isInstructor: false, isVideoOn: false, isAudioOn: true },
    { id: 4, name: "Mike Chen", isInstructor: false, isVideoOn: true, isAudioOn: false },
    { id: 5, name: "Emma Wilson", isInstructor: false, isVideoOn: true, isAudioOn: true },
  ])

  useEffect(() => {
    // Initialize camera
    if (videoRef.current && isVideoOn) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch((err) => console.error("Error accessing camera:", err))
    }
  }, [isVideoOn])

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: "You",
        message: message.trim(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isInstructor: false,
      }
      setMessages([...messages, newMessage])
      setMessage("")
    }
  }

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn)
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      const videoTrack = stream.getVideoTracks()[0]
      if (videoTrack) {
        videoTrack.enabled = !isVideoOn
      }
    }
  }

  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn)
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      const audioTrack = stream.getAudioTracks()[0]
      if (audioTrack) {
        audioTrack.enabled = !isAudioOn
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <div className="flex h-[calc(100vh-64px)]">
        {/* Main Video Area */}
        <div className="flex-1 flex flex-col">
          {/* Main Video */}
          <div className="flex-1 relative bg-black">
            {isScreenSharing ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-800">
                <div className="text-center text-white">
                  <Monitor className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-xl">Screen sharing simulation</p>
                  <p className="text-gray-400">Instructor's screen would appear here</p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800">
                <div className="text-center text-white">
                  <Video className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-xl">Dr. Sarah Johnson</p>
                  <p className="text-gray-400">Main instructor video</p>
                </div>
              </div>
            )}

            {/* Your video (Picture-in-Picture) */}
            <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-700 rounded-lg overflow-hidden">
              {isVideoOn ? (
                <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-600">
                  <VideoOff className="h-8 w-8 text-gray-400" />
                </div>
              )}
              <div className="absolute bottom-2 left-2 text-white text-sm">You</div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-4 bg-gray-800 bg-opacity-90 rounded-full px-6 py-3">
                <Button
                  variant={isAudioOn ? "secondary" : "destructive"}
                  size="icon"
                  onClick={toggleAudio}
                  className="rounded-full"
                >
                  {isAudioOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                </Button>

                <Button
                  variant={isVideoOn ? "secondary" : "destructive"}
                  size="icon"
                  onClick={toggleVideo}
                  className="rounded-full"
                >
                  {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                </Button>

                <Button
                  variant={isScreenSharing ? "default" : "secondary"}
                  size="icon"
                  onClick={() => setIsScreenSharing(!isScreenSharing)}
                  className="rounded-full"
                >
                  <Monitor className="h-4 w-4" />
                </Button>

                <Button
                  variant={isHandRaised ? "default" : "secondary"}
                  size="icon"
                  onClick={() => setIsHandRaised(!isHandRaised)}
                  className="rounded-full"
                >
                  <Hand className="h-4 w-4" />
                </Button>

                <Button variant="destructive" size="icon" className="rounded-full">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Class Info */}
            <div className="absolute top-4 left-4">
              <Card className="bg-black bg-opacity-50 border-gray-600">
                <CardContent className="p-4">
                  <h2 className="text-white font-semibold">Advanced Mathematics - Calculus</h2>
                  <p className="text-gray-300 text-sm">Dr. Sarah Johnson</p>
                  <div className="flex items-center mt-2">
                    <Badge variant="destructive" className="animate-pulse mr-2">
                      LIVE
                    </Badge>
                    <span className="text-gray-300 text-sm">24 participants</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-white dark:bg-gray-800 border-l">
          <Tabs defaultValue="chat" className="h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-2 m-2">
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="participants" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Participants
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="flex-1 flex flex-col m-2 mt-0">
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className="flex space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>
                          {msg.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">{msg.user}</span>
                          {msg.isInstructor && (
                            <Badge variant="secondary" className="text-xs">
                              Instructor
                            </Badge>
                          )}
                          <span className="text-xs text-gray-500">{msg.time}</span>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="flex space-x-2 mt-4">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1"
                />
                <Button onClick={sendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="participants" className="flex-1 m-2 mt-0">
              <ScrollArea className="h-full">
                <div className="space-y-2">
                  {participants.map((participant) => (
                    <div
                      key={participant.id}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>
                            {participant.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{participant.name}</p>
                          {participant.isInstructor && (
                            <Badge variant="secondary" className="text-xs">
                              Instructor
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {participant.isVideoOn ? (
                          <Video className="h-4 w-4 text-green-500" />
                        ) : (
                          <VideoOff className="h-4 w-4 text-gray-400" />
                        )}
                        {participant.isAudioOn ? (
                          <Mic className="h-4 w-4 text-green-500" />
                        ) : (
                          <MicOff className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
