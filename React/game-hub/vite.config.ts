import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // 确保包含 crypto 模块的 polyfill
      include: ["crypto"],
      // 配置全局变量
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
});
