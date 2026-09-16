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
    slug: "pixel-perfect-without-the-pixel-trap",
    number: "001",
    category: "Frontend / WordPress",
    title: "Pixel-perfect work without falling into the pixel trap.",
    description: "What I actually check when turning a Figma design into responsive Elementor or WordPress frontend work.",
    date: "2026-09-16",
    readTime: "6 min read",
    Content: SmallDetails,
  },
  {
    slug: "when-the-plugin-isnt-the-answer",
    number: "002",
    category: "WordPress / Engineering",
    title: "When the plugin is not the answer.",
    description: "How I decide between a plugin, a small custom function and a proper piece of frontend or WordPress code.",
    date: "2026-09-16",
    readTime: "7 min read",
    Content: Components,
  },
  {
    slug: "debugging-the-last-ten-percent",
    number: "003",
    category: "Debugging / Frontend",
    title: "The last ten percent is usually where the real frontend work starts.",
    description: "Responsive bugs, browser quirks, third-party scripts and the small fixes that make a site feel production-ready.",
    date: "2026-09-16",
    readTime: "7 min read",
    Content: DesignToCode,
  },
];

export const getNote = (slug: string) => notes.find((item) => item.slug === slug);
