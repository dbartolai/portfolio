import { CourseCard } from "@/components/CourseCard";
import { PageShell } from "@/components/PageShell";
import { coursework } from "@/lib/content";

export default function CourseworkPage() {
  return (
    <PageShell>
      <section className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground">Coursework</p>
        <h1 className="mt-3 font-serif text-5xl">Relevant Coursework</h1>
        <p className="mt-4 max-w-3xl font-sans text-lg text-foreground/80">
          Selected courses with deeper writeups, visual artifacts, and implementation snippets.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        {coursework.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </PageShell>
  );
}
