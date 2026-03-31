import { Header } from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const posts: Record<string, {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  content: string
}> = {
  "the-art-of-minimalist-design": {
    title: "The Art of Minimalist Design",
    excerpt: "Exploring how restraint and intentionality create powerful visual experiences.",
    image: "/images/blog-1.jpg",
    category: "Design",
    date: "Jan 15, 2026",
    content: `Minimalist design is more than just aesthetic simplicity—it's a philosophy that prioritizes intentionality over excess. In a world saturated with visual noise, the power of restraint cannot be overstated.

The essence of minimalism lies in the careful curation of every element. Each component must earn its place in the composition, serving a clear purpose. This approach demands a deep understanding of hierarchy, whitespace, and the subtle interplay between form and function.

When we strip away the unnecessary, we create space for what truly matters to breathe. This breathing room allows the viewer's eye to rest, to focus, and to absorb the message without distraction. The result is communication that feels effortless yet carries profound impact.

Consider the masters of minimalist design—from Dieter Rams' iconic Braun products to the timeless elegance of Japanese aesthetics. Their work demonstrates that simplicity is not the absence of complexity but rather its distillation into something pure and accessible.`,
  },
  "building-brands-that-last": {
    title: "Building Brands That Last",
    excerpt: "A deep dive into the principles of creating timeless brand identities.",
    image: "/images/blog-2.jpg",
    category: "Branding",
    date: "Jan 08, 2026",
    content: `Building a brand that stands the test of time requires more than beautiful visuals—it demands a foundation rooted in authentic values and a clear understanding of purpose.

The most enduring brands share a common trait: they evolve while maintaining their core essence. This balance between adaptability and consistency is the hallmark of strategic brand building. It requires foresight, discipline, and an unwavering commitment to the brand's fundamental truth.

A timeless brand speaks to universal human experiences while remaining culturally relevant. It anticipates change without chasing trends, creating a visual and verbal language that transcends the moment while speaking directly to it.

The process begins with deep introspection—understanding not just what a company does, but why it exists. This purpose becomes the north star guiding every decision, from logo design to customer interaction, ensuring coherence across all touchpoints.`,
  },
  "typography-as-expression": {
    title: "Typography as Expression",
    excerpt: "Understanding how typeface selection communicates brand essence.",
    image: "/images/blog-3.jpg",
    category: "Typography",
    date: "Dec 28, 2025",
    content: `Typography is perhaps the most underestimated element of visual communication. Far beyond mere readability, the selection and arrangement of type conveys mood, personality, and intention before a single word is read.

Each typeface carries its own history, its own voice. A serif font whispers of tradition and authority, while a geometric sans-serif speaks to modernity and clarity. Understanding these associations allows designers to layer meaning, creating communication that operates on multiple levels simultaneously.

The space between letters, the rhythm of line breaks, the dance of positive and negative space—these micro-decisions compound to create macro-impact. Typography is not just about choosing a font; it's about orchestrating an experience that guides the reader through content with intention and grace.

Consider how the great editorial designers use type to create visual hierarchy, to pace the reading experience, to establish personality. Their work demonstrates that typography is not a neutral vessel for content but an active participant in meaning-making.`,
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-32 pb-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </div>

          <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-8 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            {post.excerpt}
          </p>
        </div>

        <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden mb-16">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg text-foreground leading-relaxed">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-border">
            <Link
              href="/blog"
              className="text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
