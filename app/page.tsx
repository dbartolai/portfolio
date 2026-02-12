import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { blogPosts, projects } from "@/lib/content";

export default function Home() {
  const featuredProject = projects[0];
  const featuredPost = blogPosts[0];

  return (
    <PageShell>
      <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-foreground/10 bg-card p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground">
            Developer Portfolio
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-5xl leading-tight">
            Building thoughtful products at the intersection of systems and UI.
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-lg leading-8 text-foreground/80">
            I design and ship software that balances reliability, performance, and craft.
            Explore my work experience timeline, technical projects, coursework deep-dives, and multimedia blog.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-accent px-5 py-2.5 font-sans text-sm text-accent-foreground transition hover:opacity-85"
            >
              Explore projects
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-foreground/20 px-5 py-2.5 font-sans text-sm transition hover:bg-accent"
            >
              Read blog posts
            </Link>
          </div>
        </div>

        <aside className="rounded-2xl border border-foreground/10 bg-card p-6">
          <h2 className="font-serif text-2xl">Quick map</h2>
          <ul className="mt-4 space-y-2">
            {[
              ["Work Timeline", "/work"],
              ["Technical Projects", "/projects"],
              ["Relevant Coursework", "/coursework"],
              ["Multimedia Blog", "/blog"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex w-full items-center justify-between rounded-lg px-3 py-2 font-sans text-foreground/85 transition hover:bg-accent hover:text-accent-foreground"
                >
                  {label}
                  <span className="font-mono text-xs">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-foreground/10 bg-card p-6">
          <p className="font-mono text-xs uppercase tracking-wide text-accent-foreground">Featured Project</p>
          <h2 className="mt-2 font-serif text-3xl">{featuredProject.name}</h2>
          <p className="mt-3 font-sans text-foreground/80">{featuredProject.tagline}</p>
          <Link href={`/projects/${featuredProject.slug}`} className="mt-4 inline-block font-sans text-sm underline">
            Dive into project
          </Link>
        </article>

        <article className="rounded-2xl border border-foreground/10 bg-card p-6">
          <p className="font-mono text-xs uppercase tracking-wide text-accent-foreground">Featured Blog Post</p>
          <h2 className="mt-2 font-serif text-3xl">{featuredPost.title}</h2>
          <p className="mt-3 font-sans text-foreground/80">{featuredPost.excerpt}</p>
          <Link href={`/blog/${featuredPost.slug}`} className="mt-4 inline-block font-sans text-sm underline">
            Open post
          </Link>
        </article>
      </section>
    </PageShell>
  );
}
