import { PageShell } from "@/components/PageShell";
import { Timeline } from "@/components/Timeline";
import { workExperience } from "@/lib/content";

export default function WorkPage() {
  return (
    <PageShell>
      <section className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground">Experience</p>
        <h1 className="mt-3 font-serif text-5xl">Work Timeline</h1>
        <p className="mt-4 max-w-3xl font-sans text-lg text-foreground/80">
          A single timeline view of roles I have held and the outcomes I focused on.
        </p>
      </section>
      <Timeline items={workExperience} />
    </PageShell>
  );
}
