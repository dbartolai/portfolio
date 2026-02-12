import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/CodeBlock";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { MediaGallery } from "@/components/MediaGallery";
import { PageShell } from "@/components/PageShell";
import { getProjectBySlug, projects } from "@/lib/content";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell>
      <Link href="/projects" className="font-sans text-sm text-accent-foreground underline underline-offset-4">
        Back to projects
      </Link>

      <section className="mt-4 rounded-2xl border border-foreground/10 bg-card p-8">
        <p className="font-mono text-xs uppercase tracking-wide text-accent-foreground">{project.year}</p>
        <h1 className="mt-2 font-serif text-5xl">{project.name}</h1>
        <p className="mt-3 max-w-3xl font-sans text-lg text-foreground/80">{project.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-foreground/20 px-4 py-2 font-sans text-sm transition hover:bg-accent"
          >
            Source code
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-foreground/20 px-4 py-2 font-sans text-sm transition hover:bg-accent"
          >
            Live demo
          </a>
        </div>
      </section>

      <section className="mt-10">
        <MarkdownRenderer content={project.markdown} />
      </section>

      <section className="mt-10">
        <h2 className="mb-4 font-serif text-3xl">Media</h2>
        <MediaGallery images={project.images} videos={project.videos} />
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-serif text-3xl">Code</h2>
        {project.codeSamples.map((sample) => (
          <CodeBlock
            key={sample.filename}
            filename={sample.filename}
            language={sample.language}
            code={sample.code}
          />
        ))}
      </section>
    </PageShell>
  );
}
