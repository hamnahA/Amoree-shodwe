import { Header } from "@/components/header"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    number: "01",
    image: "/images/project-1.jpg",
    title: "Luxury Jewelry Collection",
    href: "/projects/jewelry-collection",
  },
  {
    number: "02",
    image: "/images/project-2.jpg",
    title: "Interior Design Studio",
    href: "/projects/interior-design",
  },
  {
    number: "03",
    image: "/images/project-3.jpg",
    title: "Artisan Coffee Brand",
    href: "/projects/coffee-brand",
  },
  {
    number: "04",
    image: "/images/project-4.jpg",
    title: "Natural Lifestyle",
    href: "/projects/natural-lifestyle",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <h1 className="font-serif text-7xl lg:text-[10rem] leading-none tracking-tight text-foreground">
            PROJECTS
          </h1>
          <p className="max-w-xs text-muted-foreground leading-relaxed lg:pb-4">
            Selected works of strategic design initiatives with concrete results.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 -mx-8 px-8 lg:-mx-16 lg:px-16 scrollbar-hide">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              image={project.image}
              title={project.title}
              href={project.href}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
