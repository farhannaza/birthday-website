"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Heart } from "lucide-react"

export default function HeartsPage() {
  const [selectedHeart, setSelectedHeart] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  const messages = [
    "You make every day sweeter",
    "My favorite person in the world",
    "Forever grateful for you",
    "You're my happy place",
    "Love you to the moon and back",
    "My cutie pie forever",
    "You light up my life",
    "Best decision I ever made",
    "My partner in everything",
    "You complete me",
  ]

  const hearts = Array.from({ length: 300 }, (_, i) => ({
    id: i,
    message: messages[i % messages.length],
    image: `/placeholder.svg?height=400&width=400&query=loving couple moment ${i + 1}`,
    color: ["#fda4af", "#f472b6", "#ec4899", "#db2777", "#be185d"][i % 5],
  }))

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <Heart className="w-8 h-8 text-pink-300 fill-pink-300" />
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-8 text-lg font-medium transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Sweet Shop
        </Link>

        <div
          className={`text-center mb-16 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Heart className="w-12 h-12 text-rose-400 fill-rose-400 animate-pulse-heart" />
            <h1 className="text-6xl md:text-8xl font-bold text-gradient-candy animate-gradient">Candy Hearts</h1>
            <Heart className="w-12 h-12 text-rose-400 fill-rose-400 animate-pulse-heart" />
          </div>
          <p className="text-2xl text-rose-600/90 max-w-2xl mx-auto leading-relaxed">
            Sweet messages written just for you, my love
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {hearts.map((heart, index) => (
            <button
              key={heart.id}
              onClick={() => setSelectedHeart(heart.id)}
              className="group relative aspect-square rounded-3xl overflow-hidden transform hover:scale-110 transition-all duration-500 hover:z-10 shadow-lg"
              style={{
                backgroundColor: heart.color,
                animationDelay: `${index * 0.01}s`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <p className="text-white font-bold text-center text-sm leading-relaxed drop-shadow-lg">
                  {heart.message}
                </p>
              </div>
              <div className="absolute top-2 right-2">
                <Heart className="w-6 h-6 text-white/50 fill-white/50 group-hover:scale-125 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedHeart !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedHeart(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full p-8 relative animate-in zoom-in duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedHeart(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-rose-100 hover:bg-rose-200 flex items-center justify-center text-2xl transition-colors"
            >
              ×
            </button>
            <div className="text-center mb-6">
              <Heart className="w-16 h-16 text-rose-500 fill-rose-500 mx-auto mb-4 animate-pulse-heart" />
              <h3 className="text-3xl font-bold text-rose-700 mb-4">{hearts[selectedHeart].message}</h3>
            </div>
            <img
              src={hearts[selectedHeart].image || "/placeholder.svg"}
              alt={`Memory ${selectedHeart + 1}`}
              className="w-full aspect-video object-cover rounded-2xl"
            />
          </div>
        </div>
      )}
    </main>
  )
}
