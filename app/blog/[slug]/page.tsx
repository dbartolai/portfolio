import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { MediaGallery } from "@/components/MediaGallery";
import { PageShell } from "@/components/PageShell";
import { blogPosts, getPostBySlug } from "@/lib/content";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageShell>
      <Link href="/blog" className="font-sans text-sm text-accent-foreground underline underline-offset-4">
        Back to blog
      </Link>

      <article className="mt-4 rounded-2xl border border-foreground/10 bg-card p-8">
        <p className="font-sans text-sm text-foreground/70">
          {post.publishedAt} · {post.readTime}
        </p>
        <h1 className="mt-2 font-serif text-5xl">{post.title}</h1>
        <p className="mt-3 max-w-3xl font-sans text-lg text-foreground/80">{post.excerpt}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-6 overflow-hidden rounded-xl border border-foreground/10">
          <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
        </div>
      </article>

      <section className="mt-10">
        <MarkdownRenderer content={post.markdown} />
      </section>

      <section className="mt-10">
        <h2 className="mb-4 font-serif text-3xl">Photos & Video</h2>
        <MediaGallery images={post.images} videos={post.videos} />
      </section>
    </PageShell>
  );
}
