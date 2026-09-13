import type { ComponentType } from "react";
import SmallDetails from "../../content/notes/small-details-interface.mdx";
import Components from "../../content/notes/component-actually-deserve-to-exist.mdx";
import DesignToCode from "../../content/notes/design-to-code-translation.mdx";

export type NoteMeta = {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
};

export type Note = NoteMeta & {
  Content: ComponentType;
};

export const notes: Note[] = [
  {
    slug: "small-details-interface",
    number: "001",
    category: "Frontend",
    title: "The small details that make an interface feel finished.",
    description: "Spacing, typography, states and transitions — the things users notice without necessarily knowing why.",
    date: "2026-09-13",
    readTime: "5 min read",
    Content: SmallDetails,
  },
  {
    slug: "component-actually-deserve-to-exist",
    number: "002",
    category: "React",
    title: "When does a component actually deserve to exist?",
    description: "Thoughts on reusable UI without turning a simple interface into an architecture exercise.",
    date: "2026-09-13",
    readTime: "7 min read",
    Content: Components,
  },
  {
    slug: "design-to-code-translation",
    number: "003",
    category: "Process",
    title: "Design-to-code is a translation problem.",
    description: "What gets lost between a polished design file and a responsive browser — and how to avoid it.",
    date: "2026-09-13",
    readTime: "6 min read",
    Content: DesignToCode,
  },
];

export const getNote = (slug: string) => notes.find((item) => item.slug === slug);
