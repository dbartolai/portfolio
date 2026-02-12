import Link from "next/link";
import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-foreground/10 bg-card p-6">
      <p className="font-mono text-xs uppercase tracking-wide text-accent-foreground">{project.year}</p>
      <h3 className="mt-2 font-serif text-2xl">{project.name}</h3>
      <p className="mt-2 font-sans text-foreground/80">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">
            {tech}
          </li>
        ))}
      </ul>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-5 inline-flex rounded-full border border-foreground/20 px-4 py-2 font-sans text-sm transition hover:bg-accent hover:text-accent-foreground"
      >
        Open project
      </Link>
    </article>
  );
}
