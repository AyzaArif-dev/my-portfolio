"use client"

import Link from "next/link"

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Name + Copyright */}
          <div className="text-center sm:text-left">
            <p className="font-mono text-lg font-semibold text-primary">
              <span className="text-primary">&gt;</span> Ayza Arif Rahim
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Designer Credit Line */}
        <div className="mt-8 border-t border-border/30 pt-6">
          <p className="text-center font-mono text-xs text-muted-foreground/60 tracking-wide">
            👉 Designed and built by Ayza Arif Rahim
          </p>
        </div>
      </div>
    </footer>
  )
}
