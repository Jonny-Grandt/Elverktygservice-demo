import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-root-assets',
      closeBundle() {
        try {
          const srcDir = path.resolve(__dirname, 'assets');
          const destDir = path.resolve(__dirname, 'dist', 'assets');
          if (fs.existsSync(srcDir)) {
            fs.mkdirSync(destDir, { recursive: true });
            const files = fs.readdirSync(srcDir);
            for (const file of files) {
              const srcFile = path.join(srcDir, file);
              if (fs.statSync(srcFile).isFile()) {
                fs.copyFileSync(srcFile, path.join(destDir, file));
              }
            }
          }
        } catch (err) {
          console.error('Could not copy root assets to dist/assets:', err);
        }
      }
    }
  ],
});
