"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Lock } from "lucide-react"

const loveNotes = [
  {
    id: 1,
    title: "Why I Love Your Smile",
    preview: "Your smile lights up my entire world...",
    content:
      "Your smile lights up my entire world. Every time I see it, my heart skips a beat. It's the first thing I think about in the morning and the last thing I remember before I sleep. Your smile is my favorite view, my daily dose of happiness, and the reason I believe in magic.",
    locked: false,
  },
  {
    id: 2,
    title: "Our First Kiss",
    preview: "I remember every detail of that moment...",
    content:
      "I remember every detail of that moment - the way time seemed to stop, how my heart raced, the butterflies in my stomach. That kiss changed everything. It was the moment I knew you were the one I wanted to spend forever with.",
    locked: false,
  },
  {
    id: 3,
    title: "What You Mean to Me",
    preview: "You are my best friend, my partner...",
    content:
      "You are my best friend, my partner, my everything. You make me want to be a better person every single day. With you, I've found a love I never knew existed. You are my home, my safe place, my greatest adventure.",
    locked: false,
  },
  {
    id: 4,
    title: "My Favorite Things About You",
    preview: "Where do I even begin...",
    content:
      "Where do I even begin? Your kindness, your laugh, the way you care for others, your strength, your beautiful soul. I love how you make me feel, how you understand me without words, how you support my dreams. I love everything about you.",
    locked: false,
  },
  {
    id: 5,
    title: "Our Future Together",
    preview: "When I think about our future...",
    content:
      "When I think about our future, I see endless possibilities filled with love, laughter, and adventure. I see us growing old together, creating more beautiful memories, building a life we both dream of. I can't wait to spend forever with you.",
    locked: false,
  },
  {
    id: 6,
    title: "Thank You",
    preview: "Thank you for being you...",
    content:
      "Thank you for being you. Thank you for loving me, for accepting me, for making me feel special every single day. Thank you for the little things, the big gestures, and everything in between. Thank you for being my person. I love you more than words can express.",
    locked: false,
  },
]

export default function LoveNotesPage() {
  const [openNote, setOpenNote] = useState<number | null>(null)

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-16">
          <Heart className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" fill="currentColor" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Love Notes</h1>
          <p className="text-xl text-muted-foreground">Words from my heart to yours</p>
        </div>

        <div className="grid gap-6">
          {loveNotes.map((note) => (
            <div
              key={note.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenNote(openNote === note.id ? null : note.id)}
                className="w-full p-6 text-left hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                      {note.title}
                      {note.locked && <Lock className="w-5 h-5 text-muted-foreground" />}
                    </h3>
                    <p className="text-muted-foreground">{note.preview}</p>
                  </div>
                  <Heart className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" />
                </div>
              </button>

              {openNote === note.id && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pt-4 border-t border-border">
                    <p className="text-lg leading-relaxed">{note.content}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
