import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
};

export function CodeBlock({ code, language = "typescript", filename }: CodeBlockProps) {
  return (
    <section className="overflow-hidden rounded-xl border border-foreground/10">
      {filename ? (
        <div className="border-b border-foreground/10 bg-accent px-4 py-2 font-mono text-xs text-accent-foreground">
          {filename}
        </div>
      ) : null}
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        customStyle={{
          margin: 0,
          background: "var(--card)",
          fontSize: "0.875rem",
        }}
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
    </section>
  );
}
