"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Lock, Unlock, Heart } from "lucide-react"

export default function SecretDiary() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const pages = Array.from({ length: 20 }, (_, i) => i)

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-pink-100 via-purple-50 to-violet-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
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
          <h1 className="text-6xl md:text-8xl font-bold text-gradient-magical mb-6">Secret Diary</h1>
          <p className="text-2xl text-purple-700/90 max-w-3xl mx-auto">
            Unlock pages filled with our sweetest love notes
          </p>
        </div>

        {!isUnlocked ? (
          <div className="flex flex-col items-center justify-center min-h-[500px]">
            <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-16 border-8 border-pink-300 shadow-2xl">
              <Lock className="w-32 h-32 text-purple-600 mx-auto mb-8 animate-bounce-gentle" />
              <button
                onClick={() => setIsUnlocked(true)}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-16 py-6 rounded-full text-3xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-110"
              >
                Unlock Diary
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-8 mb-12">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="bg-purple-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Previous
              </button>
              <span className="text-2xl text-purple-700 font-bold">
                Page {currentPage + 1} / {pages.length}
              </span>
              <button
                onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}
                disabled={currentPage === pages.length - 1}
                className="bg-purple-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Next
              </button>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-12 border-8 border-purple-300 shadow-2xl animate-bounce-in">
              <div className="flex items-center justify-center mb-8">
                <Heart className="w-12 h-12 text-pink-500 animate-pulse-heart" fill="currentColor" />
                <Unlock className="w-12 h-12 text-purple-500 mx-4" />
                <Heart className="w-12 h-12 text-pink-500 animate-pulse-heart" fill="currentColor" />
              </div>

              <img
                src={`/diary-page-love-note-.jpg?height=500&width=700&query=diary page love note ${currentPage}`}
                alt={`Diary Page ${currentPage + 1}`}
                className="w-full h-96 object-cover rounded-2xl mb-8"
              />

              <div className="bg-white/80 rounded-2xl p-8">
                <p className="text-2xl text-purple-700 text-center font-medium italic leading-relaxed">
                  "Every moment with you is a page in our beautiful love story..."
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
