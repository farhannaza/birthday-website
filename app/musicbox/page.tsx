"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Music, Play, Pause } from "lucide-react"

export default function MusicBox() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const photos = Array.from({ length: 12 }, (_, i) => i)

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 1) % 360)
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-fuchsia-100 via-pink-50 to-purple-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/20 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="relative z-10 p-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-800 text-xl font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          Back to Story
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient-magical mb-6">Music Box</h1>
          <p className="text-2xl text-purple-700/90 max-w-3xl mx-auto">
            Spin through a magical carousel of our love story
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="mb-12 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-12 py-6 rounded-full text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-4"
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
            {isPlaying ? "Pause" : "Play"} Music Box
          </button>

          <div className="relative w-[600px] h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <Music className="w-32 h-32 text-fuchsia-400 animate-pulse-glow" />
            </div>

            {photos.map((photo, index) => {
              const angle = (index * 30 + rotation) * (Math.PI / 180)
              const radius = 250
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <button
                  key={photo}
                  onClick={() => setSelectedPhoto(photo)}
                  className="absolute w-24 h-24 transition-all duration-300 hover:scale-125"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-pink-300 to-purple-300 rounded-2xl border-4 border-white shadow-xl flex items-center justify-center text-white font-bold text-xl">
                    {photo + 1}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="bg-white rounded-3xl p-8 max-w-4xl w-full animate-bounce-in">
              <img
                src={`/romantic-music-box-memory-.jpg?height=600&width=800&query=romantic music box memory ${selectedPhoto}`}
                alt={`Music Box Memory ${selectedPhoto}`}
                className="w-full h-96 object-cover rounded-2xl mb-6"
              />
              <p className="text-2xl text-purple-600 text-center font-medium">A melodious moment from our music box</p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
