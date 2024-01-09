import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-vercel';



export default defineConfig({
	kit: {
		adapter: adapter({
			// see below for options that can be set here
		})
	},
	plugins: [
		
		sveltekit()]
});
