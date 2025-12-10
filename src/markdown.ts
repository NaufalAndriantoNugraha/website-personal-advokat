import { glob } from "glob";

export function getMarkdownEntries() {
  const posts = glob.sync("../posts/*.md");
  let entries = {};

  Object.keys(posts).forEach((path) => {
    const name = path.split("/").pop()!.replace(".md", "");
    const newPath = path.substring(2);

    const newObject = {
      [name]: newPath,
    };

    entries = {
      ...entries,
      ...newObject,
    };
  });
  return entries;
}
