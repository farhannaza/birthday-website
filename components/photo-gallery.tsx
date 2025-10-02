"use client"

import { useState } from "react"
import { PhotoGrid } from "./photo-grid"
import { PhotoModal } from "./photo-modal"

// Placeholder photos - replace these with your actual photos
const generatePhotos = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=600&width=600&query=romantic couple memory ${i + 1}`,
    alt: `Memory ${i + 1}`,
  }))
}

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const photos = generatePhotos(300)

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">Our Memories Together</h2>
        <PhotoGrid photos={photos} onPhotoClick={setSelectedPhoto} />
        <PhotoModal photos={photos} selectedIndex={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      </div>
    </section>
  )
}
