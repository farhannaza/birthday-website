"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Gem, Lock } from "lucide-react"

export default function TreasureChest() {
  const [unlockedGems, setUnlockedGems] = useState<number[]>([])
  const [selectedGem, setSelectedGem] = useState<number | null>(null)
  const gems = Array.from({ length: 24 }, (_, i) => i)

  const unlockGem = (id: number) => {
    if (!unlockedGems.includes(id)) {
      setUnlockedGems([...unlockedGems, id])
    }
    setSelectedGem(id)
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-violet-100 via-fuchsia-50 to-purple-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-violet-300/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-fuchsia-300/20 rounded-full blur-3xl animate-float"
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
          <h1 className="text-6xl md:text-8xl font-bold text-gradient-magical mb-6">Treasure Chest</h1>
          <p className="text-2xl text-purple-700/90 max-w-3xl mx-auto">
            Unlock precious gems from our adventures together
          </p>
          <p className="text-xl text-purple-600 mt-4">
            Unlocked: {unlockedGems.length} / {gems.length}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {gems.map((gem) => (
            <button key={gem} onClick={() => unlockGem(gem)} className="relative group">
              <div
                className={`w-full aspect-square rounded-3xl border-4 flex items-center justify-center transition-all duration-500 ${
                  unlockedGems.includes(gem)
                    ? "bg-gradient-to-br from-violet-200 to-fuchsia-200 border-violet-400 shadow-xl"
                    : "bg-gradient-to-br from-gray-200 to-gray-300 border-gray-400"
                } hover:scale-110 hover:rotate-6`}
              >
                {unlockedGems.includes(gem) ? (
                  <Gem className="w-16 h-16 text-violet-600 animate-pulse-glow" />
                ) : (
                  <Lock className="w-16 h-16 text-gray-600" />
                )}
              </div>
              <div className="absolute -top-2 -right-2 bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {gem + 1}
              </div>
            </button>
          ))}
        </div>

        {selectedGem !== null && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedGem(null)}
          >
            <div className="bg-white rounded-3xl p-8 max-w-4xl w-full animate-bounce-in">
              <img
                src={`/precious-treasure-memory-.jpg?height=600&width=800&query=precious treasure memory ${selectedGem}`}
                alt={`Gem ${selectedGem}`}
                className="w-full h-96 object-cover rounded-2xl mb-6"
              />
              <p className="text-2xl text-purple-600 text-center font-medium">
                Gem #{selectedGem + 1} - A precious treasure from our journey
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
