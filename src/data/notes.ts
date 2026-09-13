import SmallDetails, { note as smallDetailsNote } from "../../content/notes/small-details-interface.mdx";
import Components, { note as componentsNote } from "../../content/notes/component-actually-deserve-to-exist.mdx";
import DesignToCode, { note as designToCodeNote } from "../../content/notes/design-to-code-translation.mdx";

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
  Content: typeof SmallDetails;
};

export const notes: Note[] = [
  { ...smallDetailsNote, Content: SmallDetails },
  { ...componentsNote, Content: Components },
  { ...designToCodeNote, Content: DesignToCode },
];

export const getNote = (slug: string) => notes.find((item) => item.slug === slug);
