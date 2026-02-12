import { PageShell } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground">Projects</p>
        <h1 className="mt-3 font-serif text-5xl">Technical Projects</h1>
        <p className="mt-4 max-w-3xl font-sans text-lg text-foreground/80">
          Deep dives into systems, interfaces, and the tradeoffs behind each build.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </PageShell>
  );
}
