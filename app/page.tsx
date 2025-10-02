"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
          {/* Cupcake Tower */}
          <Link href="/cupcakes" className="group relative transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/40 to-rose-400/40 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-pink-50/95 to-rose-50/95 backdrop-blur-md border-4 border-pink-300 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-300/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-rose-300/40 rounded-full blur-3xl" />
              <div className="text-7xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                🧁
              </div>
              <h3 className="text-4xl font-bold mb-4 text-balance text-pink-700">Cupcake Tower</h3>
              <p className="text-pink-600/90 text-xl leading-relaxed">Stack of sweet memories to unwrap</p>
            </div>
          </Link>

          {/* Bubble Tea */}
          <Link href="/bubbletea" className="group relative transform hover:scale-105 transition-all duration-500">
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

          {/* Cookie Jar */}
          <Link href="/cookies" className="group relative transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/40 to-orange-400/40 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-md border-4 border-amber-300 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-300/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-300/40 rounded-full blur-3xl" />
              <div className="text-7xl mb-6 group-hover:scale-110 group-hover:rotate-[-12deg] transition-transform duration-500">
                🍪
              </div>
              <h3 className="text-4xl font-bold mb-4 text-balance text-amber-700">Cookie Jar</h3>
              <p className="text-amber-600/90 text-xl leading-relaxed">Grab a cookie, find a surprise</p>
            </div>
          </Link>

          {/* Ice Cream Parlor */}
          <Link href="/icecream" className="group relative transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 to-blue-400/40 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-cyan-50/95 to-blue-50/95 backdrop-blur-md border-4 border-cyan-300 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-300/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300/40 rounded-full blur-3xl" />
              <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">🍦</div>
              <h3 className="text-4xl font-bold mb-4 text-balance text-cyan-700">Ice Cream Parlor</h3>
              <p className="text-cyan-600/90 text-xl leading-relaxed">Scoop up 300 frozen memories</p>
            </div>
          </Link>

          {/* Candy Hearts */}
          <Link href="/hearts" className="group relative transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400/40 to-pink-400/40 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-rose-50/95 to-pink-50/95 backdrop-blur-md border-4 border-rose-300 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-rose-300/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-300/40 rounded-full blur-3xl" />
              <div className="text-7xl mb-6 group-hover:scale-110 animate-pulse-heart transition-transform duration-500">
                💖
              </div>
              <h3 className="text-4xl font-bold mb-4 text-balance text-rose-700">Candy Hearts</h3>
              <p className="text-rose-600/90 text-xl leading-relaxed">Sweet messages just for you</p>
            </div>
          </Link>

          {/* Lollipop Garden */}
          <Link href="/lollipops" className="group relative transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/40 to-purple-400/40 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-violet-50/95 to-purple-50/95 backdrop-blur-md border-4 border-violet-300 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-violet-300/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-300/40 rounded-full blur-3xl" />
              <div className="text-7xl mb-6 group-hover:scale-110 group-hover:rotate-180 transition-transform duration-700">
                🍭
              </div>
              <h3 className="text-4xl font-bold mb-4 text-balance text-violet-700">Lollipop Garden</h3>
              <p className="text-violet-600/90 text-xl leading-relaxed">Pick a lollipop, taste a memory</p>
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
