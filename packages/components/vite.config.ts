import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, PluginOption } from 'vite';
import dts from 'vite-plugin-dts';

import { name } from './package.json';

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
        name,
        formats: ['es', 'umd'],
        fileName: (format) => `${name}.${format}.js`,
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
    plugins,
  };
});
