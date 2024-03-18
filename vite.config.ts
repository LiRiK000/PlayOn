import { defineConfig } from 'vite';
import envCompatible from 'vite-plugin-env-compatible';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	resolve: {
		alias: {
			'@hooks': path.resolve('src/core/hooks'),
			'@store': path.resolve('src/core/store'),
			'@theme': path.resolve('src/core/theme'),
			'@MyTypes': path.resolve('src/core/types'),
			//!
			'@layout': path.resolve('src/components/layout'),
			'@utility': path.resolve('src/components/utility'),
			'@simple': path.resolve('src/components/UI/simple'),
			'@independent': path.resolve('src/components/UI/independent'),
			'@features': path.resolve('src/components/UI/features'),
			//!
			'@data': path.resolve('src/data'),
			//!
			'@pages': path.resolve('src/pages'),
			//!
			'@routes': path.resolve('src/routes'),
			//!
			'@templates': path.resolve('src/templates'),
		},
	},
	plugins: [envCompatible(), react()],
});
