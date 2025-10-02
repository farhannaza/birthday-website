"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart } from "lucide-react"
import Image from "next/image"

const timelineEvents = [
  {
    date: "January 2023",
    title: "First Meeting",
    description: "The day our story began. I'll never forget the moment I first saw you.",
    photos: ["/couple-first-meeting.png"],
  },
  {
    date: "March 2023",
    title: "First Date",
    description: "Our magical first date that lasted until the stars came out.",
    photos: ["/romantic-dinner.png"],
  },
  {
    date: "June 2023",
    title: "Summer Adventures",
    description: "Beach trips, sunset walks, and endless laughter together.",
    photos: ["/beach-sunset-couple.png", "/summer-adventure.jpg"],
  },
  {
    date: "September 2023",
    title: "Fall Memories",
    description: "Cozy moments, pumpkin patches, and falling deeper in love.",
    photos: ["/autumn-couple.jpg"],
  },
  {
    date: "December 2023",
    title: "Winter Wonderland",
    description: "Holiday magic and warm embraces in the cold winter nights.",
    photos: ["/winter-couple-snow.jpg", "/christmas-lights-couple.jpg"],
  },
  {
    date: "2024",
    title: "Our Journey Continues",
    description: "Every day with you is a new adventure. Here's to many more memories!",
    photos: ["/happy-couple-together.jpg"],
  },
]

export default function TimelinePage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Timeline</h1>
          <p className="text-xl text-muted-foreground">Every moment with you is a treasure</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative mb-16 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background" />

              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-16" : "md:ml-16"}`}>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                    <span className="text-sm font-semibold text-primary">{event.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>

                  <div className={`grid gap-4 ${event.photos.length > 1 ? "grid-cols-2" : ""}`}>
                    {event.photos.map((photo, photoIndex) => (
                      <div key={photoIndex} className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={photo || "/placeholder.svg"}
                          alt={`${event.title} photo ${photoIndex + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
