import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart } from "lucide-react"
import Image from "next/image"

const specialMoments = [
  {
    title: "First 'I Love You'",
    description: "The moment that changed everything. I meant it then, and I mean it even more now.",
    image: "/romantic-couple-love.jpg",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Our Favorite Place",
    description: "The spot where we've made countless memories and shared endless conversations.",
    image: "/beautiful-scenic-place-couple.jpg",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "That Rainy Day",
    description: "Dancing in the rain, laughing without a care in the world. Pure magic.",
    image: "/couple-dancing-rain.jpg",
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    title: "Road Trip Adventures",
    description: "Miles of roads, hours of music, and a lifetime of memories made together.",
    image: "/road-trip-couple-car.jpg",
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    title: "Lazy Sunday Mornings",
    description: "Coffee in bed, your head on my shoulder, nowhere else we'd rather be.",
    image: "/cozy-morning-couple.jpg",
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    title: "Stargazing Nights",
    description: "Under the stars, making wishes, dreaming about our future together.",
    image: "/couple-stargazing-night-sky.jpg",
    color: "from-violet-500/20 to-pink-500/20",
  },
]

export default function MemoriesPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Special Moments</h1>
          <p className="text-xl text-muted-foreground">The memories that make my heart smile</p>
        </div>

        <div className="grid gap-8">
          {specialMoments.map((moment, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div
                  className={`relative aspect-[4/3] md:aspect-auto overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <Image
                    src={moment.image || "/placeholder.svg"}
                    alt={moment.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${moment.color} opacity-60`} />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Heart className="w-12 h-12 text-primary mb-4" fill="currentColor" />
                  <h3 className="text-3xl font-bold mb-4">{moment.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{moment.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
