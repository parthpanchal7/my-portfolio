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
  Content: typeof SmallDetails;
};

export const notes: Note[] = [
  { ...SmallDetails.note, Content: SmallDetails },
  { ...Components.note, Content: Components },
  { ...DesignToCode.note, Content: DesignToCode },
];

export const getNote = (slug: string) => notes.find((item) => item.slug === slug);
