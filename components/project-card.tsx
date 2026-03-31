"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface ProjectCardProps {
  number: string
  image: string
  title: string
  href: string
}

export function ProjectCard({ number, image, title, href }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative flex-shrink-0">
      <span className="mb-4 block text-sm text-muted-foreground">{number}/</span>
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-[400px] w-[320px] lg:h-[450px] lg:w-[360px]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div
          className={`absolute bottom-6 left-6 flex h-20 w-20 items-center justify-center rounded-full bg-foreground text-background text-sm font-medium transition-all duration-300 ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          VIEW
        </div>
      </Link>
    </div>
  )
}
