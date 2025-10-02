"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"

export default function BubbleTeaPage() {
  const [poppedBubbles, setPoppedBubbles] = useState<Set<number>>(new Set())
  const [selectedBubble, setSelectedBubble] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  const bubbles = Array.from({ length: 300 }, (_, i) => ({
    id: i,
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
    size: Math.random() * 40 + 60,
    color: ["#c084fc", "#e879f9", "#f0abfc", "#d8b4fe", "#f5d0fe", "#fae8ff"][i % 6],
    delay: Math.random() * 5,
    image: `/placeholder.svg?height=400&width=400&query=couple romantic moment ${i + 1}`,
  }))

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleBubblePop = (id: number) => {
    setPoppedBubbles((prev) => new Set(prev).add(id))
    setSelectedBubble(id)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 text-lg font-medium transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Sweet Shop
        </Link>

        <div
          className={`text-center mb-16 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-12 h-12 text-purple-400 animate-twinkle" />
            <h1 className="text-6xl md:text-8xl font-bold text-gradient-candy animate-gradient">Bubble Tea</h1>
            <Sparkles className="w-12 h-12 text-purple-400 animate-twinkle" style={{ animationDelay: "1s" }} />
          </div>
          <p className="text-2xl text-purple-600/90 max-w-2xl mx-auto leading-relaxed">
            Pop the bubbles to reveal our precious moments together!
          </p>
          <p className="text-lg text-purple-500 mt-4">
            Popped: {poppedBubbles.size} / {bubbles.length}
          </p>
        </div>

        <div className="relative w-full h-[800px] max-w-6xl mx-auto">
          {bubbles.map((bubble) => {
            const isPopped = poppedBubbles.has(bubble.id)
            return (
              <button
                key={bubble.id}
                onClick={() => !isPopped && handleBubblePop(bubble.id)}
                className={`absolute rounded-full transition-all duration-500 ${
                  isPopped ? "scale-0 opacity-0" : "scale-100 opacity-80 hover:opacity-100 hover:scale-110"
                }`}
                style={{
                  left: `${bubble.x}%`,
                  top: `${bubble.y}%`,
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                  backgroundColor: bubble.color,
                  animation: `float-magical ${5 + bubble.delay}s ease-in-out infinite`,
                  animationDelay: `${bubble.delay}s`,
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center text-2xl">🧋</div>
              </button>
            )
          })}
        </div>
      </div>

      {selectedBubble !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedBubble(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full p-8 relative animate-in zoom-in duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBubble(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-2xl transition-colors"
            >
              ×
            </button>
            <div className="text-center mb-6">
              <div className="text-7xl mb-4">🧋</div>
              <h3 className="text-3xl font-bold text-purple-700 mb-2">Bubble Memory #{selectedBubble + 1}</h3>
            </div>
            <img
              src={bubbles[selectedBubble].image || "/placeholder.svg"}
              alt={`Memory ${selectedBubble + 1}`}
              className="w-full aspect-video object-cover rounded-2xl"
            />
          </div>
        </div>
      )}
    </main>
  )
}
