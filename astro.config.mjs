import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["stephen-park-personal-website-public.s3.amazonaws.com"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
