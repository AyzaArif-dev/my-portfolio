"use client"

import { FileText, Mail } from "lucide-react"

export function About() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
          Ayza Arif Rahim
          <span className="inline-block w-3 h-8 sm:h-10 lg:h-12 bg-primary ml-2 cursor-blink" />
        </h1>

        {/* Role Subtitle */}
        <p className="font-mono text-xl sm:text-2xl text-primary font-semibold animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          Computer Science Co-op Student
        </p>

        {/* University and Duration */}
        <p className="font-mono text-base text-muted-foreground animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
          Wilfrid Laurier University • 2025–2028
        </p>

        {/* Main Description */}
        <div className="space-y-4 pt-4">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
            Passionate about building elegant software solutions, solving complex problems, and continuously learning new technologies. Currently seeking co-op opportunities to apply my skills and grow as a developer.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-primary/50 active:scale-95 animate-slide-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <FileText className="h-5 w-5" />
            View Resume
          </a>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold transition-all duration-200 hover:bg-primary/5 active:scale-95 animate-slide-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Mail className="h-5 w-5" />
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}
