"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Hi, I'm Ayza Arif Rahim"

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 pt-16">
      <div className="mx-auto max-w-4xl text-center">
        {/* Terminal Window */}
        <div className="mx-auto max-w-2xl rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-border/50 bg-muted/30 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-4 font-mono text-xs text-muted-foreground">
              terminal ~ ayza
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 sm:p-8 text-left">
            <div className="font-mono">
              <span className="text-primary">$</span>
              <span className="ml-2 text-foreground">whoami</span>
            </div>
            <h1 className="mt-4 font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              {displayedText}
              <span
                className={`inline-block w-3 h-8 ml-1 bg-primary align-middle ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </h1>
            <div className="mt-6 font-mono text-sm sm:text-base text-muted-foreground">
              <span className="text-primary">$</span>
              <span className="ml-2">cat about.txt</span>
            </div>
            <p className="mt-2 font-mono text-sm sm:text-base text-muted-foreground leading-relaxed">
              Computer Science Student @ Wilfrid Laurier University
            </p>
            <p className="font-mono text-sm sm:text-base text-muted-foreground leading-relaxed">
              Building the future, one line of code at a time.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 font-mono text-sm font-medium text-foreground transition-all duration-200 hover:bg-muted hover:border-primary/50"
          >
            Get In Touch
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
