"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Star } from "lucide-react"

export default function StarryNight() {
  const [connectedStars, setConnectedStars] = useState<number[]>([])
  const [selectedStar, setSelectedStar] = useState<number | null>(null)
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 90 + 5,
    y: Math.random() * 80 + 10,
  }))

  const connectStar = (id: number) => {
    if (!connectedStars.includes(id)) {
      setConnectedStars([...connectedStars, id])
    }
    setSelectedStar(id)
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-violet-800">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-200 hover:text-white text-xl font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          Back to Story
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">Starry Night</h1>
          <p className="text-2xl text-purple-200 max-w-3xl mx-auto">
            Connect the stars to reveal our constellation of love
          </p>
          <p className="text-xl text-purple-300 mt-4">
            Connected: {connectedStars.length} / {stars.length}
          </p>
        </div>

        <div className="relative w-full max-w-7xl mx-auto" style={{ minHeight: "1000px" }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connectedStars.map((starId, index) => {
              if (index === 0) return null
              const prevStar = stars.find((s) => s.id === connectedStars[index - 1])
              const currentStar = stars.find((s) => s.id === starId)
              if (!prevStar || !currentStar) return null

              return (
                <line
                  key={`${prevStar.id}-${currentStar.id}`}
                  x1={`${prevStar.x}%`}
                  y1={`${prevStar.y}%`}
                  x2={`${currentStar.x}%`}
                  y2={`${currentStar.y}%`}
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
              )
            })}
          </svg>

          {stars.map((star) => (
            <button
              key={star.id}
              onClick={() => connectStar(star.id)}
              className={`absolute transition-all duration-500 hover:scale-150 ${
                connectedStars.includes(star.id) ? "animate-pulse-glow" : ""
              }`}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <Star
                className={`w-12 h-12 ${
                  connectedStars.includes(star.id) ? "text-yellow-300" : "text-purple-300"
                } hover:text-yellow-200 transition-colors`}
                fill="currentColor"
              />
            </button>
          ))}
        </div>

        {selectedStar !== null && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStar(null)}
          >
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-8 max-w-4xl w-full animate-bounce-in border-4 border-purple-400">
              <img
                src={`/starry-night-romantic-memory-.jpg?height=600&width=800&query=starry night romantic memory ${selectedStar}`}
                alt={`Star ${selectedStar}`}
                className="w-full h-96 object-cover rounded-2xl mb-6"
              />
              <p className="text-2xl text-purple-200 text-center font-medium">
                Star #{selectedStar + 1} in our constellation
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
