import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/coursework", label: "Coursework" },
  { href: "/blog", label: "Blog" },
];

export function Navigation() {
  return (
    <header className="border-b border-foreground/10 bg-card/70 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl tracking-tight text-foreground">
          Drake Bartolai
        </Link>
        <ul className="flex flex-wrap items-center gap-3 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-1.5 font-sans text-foreground/80 transition hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
