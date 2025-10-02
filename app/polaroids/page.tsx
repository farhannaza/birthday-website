"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const photos = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  src: `/placeholder.svg?height=400&width=350&query=couple memory ${i + 1}`,
  caption: `Memory ${i + 1}`,
  rotation: Math.random() * 10 - 5,
}))

export default function PolaroidsPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-gradient-soft relative overflow-hidden">
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

        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">Polaroid Wall</h1>
          <p className="text-xl text-muted-foreground">300 snapshots of our beautiful journey together</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {photos.map((photo, idx) => (
            <button
              key={photo.id}
              onClick={() => setSelectedPhoto(photo.id)}
              className="group cursor-pointer"
              style={{
                animationDelay: `${idx * 0.02}s`,
              }}
            >
              <div
                className="bg-white p-4 pb-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:z-10 relative"
                style={{
                  transform: `rotate(${photo.rotation}deg)`,
                }}
              >
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.caption}
                  className="w-full aspect-square object-cover"
                />
                <p className="text-center mt-3 text-sm font-handwriting text-gray-700">{photo.caption}</p>
              </div>
            </button>
          ))}
        </div>

        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl w-full">
              <Button
                onClick={() => setSelectedPhoto(null)}
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </Button>
              <div className="bg-white p-8 pb-16 shadow-2xl">
                <img
                  src={photos.find((p) => p.id === selectedPhoto)?.src || "/placeholder.svg"}
                  alt={photos.find((p) => p.id === selectedPhoto)?.caption}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <p className="text-center mt-6 text-xl font-handwriting text-gray-700">
                  {photos.find((p) => p.id === selectedPhoto)?.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
