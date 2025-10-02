"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Gift, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Confetti from "react-confetti"
import { useWindowSize } from "@/hooks/use-window-size"

export default function GiftPage() {
  const [isOpened, setIsOpened] = useState(false)
  const { width, height } = useWindowSize()

  return (
    <main className="min-h-screen bg-gradient-soft relative overflow-hidden">
      {isOpened && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" size="lg" className="mb-8 group">
            <Home className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back Home
          </Button>
        </Link>

        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          {!isOpened ? (
            <div className="text-center space-y-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-gradient">Your Birthday Gift</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Click the gift box to unwrap your special surprise
              </p>

              <button onClick={() => setIsOpened(true)} className="group relative inline-block animate-bounce-in">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300 animate-pulse-glow" />
                <div className="relative bg-gradient-to-br from-primary to-secondary p-12 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-32 h-32 text-white" strokeWidth={1.5} />
                </div>
              </button>
            </div>
          ) : (
            <div className="text-center space-y-8 max-w-3xl animate-bounce-in">
              <div className="flex justify-center gap-4 mb-8">
                <Heart className="w-16 h-16 text-primary animate-pulse-glow" fill="currentColor" />
                <Sparkles className="w-16 h-16 text-secondary animate-pulse-glow" />
                <Heart className="w-16 h-16 text-accent animate-pulse-glow" fill="currentColor" />
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-gradient">Happy Birthday, My Love!</h2>

              <div className="bg-card border-2 border-border rounded-3xl p-8 md:p-12 shadow-2xl space-y-6">
                <p className="text-xl md:text-2xl leading-relaxed text-pretty">
                  This website is my gift to you - a collection of all our beautiful memories, the love I have for you,
                  and the dreams we share for our future together.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                  Every photo, every word, every page was created with love. You deserve the world, and while I can't
                  give you that (yet!), I hope this brings a smile to your face and warmth to your heart.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-primary">I love you more than words can say</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link href="/scrapbook">
                  <Button size="lg" className="text-lg">
                    Explore Our Memories
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline" className="text-lg bg-transparent">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
