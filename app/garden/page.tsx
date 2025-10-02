"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Flower2 } from "lucide-react"

export default function MagicGarden() {
  const [flowers, setFlowers] = useState<
    { id: number; bloomed: boolean; x: number; y: number; delay: number; color: string }[]
  >([])
  const [selectedFlower, setSelectedFlower] = useState<number | null>(null)

  useEffect(() => {
    const flowerArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      bloomed: false,
      x: (i % 10) * 10 + 5,
      y: Math.floor(i / 10) * 20 + 10,
      delay: Math.random() * 3,
      color: ["pink", "purple", "violet", "fuchsia"][Math.floor(Math.random() * 4)],
    }))
    setFlowers(flowerArray)

    flowerArray.forEach((_, index) => {
      setTimeout(() => {
        setFlowers((prev) => prev.map((f, i) => (i === index ? { ...f, bloomed: true } : f)))
      }, index * 100)
    })
  }, [])

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-pink-50 via-purple-50 to-violet-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 p-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 text-xl font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          Back to Story
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient-magical mb-6">Magic Garden</h1>
          <p className="text-2xl text-purple-600/90 max-w-3xl mx-auto">
            Click on each flower to reveal a precious memory
          </p>
        </div>

        <div className="relative w-full max-w-7xl mx-auto" style={{ minHeight: "1000px" }}>
          {flowers.map((flower) => (
            <button
              key={flower.id}
              onClick={() => setSelectedFlower(flower.id)}
              className={`absolute transition-all duration-1000 transform hover:scale-125 ${
                flower.bloomed ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              style={{
                left: `${flower.x}%`,
                top: `${flower.y}%`,
                transitionDelay: `${flower.delay}s`,
              }}
            >
              <Flower2
                className={`w-16 h-16 text-${flower.color}-400 hover:text-${flower.color}-500 transition-colors animate-bounce-gentle`}
                fill="currentColor"
              />
            </button>
          ))}
        </div>

        {selectedFlower !== null && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedFlower(null)}
          >
            <div className="bg-white rounded-3xl p-8 max-w-4xl w-full animate-bounce-in">
              <img
                src={`/romantic-couple-memory-.jpg?height=600&width=800&query=romantic couple memory ${selectedFlower}`}
                alt={`Memory ${selectedFlower}`}
                className="w-full h-96 object-cover rounded-2xl mb-6"
              />
              <p className="text-2xl text-purple-600 text-center font-medium">
                A beautiful moment from our garden of memories
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
