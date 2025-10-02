"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"

export default function IceCreamPage() {
  const [selectedScoop, setSelectedScoop] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  const scoops = Array.from({ length: 300 }, (_, i) => ({
    id: i,
    flavor: ["Strawberry", "Vanilla", "Mint", "Lavender", "Bubblegum", "Blueberry"][i % 6],
    color: ["#fda4af", "#fef3c7", "#86efac", "#e9d5ff", "#fbcfe8", "#93c5fd"][i % 6],
    image: `/placeholder.svg?height=400&width=400&query=happy couple memory ${i + 1}`,
  }))

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-float-magical"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            🍦
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 mb-8 text-lg font-medium transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Sweet Shop
        </Link>

        <div
          className={`text-center mb-16 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-12 h-12 text-cyan-400 animate-twinkle" />
            <h1 className="text-6xl md:text-8xl font-bold text-gradient-candy animate-gradient">Ice Cream Parlor</h1>
            <Sparkles className="w-12 h-12 text-cyan-400 animate-twinkle" style={{ animationDelay: "1s" }} />
          </div>
          <p className="text-2xl text-cyan-600/90 max-w-2xl mx-auto leading-relaxed">
            Pick your favorite flavor and scoop up a frozen memory!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {scoops.map((scoop, index) => (
            <button
              key={scoop.id}
              onClick={() => setSelectedScoop(scoop.id)}
              className="group relative aspect-square rounded-3xl overflow-hidden transform hover:scale-110 transition-all duration-500 hover:z-10 border-4 border-white shadow-lg"
              style={{
                backgroundColor: scoop.color,
                animationDelay: `${index * 0.01}s`,
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="text-5xl mb-2 group-hover:scale-125 transition-transform duration-500">🍦</div>
                <div className="text-white font-bold text-sm text-center drop-shadow-lg">{scoop.flavor}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {selectedScoop !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedScoop(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full p-8 relative animate-in zoom-in duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedScoop(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-cyan-100 hover:bg-cyan-200 flex items-center justify-center text-2xl transition-colors"
            >
              ×
            </button>
            <div className="text-center mb-6">
              <div className="text-7xl mb-4">🍦</div>
              <h3 className="text-3xl font-bold text-cyan-700 mb-2">{scoops[selectedScoop].flavor} Memory</h3>
            </div>
            <img
              src={scoops[selectedScoop].image || "/placeholder.svg"}
              alt={`Memory ${selectedScoop + 1}`}
              className="w-full aspect-video object-cover rounded-2xl"
            />
          </div>
        </div>
      )}
    </main>
  )
}
