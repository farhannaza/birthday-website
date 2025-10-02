"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"

export const MAIN_PAGE_NAV_COUNT = 1

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [floatingSweets, setFloatingSweets] = useState<
    { id: number; x: number; y: number; delay: number; icon: string }[]
  >([])

  useEffect(() => {
    setMounted(true)
    const sweets = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      icon: ["🍭", "🧁", "🍪", "🍬", "🍩", "🍰", "🧋", "🍦"][Math.floor(Math.random() * 8)],
    }))
    setFloatingSweets(sweets)
  }, [])

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-candy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-pink-300/30 rounded-full blur-3xl animate-float-slow" />
        <div
          className="absolute top-40 right-20 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-[450px] h-[450px] bg-violet-300/30 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingSweets.map((sweet) => (
          <div
            key={sweet.id}
            className="absolute text-3xl animate-float-magical opacity-60"
            style={{
              left: `${sweet.x}%`,
              top: `${sweet.y}%`,
              animationDelay: `${sweet.delay}s`,
            }}
          >
            {sweet.icon}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div
          className={`text-center space-y-8 mb-16 transition-all duration-1500 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="relative inline-block">
            <div className="relative">
              <div className="text-9xl animate-bounce-gentle">🍰</div>
              <div className="absolute -top-6 -right-6 animate-wiggle">
                <Sparkles className="w-16 h-16 text-pink-400 fill-pink-400" />
              </div>
              <div className="absolute -bottom-6 -left-6 animate-wiggle" style={{ animationDelay: "0.5s" }}>
                <Sparkles className="w-14 h-14 text-purple-400 fill-purple-400" />
              </div>
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold text-balance leading-tight">
            <span className="text-gradient-candy animate-gradient block mb-4">Sweet</span>
            <span className="text-gradient-candy animate-gradient block">Birthday</span>
          </h1>

          <p className="text-2xl md:text-3xl text-pink-600/90 max-w-3xl mx-auto text-pretty leading-relaxed font-medium">
            Welcome to the sweetest celebration ever! Every treat holds a delicious memory of us
          </p>
        </div>

        <div className="grid grid-cols-1 place-items-center max-w-3xl w-full mx-auto">
          {/* Bubble Tea */}
          <Link href="/bubbletea" className="group relative transform hover:scale-105 transition-all duration-500 w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/40 to-fuchsia-400/40 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-purple-50/95 to-fuchsia-50/95 backdrop-blur-md border-4 border-purple-300 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-purple-300/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-fuchsia-300/40 rounded-full blur-3xl" />
              <div className="text-7xl mb-6 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">
                🧋
              </div>
              <h3 className="text-4xl font-bold mb-4 text-balance text-purple-700">Bubble Tea</h3>
              <p className="text-purple-600/90 text-xl leading-relaxed">Pop bubbles to reveal our moments</p>
            </div>
          </Link>
        </div>

        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-2xl text-pink-500 italic font-medium flex items-center justify-center gap-3">
            <span>Life with you is sweeter than candy, my cutie pie</span>
            <span className="text-3xl animate-pulse-heart">💕</span>
          </p>
        </div>
      </div>
    </main>
  )
}
