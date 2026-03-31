"use client"

import React from "react"

import { Header } from "@/components/header"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <h1 className="font-serif text-7xl lg:text-[10rem] leading-none tracking-tight text-foreground">
            CONTACT
          </h1>
          <p className="max-w-xs text-muted-foreground leading-relaxed lg:pb-4">
            Let's create something remarkable together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            {submitted ? (
              <div className="bg-secondary rounded-2xl p-12 text-center">
                <h2 className="font-serif text-3xl text-foreground mb-4">Thank You</h2>
                <p className="text-muted-foreground">
                  We've received your message and will be in touch within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm text-foreground mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full border-b border-border bg-transparent py-3 text-foreground focus:border-foreground focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-background">Select budget range</option>
                    <option value="10k-25k" className="bg-background">$10,000 - $25,000</option>
                    <option value="25k-50k" className="bg-background">$25,000 - $50,000</option>
                    <option value="50k-100k" className="bg-background">$50,000 - $100,000</option>
                    <option value="100k+" className="bg-background">$100,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-foreground mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors resize-none"
                    placeholder="Describe your project, goals, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-foreground px-8 py-4 text-sm text-background transition-all hover:bg-foreground/90"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm text-muted-foreground mb-3">Email</h3>
              <a
                href="mailto:hello@amoreshodwe.com"
                className="text-xl text-foreground hover:text-muted-foreground transition-colors"
              >
                hello@amoreshodwe.com
              </a>
            </div>

            <div>
              <h3 className="text-sm text-muted-foreground mb-3">Phone</h3>
              <a
                href="tel:+1234567890"
                className="text-xl text-foreground hover:text-muted-foreground transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>

            <div>
              <h3 className="text-sm text-muted-foreground mb-3">Studio</h3>
              <address className="text-xl text-foreground not-italic leading-relaxed">
                123 Design District<br />
                New York, NY 10001
              </address>
            </div>

            <div>
              <h3 className="text-sm text-muted-foreground mb-3">Follow Us</h3>
              <div className="flex gap-6">
                <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
                  Behance
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
