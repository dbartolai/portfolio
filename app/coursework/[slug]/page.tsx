import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/CodeBlock";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { MediaGallery } from "@/components/MediaGallery";
import { PageShell } from "@/components/PageShell";
import { coursework, getCourseBySlug } from "@/lib/content";

type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return coursework.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <PageShell>
      <Link href="/coursework" className="font-sans text-sm text-accent-foreground underline underline-offset-4">
        Back to coursework
      </Link>

      <section className="mt-4 rounded-2xl border border-foreground/10 bg-card p-8">
        <p className="font-mono text-xs uppercase tracking-wide text-accent-foreground">{course.term}</p>
        <h1 className="mt-2 font-serif text-5xl">{course.course}</h1>
        <p className="mt-2 font-sans text-foreground/70">{course.institution}</p>
        <p className="mt-4 max-w-3xl font-sans text-lg text-foreground/80">{course.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {course.topics.map((topic) => (
            <li key={topic} className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">
              {topic}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <MarkdownRenderer content={course.markdown} />
      </section>

      <section className="mt-10">
        <h2 className="mb-4 font-serif text-3xl">Media</h2>
        <MediaGallery images={course.images} videos={course.videos} />
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-serif text-3xl">Code</h2>
        {course.codeSamples.map((sample) => (
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
