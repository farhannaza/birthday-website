"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

const scrapbookPages = [
  {
    title: "Our First Date",
    date: "January 2023",
    photos: ["/romantic-first-date-restaurant.png", "/couple-holding-hands-first-date.jpg"],
    note: "The day everything changed. I knew from the moment I saw your smile that you were special.",
  },
  {
    title: "Summer Adventures",
    date: "July 2023",
    photos: ["/couple-beach-sunset.png", "/summer-picnic-couple.jpg", "/hiking-couple-mountains.jpg"],
    note: "Every adventure is better with you by my side. These sunny days will forever be in my heart.",
  },
  {
    title: "Cozy Moments",
    date: "October 2023",
    photos: ["/couple-cozy-home-autumn.jpg", "/couple-cooking-kitchen.png"],
    note: "The quiet moments with you are my favorite. Just us, being perfectly ourselves.",
  },
  {
    title: "Winter Wonderland",
    date: "December 2023",
    photos: ["/couple-in-snow-winter.jpg", "/couple-ice-skating.jpg", "/couple-hot-chocolate-winter.jpg"],
    note: "You make every season magical, but winter with you is pure enchantment.",
  },
]

export default function ScrapbookPage() {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % scrapbookPages.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + scrapbookPages.length) % scrapbookPages.length)
  }

  const page = scrapbookPages[currentPage]

  return (
    <main className="min-h-screen bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" size="lg" className="mb-8 group">
            <Home className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back Home
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">Our Scrapbook</h1>
            <p className="text-xl text-muted-foreground">
              Page {currentPage + 1} of {scrapbookPages.length}
            </p>
          </div>

          <div className="relative bg-card border-4 border-border rounded-3xl p-8 md:p-12 shadow-2xl min-h-[600px] animate-bounce-in">
            <div className="absolute top-4 left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />

            <div className="relative space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">{page.title}</h2>
                <p className="text-xl text-primary font-medium">{page.date}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {page.photos.map((photo, idx) => (
                  <div
                    key={idx}
                    className="relative group"
                    style={{
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    <div className="relative bg-white p-3 rounded-xl shadow-lg transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300">
                      <img
                        src={photo || "/placeholder.svg"}
                        alt={`Memory ${idx + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-muted/50 rounded-2xl p-6 md:p-8 border-2 border-border">
                <p className="text-lg md:text-xl text-center italic leading-relaxed text-pretty">"{page.note}"</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={prevPage}
              size="lg"
              variant="outline"
              className="group hover:border-primary/50 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Previous
            </Button>
            <Button
              onClick={nextPage}
              size="lg"
              variant="outline"
              className="group hover:border-primary/50 bg-transparent"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
