import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginYaml } from '@rsbuild/plugin-yaml';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  html: {
      title: "James Paolo Rili"
  },
  plugins: [
    pluginReact(),
    pluginYaml()
  ],
});
