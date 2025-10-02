"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const memories = [
  { id: 1, title: "First Kiss", date: "Feb 14, 2023", x: 20, y: 30, size: "large" },
  { id: 2, title: "Road Trip", date: "Mar 10, 2023", x: 45, y: 20, size: "medium" },
  { id: 3, title: "Movie Night", date: "Apr 5, 2023", x: 70, y: 35, size: "small" },
  { id: 4, title: "Beach Day", date: "May 20, 2023", x: 30, y: 60, size: "large" },
  { id: 5, title: "Concert", date: "Jun 15, 2023", x: 60, y: 55, size: "medium" },
  { id: 6, title: "Cooking Together", date: "Jul 8, 2023", x: 80, y: 70, size: "small" },
  { id: 7, title: "Stargazing", date: "Aug 12, 2023", x: 15, y: 80, size: "large" },
  { id: 8, title: "Coffee Date", date: "Sep 3, 2023", x: 50, y: 75, size: "medium" },
  { id: 9, title: "Hiking", date: "Oct 18, 2023", x: 85, y: 45, size: "small" },
  { id: 10, title: "Game Night", date: "Nov 25, 2023", x: 40, y: 90, size: "medium" },
]

export default function ConstellationPage() {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null)

  const getSizeClass = (size: string) => {
    switch (size) {
      case "large":
        return "w-6 h-6"
      case "medium":
        return "w-4 h-4"
      default:
        return "w-3 h-3"
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0a2e] to-[#2d1b4e] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" size="lg" className="mb-8 text-white hover:bg-white/10 group">
            <Home className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back Home
          </Button>
        </Link>

        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Memory Constellation</h1>
          <p className="text-xl text-white/70">Click on the stars to explore our memories across the universe</p>
        </div>

        <div className="relative w-full h-[600px] bg-black/20 rounded-3xl border-2 border-white/10 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {memories.map((memory, idx) => {
              const nextMemory = memories[(idx + 1) % memories.length]
              return (
                <line
                  key={`line-${memory.id}`}
                  x1={`${memory.x}%`}
                  y1={`${memory.y}%`}
                  x2={`${nextMemory.x}%`}
                  y2={`${nextMemory.y}%`}
                  stroke="rgba(168, 85, 247, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              )
            })}
          </svg>

          {memories.map((memory) => (
            <button
              key={memory.id}
              onClick={() => setSelectedMemory(memory.id)}
              className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${memory.x}%`, top: `${memory.y}%` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse-glow" />
                <Star
                  className={`${getSizeClass(memory.size)} text-yellow-300 group-hover:text-yellow-200 transition-all duration-300 group-hover:scale-150 relative z-10`}
                  fill="currentColor"
                />
              </div>
            </button>
          ))}

          {selectedMemory && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-md w-full mx-4 animate-bounce-in">
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-foreground">
                  {memories.find((m) => m.id === selectedMemory)?.title}
                </h3>
                <p className="text-primary font-medium">{memories.find((m) => m.id === selectedMemory)?.date}</p>
                <p className="text-muted-foreground leading-relaxed">
                  A beautiful moment in our journey together, shining bright in our constellation of love.
                </p>
                <Button onClick={() => setSelectedMemory(null)} variant="outline" className="mt-4">
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
