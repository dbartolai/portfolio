import type { WorkExperience } from "@/types/content";

type TimelineProps = {
  items: WorkExperience[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative border-s border-foreground/20 pl-6">
      {items.map((item) => (
        <li key={item.id} className="mb-10 ms-4">
          <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-accent-foreground bg-accent" />
          <div className="rounded-xl border border-foreground/10 bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-wide text-accent-foreground">
              {item.startDate} - {item.endDate}
            </p>
            <h3 className="mt-2 font-serif text-2xl text-foreground">{item.role}</h3>
            <p className="font-sans text-sm text-foreground/70">
              {item.company} · {item.location}
            </p>
            <p className="mt-3 font-sans text-foreground/85">{item.summary}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 font-sans text-sm text-foreground/80">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
