function openWhatsapp() {
  const url = `https://wa.me/6281217351671`;
  window.open(url, "_blank");
}

document.querySelectorAll(".to_whatsapp").forEach((element) => {
  element.addEventListener("click", openWhatsapp);
});

const posts = import.meta.glob("../posts/*.md", { query: "raw" });
const listElement = document.querySelector("#blog-list");

Object.keys(posts).forEach((path) => {
  const name = path.split("/").pop()!.replace(".md", "");

  const li = document.createElement("li");
  li.innerHTML = `<a href="/blog.html?post=${name}">${name}</a>`;
  listElement!.appendChild(li);
});
