"use client"

import { useState } from "react"
import Image from "next/image"

interface Photo {
  id: number
  src: string
  alt: string
}

interface PhotoGridProps {
  photos: Photo[]
  onPhotoClick: (index: number) => void
}

export function PhotoGrid({ photos, onPhotoClick }: PhotoGridProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set(prev).add(id))
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className="group relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => onPhotoClick(index)}
        >
          <Image
            src={photo.src || "/placeholder.svg"}
            alt={photo.alt}
            fill
            className={`object-cover transition-opacity duration-500 ${
              loadedImages.has(photo.id) ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => handleImageLoad(photo.id)}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm font-medium">Memory #{photo.id}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
