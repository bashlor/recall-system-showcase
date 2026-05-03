import { defineConfig } from 'vite';

/** SPA fallback so `/engineering-notes` resolves in dev and preview. */
export default defineConfig({
  appType: 'spa',
});
