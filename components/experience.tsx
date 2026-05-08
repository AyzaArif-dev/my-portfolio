"use client"

import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Director of Outreach",
    company: "Laurier Computing Society",
    period: "September 2025 – Present",
    description: "Leading outreach initiatives to foster community engagement and promote computer science among students.",
  },
  {
    title: "Student Representative",
    company: "Faculty of Computer Science and Physics, Wilfrid Laurier University",
    period: "September 2025 – Present",
    description: "Representing student interests and concerns to faculty administration and advocating for academic improvements.",
  },
  {
    title: "Salesforce Developer",
    company: "Nespon Solutions",
    period: "January 2026 – May 2026",
    description: "Developing and customizing Salesforce solutions for enterprise clients, implementing features and optimizations.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Experience
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={`${exp.title}-${index}`} className="flex gap-6">
              {/* Timeline Dot */}
              <div className="flex flex-col items-center pt-1">
                <div className="h-3 w-3 rounded-full bg-primary" />
                {index < experiences.length - 1 && (
                  <div className="w-px bg-primary/30 flex-grow my-2" style={{ minHeight: "120px" }} />
                )}
              </div>

              {/* Content */}
              <div className="pb-4 flex-1">
                <h3 className="text-xl font-semibold text-foreground">
                  {exp.title}
                </h3>
                <p className="text-primary font-mono text-sm mt-1">
                  {exp.company}
                </p>
                <p className="text-muted-foreground font-mono text-xs mt-1">
                  {exp.period}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
