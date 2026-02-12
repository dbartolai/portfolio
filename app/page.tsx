import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { blogPosts, projects } from "@/lib/content";
import  headshot from "@/public/headshot.jpeg";

export default function Home() {
  const featuredProject = projects[0];
  const featuredPost = blogPosts[0];

  return (
    <PageShell>
      <section className="grid gap-8 md:grid-cols-[1.5fr_0.5fr] ">
        <div className="rounded-2xl border border-foreground/10 bg-card p-8 h-min">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground">
            Developer Portfolio
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-5xl leading-tight">
            Hi, I'm Drake
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-lg leading-8 text-foreground/80">
            Currently, I study computer engineering at the University of Illinois. <br/>
            My plan is to graduate in May 2027 and pursue a career in software engineering, technology consulting, or entrepreneurship.<br/>
            Right now I'm developing my latest project, ceria, and sharing about it here.
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

        <aside className="rounded-2xl border border-foreground/10 bg-card p-4 flex justify-center items-center">
          <img src={headshot.src} alt="Drake Bartolai" className=" object-cover rounded-2xl border-2 border-foreground/10 " />
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
            Read post
          </Link>
        </article>
      </section>
    </PageShell>
  );
}
