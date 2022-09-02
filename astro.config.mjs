import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
// https://astro.build/config
export default defineConfig({
  integrations: [react(), preact(), svelte()],
});
