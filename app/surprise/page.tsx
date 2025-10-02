"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Gift, Heart, Sparkles } from "lucide-react"
import Confetti from "react-confetti"
import { useWindowSize } from "@/hooks/use-window-size"

export default function SurprisePage() {
  const [revealed, setRevealed] = useState(false)
  const { width, height } = useWindowSize()

  return (
    <main className="min-h-screen py-12 px-4 relative">
      {revealed && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />}

      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center min-h-[70vh] flex flex-col items-center justify-center">
          {!revealed ? (
            <div className="space-y-8 animate-fade-in">
              <Gift className="w-24 h-24 text-primary mx-auto animate-bounce" />
              <h1 className="text-4xl md:text-6xl font-bold">Ready for Your Surprise?</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                I've prepared something special just for you. Click the button when you're ready!
              </p>
              <Button
                size="lg"
                onClick={() => setRevealed(true)}
                className="text-lg px-8 py-6 hover:scale-105 transition-transform"
              >
                <Gift className="w-5 h-5 mr-2" />
                Reveal My Surprise
              </Button>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in">
              <div className="relative">
                <Sparkles className="w-24 h-24 text-primary mx-auto animate-pulse" />
                <Heart className="w-12 h-12 text-pink-500 absolute top-0 right-1/3 animate-float" fill="currentColor" />
                <Heart
                  className="w-8 h-8 text-purple-500 absolute bottom-0 left-1/3 animate-float"
                  fill="currentColor"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold">Happy Birthday, My Love!</h1>

              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-2xl space-y-6">
                <p className="text-xl leading-relaxed">
                  This website is just the beginning of your birthday celebration. I wanted to create something special
                  that captures all the beautiful moments we've shared together.
                </p>
                <p className="text-xl leading-relaxed">
                  Every photo, every memory, every word on this site comes from my heart. You mean the world to me, and
                  I hope this brings a smile to your face.
                </p>
                <p className="text-xl leading-relaxed font-semibold text-primary">
                  But wait... there's more! Check your messages for the real surprise! 💜
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Heart className="w-8 h-8 text-primary animate-pulse" fill="currentColor" />
                <Heart
                  className="w-8 h-8 text-secondary animate-pulse"
                  fill="currentColor"
                  style={{ animationDelay: "0.2s" }}
                />
                <Heart
                  className="w-8 h-8 text-accent animate-pulse"
                  fill="currentColor"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
