"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"

export default function LollipopsPage() {
  const [selectedLollipop, setSelectedLollipop] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  const lollipops = Array.from({ length: 300 }, (_, i) => ({
    id: i,
    flavor: ["Grape", "Cherry", "Lemon", "Orange", "Watermelon", "Blue Raspberry"][i % 6],
    color: ["#c084fc", "#f43f5e", "#fde047", "#fb923c", "#fb7185", "#60a5fa"][i % 6],
    rotation: Math.random() * 360,
    image: `/placeholder.svg?height=400&width=400&query=joyful couple memory ${i + 1}`,
  }))

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-float-magical"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            🍭
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 mb-8 text-lg font-medium transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Sweet Shop
        </Link>

        <div
          className={`text-center mb-16 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-12 h-12 text-violet-400 animate-twinkle" />
            <h1 className="text-6xl md:text-8xl font-bold text-gradient-candy animate-gradient">Lollipop Garden</h1>
            <Sparkles className="w-12 h-12 text-violet-400 animate-twinkle" style={{ animationDelay: "1s" }} />
          </div>
          <p className="text-2xl text-violet-600/90 max-w-2xl mx-auto leading-relaxed">
            Pick a lollipop from the garden and taste a sweet memory!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {lollipops.map((lollipop, index) => (
            <button
              key={lollipop.id}
              onClick={() => setSelectedLollipop(lollipop.id)}
              className="group relative aspect-square rounded-3xl overflow-hidden transform hover:scale-110 transition-all duration-500 hover:z-10 bg-gradient-to-br from-white to-violet-50 border-4 border-violet-200"
              style={{
                animationDelay: `${index * 0.01}s`,
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div
                  className="text-6xl mb-2 group-hover:scale-125 group-hover:rotate-180 transition-transform duration-700"
                  style={{ transform: `rotate(${lollipop.rotation}deg)` }}
                >
                  🍭
                </div>
                <div className="w-2 h-12 rounded-full" style={{ backgroundColor: lollipop.color }} />
                <div className="text-violet-700 font-bold text-xs text-center mt-2">{lollipop.flavor}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedLollipop !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedLollipop(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full p-8 relative animate-in zoom-in duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLollipop(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-violet-100 hover:bg-violet-200 flex items-center justify-center text-2xl transition-colors"
            >
              ×
            </button>
            <div className="text-center mb-6">
              <div className="text-7xl mb-4">🍭</div>
              <h3 className="text-3xl font-bold text-violet-700 mb-2">{lollipops[selectedLollipop].flavor} Memory</h3>
            </div>
            <img
              src={lollipops[selectedLollipop].image || "/placeholder.svg"}
              alt={`Memory ${selectedLollipop + 1}`}
              className="w-full aspect-video object-cover rounded-2xl"
            />
          </div>
        </div>
      )}
    </main>
  )
}
