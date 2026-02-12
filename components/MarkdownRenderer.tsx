import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "@/components/CodeBlock";

type MarkdownRendererProps = {
  content: string;
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-neutral max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="font-serif text-4xl text-foreground">{children}</h1>,
          h2: ({ children }) => <h2 className="mt-8 font-serif text-3xl text-foreground">{children}</h2>,
          h3: ({ children }) => <h3 className="mt-6 font-serif text-2xl text-foreground">{children}</h3>,
          p: ({ children }) => <p className="font-sans text-base leading-7 text-foreground/85">{children}</p>,
          li: ({ children }) => <li className="font-sans leading-7 text-foreground/85">{children}</li>,
          code: ({ children, className }) => {
            const language = className?.replace("language-", "") ?? "typescript";
            const code = String(children).replace(/\n$/, "");

            if (!className) {
              return (
                <code className="rounded bg-accent px-1.5 py-0.5 font-mono text-sm text-accent-foreground">
                  {children}
                </code>
              );
            }

            return <CodeBlock code={code} language={language} />;
          },
          a: ({ children, href }) => (
            <a href={href} className="font-sans text-accent-foreground underline underline-offset-4">
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
