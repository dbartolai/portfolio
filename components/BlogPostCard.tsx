import Link from "next/link";
import type { BlogPost } from "@/types/content";

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="rounded-2xl border border-foreground/10 bg-card p-6">
      <p className="font-sans text-sm text-foreground/70">
        {post.publishedAt} · {post.readTime}
      </p>
      <h3 className="mt-2 font-serif text-2xl">{post.title}</h3>
      <p className="mt-2 font-sans text-foreground/80">{post.excerpt}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <li key={tag} className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">
            {tag}
          </li>
        ))}
      </ul>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-flex rounded-full border border-foreground/20 px-4 py-2 font-sans text-sm transition hover:bg-accent hover:text-accent-foreground"
      >
        Open post
      </Link>
    </article>
  );
}
