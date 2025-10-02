"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const letters = [
  {
    id: 1,
    title: "To My Sunshine",
    preview: "You light up my world in ways I never knew possible...",
    content:
      "My dearest love, you light up my world in ways I never knew possible. Every morning I wake up grateful for another day with you. Your smile is my favorite sight, your laugh is my favorite sound, and your happiness is my favorite mission. I love you more than words can express.",
    color: "from-primary/20 to-secondary/20",
  },
  {
    id: 2,
    title: "Forever Grateful",
    preview: "Thank you for being you, for loving me...",
    content:
      "Thank you for being you, for loving me unconditionally, for supporting my dreams, and for making every day an adventure. You've taught me what true love means, and I'm forever grateful for your presence in my life. Here's to many more memories together.",
    color: "from-secondary/20 to-accent/20",
  },
  {
    id: 3,
    title: "My Best Friend",
    preview: "You're not just my partner, you're my best friend...",
    content:
      "You're not just my partner, you're my best friend, my confidant, my everything. I love how we can be silly together, how we support each other through tough times, and how we celebrate every little victory. You make life so much sweeter.",
    color: "from-accent/20 to-primary/20",
  },
  {
    id: 4,
    title: "Our Future",
    preview: "When I think about the future, I see you...",
    content:
      "When I think about the future, I see you by my side through it all. I see us growing old together, creating more beautiful memories, and loving each other more with each passing day. You are my forever, and I can't wait to see what adventures await us.",
    color: "from-primary/20 to-accent/20",
  },
]

export default function MessagesPage() {
  const [openLetter, setOpenLetter] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float"
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

        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">Love Letters</h1>
          <p className="text-xl text-muted-foreground">Messages from my heart, sealed with love</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {letters.map((letter, idx) => (
            <div key={letter.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              {openLetter === letter.id ? (
                <div className={`bg-gradient-to-br ${letter.color} rounded-3xl p-8 shadow-2xl`}>
                  <div className="bg-card rounded-2xl p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-3xl font-bold">{letter.title}</h2>
                      <Heart className="w-8 h-8 text-primary" fill="currentColor" />
                    </div>
                    <p className="text-lg leading-relaxed text-pretty">{letter.content}</p>
                    <Button onClick={() => setOpenLetter(null)} variant="outline" className="w-full">
                      Close Letter
                    </Button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setOpenLetter(letter.id)}
                  className={`w-full bg-gradient-to-br ${letter.color} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-card rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-2xl font-bold mb-2">{letter.title}</h3>
                      <p className="text-muted-foreground text-lg">{letter.preview}</p>
                      <p className="text-primary mt-4 font-medium">Click to read →</p>
                    </div>
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
