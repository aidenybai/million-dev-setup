/**
 * My absolute path is /Users/aidenybai/Projects/aidenybai/million/packages/react/index.ts
 * Make sure to replace yours with your own absolute path
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Inspect from 'vite-plugin-inspect';
// @ts-ignore
import million from '/Users/aidenybai/Projects/aidenybai/million/packages/compiler/index';

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [million.vite({ auto: true }), react(), Inspect()],
  resolve: {
    alias: {
      'million/react':
        '/Users/aidenybai/Projects/aidenybai/million/packages/react/index.ts',
    },
  },
});
