import { Header } from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const projects: Record<string, {
  title: string
  subtitle: string
  description: string
  image: string
  category: string
  year: string
  services: string[]
  challenge: string
  solution: string
}> = {
  "jewelry-collection": {
    title: "Luxury Jewelry Collection",
    subtitle: "Elevating artisan craftsmanship through refined brand expression",
    description: "A comprehensive brand identity project for a boutique jewelry brand seeking to establish presence in the luxury market.",
    image: "/images/project-1.jpg",
    category: "Branding",
    year: "2025",
    services: ["Brand Strategy", "Visual Identity", "Photography Direction", "Packaging Design"],
    challenge: "The client needed to differentiate themselves in a crowded luxury jewelry market while maintaining the intimate, artisanal feel that defined their craftsmanship.",
    solution: "We developed a sophisticated visual language that balances warmth and elegance, using a refined color palette and bespoke typography to create an identity that feels both timeless and contemporary.",
  },
  "interior-design": {
    title: "Interior Design Studio",
    subtitle: "Creating spaces that inspire through thoughtful design",
    description: "Brand development and digital presence for a contemporary interior design studio focused on sustainable practices.",
    image: "/images/project-2.jpg",
    category: "Digital Design",
    year: "2025",
    services: ["Web Design", "Brand Identity", "Content Strategy", "UX/UI Design"],
    challenge: "The studio needed a digital platform that would showcase their portfolio while communicating their commitment to sustainable, thoughtful design practices.",
    solution: "We created an immersive web experience that prioritizes visual storytelling, allowing the work to speak for itself while subtly reinforcing the brand's values through considered interactions and messaging.",
  },
  "coffee-brand": {
    title: "Artisan Coffee Brand",
    subtitle: "Crafting a sensory brand experience from bean to cup",
    description: "Complete brand creation for a specialty coffee roaster emphasizing origin stories and craft roasting techniques.",
    image: "/images/project-3.jpg",
    category: "Brand Strategy",
    year: "2024",
    services: ["Brand Strategy", "Packaging Design", "Visual Identity", "Retail Experience"],
    challenge: "In a saturated specialty coffee market, the brand needed to connect with discerning consumers who value both quality and storytelling.",
    solution: "We developed a brand narrative centered on the journey from origin to cup, with packaging and touchpoints that invite customers into the story of each roast.",
  },
  "natural-lifestyle": {
    title: "Natural Lifestyle",
    subtitle: "Authentic beauty in everyday moments",
    description: "Art direction and visual identity for a lifestyle brand celebrating natural beauty and sustainable living.",
    image: "/images/project-4.jpg",
    category: "Art Direction",
    year: "2024",
    services: ["Art Direction", "Photography", "Visual Identity", "Campaign Design"],
    challenge: "The brand needed to establish a distinctive visual voice that would resonate with conscious consumers seeking authenticity over perfection.",
    solution: "Through warm, naturalistic art direction and a tactile visual language, we created a brand world that feels genuine, approachable, and aspirational without being unattainable.",
  },
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-32 pb-20 px-8 lg:px-16">
        <div className="max-w-3xl mb-12">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            Back to Projects
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground">
              {project.category}
            </span>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>

          <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        <div className="relative h-[400px] lg:h-[700px] rounded-2xl overflow-hidden mb-16">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24 mb-20">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-foreground mb-6">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
          <div>
            <h3 className="text-sm text-muted-foreground mb-4">Services</h3>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-border px-4 py-1.5 text-xs text-foreground"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 border-t border-border pt-16">
          <div>
            <h2 className="font-serif text-2xl text-foreground mb-6">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-foreground mb-6">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center text-center">
          <p className="text-muted-foreground mb-8 max-w-md">
            Interested in a similar project? Let's discuss how we can help your brand.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-foreground px-8 py-4 text-sm text-background transition-all hover:bg-foreground/90"
          >
            Start a Project
          </Link>
        </div>
      </article>
    </main>
  )
}
