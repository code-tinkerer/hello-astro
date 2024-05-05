import { defineConfig } from 'astro/config';

import node from "@astrojs/node";
import svelte from "@astrojs/svelte";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
    integrations: [svelte(), alpinejs()],
    
    output: "server",
    
    adapter: node({
        mode: "hybrid"
    })
});
