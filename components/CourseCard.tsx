import Link from "next/link";
import type { Coursework } from "@/types/content";

type CourseCardProps = {
  course: Coursework;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="rounded-2xl border border-foreground/10 bg-card p-6">
      <p className="font-mono text-xs uppercase tracking-wide text-accent-foreground">{course.term}</p>
      <h3 className="mt-2 font-serif text-2xl">{course.course}</h3>
      <p className="mt-1 font-sans text-sm text-foreground/70">{course.institution}</p>
      <p className="mt-3 font-sans text-foreground/80">{course.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {course.topics.map((topic) => (
          <li key={topic} className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">
            {topic}
          </li>
        ))}
      </ul>
      <Link
        href={`/coursework/${course.slug}`}
        className="mt-5 inline-flex rounded-full border border-foreground/20 px-4 py-2 font-sans text-sm transition hover:bg-accent hover:text-accent-foreground"
      >
        Read coursework
      </Link>
    </article>
  );
}
