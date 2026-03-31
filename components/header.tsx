"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
      <div className="mx-auto flex items-center justify-between px-6 py-4 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold tracking-tight text-foreground">AMORE</span>
          <span className="text-xl font-light tracking-tight text-foreground">SHODWE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm tracking-wide transition-colors hover:text-foreground ${
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block rounded-full border border-foreground px-6 py-2.5 text-sm transition-all hover:bg-foreground hover:text-background"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col gap-6 px-6 py-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-wide ${
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full border border-foreground px-6 py-2.5 text-sm text-center transition-all hover:bg-foreground hover:text-background"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

