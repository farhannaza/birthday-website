"use client"

import Link from "next/link"
import { Home, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const wishes = [
  "Travel the world together and see all seven wonders",
  "Build our dream home filled with love and laughter",
  "Adopt a puppy and watch them grow with us",
  "Learn to dance together under the stars",
  "Grow old together, hand in hand",
  "Create a family and share our love with them",
  "Write a book about our adventures",
  "Plant a garden and watch it bloom like our love",
  "Celebrate 50 years together and beyond",
  "Make every day an adventure, big or small",
]

export default function WishesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0a2e] via-[#2d1b4e] to-[#4a2c6e] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Sparkles className="text-yellow-300/40" size={Math.random() * 20 + 10} fill="currentColor" />
          </div>
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
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Wish Wall</h1>
          <p className="text-xl text-white/70">Dreams and wishes for our future together</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishes.map((wish, idx) => (
            <div key={idx} className="group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="relative bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute -top-3 -left-3 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full p-2 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <p className="text-white text-lg leading-relaxed pl-4">{wish}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <p className="text-white/80 text-xl italic">Every wish comes true when I'm with you</p>
        </div>
      </div>
    </main>
  )
}
