import { BlogPostCard } from "@/components/BlogPostCard";
import { PageShell } from "@/components/PageShell";
import { blogPosts } from "@/lib/content";

export default function BlogPage() {
  return (
    <PageShell>
      <section className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground">Blog</p>
        <h1 className="mt-3 font-serif text-5xl">My Posts</h1>
        <p className="mt-4 max-w-3xl font-sans text-lg text-foreground/80">
          Read about my projects, opinions, and ideas.
        </p>
      </section>
      <section className="grid gap-6">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </section>
    </PageShell>
  );
}
