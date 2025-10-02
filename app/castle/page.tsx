"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Cloud } from "lucide-react"

export default function SkyCastle() {
  const [clouds, setClouds] = useState<{ id: number; x: number; y: number; size: number; speed: number }[]>([])
  const [selectedCloud, setSelectedCloud] = useState<number | null>(null)

  useEffect(() => {
    const cloudArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 90,
      y: Math.random() * 80 + 10,
      size: Math.random() * 40 + 60,
      speed: Math.random() * 20 + 10,
    }))
    setClouds(cloudArray)
  }, [])

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-purple-200 via-pink-100 to-blue-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ⭐
          </div>
        ))}
      </div>

      <div className="relative z-10 p-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-800 text-xl font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          Back to Story
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient-magical mb-6">Sky Castle</h1>
          <p className="text-2xl text-purple-700/90 max-w-3xl mx-auto">
            Float through our dreamy memories in the clouds
          </p>
        </div>

        <div className="relative w-full max-w-7xl mx-auto" style={{ minHeight: "1200px" }}>
          {clouds.map((cloud) => (
            <button
              key={cloud.id}
              onClick={() => setSelectedCloud(cloud.id)}
              className="absolute transition-all duration-500 hover:scale-110 animate-float"
              style={{
                left: `${cloud.x}%`,
                top: `${cloud.y}%`,
                animationDuration: `${cloud.speed}s`,
              }}
            >
              <div className="relative">
                <Cloud
                  className="text-white/80 hover:text-white transition-colors drop-shadow-lg"
                  style={{ width: `${cloud.size}px`, height: `${cloud.size}px` }}
                  fill="currentColor"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">{cloud.id + 1}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedCloud !== null && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCloud(null)}
          >
            <div className="bg-white rounded-3xl p-8 max-w-4xl w-full animate-bounce-in">
              <img
                src={`/couple-floating-in-clouds-memory-.jpg?height=600&width=800&query=couple floating in clouds memory ${selectedCloud}`}
                alt={`Cloud Memory ${selectedCloud}`}
                className="w-full h-96 object-cover rounded-2xl mb-6"
              />
              <p className="text-2xl text-purple-600 text-center font-medium">A dreamy moment from our sky castle</p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
