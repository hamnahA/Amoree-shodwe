import { Header } from "@/components/header"
import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    slug: "the-art-of-minimalist-design",
    title: "The Art of Minimalist Design",
    excerpt: "Exploring how restraint and intentionality create powerful visual experiences that resonate with modern audiences.",
    image: "/images/blog-1.jpg",
    category: "Design",
    date: "Jan 15, 2026",
  },
  {
    slug: "building-brands-that-last",
    title: "Building Brands That Last",
    excerpt: "A deep dive into the principles of creating timeless brand identities that evolve with changing markets while maintaining core values.",
    image: "/images/blog-2.jpg",
    category: "Branding",
    date: "Jan 08, 2026",
  },
  {
    slug: "typography-as-expression",
    title: "Typography as Expression",
    excerpt: "Understanding how typeface selection and arrangement communicate mood, personality, and brand essence beyond mere readability.",
    image: "/images/blog-3.jpg",
    category: "Typography",
    date: "Dec 28, 2025",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <h1 className="font-serif text-7xl lg:text-[10rem] leading-none tracking-tight text-foreground">
            BLOG
          </h1>
          <p className="max-w-xs text-muted-foreground leading-relaxed lg:pb-4">
            Insights, perspectives, and stories from our creative journey.
          </p>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid lg:grid-cols-2 gap-8 lg:gap-12 border-t border-border pt-12"
            >
              <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative h-[300px] lg:h-[400px]">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4 group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <span className="text-sm text-foreground underline underline-offset-4">
                  Read Article
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
