import path from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/0301-feat-van-surrey/',
  // base: process.env.MODE === 'production' ? '/09xx-tfwp-story/' : '/',
  plugins: [svelte()],
  resolve: {
    alias: {
      "$components": path.resolve('./src/components'),
      "$data": path.resolve("./src/data"),
      "$css": path.resolve("./src/css"),
	    "$fonts": path.resolve("./public/fonts"),
      "$images": path.resolve("./src/images"),
      "$video": path.resolve("./public/video")
    }
  }
});
