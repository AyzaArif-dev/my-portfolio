"use client"

import { useState } from "react"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const socialLinks = [
  {
    name: "Email",
    href: "mailto:Itsanbul051219@gmail.com",
    icon: Mail,
    label: "Itsanbul051219@gmail.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ayza-arif-rahim-a0379a2bb",
    icon: Linkedin,
    label: "ayza-arif-rahim",
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
    label: "github.com/ayza",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://formspree.io/f/mwvyqwdw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast.success("Message sent successfully! I'll get back to you soon.")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send message"
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-mono text-sm text-primary mb-2">
            <span className="text-primary">&gt;</span> contact
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
            Get In Touch
          </h3>
          <p className="mt-4 text-muted-foreground">
            Whether you have a question, an opportunity, or just want to say hi, feel free to reach out! I&apos;ll do my best to respond promptly. Looking forward to connecting with you!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 border-b border-border/50 bg-muted/30 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-4 font-mono text-xs text-muted-foreground">
                contact-form.tsx
              </span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-sm text-muted-foreground mb-2"
                >
                  <span className="text-primary">$</span> name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="font-mono bg-background/50 border-border/50 focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-sm text-muted-foreground mb-2"
                >
                  <span className="text-primary">$</span> email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="font-mono bg-background/50 border-border/50 focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-mono text-sm text-muted-foreground mb-2"
                >
                  <span className="text-primary">$</span> subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="font-mono bg-background/50 border-border/50 focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-sm text-muted-foreground mb-2"
                >
                  <span className="text-primary">$</span> message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={4}
                  className="font-mono bg-background/50 border-border/50 focus:border-primary resize-none"
                  required
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4 mr-2" />
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <h4 className="font-mono text-sm text-primary mb-4">
                <span className="text-primary">$</span> find_me_at
              </h4>

              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-md border border-border/50 bg-background/50 transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 group"
                    >
                      <div className="rounded-md bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors duration-200">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {link.name}
                        </p>
                        <p className="font-mono text-xs text-muted-foreground">
                          {link.label}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping opacity-75" />
                </div>
                <p className="font-mono text-sm text-muted-foreground">
                  Available for internship opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
