"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Photo {
  id: number
  src: string
  alt: string
}

interface PhotoModalProps {
  photos: Photo[]
  selectedIndex: number | null
  onClose: () => void
}

export function PhotoModal({ photos, selectedIndex, onClose }: PhotoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return

      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft" && selectedIndex > 0) {
        // Navigate to previous photo
        const newIndex = selectedIndex - 1
        window.history.replaceState(null, "", `#photo-${newIndex}`)
      } else if (e.key === "ArrowRight" && selectedIndex < photos.length - 1) {
        // Navigate to next photo
        const newIndex = selectedIndex + 1
        window.history.replaceState(null, "", `#photo-${newIndex}`)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex, photos.length, onClose])

  if (selectedIndex === null) return null

  const currentPhoto = photos[selectedIndex]
  const hasPrevious = selectedIndex > 0
  const hasNext = selectedIndex < photos.length - 1

  const goToPrevious = () => {
    if (hasPrevious) {
      const newIndex = selectedIndex - 1
      window.history.replaceState(null, "", `#photo-${newIndex}`)
    }
  }

  const goToNext = () => {
    if (hasNext) {
      const newIndex = selectedIndex + 1
      window.history.replaceState(null, "", `#photo-${newIndex}`)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-foreground hover:bg-primary/20"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </Button>

        {/* Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
          <Image
            src={currentPhoto.src || "/placeholder.svg"}
            alt={currentPhoto.alt}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-4">
          <Button
            variant="outline"
            onClick={goToPrevious}
            disabled={!hasPrevious}
            className="bg-card hover:bg-primary hover:text-primary-foreground"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </Button>

          <span className="text-sm text-muted-foreground">
            {selectedIndex + 1} / {photos.length}
          </span>

          <Button
            variant="outline"
            onClick={goToNext}
            disabled={!hasNext}
            className="bg-card hover:bg-primary hover:text-primary-foreground"
          >
            Next
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}
