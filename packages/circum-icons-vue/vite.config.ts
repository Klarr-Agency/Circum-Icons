import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';

export default defineConfig({
	plugins: [
		vue(),
		copy({
			targets: [
				{ src: "src/*.d.ts", dest: "dist/" }
			],
			hook: 'writeBundle'
		})
	],
	build: {
		lib: {
			entry: 'src/lib/CircumIcons.vue',
			name: 'CircumIcons',
			formats: ['es'],
			fileName: (format) => `CircumIcons.js`
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	}
});