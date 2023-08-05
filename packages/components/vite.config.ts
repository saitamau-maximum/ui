import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, PluginOption } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
  const plugins: PluginOption = [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ];
  if (mode === 'analyze') {
    plugins.push(visualizer());
  }

  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'maximum-ui',
        formats: ['es', 'umd'],
        fileName: (format) => `maximum-ui.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles.scss";',
        },
      },
    },
    plugins,
  };
});
