"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const skillCategories = [
  {
    name: "LANGUAGES",
    skills: ["Python", "C", "C++", "Java", "SQL", "JavaScript", "HTML", "CSS", "R", "MatLab"],
  },
  {
    name: "FRAMEWORKS & TOOLS",
    skills: ["React", "Next.js", "Node.js", "Git", "GitHub", "VS Code", "Figma", "Power BI", "MySQL", "sklearn", "JIRA", "Agile", "SDLC", "AWS"],
  },
  {
    name: "TECHNOLOGIES",
    skills: ["REST APIs", "AWS", "OOP", "DS&A"],
  },
]

export function Skills() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["LANGUAGES", "FRAMEWORKS & TOOLS", "TECHNOLOGIES"])

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName]
    )
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Skills
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Some of the things I have worked with.
          </p>
          <div className="w-16 h-px bg-primary" />
        </div>

        {/* Skills Categories */}
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.name}>
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.name)}
                className="flex items-center gap-2 mb-4 cursor-pointer transition-colors duration-200 hover:text-primary"
              >
                <ChevronRight
                  className={`h-5 w-5 text-primary transition-transform duration-200 ${
                    expandedCategories.includes(category.name) ? "rotate-90" : ""
                  }`}
                />
                <span className="font-mono text-sm font-semibold text-primary">
                  {category.name}
                </span>
              </button>

              {/* Skills Grid */}
              {expandedCategories.includes(category.name) && (
                <div className="flex flex-wrap gap-3 ml-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-lg border border-border/60 bg-background/40 px-4 py-2 font-mono text-sm text-foreground transition-all duration-200 hover:border-primary/80 hover:bg-primary/10 hover:shadow-md hover:shadow-primary/10"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
