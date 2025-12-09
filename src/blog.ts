import { marked } from "marked";

const params = new URLSearchParams(window.location.search);
const name = params.get("post");

const container = document.querySelector("#content")!;

if (!name) {
  container.innerHTML = "<p>Post tidak ditemukan.</p>";
  throw new Error("No markdown file name.");
}

fetch(`/posts/${name}.md`)
  .then((res) => res.text())
  .then(async (md) => {
    const html = await marked.parse(md);
    container.innerHTML = html;
  })
  .catch(() => {
    container.innerHTML = "<p>Post tidak ditemukan.</p>";
  });
