import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { PhotoGallery } from "@/components/photo-gallery"

export default function GalleryPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Photo Gallery</h1>
          <p className="text-xl text-muted-foreground">300 moments captured, infinite memories made</p>
        </div>

        <PhotoGallery />
      </div>
    </main>
  )
}
