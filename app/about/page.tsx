import { Header } from "@/components/header"
import Image from "next/image"
import Link from "next/link"

const team = [
  {
    name: "Sophia Chen",
    role: "Founder & Creative Director",
    image: "/images/team-1.jpg",
  },
  {
    name: "Marcus Webb",
    role: "Design Lead",
    image: "/images/team-2.jpg",
  },
  {
    name: "Elena Rossi",
    role: "Brand Strategist",
    image: "/images/team-3.jpg",
  },
]

const values = [
  {
    title: "Intentionality",
    description: "Every design decision is made with purpose, ensuring meaningful impact.",
  },
  {
    title: "Collaboration",
    description: "We believe the best work emerges from genuine partnership with our clients.",
  },
  {
    title: "Excellence",
    description: "We pursue the highest standards in craft, detail, and strategic thinking.",
  },
  {
    title: "Authenticity",
    description: "We create work that reflects true brand essence, not fleeting trends.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <h1 className="font-serif text-7xl lg:text-[10rem] leading-none tracking-tight text-foreground">
            ABOUT
          </h1>
          <p className="max-w-xs text-muted-foreground leading-relaxed lg:pb-4">
            A creative studio dedicated to crafting meaningful brand experiences.
          </p>
        </div>

        <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden mb-24">
          <Image
            src="/images/about-hero.jpg"
            alt="Our Studio"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-8">Our Story</h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              AMORE SHODWE was founded with a singular vision: to create design that moves people. 
              We believe that exceptional design goes beyond aesthetics—it tells stories, builds 
              connections, and creates lasting impressions.
            </p>
            <p>
              Our studio brings together strategists, designers, and storytellers who share a 
              passion for craft and a commitment to excellence. Together, we partner with brands 
              ready to make their mark and leave a meaningful legacy.
            </p>
            <p>
              Every project we undertake is an opportunity to create something remarkable. 
              We approach each challenge with curiosity, rigor, and an unwavering dedication 
              to bringing our clients' visions to life.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-20 mb-24">
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-lg text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-20">
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-12">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name}>
                <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center text-center">
          <p className="text-muted-foreground mb-8 max-w-md">
            Interested in working together? We'd love to hear about your project.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-foreground px-8 py-4 text-sm text-background transition-all hover:bg-foreground/90"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
