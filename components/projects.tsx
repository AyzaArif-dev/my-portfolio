"use client"

import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with a terminal-inspired developer aesthetic. Features dark/light mode support, smooth animations, and a clean design.",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    features: [
      "Terminal-inspired UI",
      "Dark/light mode support",
      "Responsive design",
      "Smooth animations",
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-mono text-sm text-primary mb-2">
            <span className="text-primary">&gt;</span> projects
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
            What I&apos;ve Built
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Project Header */}
              <div className="flex items-center gap-2 border-b border-border/50 bg-muted/30 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-4 font-mono text-xs text-muted-foreground">
                  {project.title.toLowerCase().replace(/\s+/g, "-")}.tsx
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="font-mono text-sm text-muted-foreground mb-2">
                    <span className="text-primary">$</span>
                    <span className="ml-2">cat features.md</span>
                  </div>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center font-mono text-sm text-muted-foreground"
                      >
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <button className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">
                    <Github className="h-4 w-4" />
                    View Code
                  </button>
                  <button className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
