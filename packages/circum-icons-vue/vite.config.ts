import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
	plugins: [vue(), vueJsx()],
	build: {
		lib: {
			entry: 'src/lib/index.ts',
			name: 'CircumIcons',
			formats: ['es', 'umd'],
			fileName: (format) => `circumIcons.${format}.js`
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