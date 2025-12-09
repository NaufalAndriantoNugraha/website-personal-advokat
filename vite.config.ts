import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        blog: resolve(__dirname, "blog.html"),
        about_page: resolve(__dirname, "pages/about_page.html"),
        blog_page: resolve(__dirname, "pages/blog_page.html"),
        contact_page: resolve(__dirname, "pages/contact_page.html"),
      },
    },
  },
});
