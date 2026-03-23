import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/rspack';

export default defineConfig({
  output: {
    assetPrefix: '/jkdnl/',
  },
  distPath: {
    root: 'dist',
    js: 'static/js',
    css: 'static/css',
  },
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [
        tanstackRouter({
          target: 'react',
          autoCodeSplitting: true,
        }),
      ],
    },
  },
});
