import { Header } from "@/components/header"
import Link from "next/link"

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description: "We develop comprehensive brand strategies that define your unique position in the market and create lasting connections with your audience.",
    features: ["Brand Positioning", "Market Research", "Competitive Analysis", "Brand Architecture"],
  },
  {
    number: "02",
    title: "Visual Identity",
    description: "Creating distinctive visual systems that communicate your brand's essence across all touchpoints with consistency and elegance.",
    features: ["Logo Design", "Color Systems", "Typography", "Brand Guidelines"],
  },
  {
    number: "03",
    title: "Digital Design",
    description: "Designing intuitive digital experiences that engage users and drive meaningful interactions with your brand.",
    features: ["Web Design", "UI/UX Design", "Mobile Apps", "Digital Campaigns"],
  },
  {
    number: "04",
    title: "Art Direction",
    description: "Crafting visual narratives through photography, illustration, and creative direction that elevate your brand storytelling.",
    features: ["Photography", "Video Production", "Content Strategy", "Campaign Design"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <h1 className="font-serif text-7xl lg:text-[10rem] leading-none tracking-tight text-foreground">
            SERVICES
          </h1>
          <p className="max-w-xs text-muted-foreground leading-relaxed lg:pb-4">
            Comprehensive design solutions tailored to elevate your brand presence.
          </p>
        </div>

        <div className="grid gap-16 lg:gap-24">
          {services.map((service) => (
            <div
              key={service.number}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 border-t border-border pt-12"
            >
              <div>
                <span className="text-sm text-muted-foreground mb-4 block">{service.number}/</span>
                <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end lg:items-start">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-border px-5 py-2.5 text-sm text-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center text-center">
          <p className="text-muted-foreground mb-8 max-w-md">
            Ready to transform your brand? Let's discuss how we can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-foreground px-8 py-4 text-sm text-background transition-all hover:bg-foreground/90"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  )
}
